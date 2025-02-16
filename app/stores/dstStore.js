// stores/dstStore.js
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useDstStore = defineStore('dst', () => {
  // Initial Data
  const portfolio = ref({
    value: 2000000,
    units: 5,
    monthlyRent: 10000,
    basis: 1000000,
    accumulatedDepreciation: 400000,
    section1250Portion: 320000,
    section1245Portion: 80000
  })

  const rates = ref({
    propertyManagement: 0.10,
    maintenance: 0.15,
    vacancy: 0.08,
    incomeTax: 0.32,
    capitalGains: 0.282,
    section1250Rate: 0.25,      // 25% rate for unrecaptured 1250 gain
    section1245Rate: 0.32,      // Ordinary income rate for 1245 recapture
    annuityReturn: 0.055,
    investmentReturn: 0.04,
    propertyAppreciation: 0.03
  })

  const costs = ref({
    propertyInsurance: 6000,
    propertyTaxes: 8000,
    dstInitial: 35000,
    dstAnnual: 21500,
    sellingCosts: 0.06
  })

  const dstTerms = ref({
    years: 15,  // Length of installment sale
    gainRecognitionRatio: 0.8  // 80% of each payment is gain
  })

  // Computed Properties
  const statusQuo = computed(() => {
    const grossIncome = portfolio.value.monthlyRent * 12
    const propertyManagement = grossIncome * rates.value.propertyManagement
    const maintenance = grossIncome * rates.value.maintenance
    const vacancy = grossIncome * rates.value.vacancy
    const fixedCosts = costs.value.propertyInsurance + costs.value.propertyTaxes

    const totalExpenses = propertyManagement + maintenance + vacancy + fixedCosts
    const netOperatingIncome = grossIncome - totalExpenses
    const incomeTax = netOperatingIncome * rates.value.incomeTax
    const netCashFlow = netOperatingIncome - incomeTax

    return {
      grossIncome,
      totalExpenses,
      netOperatingIncome,
      incomeTax,
      netCashFlow,
      appreciation: portfolio.value.value * rates.value.propertyAppreciation
    }
  })


  // straightSale computation with depreciation recapture
  const straightSale = computed(() => {
    const salePrice = portfolio.value.value
    const sellingCosts = salePrice * costs.value.sellingCosts
    
    // Calculate different types of gain
    const section1245Recapture = portfolio.value.section1245Portion
    const section1250Recapture = portfolio.value.section1250Portion
    const remainingGain = (salePrice - portfolio.value.basis) - section1245Recapture - section1250Recapture
    
    // Calculate taxes for each component
    const section1245Tax = section1245Recapture * rates.value.section1245Rate
    const section1250Tax = section1250Recapture * rates.value.section1250Rate
    const remainingGainTax = remainingGain * rates.value.capitalGains
    
    const totalTax = section1245Tax + section1250Tax + remainingGainTax
    const totalCosts = sellingCosts + totalTax
    
    const netProceeds = salePrice - totalCosts
    const annuityPayment = netProceeds * rates.value.annuityReturn
    const annualTax = annuityPayment * rates.value.incomeTax
    const netAnnualIncome = annuityPayment - annualTax
    
    return {
      salePrice,
      sellingCosts,
      section1245Recapture,
      section1250Recapture,
      remainingGain,
      section1245Tax,
      section1250Tax,
      remainingGainTax,
      totalTax,
      totalCosts,
      netProceeds,
      annuityPayment,
      annualTax,
      netAnnualIncome
    }
  })

  // DST strategy computation with depreciation recapture
  const dstStrategy = computed(() => {
    const salePrice = portfolio.value.value
    const sellingCosts = salePrice * costs.value.sellingCosts
    const initialCosts = costs.value.dstInitial
    const totalCosts = sellingCosts + initialCosts

    const netForAnnuity = salePrice - totalCosts
    const annuityPayment = netForAnnuity * rates.value.annuityReturn

    // Calculate annual recognition components
    const totalSection1245 = portfolio.value.section1245Portion
    const totalSection1250 = portfolio.value.section1250Portion
    const remainingGain = salePrice - portfolio.value.basis - totalSection1245 - totalSection1250

    // Annual recognition amounts
    const annualSection1245 = totalSection1245 / dstTerms.value.years
    const annualSection1250 = totalSection1250 / dstTerms.value.years
    const annualRemainingGain = remainingGain / dstTerms.value.years

    // Annual tax components
    const annualSection1245Tax = annualSection1245 * rates.value.section1245Rate
    const annualSection1250Tax = annualSection1250 * rates.value.section1250Rate
    const annualRemainingGainTax = annualRemainingGain * rates.value.capitalGains

    // Regular income tax on annuity portion
    const annualIncomeTax = (annuityPayment * 0.2) * rates.value.incomeTax
    
    const annualCosts = costs.value.dstAnnual
    const totalAnnualTax = annualSection1245Tax + annualSection1250Tax + annualRemainingGainTax + annualIncomeTax
    const netAnnualIncome = annuityPayment - totalAnnualTax - annualCosts

    return {
      salePrice,
      sellingCosts,
      initialCosts,
      totalCosts,
      netForAnnuity,
      annuityPayment,
      annualSection1245,
      annualSection1250,
      annualRemainingGain,
      annualSection1245Tax,
      annualSection1250Tax,
      annualRemainingGainTax,
      annualIncomeTax,
      totalAnnualTax,
      annualCosts,
      netAnnualIncome
    }
  })

  // Calculate cumulative cash flows over 15 years
  const calculateCumulativeData = () => {
    const years = dstTerms.value.years
    const labels = Array.from({ length: years }, (_, i) => `Year ${i + 1}`)

    // Initialize arrays for cumulative values
    const statusQuoData = []
    const straightSaleData = []
    const dstData = []

    // Status Quo calculation remains the same
    let statusQuoCumulative = 0
    for (let year = 0; year < years; year++) {
      statusQuoCumulative += statusQuo.value.netCashFlow
      // Add property appreciation
      const appreciationValue = portfolio.value.value * 
        Math.pow(1 + rates.value.propertyAppreciation, year) - 
        portfolio.value.value
      statusQuoData.push(statusQuoCumulative + appreciationValue)
    }

    // Straight Sale calculation with immediate tax impact and annuity returns
    const straightSale = straightSaleCalc()

    function straightSaleCalc() {
      const salePrice = portfolio.value.value
      const sellingCosts = salePrice * costs.value.sellingCosts

      // Calculate different types of gain and their tax impacts
      const section1245Recapture = portfolio.value.section1245Portion
      const section1250Recapture = portfolio.value.section1250Portion
      const remainingGain = (salePrice - portfolio.value.basis) - 
        section1245Recapture - section1250Recapture

      // Calculate immediate tax impacts
      const section1245Tax = section1245Recapture * rates.value.section1245Rate
      const section1250Tax = section1250Recapture * rates.value.section1250Rate
      const remainingGainTax = remainingGain * rates.value.capitalGains

      const totalTax = section1245Tax + section1250Tax + remainingGainTax
      const totalCosts = sellingCosts + totalTax

      // Net proceeds available for annuity investment
      const netProceeds = salePrice - totalCosts
      const annualReturn = netProceeds * rates.value.annuityReturn
      const annualTax = annualReturn * rates.value.incomeTax
      const netAnnualIncome = annualReturn - annualTax

      return {
        netProceeds,
        netAnnualIncome
      }
    }

    // Calculate cumulative straight sale returns
    let straightSaleCumulative = -straightSale.netProceeds // Initial negative cash flow
    for (let year = 0; year < years; year++) {
      straightSaleCumulative += straightSale.netAnnualIncome
      straightSaleData.push(straightSaleCumulative)
    }

    // DST Strategy calculation
    const dst = dstStrategyCalc()

    function dstStrategyCalc() {
      const salePrice = portfolio.value.value
      const sellingCosts = salePrice * costs.value.sellingCosts
      const initialCosts = costs.value.dstInitial
      const totalCosts = sellingCosts + initialCosts
      
      const netForAnnuity = salePrice - totalCosts
      const annuityPayment = netForAnnuity * rates.value.annuityReturn
      
      // Calculate annual recognition components
      const totalSection1245 = portfolio.value.section1245Portion
      const totalSection1250 = portfolio.value.section1250Portion
      const remainingGain = salePrice - portfolio.value.basis - 
        totalSection1245 - totalSection1250
      
      // Annual recognition amounts
      const annualSection1245 = totalSection1245 / years
      const annualSection1250 = totalSection1250 / years
      const annualRemainingGain = remainingGain / years
      
      // Annual tax components
      const annualSection1245Tax = annualSection1245 * rates.value.section1245Rate
      const annualSection1250Tax = annualSection1250 * rates.value.section1250Rate
      const annualRemainingGainTax = annualRemainingGain * rates.value.capitalGains
      
      // Regular income tax on annuity portion
      const annualIncomeTax = (annuityPayment * 0.2) * rates.value.incomeTax
      
      const annualCosts = costs.value.dstAnnual
      const totalAnnualTax = annualSection1245Tax + annualSection1250Tax + 
        annualRemainingGainTax + annualIncomeTax
      const netAnnualIncome = annuityPayment - totalAnnualTax - annualCosts
      
      return {
        netForAnnuity,
        netAnnualIncome
      }
    }

    // Calculate cumulative DST returns
    let dstCumulative = -dst.netForAnnuity // Initial negative cash flow
    for (let year = 0; year < years; year++) {
      dstCumulative += dst.netAnnualIncome
      dstData.push(dstCumulative)
    }

    return {
      labels,
      statusQuo: statusQuoData,
      straightSale: straightSaleData,
      dst: dstData
    }
  }

  // Utility Functions
  const formatNumber = (number) => {
    return number.toLocaleString(undefined, { maximumFractionDigits: 0 })
  }

  return {
    portfolio,
    rates,
    costs,
    dstTerms,
    statusQuo,
    straightSale,
    dstStrategy,
    calculateCumulativeData,
    formatNumber 
  }
})