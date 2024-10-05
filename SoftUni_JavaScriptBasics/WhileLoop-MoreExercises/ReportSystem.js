function executeTransaction(input){

    let index = 0
    let targetAmount = Number(input[index])
    index++

    let soldItemPrice = input[index]

    let totalPaymentsInCash = 0
    let totalPaymentsByCard = 0
    let ccCount = 0
    let csCount = 0

    while(soldItemPrice !== "End"){

        soldItemPrice = Number(soldItemPrice)

        if(index % 2 !== 0){

            if(soldItemPrice > 100){

                console.log(`Error in transaction!`)
            } else {
                targetAmount -= soldItemPrice
                totalPaymentsInCash += soldItemPrice
                csCount++
                console.log(`Product sold!`)
            }
        } else {

            if(soldItemPrice < 10){

                console.log(`Error in transaction!`)
            } else {
                targetAmount -= soldItemPrice
                totalPaymentsByCard += soldItemPrice
                ccCount++
                console.log(`Product sold!`)
            }
        }
        if(targetAmount <= 0){

            console.log(`Average CS: ${(totalPaymentsInCash/csCount).toFixed(2)}`)
            console.log(`Average CC: ${(totalPaymentsByCard/ccCount).toFixed(2)}`)
            break
        }

        index++
        soldItemPrice = input[index]
    }
    if(soldItemPrice === "End"){
        
        console.log(`Failed to collect required money for charity.`)
    }
}

executeTransaction(["600",
    "86",
    "150",
    "98",
    "227",
    "End",
    "317"
    ])