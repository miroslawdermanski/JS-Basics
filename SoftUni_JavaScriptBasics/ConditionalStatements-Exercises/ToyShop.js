function isMoneyEnoughForVacation(input){

    let vacationCost = Number(input[0]);
    let puzzleCount = Number(input[1]);
    let dollCount = Number(input[2]);
    let teddyBearCount = Number(input[3]);
    let minionCount = Number(input[4]);
    let lorryCount = Number(input[5]);

    let totalToysCount = puzzleCount+dollCount+teddyBearCount+minionCount+lorryCount;

    let totalCostOfToys = (puzzleCount*2.60)+(dollCount*3)+(teddyBearCount*4.10)+(minionCount*8.20)+(lorryCount*2);

    if (totalToysCount >= 50){
        totalCostOfToys *= 0.75;
    }
    let totalLeftAfterRent = 0.90 * totalCostOfToys;

    if (totalLeftAfterRent >= vacationCost){
        console.log("Yes! " + `${(totalLeftAfterRent - vacationCost).toFixed(2)}` + " lv left.");
    } else {
        console.log("Not enough money! " + `${(vacationCost-totalLeftAfterRent).toFixed(2)}` + " lv needed.");
    }

}

isMoneyEnoughForVacation([320,"8","2","5","5","1"]);