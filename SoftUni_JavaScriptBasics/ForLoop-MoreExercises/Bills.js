function workOutAverageMonthlyExpenses(input){

    let index = 0
    let monthsRageNum = Number(input[index++])

    let totalExpensesForFullPeriod = 0
    let electricityBillCurrentMonth = Number(input[index++])

    let wholePeriodElectricityCost = 0; let wholePeriodWaterCost = 0; 
    let wholePeriodInternetCost = 0; let wholePeriodOtherExpCost = 0;

    for(let currentMonth = 1; currentMonth <= monthsRageNum; currentMonth++){

        wholePeriodElectricityCost += electricityBillCurrentMonth
        wholePeriodWaterCost += 20; wholePeriodInternetCost += 15;
        wholePeriodOtherExpCost += (1.2*(electricityBillCurrentMonth+20+15)) 
        totalExpensesForFullPeriod += ((electricityBillCurrentMonth+20+15)+(1.2*(electricityBillCurrentMonth+20+15)))

        electricityBillCurrentMonth = Number(input[index++])
    }

    console.log(`Electricity: ${wholePeriodElectricityCost.toFixed(2)} lv`)
    console.log(`Water: ${wholePeriodWaterCost.toFixed(2)} lv`)
    console.log(`Internet: ${wholePeriodInternetCost.toFixed(2)} lv`)
    console.log(`Other: ${wholePeriodOtherExpCost.toFixed(2)} lv`)
    console.log(`Average: ${(totalExpensesForFullPeriod/monthsRageNum).toFixed(2)} lv`)
}

workOutAverageMonthlyExpenses(["5","68.63","89.25","132.53","93.53","63.22"])