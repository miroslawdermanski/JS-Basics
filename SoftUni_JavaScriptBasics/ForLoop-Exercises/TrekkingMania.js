function calcPercOfClimbersOnEachPeak(input){

    let numberOfGroups = Number(input[0]);
    let totalClimbers = 0;
    let musalaClimbers = 0; let montblancClimbers = 0; let kiliClimbers = 0; let k2Climbers = 0; let everestClimbers = 0;

    for (let i = 1; i <= numberOfGroups; i++){

        let groupMembers = Number(input[i]);
        totalClimbers +=  groupMembers;

        if (groupMembers < 6){
            musalaClimbers+=groupMembers;
        } else if(groupMembers < 13){
            montblancClimbers+=groupMembers;
        } else if(groupMembers < 26){
            kiliClimbers+=groupMembers;
        } else if(groupMembers < 41){
            k2Climbers+=groupMembers;
        } else {
            everestClimbers+=groupMembers;
        }

    }
    console.log(`${(musalaClimbers / totalClimbers * 100).toFixed(2)}%`);
    console.log(`${(montblancClimbers / totalClimbers * 100).toFixed(2)}%`);
    console.log(`${(kiliClimbers / totalClimbers * 100).toFixed(2)}%`);
    console.log(`${(k2Climbers / totalClimbers * 100).toFixed(2)}%`);
    console.log(`${(everestClimbers / totalClimbers * 100).toFixed(2)}%`);

}
calcPercOfClimbersOnEachPeak(["10","10","5","1","100","12","26","17","37","40","78"]);