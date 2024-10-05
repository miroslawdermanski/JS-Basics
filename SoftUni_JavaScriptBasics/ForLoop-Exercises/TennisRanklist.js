function calculatePointsAfterAllTournaments(input){

    let tournamentsParticipationCount = Number(input[0]);
    let startingPoints = Number(input[1]);
    let finalPoints = startingPoints;
    let wins = 0;

    for (let i = 1; i <= tournamentsParticipationCount; i++){

        let stage = input[i+1].toLowerCase();
        switch(stage){
            case "w": finalPoints += 2000; wins++;break;
            case "f": finalPoints += 1200;break;
            case "sf": finalPoints += 720;break
        }

    }

    console.log("Final points: " + finalPoints);
    let averagePoints = Math.floor((finalPoints-startingPoints) / tournamentsParticipationCount);
    console.log("Average points: " + averagePoints);
    let percentWins = (wins / tournamentsParticipationCount) * 100;
    console.log(percentWins.toFixed(2)  + "%");

}

calculatePointsAfterAllTournaments(["4","750","sF","w","sf","W","SF"]);