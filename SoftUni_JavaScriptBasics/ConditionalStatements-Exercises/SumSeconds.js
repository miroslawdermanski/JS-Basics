function sumSeconds(input){

    let firstFinish = Number.parseInt(input[0]);
    let secondFinish = Number.parseInt(input[1]);
    let thirdFinish = Number.parseInt(input[2]);

    let totalTime = firstFinish+secondFinish+thirdFinish;
    let minutes = Math.floor(totalTime / 60); let seconds = totalTime % 60;

    if(seconds < 10){
        console.log(`${minutes+":0"+seconds}`);
    } else {
        console.log(`${minutes+":"+seconds}`);
    }
}

sumSeconds(["22","7","34"]);