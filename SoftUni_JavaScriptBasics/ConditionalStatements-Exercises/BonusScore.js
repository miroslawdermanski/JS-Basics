function calculateBonusScore(input){

    let score = Number(input[0]);
    let bonus = 0;

    if (score <= 100){
        bonus += 5;
    }
    if (score > 100 && score < 1000){
        bonus = 0.20 * score;
    }
    if (score > 1000){
        bonus = 0.10 * score;
    }
    if (score % 2 == 0){
        bonus += 1;
    }
    if (score % 10 == 5){
        bonus += 2;
    }

    console.log(bonus);
    console.log(score+bonus);
}

calculateBonusScore([2703]);