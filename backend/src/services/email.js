
import { Resend } from 'resend';
import { config } from '../config.js';

const resend = config.RESEND_API_KEY
  ? new Resend(config.RESEND_API_KEY)
  : null;

const escapeHtml = (value = '') =>
  String(value).replace(/[&<>"']/g, (char) => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;'
  })[char]);

export async function sendDonationAcknowledgement({ donor, donation }) {
  if (!resend || !config.EMAIL_FROM) {
    throw new Error('Email service is not configured.');
  }

  const currency = String(donation.currency || 'USD').toUpperCase();

  let formattedAmount;

  try {
    formattedAmount = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency
    }).format(Number(donation.amount));
  } catch {
    throw new Error('Invalid donation currency or amount.');
  }

  const firstName = donor.firstName || 'Friend';
  const safeName = escapeHtml(firstName);
  const safeAmount = escapeHtml(formattedAmount);

  const html = `
    <div style="
      font-family: Arial, sans-serif;
      max-width: 620px;
      margin: 0 auto;
      padding: 32px 24px;
      color: #263247;
      line-height: 1.7;
      background: #ffffff;
    ">
      <div style="text-align:center; margin-bottom:28px;">
        <h1 style="color:#542080; margin-bottom:8px;">
          Thank You!
        </h1>
        <p style="color:#d62839; font-weight:bold;">
          Your generosity makes a difference.
        </p>
      </div>

      <p>Dear ${safeName},</p>

      <p>
        Thank you for your generous donation of
        <strong>${safeAmount}</strong> to US4Africa.
      </p>

      <p>
        Your generosity helps us empower African ministries
        through support and service. We are grateful that
        you have chosen to partner with us.
      </p>

      <p>
        Together, we can make a lasting difference in the
        lives of individuals and communities across Africa.
      </p>

      <p>
        With gratitude,<br />
        <strong>The US4Africa Team</strong>
      </p>

      <hr style="border:0;border-top:1px solid #eeeeee;margin:28px 0;" />

      <p style="font-size:12px;color:#777777;">
        This email acknowledges your donation to US4Africa.
        Please retain any payment confirmation issued by your payment provider.
      </p>
    </div>
  `;

  const text = `
Dear ${firstName},

Thank you for your generous donation of ${formattedAmount} to US4Africa.

Your generosity helps us empower African ministries through support and service.

With gratitude,
The US4Africa Team

Please retain any payment confirmation issued by your payment provider.
  `.trim();

  const { data, error } = await resend.emails.send({
    from: config.EMAIL_FROM,
    to: donor.email,
    replyTo: config.EMAIL_REPLY_TO,
    subject: 'Thank you for supporting US4Africa',
    html,
    text
  });

  if (error) {
    throw new Error(error.message || 'Email delivery request failed.');
  }

  return data;
}
