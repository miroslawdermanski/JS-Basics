function findSumOfPrimeAndNonPrimeNums(input){

    let sumPrimeNums = 0
    let sumNonPrimeNums = 0

    let index = 0

    while(input[index] !== "stop") {

        let currentNum = Number(input[index])
        if(currentNum < 0){
            console.log(`Number is negative.`)
            index++
            continue
        } else {

            let isPrime = true
            for(let i = 2; i <= currentNum-1; i++){

                if(currentNum % i === 0){
                    sumNonPrimeNums += currentNum
                    isPrime = false
                    break
                } else {
                    continue
                }
            }
            if(isPrime){
                sumPrimeNums += currentNum
            }
        }
    index++    
    }
    console.log(`Sum of all prime numbers is: ${sumPrimeNums}`)
    console.log(`Sum of all non prime numbers is: ${sumNonPrimeNums}`)

}

findSumOfPrimeAndNonPrimeNums(["0",
"-9",
"0",
"stop"])


