function isLiquidEnough(input){

    let index = 0
    let totalMililitresLiquid = Number(input[index]) * 750
    index++

    let totalDishesWashed = 0
    let totalPotsWashed = 0

    let dishesPerWashing = input[index]

    while(dishesPerWashing !== "End"){

        if(index % 3 === 0){

            totalMililitresLiquid -= Number(dishesPerWashing) * 15
            totalPotsWashed += Number(dishesPerWashing)
        } else {
            totalMililitresLiquid -= Number(dishesPerWashing) * 5
            totalDishesWashed += Number(dishesPerWashing)
        }

        if(totalMililitresLiquid < 0){
            console.log(`Not enough detergent, ${Math.abs(totalMililitresLiquid)} ml. more necessary!`)
            break
        }

        index++
        dishesPerWashing = input[index]
    }
    if(totalMililitresLiquid >= 0){
        console.log(`Detergent was enough!`)
        console.log(`${totalDishesWashed} dishes and ${totalPotsWashed} pots were washed.`)
        console.log(`Leftover detergent ${totalMililitresLiquid} ml.`)
    }

}

isLiquidEnough(["1","10","15","10","12","13","30"])