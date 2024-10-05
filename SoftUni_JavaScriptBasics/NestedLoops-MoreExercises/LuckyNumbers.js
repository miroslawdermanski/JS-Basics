function printLuckyNumbers(input){

    let intervalNum = Number(input[0])

    let buffer = ""

    for(let firstDigit = 1; firstDigit <= 9; firstDigit++){

        for(let secondDigit = 1; secondDigit <= 9; secondDigit++){

            
            for(let thirdDigit = 1; thirdDigit <= 9; thirdDigit++){

                for(let fourthDigit = 1; fourthDigit <= 9; fourthDigit++){

                    let frstScndDigitSum = firstDigit + secondDigit
                    let trdFrtDigitSum = thirdDigit + fourthDigit

                    if(frstScndDigitSum === trdFrtDigitSum && intervalNum % frstScndDigitSum === 0){

                        let newLuckyNum = `${firstDigit}${secondDigit}${thirdDigit}${fourthDigit}` 

                        buffer += `${newLuckyNum} `
                        
                    }
                }
            }
        }
    }
    console.log(buffer)

}

printLuckyNumbers(["24"])