function generatePINcodes(input){

    index = 0
    let firstDigitLimit = Number(input[index++])
    let secondDigitLimit = Number(input[index++])
    let thirdDigitLimit = Number(input[index])

    for(let firstDigit = 1; firstDigit <= firstDigitLimit; firstDigit++){

        for(let secondDigit = 2; secondDigit <= secondDigitLimit; secondDigit++){

            let isPrime = true
            for(let i = 2; i <= secondDigit - 1; i++){
                if (secondDigit % i === 0) {
                    isPrime = false;
                    break;
                }
            }

            for(let thirdDigit = 1; thirdDigit <= thirdDigitLimit; thirdDigit++){

                if(firstDigit % 2 === 0 && thirdDigit % 2 === 0 && isPrime){

                    console.log(`${firstDigit} ${secondDigit} ${thirdDigit}`)
                }
            }
        }
    }

}

generatePINcodes(["8","2","8"])