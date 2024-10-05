function getAverageCostPerToneAndPercOfVeh(input){

    let index = 0
    let numberOfLoadsPerCource = Number(input[index++])

    let totalTonsForCource = 0
    let tonsForCurrentLoad = 0
    let minibusTons = 0; let truckTons = 0; let trainTons = 0
    for(let currentLoad = 1; currentLoad <= numberOfLoadsPerCource; currentLoad++){

        tonsForCurrentLoad = Number(input[index++])
        totalTonsForCource += tonsForCurrentLoad

        if(tonsForCurrentLoad < 4){
            minibusTons += tonsForCurrentLoad;
        } else if (tonsForCurrentLoad < 12){
            truckTons += tonsForCurrentLoad;
        } else {
            trainTons += tonsForCurrentLoad;
        }

    }
    console.log(`${((minibusTons*200 + truckTons*175 + trainTons*120)/totalTonsForCource).toFixed(2)}`)
    console.log(`${(minibusTons/totalTonsForCource*100).toFixed(2)}%`);
    console.log(`${(truckTons/totalTonsForCource*100).toFixed(2)}%`);
    console.log(`${(trainTons/totalTonsForCource*100).toFixed(2)}%`);
}

getAverageCostPerToneAndPercOfVeh(["5","2","10","20","1","7"])