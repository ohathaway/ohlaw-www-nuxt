<template>
  <div class="main bg-light min-vh-100">
    <!-- Header -->
    <header class="bg-primary text-white py-5">
      <div class="container">
        <h1 class="display-4 fw-bold mb-2">DST ROI Calculator</h1>
        <p class="fs-4">Compare options for rental property investment</p>
      </div>
    </header>

    <!-- Portfolio Overview -->
    <section class="container py-5">
      <div class="card shadow mb-5">
        <div class="card-body">
          <!--
          <h2 class="card-title h3 fw-bold mb-4">Property Portfolio Overview</h2>
          <div class="row g-4">
            <div class="col-md-4">
              <div class="bg-light p-4 rounded">
                <h3 class="fs-5 fw-bold mb-2">Portfolio Value</h3>
                <p class="display-6 text-primary">${{ formatNumber(portfolio.value) }}</p>
              </div>
            </div>
            <div class="col-md-4">
              <div class="bg-light p-4 rounded">
                <h3 class="fs-5 fw-bold mb-2">Properties</h3>
                <p class="display-6 text-primary">{{ portfolio.units }} Units</p>
              </div>
            </div>
            <div class="col-md-4">
              <div class="bg-light p-4 rounded">
                <h3 class="fs-5 fw-bold mb-2">Monthly Gross Rent</h3>
                <p class="display-6 text-primary">${{ formatNumber(portfolio.monthlyRent) }}</p>
              </div>
            </div>
          </div>
          -->
          <ServicesDstAssumptions />
        </div>
      </div>
    </section>

    <!-- Comparison Cards -->
    <section class="container py-5">
      <div class="row g-4">
        <!-- Status Quo Card -->
        <div class="col-md-4">
          <div class="card shadow h-100">
            <div class="card-body">
              <h2 class="card-title h4 fw-bold mb-4">Status Quo</h2>
              <div class="d-flex flex-column gap-4">
                <div>
                  <h3 class="fs-5 fw-bold mb-3">Annual Income</h3>
                  <div class="d-flex flex-column gap-2">
                    <div class="d-flex justify-content-between">
                      <span>Gross Income</span>
                      <span class="fw-bold">${{ formatNumber(statusQuo.grossIncome) }}</span>
                    </div>
                    <div class="d-flex justify-content-between text-danger">
                      <span>Expenses</span>
                      <span>-${{ formatNumber(statusQuo.totalExpenses) }}</span>
                    </div>
                  </div>
                </div>
                <div class="border-top pt-3">
                  <div class="d-flex justify-content-between fw-bold">
                    <span>Net Annual Income</span>
                    <span>${{ formatNumber(statusQuo.netCashFlow) }}</span>
                  </div>
                </div>
                <div class="alert alert-danger mb-0">
                  <h4 class="fs-6 fw-bold">Hidden Costs</h4>
                  <ul class="mb-0">
                    <li>Stress of tenant issues</li>
                    <li>Emergency repairs</li>
                    <li>Property management oversight</li>
                    <li>Complex tax reporting</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Straight Sale Card -->
        <div class="col-md-4">
          <div class="card shadow h-100">
            <div class="card-body">
              <h2 class="card-title h4 fw-bold mb-4">Straight Sale</h2>
              <div class="d-flex flex-column gap-4">
                <div>
                  <h3 class="fs-5 fw-bold mb-3">Sale Proceeds</h3>
                  <div class="d-flex flex-column gap-2">
                    <div class="d-flex justify-content-between">
                      <span>Sale Price</span>
                      <span>${{ formatNumber(straightSale.salePrice) }}</span>
                    </div>
                    <div class="d-flex justify-content-between text-danger">
                      <span>Total Costs</span>
                      <span>-${{ formatNumber(straightSale.totalCosts) }}</span>
                    </div>
                  </div>
                </div>
                <div class="border-top pt-3">
                  <div class="d-flex justify-content-between fw-bold">
                    <span>Net Annual Income</span>
                    <span>${{ formatNumber(straightSale.netAnnualIncome) }}</span>
                  </div>
                </div>
                <div class="alert alert-info mb-0">
                  <h4 class="fs-6 fw-bold">Benefits</h4>
                  <ul class="mb-0">
                    <li>No management hassles</li>
                    <li>Full liquidity</li>
                    <li>Simple taxes</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- DST Strategy Card -->
        <div class="col-md-4">
          <div class="card shadow h-100">
            <div class="card-body">
              <h2 class="card-title h4 fw-bold mb-4">DST Strategy</h2>
              <div class="d-flex flex-column gap-4">
                <div>
                  <h3 class="fs-5 fw-bold mb-3">Initial Structure</h3>
                  <div class="d-flex flex-column gap-2">
                    <div class="d-flex justify-content-between">
                      <span>Sale Price</span>
                      <span>${{ formatNumber(dstStrategy.salePrice) }}</span>
                    </div>
                    <div class="d-flex justify-content-between text-danger">
                      <span>Total Costs</span>
                      <span>-${{ formatNumber(dstStrategy.totalCosts) }}</span>
                    </div>
                  </div>
                </div>
                <div class="border-top pt-3">
                  <div class="d-flex justify-content-between fw-bold">
                    <span>Net Annual Income</span>
                    <span>${{ formatNumber(dstStrategy.netAnnualIncome) }}</span>
                  </div>
                </div>
                <div class="alert alert-success mb-0">
                  <h4 class="fs-6 fw-bold">Key Benefits</h4>
                  <ul class="mb-0">
                    <li>26% higher cash flow than straight sale</li>
                    <li>No more tenant headaches</li>
                    <li>Predictable monthly income</li>
                    <li>Tax-efficient strategy</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Annual Comparison -->
    <section class="container py-5">
      <div class="card shadow">
        <div class="card-body">
          <h2 class="card-title h3 fw-bold mb-4">Annual Income Comparison</h2>
          <div class="row g-4">
            <div class="col-md-4">
              <div class="text-center p-4 bg-primary bg-opacity-10 rounded">
                <div class="fw-bold">Status Quo</div>
                <div class="display-6 text-primary">${{ formatNumber(statusQuo.netCashFlow) }}</div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="text-center p-4 bg-danger bg-opacity-10 rounded">
                <div class="fw-bold">Straight Sale</div>
                <div class="display-6 text-danger">${{ formatNumber(straightSale.netAnnualIncome) }}</div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="text-center p-4 bg-success bg-opacity-10 rounded">
                <div class="fw-bold">DST Strategy</div>
                <div class="display-6 text-success">${{ formatNumber(dstStrategy.netAnnualIncome) }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- Enhanced Comparison Section with Chart -->
  <section class="container py-5">
    <div class="card shadow">
      <div class="card-body">
        <h2 class="card-title h3 fw-bold mb-4">15-Year Comparison</h2>
        
        <!-- Chart Container -->
        <div class="mb-4" style="height: 400px;">
          <canvas ref="chartRef"></canvas>
        </div>

        <!-- Chart Legend/Key Points -->
        <div class="row g-4 mt-2">
          <div class="col-md-4">
            <div class="card h-100 border-primary border-2">
              <div class="card-body">
                <h3 class="h5 fw-bold text-primary">Status Quo</h3>
                <ul class="list-unstyled mb-0">
                  <li>✓ Annual Income: ${{ formatNumber(statusQuo.netCashFlow) }}</li>
                  <li>✓ Property Appreciation</li>
                  <li class="text-danger">✗ Active Management Required</li>
                </ul>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="card h-100 border-danger border-2">
              <div class="card-body">
                <h3 class="h5 fw-bold text-danger">Straight Sale</h3>
                <ul class="list-unstyled mb-0">
                  <li>✓ Immediate Liquidity</li>
                  <li>✓ No Management Needed</li>
                  <li class="text-danger">✗ Large Immediate Tax Hit</li>
                </ul>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="card h-100 border-success border-2">
              <div class="card-body">
                <h3 class="h5 fw-bold text-success">DST Strategy</h3>
                <ul class="list-unstyled mb-0">
                  <li>✓ Higher Monthly Income</li>
                  <li>✓ Tax-Efficient Exit</li>
                  <li>✓ Professional Management</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  </div>
</template>

<script setup>
import Chart from 'chart.js/auto'

const {
  portfolio,
  rates,
  costs,
  dstTerms,
  statusQuo,
  straightSale,
  dstStrategy
} = storeToRefs(useDstStore())

const { calculateCumulativeData } = useDstStore()

// Chart reference
const chartRef = ref(null)
let chart = null

// Create and update chart
const updateChart = () => {
  if (chart) {
    chart.destroy()
  }

  const data = calculateCumulativeData()
  const ctx = chartRef.value.getContext('2d')

  chart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: data.labels,
      datasets: [
        {
          label: 'Status Quo (Excluding Appreciation)',
          data: data.statusQuo,
          borderColor: 'rgba(13, 110, 253, 1)',
          backgroundColor: 'rgba(13, 110, 253, 0.1)',
          fill: true,
          tension: 0.1
        },
        {
          label: 'Straight Sale',
          data: data.straightSale,
          borderColor: 'rgba(220, 53, 69, 1)',
          backgroundColor: 'rgba(220, 53, 69, 0.1)',
          fill: true,
          tension: 0.1
        },
        {
          label: 'DST Strategy',
          data: data.dst,
          borderColor: 'rgba(25, 135, 84, 1)',
          backgroundColor: 'rgba(25, 135, 84, 0.1)',
          fill: true,
          tension: 0.1
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        title: {
          display: true,
          text: 'Cumulative Cash Flow Over 15 Years',
          font: {
            size: 16,
            weight: 'bold'
          }
        },
        tooltip: {
          mode: 'index',
          intersect: false,
          callbacks: {
            label: function(context) {
              return `${context.dataset.label}: $${formatNumber(context.raw)}`
            }
          }
        }
      },
      scales: {
        y: {
          beginAtZero: true,
          ticks: {
            callback: value => '$' + formatNumber(value)
          }
        }
      },
      interaction: {
        mode: 'nearest',
        axis: 'x',
        intersect: false
      }
    }
  })
}

onMounted(() => {
  updateChart()
})

// Utility Functions
const formatNumber = (number) => {
  return number.toLocaleString(undefined, { maximumFractionDigits: 0 })
}
</script>

<style lang="scss">
.main { padding-top: 80px; }
</style>