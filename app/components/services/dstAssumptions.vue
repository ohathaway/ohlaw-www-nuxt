<template>
  <div class="container py-5">
    <div class="card shadow">
      <div class="card-header">
        <h2 class="card-title text-xl font-bold">Portfolio Assumptions</h2>
      </div>
      <div class="card-body">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <!-- Portfolio Details -->
          <div class="space-y-4">
            <h3 class="text-lg font-semibold">Portfolio Details</h3>
            <div class="space-y-2">
              <label for="value" class="block">Property Value ($)</label>
              <input
                type="number"
                id="value"
                v-model.number="store.portfolio.value"
                class="form-control w-full"
              />
            </div>
            <div class="space-y-2">
              <label for="units" class="block">Number of Units</label>
              <input
                type="number"
                id="units"
                v-model.number="store.portfolio.units"
                class="form-control w-full"
              />
            </div>
            <div class="space-y-2">
              <label for="monthlyRent" class="block">Monthly Rent ($)</label>
              <input
                type="number"
                id="monthlyRent"
                v-model.number="store.portfolio.monthlyRent"
                class="form-control w-full"
              />
            </div>
            <div class="space-y-2">
              <label for="basis" class="block">Cost Basis ($)</label>
              <input
                type="number"
                id="basis"
                v-model.number="store.portfolio.basis"
                class="form-control w-full"
              />
            </div>
          </div>

          <!-- Depreciation Details -->
          <div class="space-y-4">
            <h3 class="text-lg font-semibold">Depreciation Details</h3>
            <div class="space-y-2">
              <label for="accumulatedDepreciation" class="block">Total Accumulated Depreciation ($)</label>
              <input
                type="number"
                id="accumulatedDepreciation"
                v-model.number="store.portfolio.accumulatedDepreciation"
                class="form-control w-full"
              />
            </div>
            <div class="space-y-2">
              <label for="section1250Portion" class="block">§1250 Property Depreciation ($)</label>
              <input
                type="number"
                id="section1250Portion"
                v-model.number="store.portfolio.section1250Portion"
                class="form-control w-full"
              />
            </div>
            <div class="space-y-2">
              <label for="section1245Portion" class="block">§1245 Property Depreciation ($)</label>
              <input
                type="number"
                id="section1245Portion"
                v-model.number="store.portfolio.section1245Portion"
                class="form-control w-full"
              />
            </div>
          </div>

          <!-- Rates -->
          <div class="space-y-4">
            <h3 class="text-lg font-semibold">Rates (%)</h3>
            <div class="grid grid-cols-2 gap-4">
              <div class="space-y-2">
                <label for="propertyManagement" class="block">Property Management</label>
                <input
                  type="number"
                  id="propertyManagement"
                  v-model.number="propertyManagementPercent"
                  class="form-control w-full"
                />
              </div>
              <div class="space-y-2">
                <label for="maintenance" class="block">Maintenance</label>
                <input
                  type="number"
                  id="maintenance"
                  v-model.number="maintenancePercent"
                  class="form-control w-full"
                />
              </div>
              <div class="space-y-2">
                <label for="vacancy" class="block">Vacancy</label>
                <input
                  type="number"
                  id="vacancy"
                  v-model.number="vacancyPercent"
                  class="form-control w-full"
                />
              </div>
              <div class="space-y-2">
                <label for="incomeTax" class="block">Income Tax</label>
                <input
                  type="number"
                  id="incomeTax"
                  v-model.number="incomeTaxPercent"
                  class="form-control w-full"
                />
              </div>
              <div class="space-y-2">
                <label for="capitalGains" class="block">Capital Gains</label>
                <input
                  type="number"
                  id="capitalGains"
                  v-model.number="capitalGainsPercent"
                  class="form-control w-full"
                />
              </div>
              <div class="space-y-2">
                <label for="annuityReturn" class="block">Annuity Return</label>
                <input
                  type="number"
                  id="annuityReturn"
                  v-model.number="annuityReturnPercent"
                  class="form-control w-full"
                />
              </div>
            </div>
          </div>

          <!-- Costs -->
          <div class="space-y-4">
            <h3 class="text-lg font-semibold">Costs</h3>
            <div class="grid grid-cols-2 gap-4">
              <div class="space-y-2">
                <label for="propertyInsurance" class="block">Property Insurance ($)</label>
                <input
                  type="number"
                  id="propertyInsurance"
                  v-model.number="store.costs.propertyInsurance"
                  class="form-control w-full"
                />
              </div>
              <div class="space-y-2">
                <label for="propertyTaxes" class="block">Property Taxes ($)</label>
                <input
                  type="number"
                  id="propertyTaxes"
                  v-model.number="store.costs.propertyTaxes"
                  class="form-control w-full"
                />
              </div>
              <div class="space-y-2">
                <label for="dstInitial" class="block">DST Initial Cost ($)</label>
                <input
                  type="number"
                  id="dstInitial"
                  v-model.number="store.costs.dstInitial"
                  class="form-control w-full"
                />
              </div>
              <div class="space-y-2">
                <label for="dstAnnual" class="block">DST Annual Cost ($)</label>
                <input
                  type="number"
                  id="dstAnnual"
                  v-model.number="store.costs.dstAnnual"
                  class="form-control w-full"
                />
              </div>
              <div class="space-y-2">
                <label for="sellingCosts" class="block">Selling Costs (%)</label>
                <input
                  type="number"
                  id="sellingCosts"
                  v-model.number="sellingCostsPercent"
                  class="form-control w-full"
                />
              </div>
            </div>
          </div>
        </div>

        <!-- DST Terms -->
        <div class="mt-6 space-y-4">
          <h3 class="text-lg font-semibold">DST Terms</h3>
          <div class="grid grid-cols-2 gap-4">
            <div class="space-y-2">
              <label for="years" class="block">Term Length (Years)</label>
              <input
                type="number"
                id="years"
                v-model.number="store.dstTerms.years"
                class="form-control w-full"
              />
            </div>
            <div class="space-y-2">
              <label for="gainRecognitionRatio" class="block">Gain Recognition Ratio (%)</label>
              <input
                type="number"
                id="gainRecognitionRatio"
                v-model.number="gainRecognitionPercent"
                class="form-control w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const store = useDstStore()

// Computed properties for percentage conversions
const propertyManagementPercent = computed({
  get: () => store.rates.propertyManagement * 100,
  set: (val) => store.rates.propertyManagement = val / 100
})

const maintenancePercent = computed({
  get: () => store.rates.maintenance * 100,
  set: (val) => store.rates.maintenance = val / 100
})

const vacancyPercent = computed ({
  get: () => store.rates.vacancy * 100,
  set: (val) => store.rates.vacancy = val / 100
})

const incomeTaxPercent = computed({
  get: () => store.rates.incomeTax * 100,
  set: (val) => store.rates.incomeTax = val / 100
})

const capitalGainsPercent = computed({
  get: () => store.rates.capitalGains * 100,
  set: (val) => store.rates.capitalGains = val / 100
})

const annuityReturnPercent = computed({
  get: () => store.rates.annuityReturn * 100,
  set: (val) => store.rates.annuityReturn = val / 100
})

const sellingCostsPercent = computed({
  get: () => store.rates.sellingCosts * 100,
  set: (val) => store.rates.sellingCosts = val / 100
})

const gainRecognitionPercent = computed({
  get: () => store.rates.gainRecognition * 100,
  set: (val) => store.rates.gainRecognition = val / 100
})

</script>