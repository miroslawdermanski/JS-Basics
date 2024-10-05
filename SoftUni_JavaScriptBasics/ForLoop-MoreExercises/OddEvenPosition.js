function calcSumMinMax(input){

    let index = 0
    let totalNumbers = Number(input[index++])
    let oddPosSum = 0; let evevPosSum = 0;
    let minOddNum = 1000000000.0; let maxOddNum = -1000000000.0;
    let minEvenNum = 1000000000.0; let maxEvenNum = -1000000000.0;

    for(let currentNumIndex = 1; currentNumIndex <= totalNumbers; currentNumIndex++){

        let currentNumber = Number(input[index++])

        if(currentNumIndex % 2 === 0){

            evevPosSum += currentNumber
            if(currentNumber < minEvenNum){
                minEvenNum = currentNumber
            }
            if(currentNumber > maxEvenNum){
                maxEvenNum = currentNumber
            }

        } else {

            oddPosSum += currentNumber
            if(currentNumber < minOddNum){
                minOddNum = currentNumber
            }
            if(currentNumber > maxOddNum){
                maxOddNum = currentNumber
            }
        }
    }

    console.log(`OddSum=${oddPosSum.toFixed(2)},`);
    if(totalNumbers < 1){
        minOddNum = 'No'; maxOddNum = 'No'
        console.log(`OddMin=${minOddNum},`);
        console.log(`OddMax=${maxOddNum},`);
    } else {
        console.log(`OddMin=${minOddNum.toFixed(2)},`);
        console.log(`OddMax=${maxOddNum.toFixed(2)},`);
    }
    
    console.log(`EvenSum=${evevPosSum.toFixed(2)},`);
    if(totalNumbers < 2){
        minEvenNum = 'No'; maxEvenNum = 'No'
        console.log(`EvenMin=${minEvenNum},`);
        console.log(`EvenMax=${maxEvenNum}`);
    } else {
        console.log(`EvenMin=${minEvenNum.toFixed(2)},`);
        console.log(`EvenMax=${maxEvenNum.toFixed(2)}`);
    }
    
}

calcSumMinMax(["6","2","3","5","4","2","1"])