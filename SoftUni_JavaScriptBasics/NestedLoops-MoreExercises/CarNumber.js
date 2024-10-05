function printSpecialCarNumbers(input){

    let startOfInterval = Number(input[0])
    let endOfInterval = Number(input[1])

    let buffer = ""

    for(let firstDigit = startOfInterval; firstDigit <= endOfInterval; firstDigit++){

        for(let secondDigit = startOfInterval; secondDigit <= endOfInterval; secondDigit++){

            for(let thirdDigit = startOfInterval; thirdDigit <= endOfInterval; thirdDigit++) {

                for(let fourthDigit = startOfInterval; fourthDigit <= endOfInterval; fourthDigit++){

                    if((firstDigit % 2 === 0 && fourthDigit % 2 !== 0)||(firstDigit % 2 !== 0 && fourthDigit % 2 === 0)){

                        if(firstDigit > fourthDigit){

                            if((secondDigit+thirdDigit) % 2 === 0){
                                buffer += `${firstDigit}${secondDigit}${thirdDigit}${fourthDigit} `
                            }

                        }

                    }
                }
            }
        }
    }
    console.log(buffer)

}

printSpecialCarNumbers(["3","5"])