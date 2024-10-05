function checkEqualPairs(input){

    let index = 0
    let numberOfPairs = Number(input[index++])
    let sum1 = 0; let sum2 = 0; let maxDiff = 0;

    for(let i = 1; i <= numberOfPairs*2; i+=2){

        let num1 = Number(input[i])
        let num2 = Number(input[i + 1])

        let pairSum = num1 + num2

        if(i === 1){

            sum1 = pairSum

        } else {

            sum2 = pairSum
            let diff = Math.abs(sum2 - sum1)
            maxDiff = Math.max(maxDiff, diff)
            sum1 = sum2
        }
        
    }

    if (maxDiff === 0) {
        console.log(`Yes, value=${sum1}`);
    } else {
        console.log(`No, maxdiff=${maxDiff}`);
    }
}

checkEqualPairs(["4","1","1","3","1","2","2","0","0"])