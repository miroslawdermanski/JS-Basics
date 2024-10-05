function calculateNeededMoney(input){

    let budget = Number(input[0]);
    let videocardCount = Number(input[1]);
    let processorsCount = Number(input[2]);
    let ramCount = Number(input[3]);

    let videoCardTotalPrice = videocardCount*250;
    let processorsTotalPrice = processorsCount * (0.35*videoCardTotalPrice);
    let ramTotalPrice = ramCount * (0.10*videoCardTotalPrice);

    let totalAmountNeeded = videoCardTotalPrice+processorsTotalPrice+ramTotalPrice;

    if (videocardCount > processorsCount){
        totalAmountNeeded *= 0.85;
    }

    if (budget >= totalAmountNeeded){
        console.log("You have " + (budget-totalAmountNeeded).toFixed(2) + " leva left!");
    } else {

        console.log("Not enough money! You need " + (totalAmountNeeded-budget).toFixed(2) + " leva more!");
    }
}
calculateNeededMoney(['920.45', '3','1','1']);