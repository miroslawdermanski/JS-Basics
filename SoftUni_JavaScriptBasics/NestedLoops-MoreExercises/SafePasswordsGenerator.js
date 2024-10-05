function printSafePasswords(input){

    let a = Number(input[0])
    let b = Number(input[1])
    let maxNumPasswords = Number(input[2])
    let buffer = ""

    let charA = 35; let charB = 64; let charX = 1; let charY = 1;

    for(let currentPasswordTurn = 1; currentPasswordTurn <= maxNumPasswords; currentPasswordTurn++){

        let firstChar = String.fromCharCode(charA)
        let secondChar = String.fromCharCode(charB)

        let middleNumber = Number(charX.toString() + charY.toString())

        buffer += (firstChar + secondChar + middleNumber + secondChar + firstChar + "|");

        charA++;
        if(charA === 56){
            charA = 35
        }
        charB++;
        if(charB === 97){
            charB = 64
        }
        
        if(charY < b){
            charY++
        } else {
            if(charX === a){
                break;
            }
            charX++
            charY = 1
        }
    }
    console.log(buffer)

}

printSafePasswords(["20","50","10"])