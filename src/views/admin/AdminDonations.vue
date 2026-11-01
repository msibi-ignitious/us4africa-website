
<script setup lang="ts">
import { computed, onMounted, ref } from "vue";
import { apiRequest } from "../../services/api";
import AdminNavigation from "../../components/admin/AdminNavigation.vue";

interface Donor {
  id: string;
  firstName: string | null;
  lastName: string | null;
  email: string;
  phone: string | null;
  country: string | null;
}

interface Donation {
  id: string;
  donorboxDonationId: string;
  amount: string | number;
  currency: string;
  status: string;
  recurring: boolean;
  recurringInterval: string | null;
  donorboxCampaignName: string | null;
  designation: string | null;
  donationDate: string | null;
  amountRefunded: string | number | null;
  acknowledgementStatus: string;
  acknowledgementSentAt: string | null;
  acknowledgementError: string | null;
  createdAt: string;
  donor: Donor;
}

interface DonationResponse {
  donations: Donation[];
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
}

const donations = ref<Donation[]>([]);
const loading = ref(false);
const errorMessage = ref("");
const successMessage = ref("");
const searchTerm = ref("");
const statusFilter = ref("ALL");
const page = ref(1);
const totalPages = ref(1);
const totalDonations = ref(0);
const retryingId = ref("");

const filteredDonations = computed(() => {
  const search = searchTerm.value.toLowerCase().trim();

  return donations.value.filter((donation) => {
    const donorName =
      `${donation.donor.firstName ?? ""} ${donation.donor.lastName ?? ""}`
        .toLowerCase();

    const matchesSearch =
      !search ||
      donorName.includes(search) ||
      donation.donor.email.toLowerCase().includes(search) ||
      donation.donorboxDonationId.toLowerCase().includes(search);

    const matchesStatus =
      statusFilter.value === "ALL" ||
      donation.status === statusFilter.value;

    return matchesSearch && matchesStatus;
  });
});

async function loadDonations() {
  loading.value = true;
  errorMessage.value = "";
  successMessage.value = "";

  try {
    const result = await apiRequest<DonationResponse>(
      `/donations?page=${page.value}&limit=20`
    );

    donations.value = result.donations;
    totalPages.value = result.pagination.totalPages;
    totalDonations.value = result.pagination.total;
  } catch (error) {
    errorMessage.value =
      error instanceof Error
        ? error.message
        : "Unable to load donations.";
  } finally {
    loading.value = false;
  }
}

function formatAmount(amount: string | number, currency: string) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency,
  }).format(Number(amount));
}

function formatDate(date: string | null) {
  if (!date) return "—";

  return new Date(date).toLocaleDateString("en-ZA", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
}

function donorName(donor: Donor) {
  return `${donor.firstName ?? ""} ${donor.lastName ?? ""}`.trim() || "Anonymous";
}

function statusClass(status: string) {
  return status.toLowerCase().replaceAll("_", "-");
}

async function retryAcknowledgement(donation: Donation) {
  const confirmed = window.confirm(
    `Retry the thank-you email for ${donation.donor.email}?`
  );

  if (!confirmed) return;

  retryingId.value = donation.id;
  errorMessage.value = "";
  successMessage.value = "";

  try {
    const result = await apiRequest<{
      message: string;
      acknowledgementStatus: string;
    }>(`/donations/${donation.id}/retry-acknowledgement`, {
      method: "POST",
    });

    successMessage.value = result.message;
    await loadDonations();
  } catch (error) {
    errorMessage.value =
      error instanceof Error
        ? error.message
        : "Unable to retry the acknowledgement.";
    await loadDonations();
  } finally {
    retryingId.value = "";
  }
}

async function exportDonations() {
  errorMessage.value = "";

  const token = sessionStorage.getItem("us4africa_admin_token");

  if (!token) {
    errorMessage.value = "Please sign in again to export donations.";
    return;
  }

  const baseUrl =
    import.meta.env.VITE_API_BASE_URL || "http://localhost:4000/api";

  try {
    const response = await fetch(`${baseUrl}/exports/donations.csv`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      throw new Error("Unable to export donation records.");
    }

    const blob = await response.blob();
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");

    link.href = url;
    link.download = "us4africa-donations.csv";
    link.click();

    URL.revokeObjectURL(url);
  } catch (error) {
    errorMessage.value =
      error instanceof Error ? error.message : "Donation export failed.";
  }
}

async function changePage(newPage: number) {
  if (newPage < 1 || newPage > totalPages.value) return;

  page.value = newPage;
  await loadDonations();
}

onMounted(loadDonations);
</script>

<template>
  <AdminNavigation />
  <main class="donations-page">
    <section class="page-heading">
      <div>
        <p class="eyebrow">FUNDRAISING MANAGEMENT</p>
        <h1>Donations</h1>
        <p class="subtitle">
          View and manage contributions made to US4Africa.
        </p>
      </div>

      <button class="export-button" @click="exportDonations">
        ↓ Export CSV
      </button>
    </section>

    <section class="summary-card">
      <div class="summary-icon">♡</div>
      <div>
        <p>Total donation records</p>
        <h2>{{ totalDonations }}</h2>
      </div>
    </section>

    <div v-if="errorMessage" class="alert error">{{ errorMessage }}</div>
    <div v-if="successMessage" class="alert success">{{ successMessage }}</div>

    <section class="donations-panel">
      <div class="panel-heading">
        <div>
          <h2>All donations</h2>
          <p>Review donor contributions and acknowledgement status.</p>
        </div>

        <button class="refresh-button" @click="loadDonations">
          ↻ Refresh
        </button>
      </div>

      <div class="filters">
        <input
          v-model="searchTerm"
          type="search"
          placeholder="Search donor, email or donation ID..."
        />

        <select v-model="statusFilter">
          <option value="ALL">All statuses</option>
          <option value="PAID">Paid</option>
          <option value="PENDING">Pending</option>
          <option value="FAILED">Failed</option>
          <option value="REFUNDED">Refunded</option>
        </select>
      </div>

      <div v-if="loading" class="empty-state">
        Loading donations...
      </div>

      <div v-else-if="filteredDonations.length === 0" class="empty-state">
        <div class="empty-icon">♡</div>
        <h3>No donations found</h3>
        <p>
          There are no matching donation records. Donations will appear here
          when they are received.
        </p>
      </div>

      <div v-else class="table-wrapper">
        <table>
          <thead>
            <tr>
              <th>DONOR</th>
              <th>AMOUNT</th>
              <th>DATE</th>
              <th>STATUS</th>
              <th>TYPE</th>
              <th>ACKNOWLEDGEMENT</th>
              <th>ACTION</th>
            </tr>
          </thead>

          <tbody>
            <tr v-for="donation in filteredDonations" :key="donation.id">
              <td>
                <strong>{{ donorName(donation.donor) }}</strong>
                <small>{{ donation.donor.email }}</small>
              </td>

              <td class="amount">
                {{ formatAmount(donation.amount, donation.currency) }}
              </td>

              <td>{{ formatDate(donation.donationDate) }}</td>

              <td>
                <span class="status" :class="statusClass(donation.status)">
                  {{ donation.status }}
                </span>
              </td>

              <td>{{ donation.recurring ? "Recurring" : "One-time" }}</td>

              <td>
                <span
                  class="status"
                  :class="statusClass(donation.acknowledgementStatus)"
                >
                  {{ donation.acknowledgementStatus }}
                </span>
                <small v-if="donation.acknowledgementSentAt">
                  {{ formatDate(donation.acknowledgementSentAt) }}
                </small>
              </td>

              <td>
                <button
                  v-if="
                    donation.status === 'PAID' &&
                    donation.acknowledgementStatus === 'FAILED'
                  "
                  class="retry-button"
                  :disabled="retryingId === donation.id"
                  @click="retryAcknowledgement(donation)"
                >
                  {{ retryingId === donation.id ? "Retrying..." : "Retry email" }}
                </button>
                <span v-else class="muted">—</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div v-if="totalPages > 1" class="pagination">
        <button
          :disabled="page === 1"
          @click="changePage(page - 1)"
        >
          Previous
        </button>

        <span>Page {{ page }} of {{ totalPages }}</span>

        <button
          :disabled="page === totalPages"
          @click="changePage(page + 1)"
        >
          Next
        </button>
      </div>
    </section>
  </main>
</template>

<style scoped>
.donations-page {
  min-height: 100vh;
  padding: 42px;
  background: #f8f7fb;
  color: #27233b;
}

.page-heading,
.panel-heading {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
}

.eyebrow {
  color: #8b55a7;
  font-size: 11px;
  font-weight: 800;
  letter-spacing: 2px;
}

h1 {
  margin: 5px 0;
  font-size: 32px;
}

.subtitle,
.panel-heading p {
  color: #858195;
  font-size: 14px;
}

.export-button,
.refresh-button,
.retry-button {
  border: 0;
  border-radius: 9px;
  padding: 11px 17px;
  font-weight: 700;
  cursor: pointer;
}

.export-button {
  color: white;
  background: #713b91;
}

.refresh-button {
  color: #713b91;
  background: #f1e9f7;
}

.summary-card {
  display: flex;
  align-items: center;
  gap: 18px;
  max-width: 280px;
  margin: 30px 0;
  padding: 22px;
  border: 1px solid #eeeaf3;
  border-radius: 15px;
  background: white;
}

.summary-icon {
  display: grid;
  width: 48px;
  height: 48px;
  place-items: center;
  border-radius: 13px;
  background: #f3eafa;
  color: #713b91;
  font-size: 25px;
}

.summary-card p {
  margin: 0;
  color: #858195;
  font-size: 12px;
}

.summary-card h2 {
  margin: 5px 0 0;
  font-size: 25px;
}

.donations-panel {
  padding: 25px;
  border: 1px solid #eeeaf3;
  border-radius: 16px;
  background: white;
}

.panel-heading h2 {
  margin: 0;
  font-size: 20px;
}

.filters {
  display: flex;
  gap: 12px;
  margin: 25px 0;
}

.filters input,
.filters select {
  min-height: 43px;
  padding: 10px 13px;
  border: 1px solid #e7e3ed;
  border-radius: 8px;
  background: white;
  font: inherit;
}

.filters input {
  flex: 1;
  min-width: 180px;
}

.table-wrapper {
  overflow-x: auto;
}

table {
  width: 100%;
  border-collapse: collapse;
  white-space: nowrap;
}

th {
  padding: 14px 12px;
  background: #faf9fc;
  color: #858195;
  font-size: 10px;
  text-align: left;
  letter-spacing: 0.7px;
}

td {
  padding: 16px 12px;
  border-bottom: 1px solid #f0edf4;
  font-size: 13px;
}

td small {
  display: block;
  margin-top: 5px;
  color: #858195;
}

.amount {
  font-weight: 800;
}

.status {
  display: inline-block;
  padding: 5px 9px;
  border-radius: 20px;
  background: #f0edf4;
  color: #635c70;
  font-size: 10px;
  font-weight: 800;
}

.status.paid,
.status.sent {
  background: #e6f6ed;
  color: #23804b;
}

.status.pending {
  background: #fff4df;
  color: #9b6b17;
}

.status.failed {
  background: #fdeaea;
  color: #bd3434;
}

.status.refunded {
  background: #eeeafa;
  color: #704a9a;
}

.retry-button {
  padding: 8px 10px;
  background: #fff0ed;
  color: #b23e32;
  font-size: 11px;
}

.retry-button:disabled {
  opacity: 0.6;
  cursor: wait;
}

.muted {
  color: #aaa5b3;
}

.empty-state {
  padding: 55px 20px;
  text-align: center;
  color: #858195;
}

.empty-state h3 {
  margin-bottom: 5px;
  color: #27233b;
}

.empty-icon {
  color: #9b70b4;
  font-size: 38px;
}

.alert {
  margin: 15px 0;
  padding: 13px 16px;
  border-radius: 9px;
  font-size: 13px;
}

.alert.error {
  background: #fdeaea;
  color: #a52e2e;
}

.alert.success {
  background: #e6f6ed;
  color: #23804b;
}

.pagination {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 15px;
  margin-top: 22px;
  font-size: 13px;
}

.pagination button {
  padding: 8px 13px;
  border: 1px solid #e7e3ed;
  border-radius: 7px;
  background: white;
  cursor: pointer;
}

.pagination button:disabled {
  opacity: 0.4;
  cursor: not-allowed;
}

@media (max-width: 700px) {
  .donations-page {
    padding: 22px 14px;
  }

  .page-heading,
  .panel-heading {
    align-items: flex-start;
    flex-direction: column;
  }

  .filters {
    flex-direction: column;
  }

  .donations-panel {
    padding: 15px;
  }
}
</style>
