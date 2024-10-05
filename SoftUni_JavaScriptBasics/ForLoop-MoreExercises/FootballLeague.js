function findPercentageOfFansPerSector(input){

    let index = 0
    let stadiumCapacity = Number(input[index++])
    let totalFans = Number(input[index++])

    let totalFansSectorA = 0; let totalFansSectorB = 0;
    let totalFansSectorV = 0; let totalFansSectorG = 0;

    let currentFanSector = input[index++]

    for(let currentFan = 1; currentFan <= totalFans; currentFan++){

        switch(currentFanSector){
            case 'A': totalFansSectorA++; break;
            case 'B': totalFansSectorB++; break;
            case 'V': totalFansSectorV++; break;
            case 'G': totalFansSectorG++; break;
        }

        currentFanSector = input[index++]
    }

    console.log(`${((totalFansSectorA/totalFans)*100).toFixed(2)}%`);
    console.log(`${((totalFansSectorB/totalFans)*100).toFixed(2)}%`);
    console.log(`${((totalFansSectorV/totalFans)*100).toFixed(2)}%`);
    console.log(`${((totalFansSectorG/totalFans)*100).toFixed(2)}%`);
    console.log(`${((totalFans/stadiumCapacity)*100).toFixed(2)}%`);
}

findPercentageOfFansPerSector(["76","10","A","V","V","V","G","B","A","V","B","B"])