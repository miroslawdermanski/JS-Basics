function calculateAverageGradePerPresentation(input){

    let numberOfAssessors = Number(input[0])
    let index = 1
    let presentationName = input[index]
    let sumOfAllGrades = 0
    let gradesCount = 0
    let gradeIndex = 2

    while(presentationName !== "Finish"){

        let gradeSum = 0

        for(let gradeCount = numberOfAssessors; gradeCount >= 1;  gradeCount--) {
            let currentGrade = Number(input[gradeIndex])
            gradesCount++
            gradeSum += currentGrade
            sumOfAllGrades += currentGrade
            gradeIndex++
        }
        gradeIndex++
        console.log(`${presentationName} - ${(gradeSum/numberOfAssessors).toFixed(2)}.`)

        index+=numberOfAssessors
        presentationName = input[++index]
    }
    console.log(`Student's final assessment is ${(sumOfAllGrades/gradesCount).toFixed(2)}.`);
}

calculateAverageGradePerPresentation(["2",
"Objects and Classes",
"5.77",
"4.23",
"Dictionaries",
"4.62",
"5.02",
"RegEx",
"2.88",
"3.42",
"Finish"])


