function workOutAmountForParking(input){

    let totalDays = Number(input[0])
    let hoursPerDay = Number(input[1])
    let totalAmount = 0;

    for(let currentDay = 1; currentDay <= totalDays; currentDay++){

        let currentDayAmount = 0
        for(let currentHour = 1; currentHour <= hoursPerDay; currentHour++){

            if(currentDay % 2 === 0 && currentHour % 2 !== 0){
                totalAmount += 2.50
                currentDayAmount += 2.50
            } else if (currentDay % 2 !== 0 && currentHour % 2 === 0){
                totalAmount += 1.25
                currentDayAmount += 1.25
            } else {
                totalAmount += 1.00
                currentDayAmount += 1.00
            }
        }
        console.log(`Day: ${currentDay} - ${currentDayAmount.toFixed(2)} leva`)
    }
    console.log(`Total: ${totalAmount.toFixed(2)} leva`)

}

workOutAmountForParking(["5","2"])