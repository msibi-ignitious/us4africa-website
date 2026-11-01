import crypto from 'node:crypto';
import { config } from '../config.js';
export function verifyDonorboxSignature(rawBody,header) {
 if(!header || !config.DONORBOX_WEBHOOK_SECRET) return false;
 const [ts,sig] = header.split(',');
 const timestamp = Number(ts);
 if(!Number.isInteger(timestamp) || !sig) return false;
 if(Math.abs(Date.now()/1000-timestamp)>config.DONORBOX_MAX_SIGNATURE_AGE_SECONDS) return false;
 const expected=crypto.createHmac('sha256',config.DONORBOX_WEBHOOK_SECRET).update(`${ts}.${rawBody.toString('utf8')}`).digest('hex');
 const a=Buffer.from(sig.trim(),'hex'), b=Buffer.from(expected,'hex');
 return a.length===b.length && crypto.timingSafeEqual(a,b);
}
export function normalizeDonationEvent(body) {
 const d=body?.donation, donor=d?.donor;
 if(!body?.event_id || !body?.event_name || !d?.id || !donor) throw new Error('Expected Donorbox V2 donation payload.');
 const parts=(donor.name||'').trim().split(/\s+/);
 return {eventId:String(body.event_id),eventName:body.event_name,donation:{
  donorboxDonationId:String(d.id),donorboxDonorId:donor.id?String(donor.id):null,
  firstName:donor.first_name||parts[0]||null,lastName:donor.last_name||parts.slice(1).join(' ')||null,
  email:donor.email,phone:donor.phone||null,country:donor.country||null,
  amount:d.amount,currency:(d.currency||'USD').toUpperCase(),status:d.status,
  recurring:Boolean(d.recurring),recurringInterval:d.interval||null,
  campaignId:d.campaign?.id?String(d.campaign.id):null,campaignName:d.campaign?.name||null,
  designation:d.designation||null,donationDate:d.donation_date?new Date(d.donation_date):new Date(),
  amountRefunded:d.amount_refunded??null
 }};
}
