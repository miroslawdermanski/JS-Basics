function listSpecialNumsBetweenInterval(input){

    let startRange = Number(input[0])
    let endRange = Number(input[1])
    let output = ''

    for(let currentNum = startRange;  currentNum <= endRange; currentNum++){

        let currentNumTxt = String(currentNum)

        let evenPositionSum = 0
        let oddPositionSum = 0

        for(let index = 0;  index < currentNumTxt.length; index++){

            let currentDigit = Number(currentNumTxt[index])

            if(index % 2 === 0){
                evenPositionSum += currentDigit
            }else{
                oddPositionSum += currentDigit
            }
        }
        if(evenPositionSum === oddPositionSum){
            output += `${currentNum} `
        }
    }
    console.log(output)

}
listSpecialNumsBetweenInterval(["299900","300000"])