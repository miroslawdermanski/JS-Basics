function isBudgetEnough(input){

    let movieBudget = Number(input[0]);
    let statistsCount = Number(input[1]);
    let costumeCostPerStatist = Number(input[2]);

    let decorationCost = 0.10 * movieBudget;
    if (statistsCount>150){
        costumeCostPerStatist *= 0.90;
    }
    let totalMovieCost = decorationCost + (statistsCount*costumeCostPerStatist);

    if(totalMovieCost > movieBudget){
        console.log("Not enough money!");
        console.log("Wingard needs " + `${(totalMovieCost-movieBudget).toFixed(2)}` + " leva more.")
    } else {
        console.log("Action!\nWingard starts filming with "+`${(movieBudget-totalMovieCost).toFixed(2)}`+" leva left.");
    }
}

isBudgetEnough([9587.88,222,55.68]);
