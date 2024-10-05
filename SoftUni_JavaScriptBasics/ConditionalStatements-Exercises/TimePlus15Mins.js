function calculateFutureTime(input){

    let hour = Number(input[0]);
    let minute = Number(input[1]);

    let newMinute = (minute + 15) % 60;
    let newHour = (hour + (minute + 15) / 60) % 24;

    if (newMinute < 10){
        console.log(`${Math.floor(newHour)+":0"+newMinute}`);
    } else {
        console.log(`${Math.floor(newHour)+":"+newMinute}`);
    }
}

calculateFutureTime([22,45]);