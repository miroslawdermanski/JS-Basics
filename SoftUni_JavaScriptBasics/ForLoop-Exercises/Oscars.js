function arePointsEnoughForTheRole(input){

    let actorName = input[0];
    let startingPoints =  Number(input[1]);
    let examinersCount = Number(input[2]);
    let totalPoints = startingPoints;

    for (let i = 3; i < input.length; i+=2){

        let examinerName = input[i];
        let examinerPoints = Number(input[i+1]);
        totalPoints +=  ((examinerName.length*examinerPoints)/2);

        if (totalPoints > 1250.5){
            console.log(`Congratulations, ${actorName} got a nominee for leading role with ${totalPoints.toFixed(1)}!`);
            return;
        }
    }
         
    let diff = 1250.5 - totalPoints;
    console.log(`Sorry, ${actorName} you need ${diff.toFixed(1)} more!`);
    

}
arePointsEnoughForTheRole(["Zahari Baharov","205","4","Johnny Depp","45","Will Smith","29","Jet Lee","10","Matthew Mcconaughey","39"]);