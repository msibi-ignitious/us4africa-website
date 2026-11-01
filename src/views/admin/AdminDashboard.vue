
<script setup lang="ts">
import { computed, onMounted, ref } from "vue";
import { useRouter } from "vue-router";
import { apiRequest } from "../../services/api";
import AdminNavigation from "../../components/admin/AdminNavigation.vue";

interface DonationStatus {
  status: string;
  count: number;
}

interface CurrencyTotal {
  currency: string;
  total: number;
}

interface DashboardStats {
  totalDonors: number;
  totalDonations: number;
  paidDonations: number;
  paidTotalsByCurrency: CurrencyTotal[];
  donationsByStatus: DonationStatus[];
}

interface RecurringItem {
  type: string;
  currency: string;
  amount: string;
  donations: number;
}

interface CampaignItem {
  campaign: string;
  currency: string;
  amount: string;
  donations: number;
}

interface TopDonor {
  donor: {
    id: string;
    firstName: string | null;
    lastName: string | null;
    email: string;
  };
  currency: string;
  amount: string;
  donations: number;
}

interface MonthlyTrend {
  month: string;
  currency: string;
  amount: string;
  donations: number;
}

interface Analytics {
  recurringBreakdown: RecurringItem[];
  campaignBreakdown: CampaignItem[];
  topDonors: TopDonor[];
  monthlyTrends: MonthlyTrend[];
}

const router = useRouter();

const stats = ref<DashboardStats | null>(null);
const analytics = ref<Analytics | null>(null);

const loading = ref(true);
const errorMessage = ref("");
const analyticsError = ref("");

const selectedCurrency = ref("");

const currencies = computed(() => {
  const values = new Set<string>();

  stats.value?.paidTotalsByCurrency.forEach(item => {
    values.add(item.currency);
  });

  analytics.value?.monthlyTrends.forEach(item => {
    values.add(item.currency);
  });

  analytics.value?.recurringBreakdown.forEach(item => {
    values.add(item.currency);
  });

  return [...values].sort();
});

const monthlyTrends = computed(() => {
  if (!analytics.value) return [];

  return analytics.value.monthlyTrends.filter(item =>
    !selectedCurrency.value || item.currency === selectedCurrency.value
  );
});

const recurringBreakdown = computed(() => {
  if (!analytics.value) return [];

  return analytics.value.recurringBreakdown.filter(item =>
    !selectedCurrency.value || item.currency === selectedCurrency.value
  );
});

const campaignBreakdown = computed(() => {
  if (!analytics.value) return [];

  return analytics.value.campaignBreakdown.filter(item =>
    !selectedCurrency.value || item.currency === selectedCurrency.value
  );
});

const topDonors = computed(() => {
  if (!analytics.value) return [];

  return analytics.value.topDonors.filter(item =>
    !selectedCurrency.value || item.currency === selectedCurrency.value
  );
});

const maxMonthlyAmount = computed(() => {
  return Math.max(
    1,
    ...monthlyTrends.value.map(item => Number(item.amount))
  );
});

const maxCampaignAmount = computed(() => {
  return Math.max(
    1,
    ...campaignBreakdown.value.map(item => Number(item.amount))
  );
});

const totalRecurring = computed(() => {
  return recurringBreakdown.value.reduce(
    (sum, item) => sum + item.donations,
    0
  );
});

const recurringCount = computed(() => {
  return recurringBreakdown.value
    .filter(item => item.type === "RECURRING")
    .reduce((sum, item) => sum + item.donations, 0);
});

const oneTimeCount = computed(() => {
  return recurringBreakdown.value
    .filter(item => item.type === "ONE_TIME")
    .reduce((sum, item) => sum + item.donations, 0);
});

function formatMoney(amount: number | string, currency: string) {
  const value = Number(amount);

  return `${currency} ${value.toLocaleString("en-ZA", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  })}`;
}

function formatMonth(month: string) {
  const [year, monthNumber] = month.split("-").map(Number);

  return new Date(year, monthNumber - 1).toLocaleDateString("en-ZA", {
    month: "short",
    year: "numeric"
  });
}

function donorName(donor: TopDonor["donor"]) {
  const name = `${donor.firstName || ""} ${donor.lastName || ""}`.trim();
  return name || donor.email;
}

function statusWidth(count: number) {
  const total = stats.value?.totalDonations || 0;
  return total ? `${(count / total) * 100}%` : "0%";
}

function logout() {
  sessionStorage.removeItem("us4africa_admin_token");
  sessionStorage.removeItem("us4africa_admin");
  router.replace("/admin/login");
}

onMounted(async () => {
  const results = await Promise.allSettled([
    apiRequest<DashboardStats>("/donors/stats"),
    apiRequest<Analytics>("/donors/analytics")
  ]);

  if (results[0].status === "fulfilled") {
    stats.value = results[0].value;
  } else {
    errorMessage.value =
      results[0].reason instanceof Error
        ? results[0].reason.message
        : "Unable to load dashboard statistics.";
  }

  if (results[1].status === "fulfilled") {
    analytics.value = results[1].value;
  } else {
    analyticsError.value =
      results[1].reason instanceof Error
        ? results[1].reason.message
        : "Unable to load fundraising analytics.";
  }

  loading.value = false;
});
</script>

<template>
  <AdminNavigation />

  <main class="admin-dashboard">
    <header class="dashboard-header">
      <div>
        <div class="admin-brand">
          <img src="/us4africa-logo.png" alt="US4Africa logo" />
          <span>US4Africa Administration</span>
        </div>

        <h1>Fundraising Dashboard</h1>
        <p class="subtitle">
          Donor activity, fundraising performance and campaign insights
        </p>
      </div>

      <button class="nav-button" @click="router.push('/admin/donors')">
        👥 Manage Donors
      </button>
    </header>

    <p v-if="loading" class="message">
      Loading fundraising dashboard...
    </p>

    <p v-if="errorMessage" class="error-message">
      {{ errorMessage }}
    </p>

    <template v-if="!loading && stats">
      <section class="section-block">
        <div class="section-heading">
          <div>
            <span class="eyebrow">Overview</span>
            <h2>Fundraising at a glance</h2>
          </div>
        </div>

        <div class="stats-grid">
          <article class="stat-card">
            <span>Total donors</span>
            <strong>{{ stats.totalDonors.toLocaleString() }}</strong>
            <small>Registered supporters</small>
          </article>

          <article class="stat-card">
            <span>Total donations</span>
            <strong>{{ stats.totalDonations.toLocaleString() }}</strong>
            <small>All recorded transactions</small>
          </article>

          <article class="stat-card">
            <span>Paid donations</span>
            <strong>{{ stats.paidDonations.toLocaleString() }}</strong>
            <small>Successfully recorded payments</small>
          </article>

          <article class="stat-card featured-card">
            <span>Funds raised</span>

            <template v-if="stats.paidTotalsByCurrency.length">
              <strong
                v-for="item in stats.paidTotalsByCurrency"
                :key="item.currency"
                class="currency-total"
              >
                {{ formatMoney(item.total, item.currency) }}
              </strong>
            </template>

            <strong v-else>0.00</strong>
            <small>Confirmed paid donations</small>
          </article>
        </div>
      </section>

      <section class="section-block">
        <div class="section-heading">
          <div>
            <span class="eyebrow">Performance</span>
            <h2>Fundraising analytics</h2>
          </div>

          <select v-model="selectedCurrency" class="currency-select">
            <option value="">All currencies</option>
            <option
              v-for="currency in currencies"
              :key="currency"
              :value="currency"
            >
              {{ currency }}
            </option>
          </select>
        </div>

        <p v-if="analyticsError" class="error-message">
          {{ analyticsError }}
        </p>

        <template v-else-if="analytics">
          <div class="analytics-grid">
            <article class="panel monthly-panel">
              <div class="panel-heading">
                <div>
                  <h3>Monthly donation trends</h3>
                  <p>Paid donations over the last 12 months</p>
                </div>
              </div>

              <p v-if="!monthlyTrends.length" class="empty-state">
                No monthly donation data available yet.
              </p>

              <div v-else class="monthly-chart">
                <div
                  v-for="item in monthlyTrends"
                  :key="`${item.month}-${item.currency}`"
                  class="month-column"
                >
                  <div class="bar-area">
                    <span class="bar-value">
                      {{ Number(item.amount).toLocaleString("en-ZA", {
                        maximumFractionDigits: 0
                      }) }}
                    </span>

                    <div
                      class="month-bar"
                      :style="{
                        height: `${Math.max(
                          4,
                          (Number(item.amount) / maxMonthlyAmount) * 100
                        )}%`
                      }"
                    ></div>
                  </div>

                  <span class="month-label">
                    {{ formatMonth(item.month) }}
                  </span>
                  <small>{{ item.currency }}</small>
                  <small>{{ item.donations }} donations</small>
                </div>
              </div>
            </article>

            <article class="panel">
              <div class="panel-heading">
                <div>
                  <h3>Donation status</h3>
                  <p>Transaction breakdown</p>
                </div>
              </div>

              <p v-if="!stats.donationsByStatus.length" class="empty-state">
                No donation records yet.
              </p>

              <div v-else class="status-list">
                <div
                  v-for="item in stats.donationsByStatus"
                  :key="item.status"
                  class="status-item"
                >
                  <div class="status-info">
                    <span>{{ item.status.replaceAll("_", " ") }}</span>
                    <strong>{{ item.count }}</strong>
                  </div>

                  <div class="status-track">
                    <div
                      class="status-fill"
                      :style="{ width: statusWidth(item.count) }"
                    ></div>
                  </div>
                </div>
              </div>
            </article>

            <article class="panel">
              <div class="panel-heading">
                <div>
                  <h3>Giving patterns</h3>
                  <p>Recurring versus one-time giving</p>
                </div>
              </div>

              <p v-if="!totalRecurring" class="empty-state">
                No paid donation data available yet.
              </p>

              <template v-else>
                <div class="giving-summary">
                  <div>
                    <strong>{{ recurringCount }}</strong>
                    <span>Recurring</span>
                  </div>

                  <div>
                    <strong>{{ oneTimeCount }}</strong>
                    <span>One-time</span>
                  </div>
                </div>

                <div class="giving-track">
                  <div
                    class="recurring-fill"
                    :style="{
                      width: `${(recurringCount / totalRecurring) * 100}%`
                    }"
                  ></div>
                  <div
                    class="one-time-fill"
                    :style="{
                      width: `${(oneTimeCount / totalRecurring) * 100}%`
                    }"
                  ></div>
                </div>

                <div
                  v-for="item in recurringBreakdown"
                  :key="`${item.type}-${item.currency}`"
                  class="breakdown-row"
                >
                  <span>{{ item.type.replace("_", " ") }} · {{ item.currency }}</span>
                  <strong>{{ item.donations }} donations</strong>
                  <span>{{ formatMoney(item.amount, item.currency) }}</span>
                </div>
              </template>
            </article>

            <article class="panel">
              <div class="panel-heading">
                <div>
                  <h3>Campaign performance</h3>
                  <p>Funds raised by campaign</p>
                </div>
              </div>

              <p v-if="!campaignBreakdown.length" class="empty-state">
                No campaign donations recorded yet.
              </p>

              <div v-else class="campaign-list">
                <div
                  v-for="item in campaignBreakdown"
                  :key="`${item.campaign}-${item.currency}`"
                  class="campaign-item"
                >
                  <div class="campaign-info">
                    <strong>{{ item.campaign }}</strong>
                    <span>{{ item.donations }} donations · {{ item.currency }}</span>
                  </div>

                  <strong>{{ formatMoney(item.amount, item.currency) }}</strong>

                  <div class="campaign-track">
                    <div
                      class="campaign-fill"
                      :style="{
                        width: `${(Number(item.amount) / maxCampaignAmount) * 100}%`
                      }"
                    ></div>
                  </div>
                </div>
              </div>
            </article>
          </div>

          <article class="panel top-donors-panel">
            <div class="panel-heading">
              <div>
                <h3>Top donors</h3>
                <p>Highest contributing supporters by currency</p>
              </div>
            </div>

            <p v-if="!topDonors.length" class="empty-state">
              No paid donor contributions available yet.
            </p>

            <div v-else class="table-wrapper">
              <table>
                <thead>
                  <tr>
                    <th>Rank</th>
                    <th>Donor</th>
                    <th>Email</th>
                    <th>Donations</th>
                    <th>Currency</th>
                    <th>Total contributed</th>
                  </tr>
                </thead>

                <tbody>
                  <tr
                    v-for="(item, index) in topDonors"
                    :key="`${item.donor.id}-${item.currency}`"
                  >
                    <td>{{ index + 1 }}</td>
                    <td>{{ donorName(item.donor) }}</td>
                    <td>{{ item.donor.email }}</td>
                    <td>{{ item.donations }}</td>
                    <td>{{ item.currency }}</td>
                    <td class="amount-cell">
                      {{ formatMoney(item.amount, item.currency) }}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </article>
        </template>
      </section>
    </template>
  </main>
</template>

<style scoped>
.admin-dashboard {
  min-height: 100vh;
  padding: 40px;
  background: #f7f7fb;
  color: #25213b;
}

.dashboard-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  margin-bottom: 38px;
}

.admin-brand {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 22px;
}

.admin-brand img {
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
  font-size: clamp(2rem, 4vw, 2.8rem);
}

.subtitle {
  margin: 8px 0 0;
  color: #777386;
}

.nav-button {
  padding: 12px 18px;
  border: none;
  border-radius: 10px;
  background: #663399;
  color: white;
  font-weight: 600;
  cursor: pointer;
}

.nav-button:hover {
  background: #51277c;
}

.section-block {
  margin-top: 34px;
}

.section-heading {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  margin-bottom: 20px;
}

.eyebrow {
  color: #9b5bd0;
  font-size: 0.76rem;
  font-weight: 800;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

.section-heading h2 {
  margin: 5px 0 0;
  font-size: 1.55rem;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 18px;
}

.stat-card,
.panel {
  border: 1px solid #ece8f3;
  border-radius: 16px;
  background: white;
  box-shadow: 0 8px 24px rgb(42 25 65 / 4%);
}

.stat-card {
  display: flex;
  min-height: 150px;
  flex-direction: column;
  justify-content: space-between;
  gap: 12px;
  padding: 23px;
}

.stat-card > span {
  color: #777386;
  font-size: 0.9rem;
}

.stat-card > strong {
  color: #4e2b79;
  font-size: 2rem;
  overflow-wrap: anywhere;
}

.stat-card small {
  color: #9993a5;
}

.featured-card {
  border-top: 4px solid #d74355;
}

.stat-card .currency-total {
  font-size: 1.2rem;
}

.currency-select {
  min-width: 150px;
  padding: 10px 14px;
  border: 1px solid #ded9e8;
  border-radius: 9px;
  background: white;
  color: #4e2b79;
}

.analytics-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 20px;
}

.panel {
  min-width: 0;
  padding: 24px;
}

.panel-heading {
  margin-bottom: 22px;
}

.panel-heading h3 {
  margin: 0;
  color: #302744;
  font-size: 1.1rem;
}

.panel-heading p {
  margin: 6px 0 0;
  color: #918a9e;
  font-size: 0.85rem;
}

.monthly-chart {
  display: flex;
  min-height: 240px;
  align-items: flex-end;
  gap: 12px;
  overflow-x: auto;
  padding-top: 15px;
}

.month-column {
  display: flex;
  min-width: 65px;
  flex: 1;
  flex-direction: column;
  align-items: center;
  gap: 7px;
  text-align: center;
}

.bar-area {
  display: flex;
  width: 100%;
  height: 175px;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  gap: 6px;
}

.bar-value {
  color: #6b6179;
  font-size: 0.68rem;
}

.month-bar {
  width: min(34px, 75%);
  min-height: 4px;
  border-radius: 7px 7px 2px 2px;
  background: linear-gradient(180deg, #9d64d0, #663399);
  transition: height 0.3s ease;
}

.month-label {
  color: #5e5769;
  font-size: 0.72rem;
  white-space: nowrap;
}

.month-column small {
  color: #9993a5;
  font-size: 0.68rem;
}

.status-list,
.campaign-list {
  display: grid;
  gap: 18px;
}

.status-info {
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
  font-size: 0.88rem;
}

.status-track,
.campaign-track,
.giving-track {
  height: 9px;
  overflow: hidden;
  border-radius: 20px;
  background: #f0edf5;
}

.status-fill {
  height: 100%;
  border-radius: inherit;
  background: #663399;
}

.giving-summary {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 14px;
  margin-bottom: 18px;
}

.giving-summary > div {
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding: 15px;
  border-radius: 11px;
  background: #f8f5fc;
}

.giving-summary strong {
  color: #663399;
  font-size: 1.7rem;
}

.giving-summary span {
  color: #777386;
  font-size: 0.83rem;
}

.giving-track {
  display: flex;
  height: 13px;
  margin-bottom: 20px;
}

.recurring-fill {
  background: #663399;
}

.one-time-fill {
  background: #d74355;
}

.breakdown-row {
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 7px;
  padding: 11px 0;
  border-bottom: 1px solid #f0edf5;
  font-size: 0.8rem;
}

.breakdown-row span:last-child {
  grid-column: 1 / -1;
  color: #777386;
}

.campaign-item {
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 10px;
  align-items: center;
}

.campaign-info {
  display: flex;
  min-width: 0;
  flex-direction: column;
  gap: 5px;
}

.campaign-info strong {
  overflow-wrap: anywhere;
  font-size: 0.9rem;
}

.campaign-info span {
  color: #918a9e;
  font-size: 0.76rem;
}

.campaign-item > strong {
  color: #663399;
  font-size: 0.86rem;
}

.campaign-track {
  grid-column: 1 / -1;
}

.campaign-fill {
  height: 100%;
  border-radius: inherit;
  background: linear-gradient(90deg, #663399, #d74355);
}

.top-donors-panel {
  margin-top: 20px;
}

.table-wrapper {
  overflow-x: auto;
}

table {
  width: 100%;
  border-collapse: collapse;
  text-align: left;
  white-space: nowrap;
}

th,
td {
  padding: 14px 12px;
  border-bottom: 1px solid #f0edf5;
  font-size: 0.84rem;
}

th {
  color: #777386;
  font-size: 0.75rem;
  text-transform: uppercase;
}

.amount-cell {
  color: #663399;
  font-weight: 700;
}

.empty-state,
.message {
  padding: 18px 0;
  color: #918a9e;
  font-size: 0.9rem;
}

.error-message {
  color: #b42318;
}

@media (max-width: 1100px) {
  .stats-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 800px) {
  .analytics-grid {
    grid-template-columns: 1fr;
  }

  .admin-dashboard {
    padding: 28px 20px;
  }
}

@media (max-width: 550px) {
  .dashboard-header,
  .section-heading {
    align-items: flex-start;
    flex-direction: column;
  }

  .stats-grid {
    grid-template-columns: 1fr;
  }

  .admin-dashboard {
    padding: 24px 15px;
  }

  .panel {
    padding: 18px;
  }
}
</style>
