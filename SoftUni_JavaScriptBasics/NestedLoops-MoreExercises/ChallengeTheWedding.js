function printDates(input){

    let maleClients = Number(input[0])
    let femaleClients = Number(input[1])
    let maxNumberOfTables = Number(input[2])

    let allDatesOutput = ""
    let freeTables = true

    for(let male = 1; male <= maleClients; male++){

        for(let female = 1; female <= femaleClients; female++){

            let newDate =  `(${male} <-> ${female})`
            maxNumberOfTables--
            allDatesOutput += `${newDate} `

            if(maxNumberOfTables === 0){
                freeTables = false
                break;
            }
        }
        if(!freeTables) {
            break;
        }

    }

    console.log(allDatesOutput)

}

printDates(["5","8","40"])