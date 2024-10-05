function calcStepsPerDay(input){

    let goal = 10000;
    let currentSteps = 0;
    let index = 0;

    while(currentSteps < goal){

        let steps = input[index];
        if (steps === "Going home"){

            steps = Number(input[index+1]);
            currentSteps += steps;
            break;
        } else {
            currentSteps += parseInt(steps);
        }
        index++;
    }
    if(currentSteps >= goal){
        console.log(`Goal reached! Good job!`);
        console.log(`${currentSteps - goal} steps over the goal!`);
    } else {
        console.log(`${goal - currentSteps} more steps to reach goal.`);
    }
}

calcStepsPerDay(["1500","3000","250","1548","2000","Going home","2000"]);