function calcIfSavingsIsEnoughForWashMach(input){

    let lilyCurrentAge = input[0];
    let washMachineCost = input[1];
    let toyCost = input[2]; 
    let countToys = 0;
    let savings = 0;
    let giftMoney = 10;

    for(let i = 1; i <= lilyCurrentAge; i++){

        if (i %2 == 0){
            savings += (giftMoney-1);
            giftMoney += 10;
        } else {
            countToys++;
        }

    }
    let totalSavings = savings + (countToys*toyCost);

    if (totalSavings >= washMachineCost){
        let diff = totalSavings - washMachineCost;
        console.log(`Yes! ${diff.toFixed(2)}`);
    } else {
        let diff = washMachineCost - totalSavings;
        console.log(`No! ${diff.toFixed(2)}`);
    }

}
calcIfSavingsIsEnoughForWashMach([21,1570.98,3]);