function showFinalResult(input){

    let index = 0
    let numberOfTurns = Number(input[index++])
    let finalResult = 0

    let sumOfNumsRange0to9 = 0; let sumOfNumsRange10to19 = 0; let sumOfNumsRange20to29 = 0
    let sumOfNumsRange30to39 = 0; let sumOfNumsRange40to50 = 0; let sumOfInvalidNums = 0

    let currentNum = Number(input[index++])
    for(let currentTurnNum = 1; currentTurnNum <= numberOfTurns; currentTurnNum++){

        if(currentNum < 0 || currentNum > 50){
            finalResult = finalResult / 2
            sumOfInvalidNums++
        } else if(currentNum < 10){
            finalResult += (0.2 * currentNum)
            sumOfNumsRange0to9++
        } else if(currentNum < 20){
            finalResult += (0.3 * currentNum)
            sumOfNumsRange10to19++
        } else if(currentNum < 30){
            finalResult += (0.4 * currentNum)
            sumOfNumsRange20to29++
        } else if(currentNum < 40){
            finalResult += 50
            sumOfNumsRange30to39++
        } else if(currentNum < 51){
            finalResult += 100
            sumOfNumsRange40to50++
        }

        currentNum = Number(input[index++])
    }

    console.log(`${finalResult.toFixed(2)}`)
    console.log(`From 0 to 9: ${(sumOfNumsRange0to9/numberOfTurns*100).toFixed(2)}%`)
    console.log(`From 10 to 19: ${(sumOfNumsRange10to19/numberOfTurns*100).toFixed(2)}%`)
    console.log(`From 20 to 29: ${(sumOfNumsRange20to29/numberOfTurns*100).toFixed(2)}%`)
    console.log(`From 30 to 39: ${(sumOfNumsRange30to39/numberOfTurns*100).toFixed(2)}%`)
    console.log(`From 40 to 50: ${(sumOfNumsRange40to50/numberOfTurns*100).toFixed(2)}%`)
    console.log(`Invalid numbers: ${(sumOfInvalidNums/numberOfTurns*100).toFixed(2)}%`)
}

showFinalResult(["10","43","57","-12","23","12","0","50","40","30","20"])