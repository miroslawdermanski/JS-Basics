function turnOnVacationMode(input){

    let destination = input[0]
    let vacationCost = Number(input[1])
    let savings = 0
    let index = 2

    while (savings < vacationCost){

        if(input[index] === "End"){
            return;
        } else {
            savings += Number(input[index])
            index++
        }
        if(savings >= vacationCost){
            console.log(`Going to ${destination}!`)
            savings = 0
            destination = input[index]
            vacationCost = Number(input[index + 1])
            index+=2
        }
    }
}
turnOnVacationMode(["France","2000","300","300","200","400","190","258","360",
"Portugal","1450","400","400","200","300","300",
"Egypt","1900","1000","280","300","500","End"])

