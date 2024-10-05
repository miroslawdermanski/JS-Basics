function getRatioOfTicketsType(input){

    let index = 0
    let movieName = input[index]
    let totalTicketsSold = 0
    let studentTickets = 0, standardTickets = 0, kidsTickets = 0
    index++

    while(movieName !== "Finish"){

        let freeSeatsPerProjection =  Number(input[index])
        let seatTypeIndex = index+1
        let takenSeats = 0
        for (let seats = freeSeatsPerProjection; seats > 0; seats--) {

            let seatType = input[seatTypeIndex]
            
            if (seatType === "End"){  
                seatTypeIndex++            
                break
            } else {
                seatTypeIndex++
                takenSeats++
                totalTicketsSold++
                switch(seatType){
                    case "student": studentTickets++; break;
                    case "standard": standardTickets++; break;
                    case "kid": kidsTickets++; break;
                }
            }
        }
        console.log(`${movieName} - ${((takenSeats/freeSeatsPerProjection)*100).toFixed(2)}% full.`)

        index = seatTypeIndex
        movieName = input[index]
        index++
    }
    console.log(`Total tickets: ${totalTicketsSold}`)
    console.log(`${((studentTickets/totalTicketsSold)*100).toFixed(2)}% student tickets.`)  
    console.log(`${((standardTickets/totalTicketsSold)*100).toFixed(2)}% standard tickets.`) 
    console.log(`${((kidsTickets/totalTicketsSold)*100).toFixed(2)}% kids tickets.`) 
}

getRatioOfTicketsType(["The Matrix",
"20",
"student",
"standard",
"kid",
"kid",
"student",
"student",
"standard",
"student",
"End",
"The Green Mile",
"17",
"student",
"standard",
"standard",
"student",
"standard",
"student",
"End",
"Amadeus",
"3",
"standard",
"standard",
"standard",
"Finish"])


