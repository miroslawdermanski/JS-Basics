function saveForVacation(input){

    let index = 0;

    let vacationCost = Number(input[index]);
    index++;
    let currentBalance = Number(input[index]);
    index++;

    let spendDayCount = 0;
    let streak = 0;

    while (currentBalance < vacationCost){

        let action = input[index];
        //index++;
        let sum = Number(input[index+1]);
        //index++;

        if (action === "spend"){
            if(sum > currentBalance) {
                currentBalance = 0;
            } else {
                currentBalance -= sum;
            }
            spendDayCount++;

        } else if (action === "save"){
            spendDayCount = 0;
            currentBalance += sum;

        }
        index = index + 2;
        streak++;
        if (spendDayCount === 5){
            console.log(`You can't save the money.\n${streak}`);
            //console.log(`${streak}`)
            break;
        }

    }

    if(currentBalance >= vacationCost){
        console.log(`You saved the money for ${streak} days.`);
    }


}

saveForVacation(["350","150","spend","50","spend","50","save","100","save","100","spend","10"]);