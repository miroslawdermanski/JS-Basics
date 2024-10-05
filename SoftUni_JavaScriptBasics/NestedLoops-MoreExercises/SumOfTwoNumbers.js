function printCombinations(input){

    let startOfInterval = Number(input[0])
    let endOfInterval = Number(input[1])
    let magicNum = Number(input[2]) 

    let totalCombinations = 0
    let foundCombination = false

    for(let firstNum = startOfInterval; firstNum <= endOfInterval; firstNum++){

        for(let secondNum = startOfInterval; secondNum <= endOfInterval; secondNum++){
            totalCombinations++

            if(firstNum + secondNum === magicNum){
                console.log(`Combination N:${totalCombinations} (${firstNum} + ${secondNum} = ${magicNum})`)
                foundCombination = true
                break
            }

        }
        if(foundCombination){
            break
        }
    }
    if(!foundCombination) {
        console.log(`${totalCombinations} combinations - neither equals ${magicNum}`)
    }

}

printCombinations(["88","888","2000"])