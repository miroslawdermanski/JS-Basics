function isOnTimeForExam(input){

    let startingHourOfExam = Number(input[0]);
    let startingMinuteOfExam = Number(input[1]);
    let arrivalHourTime = Number(input[2]);
    let arrivalMinuteTime = Number(input[3]);

    let startingTimeInMinutes = (startingHourOfExam * 60) + startingMinuteOfExam;
    let arrivalTimeInMinutes = (arrivalHourTime * 60 )+ arrivalMinuteTime;

    let minutesEarly = startingTimeInMinutes - arrivalTimeInMinutes;

    if (startingTimeInMinutes < arrivalTimeInMinutes){
            let minutesLate = arrivalTimeInMinutes - startingTimeInMinutes;

            console.log(`Late`);
            if(minutesLate >= 60){
                let hoursLate = Math.floor(minutesLate / 60);
                let newMinutesLate = minutesLate % 60;
            
                if(newMinutesLate < 10){
                    console.log(`${hoursLate+":0"+newMinutesLate} hours after the start`);
                } else {
                    console.log(`${hoursLate+":"+newMinutesLate} hours after the start`);
                }
            } else {
                console.log(`${Math.abs(minutesLate)} minutes after the start`);
            }

    } else if (minutesEarly <= 30 && minutesEarly > 0){
            console.log(`On time`);
            console.log(`${minutesEarly} minutes before the start`);

    } else if (startingTimeInMinutes == arrivalTimeInMinutes){
            console.log(`On time`);

    } else if (arrivalTimeInMinutes < startingTimeInMinutes && minutesEarly > 30) {
            console.log(`Early`);

                let hoursEarly = Math.floor(minutesEarly / 60);
                let newMinutesEarly = minutesEarly % 60;

            if(minutesEarly >= 60){
                
                if(newMinutesEarly < 10){
                    console.log(`${hoursEarly+":0"+newMinutesEarly} hours before the start`);
                } else {
                    console.log(`${hoursEarly+":"+newMinutesEarly} hours before the start`);
                }
        
            } else {
                console.log(`${Math.abs(minutesEarly)} minutes before the start`);
            }
            
    }
}
isOnTimeForExam(['10', '00','9','40']);