function printLetterCombinations(input){

    let index = 0
    let startOfIntervalLetter = input[index++]
    let endOfIntervalLetter = input[index++]
    let illegalLetter = input[index]

    let alphabet = "abcdefghijklmnopqrstuvwxyz"

    let combinationsOutput = ""
    let combinationsCount = 0

    for(let firstLetter = alphabet.indexOf(startOfIntervalLetter); firstLetter <= alphabet.indexOf(endOfIntervalLetter); firstLetter++){

        for(let secondLetter = alphabet.indexOf(startOfIntervalLetter); secondLetter <= alphabet.indexOf(endOfIntervalLetter); secondLetter++){

            for(let thirdLetter = alphabet.indexOf(startOfIntervalLetter); thirdLetter <= alphabet.indexOf(endOfIntervalLetter); thirdLetter++){

                if(alphabet.charAt(firstLetter) === illegalLetter || alphabet.charAt(secondLetter) === illegalLetter || alphabet.charAt(thirdLetter) === illegalLetter){
                    continue;
                } else {

                    combinationsOutput += alphabet.charAt(firstLetter)
                    combinationsOutput += alphabet.charAt(secondLetter)
                    combinationsOutput += alphabet.charAt(thirdLetter)
                    combinationsOutput += " "
                    combinationsCount++
                }
                
            }
        }
    }

    console.log(`${combinationsOutput}${combinationsCount}`)
}

printLetterCombinations(["a","c","z"])