function workOutExercises(input){

    let badGrades = Number(input[0]);
    let badGradeCount = 0;
    let index = 1;
    let exerciseName = "";
    let grade = 0;
    let totalGradescount = 0;
    let sumOfGrades = 0;
    let lastProblem = "";

    while(badGradeCount < badGrades){

        exerciseName = input[index];
        if (exerciseName === "Enough"){
            console.log(`Average score: ${(sumOfGrades/totalGradescount).toFixed(2)}`);
            console.log(`Number of problems: ${totalGradescount}`);
            console.log(`Last problem: ${lastProblem}`);
            return;
        }

        lastProblem = exerciseName;
        grade = Number(input[index+1]);
        totalGradescount++;
        sumOfGrades += grade;
        index+=2;

        if (grade <= 4){
            badGradeCount++;
            if (badGradeCount == badGrades){
                console.log(`You need a break, ${badGradeCount} poor grades.`);
                return;
            }
        }
    }

}

workOutExercises(["2","Income","3","Game Info","6","Best Player","4","Bus","6","Enough"]);