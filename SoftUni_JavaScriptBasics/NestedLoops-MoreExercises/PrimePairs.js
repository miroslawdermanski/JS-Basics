function showPrimePairs(input){

    let startValueOfFirstPair = Number(input[0])
    let startValueOfSecondPair = Number(input[1])
    let startEndValueDiffOfFirstPair = Number(input[2])
    let startEndValueDiffOfSecondPair = Number(input[3])

    for(let firstPairDigits = startValueOfFirstPair; firstPairDigits <= startValueOfFirstPair+startEndValueDiffOfFirstPair; firstPairDigits++){
        let isFirstPairPrime = true
        for(let i = 2; i <= firstPairDigits-1; i++){
            if(firstPairDigits % i === 0){
                isFirstPairPrime = false
                break
            }
        }
        if(!isFirstPairPrime){
            continue
        }

        for(let secondPairDigits = startValueOfSecondPair; secondPairDigits <= startValueOfSecondPair+startEndValueDiffOfSecondPair; secondPairDigits++){
            let isSecondPairPrime = true
            for(let j = 2; j <= secondPairDigits-1; j++) {
                if(secondPairDigits % j === 0){
                    isSecondPairPrime = false
                    break
                }
            }
            if(!isSecondPairPrime){
                continue
            } else {
                console.log(`${firstPairDigits}${secondPairDigits}`)
            }

        }
    }

}

showPrimePairs(["10","30","9","6"])