function workOutStatiscticsOfGrades(input){

    let index = 0
    let numberOfStudentsTakingExam = Number(input[index++])
    let studentsRange2to299 = 0; let studentsRange3to399 = 0; let studentsRange4to499 = 0; let studentsRange5Plus = 0;

    let sumOfAllGrades = 0

    let currentStudentGrade = 0
    for(let currentStudent = 1; currentStudent <= numberOfStudentsTakingExam; currentStudent++){

        currentStudentGrade = Number(input[index++])
        sumOfAllGrades += currentStudentGrade

        if(currentStudentGrade < 3.00){
            studentsRange2to299++
        } else if(currentStudentGrade < 4.00){
            studentsRange3to399++
        } else if(currentStudentGrade < 5.00){
            studentsRange4to499++
        } else {
            studentsRange5Plus++
        }
    }

    let percentRange2to299 = 0; let percentRange3to399 = 0; let percentRange4to499 = 0; let percentTopStudents = 0

    percentRange2to299 = (studentsRange2to299/numberOfStudentsTakingExam*100).toFixed(2) + '%'
    percentRange3to399 = (studentsRange3to399/numberOfStudentsTakingExam*100).toFixed(2) + '%'
    percentRange4to499 = (studentsRange4to499/numberOfStudentsTakingExam*100).toFixed(2) + '%'
    percentTopStudents = (studentsRange5Plus/numberOfStudentsTakingExam*100).toFixed(2) + '%'

    let averageGrade = (sumOfAllGrades/numberOfStudentsTakingExam).toFixed(2)

    console.log(`Top students: ${percentTopStudents}`)
    console.log(`Between 4.00 and 4.99: ${percentRange4to499}`)
    console.log(`Between 3.00 and 3.99: ${percentRange3to399}`)
    console.log(`Fail: ${percentRange2to299}`)
    console.log(`Average: ${averageGrade}`)
}

workOutStatiscticsOfGrades(["6","2","3","4","5","6","2.2"])