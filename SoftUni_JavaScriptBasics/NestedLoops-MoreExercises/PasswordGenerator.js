function findPasswords(input){

    let n = Number(input[0])
    let l = Number(input[1])

    let alphabet = "abcdefghijklmnopqrstuvwxyz"

    let buffer = ""

    for(let symbolOne = 1; symbolOne <= n; symbolOne++){

        for(let symbolTwo = 1; symbolTwo <= n; symbolTwo++){

            for(let symbolThree = alphabet.indexOf("a"); symbolThree < l; symbolThree++){

                for(let symbolFour = alphabet.indexOf("a"); symbolFour < l; symbolFour++){

                    for(let symbolFive = 1; symbolFive <= n; symbolFive++){

                        if(symbolFive <= symbolOne || symbolFive <= symbolTwo){
                            continue
                        }
                        let newPassword = ""
                        newPassword += String(symbolOne) + String(symbolTwo) + String(alphabet[symbolThree]) + String(alphabet[symbolFour]) + String(symbolFive) + " "
                        buffer += newPassword
                    }
                }
            }
        }
    }
    console.log(buffer)

}

findPasswords(["4","2"])