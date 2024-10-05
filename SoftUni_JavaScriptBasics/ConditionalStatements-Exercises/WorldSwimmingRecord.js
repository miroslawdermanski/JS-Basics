function calculateTime(input){
    let recordToBreakInSec = Number(input[0]);
    let distanceInMeters = Number(input[1]);
    let timeToSwimOneMeterInSec = Number(input[2]);

    let timeToSwimTheDistance = distanceInMeters*timeToSwimOneMeterInSec;
    let slowingDown = Math.floor(distanceInMeters / 15) * 12.5;

    let totalTimeInSec = timeToSwimTheDistance + slowingDown;

    if (recordToBreakInSec <= totalTimeInSec){
            console.log("No, he failed! He was " + (totalTimeInSec-recordToBreakInSec).toFixed(2) + " seconds slower.");
    } else {
            console.log("Yes, he succeeded! The new world record is " + totalTimeInSec.toFixed(2) + " seconds.");
    }

}
calculateTime([55555.67, 3017, 5.03]);