function getCheckedAndUncheckedPatients(input){

    let index = 0
    let periodCalculations = Number(input[index++])
    let totalDoctors = 7
  
    let treatedPatients = 0
    let untreatedPatients = 0
    let currentDayPatients = 0

    for(let currentDay = 1; currentDay <= periodCalculations; currentDay++){

        if(currentDay % 3 === 0){

            if(untreatedPatients > treatedPatients){
                totalDoctors++
            }
        }

        currentDayPatients = Number(input[index++])

        if(currentDayPatients > totalDoctors){
            untreatedPatients += (currentDayPatients - totalDoctors)
            treatedPatients += totalDoctors
        } else {
            treatedPatients += currentDayPatients
        }

    }
    console.log(`Treated patients: ${treatedPatients}.`)
    console.log(`Untreated patients: ${untreatedPatients}.`)
}

getCheckedAndUncheckedPatients(["6","25","25","25","25","25","2"])