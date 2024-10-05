function printWeddingSeats(input){

    let lastSector = input[0]
    let numberOfRowsInFirstSector = Number(input[1])
    let numberOfSeatsAtOddRow = Number(input[2])

    let totalSeats = 0

    let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

    for(let currentSector = alphabet.indexOf("A"); currentSector <= alphabet.indexOf(lastSector); currentSector++){

        for(let currentRow = 1; currentRow <= numberOfRowsInFirstSector; currentRow++){

            if(currentRow % 2 === 0){

                numberOfSeatsAtOddRow += 2

            } else {
                numberOfSeatsAtOddRow = Number(input[2])                
            }

            for(let currentSeatIndex = 0; currentSeatIndex < numberOfSeatsAtOddRow; currentSeatIndex++) {

                let currentSeat = alphabet.charAt(currentSeatIndex).toLowerCase()
                console.log(`${alphabet.charAt(currentSector)}${currentRow}${currentSeat}`)
                totalSeats++
            }
        }
    numberOfRowsInFirstSector++

    }
    console.log(totalSeats)

}

printWeddingSeats(["E","1","3"])
//printWeddingSeats(["B","3","2"])
//printWeddingSeats(["C","4","2"])