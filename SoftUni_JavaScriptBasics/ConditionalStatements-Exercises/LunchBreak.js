function isThereTimeForMovie(input){

    let seriesName = input[0];
    let episodeDuration = Number(input[1]);
    let breakDuration = Number(input[2]);

    let lunchTime = breakDuration / 8;
    let relaxTime = 0.25 * breakDuration;
    let timeLeft = breakDuration - (lunchTime+relaxTime);

    if (timeLeft >= episodeDuration){
        console.log("You have enough time to watch " + seriesName + " and left with " + Math.ceil(timeLeft-episodeDuration) + " minutes free time.");
    } else {
        console.log(`You don't have enough time to watch ${seriesName}, you need ${Math.ceil(episodeDuration-timeLeft)} more minutes.`);
    }
}
isThereTimeForMovie(['Teen Wolf', 48, 60]);