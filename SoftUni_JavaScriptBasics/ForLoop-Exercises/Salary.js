function calcFine(input){

    let openTabsCount = Number(input[0]);
    let salary = Number(input[1]);

    for (let i = 2; i <= openTabsCount+2; i++){
        
        switch(input[i]){
            case "Facebook": salary -= 150;break;
            case "Instagram": salary -= 100;break;
            case "Reddit": salary -= 50;break;
            default:break;
        }

        if (salary <= 0){
            console.log(`You have lost your salary.`);
            return;
        } else {
            continue;
        }
    }
    if (salary > 0){
        console.log(salary);
    }

}
calcFine(["10","750","Facebook","dev,bg","Instagram","Facebook","Reddit","Facebook","Facebook"]);