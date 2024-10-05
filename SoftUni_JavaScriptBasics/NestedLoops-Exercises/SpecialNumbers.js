function getSpecialNumbers(input){

    let inputNumber = Number(input[0])
    let output = ''

    for(let startRange = 1111; startRange <= 9999; startRange++){

        let textNumber = String(startRange)
        let isSpecial = true
        for(let index = 0; index < textNumber.length; index++) {

            let currentDigit = Number(textNumber[index])
            if(inputNumber % currentDigit !== 0){

                isSpecial = false
                break
            }
        }
        if(!isSpecial){
            continue
        } else {
            output += `${startRange} `
        }
    }
    console.log(output)
}

getSpecialNumbers(["16"])