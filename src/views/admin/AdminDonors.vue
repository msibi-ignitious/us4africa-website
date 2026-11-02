
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
  mailingConsent: boolean;
  createdAt: string;
  donations?: unknown[];
}

interface DonorResponse {
  donors: Donor[];
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
}

const donors = ref<Donor[]>([]);
const search = ref("");
const loading = ref(false);
const errorMessage = ref("");
const page = ref(1);
const pagination = ref({
  page: 1,
  limit: 20,
  total: 0,
  totalPages: 0,
});

const filteredDonors = computed(() => {
  const term = search.value.trim().toLowerCase();

  if (!term) return donors.value;

  return donors.value.filter((donor) => {
    const name = `${donor.firstName ?? ""} ${donor.lastName ?? ""}`;
    return (
      name.toLowerCase().includes(term) ||
      donor.email.toLowerCase().includes(term) ||
      (donor.phone ?? "").toLowerCase().includes(term) ||
      (donor.country ?? "").toLowerCase().includes(term)
    );
  });
});

async function loadDonors() {
  loading.value = true;
  errorMessage.value = "";

  try {
    const result = await apiRequest<DonorResponse>(
      `/donors?page=${page.value}&limit=20`
    );

    donors.value = result.donors;
    pagination.value = result.pagination;
  } catch (error) {
    errorMessage.value =
      error instanceof Error ? error.message : "Unable to load donors.";
  } finally {
    loading.value = false;
  }
}

function changePage(nextPage: number) {
  if (
    nextPage < 1 ||
    nextPage > pagination.value.totalPages ||
    nextPage === page.value
  ) {
    return;
  }

  page.value = nextPage;
  loadDonors();
}

function formatDate(value: string) {
  return new Date(value).toLocaleDateString("en-ZA", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
}

async function exportDonors() {
  const token = sessionStorage.getItem("us4africa_admin_token");

  if (!token) {
    errorMessage.value = "Please sign in again to export donor records.";
    return;
  }

  const baseUrl =
    import.meta.env.VITE_API_BASE_URL || "http://localhost:4000/api";

  try {
    const response = await fetch(`${baseUrl}/exports/donors.csv`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      throw new Error("Unable to export donor records.");
    }

    const blob = await response.blob();
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");

    link.href = url;
    link.download = "us4africa-donors.csv";
    link.click();

    URL.revokeObjectURL(url);
  } catch (error) {
    errorMessage.value =
      error instanceof Error ? error.message : "Export failed.";
  }
}

onMounted(loadDonors);
</script>

<template>

  <AdminNavigation />
  <main class="donors-page">
    <header class="page-header">
      <div>
        <div class="admin-brand">
          <img src="/src/assets/us4africa-logo.png" alt="US4Africa logo" />
          <span>US4Africa Administration</span>
        </div>
        <h1>Donor Management</h1>
        <p>View and manage your donor directory.</p>
      </div>

      <button class="export-button" @click="exportDonors">
        Export CSV
      </button>
    </header>

    <section class="donor-summary">
      <div>
        <span>Total registered donors</span>
        <strong>{{ pagination.total }}</strong>
      </div>
      <div>
        <span>Current page</span>
        <strong>{{ pagination.page }} / {{ pagination.totalPages || 1 }}</strong>
      </div>
    </section>

    <section class="donor-panel">
      <div class="toolbar">
        <h2>All donors</h2>

        <input
          v-model="search"
          type="search"
          placeholder="Search name, email, phone or country..."
          aria-label="Search donors"
        />
      </div>

      <p v-if="loading" class="message">Loading donors...</p>
      <p v-else-if="errorMessage" class="error-message">
        {{ errorMessage }}
      </p>

      <div v-else-if="filteredDonors.length" class="table-wrapper">
        <table>
          <thead>
            <tr>
              <th>Donor</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Country</th>
              <th>Email consent</th>
              <th>Registered</th>
            </tr>
          </thead>

          <tbody>
            <tr v-for="donor in filteredDonors" :key="donor.id">
              <td>
                {{ donor.firstName || "" }} {{ donor.lastName || "" }}
              </td>
              <td>{{ donor.email }}</td>
              <td>{{ donor.phone || "—" }}</td>
              <td>{{ donor.country || "—" }}</td>
              <td>
                <span
                  class="consent-badge"
                  :class="donor.mailingConsent ? 'yes' : 'no'"
                >
                  {{ donor.mailingConsent ? "Consented" : "No consent" }}
                </span>
              </td>
              <td>{{ formatDate(donor.createdAt) }}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p v-else-if="search.trim()" class="message">
        No donors match your search.
      </p>

      <div v-else class="empty-state">
        <h3>No donors registered yet</h3>
        <p>
          Donors will appear here when they register or make their first
          donation.
        </p>
      </div>

      <footer v-if="pagination.totalPages > 1" class="pagination">
        <button
          :disabled="page <= 1 || loading"
          @click="changePage(page - 1)"
        >
          Previous
        </button>

        <span>Page {{ page }} of {{ pagination.totalPages }}</span>

        <button
          :disabled="page >= pagination.totalPages || loading"
          @click="changePage(page + 1)"
        >
          Next
        </button>
      </footer>
    </section>
  </main>
</template>

<style scoped>
.donors-page {
  min-height: 100vh;
  padding: 40px;
  background: #f7f7fb;
  color: #25213b;
}

.page-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  margin-bottom: 30px;
}

.eyebrow {
  color: #7a3db8;
  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

.admin-brand {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 24px;
}

.admin-brand img {
  display: block;
  width: 54px;
  height: 54px;
  object-fit: contain;
}

.admin-brand span {
  color: #4e2b79;
  font-size: 1.05rem;
  font-weight: 700;
}

h1 {
  margin: 0;
  font-size: clamp(2rem, 4vw, 2.6rem);
}

.page-header p:last-child {
  color: #777386;
}

.export-button {
  padding: 12px 20px;
  border: 0;
  border-radius: 10px;
  background: #663399;
  color: white;
  font-weight: 600;
  cursor: pointer;
}

.donor-summary {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 18px;
  margin-bottom: 24px;
}

.donor-summary > div,
.donor-panel {
  padding: 24px;
  border: 1px solid #ece8f3;
  border-radius: 16px;
  background: white;
}

.donor-summary span {
  display: block;
  color: #777386;
}

.donor-summary strong {
  display: block;
  margin-top: 10px;
  color: #4e2b79;
  font-size: 1.8rem;
}

.toolbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  margin-bottom: 24px;
}

.toolbar h2 {
  margin: 0;
  font-size: 1.25rem;
}

.toolbar input {
  width: min(100%, 380px);
  padding: 12px 14px;
  border: 1px solid #ded9e8;
  border-radius: 9px;
  outline-color: #7a3db8;
}

.table-wrapper {
  overflow-x: auto;
}

table {
  width: 100%;
  border-collapse: collapse;
  text-align: left;
}

th,
td {
  padding: 15px 12px;
  border-bottom: 1px solid #f0edf5;
  white-space: nowrap;
}

th {
  color: #777386;
  font-size: 0.82rem;
}

.consent-badge {
  padding: 5px 9px;
  border-radius: 20px;
  font-size: 0.78rem;
  font-weight: 600;
}

.consent-badge.yes {
  background: #e8f7ee;
  color: #217346;
}

.consent-badge.no {
  background: #f2eff5;
  color: #71687c;
}

.empty-state {
  padding: 50px 20px;
  text-align: center;
}

.empty-state h3 {
  margin-bottom: 8px;
}

.empty-state p,
.message {
  color: #777386;
}

.error-message {
  color: #b42318;
}

.pagination {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  margin-top: 24px;
}

.pagination button {
  padding: 9px 16px;
  border: 1px solid #ded9e8;
  border-radius: 8px;
  background: white;
  color: #4e2b79;
  cursor: pointer;
}

.pagination button:disabled {
  opacity: 0.45;
  cursor: not-allowed;
}

@media (max-width: 700px) {
  .donors-page {
    padding: 24px 16px;
  }

  .page-header,
  .toolbar {
    align-items: stretch;
    flex-direction: column;
  }

  .donor-summary {
    grid-template-columns: 1fr;
  }

  .toolbar input {
    width: 100%;
  }
}
</style>
