function printSafePasswords(input){

    let a = Number(input[0])
    let b = Number(input[1])
    let maxNumPasswords = Number(input[2])
    let buffer = ""

    let charA = 35; let charB = 64;

    let reachedLimit = false

    for(let x = 1; x <= a; x++){

        for(let y = 1; y <= b; y++){

            buffer += (String.fromCharCode(charA) + String.fromCharCode(charB) 
            + x + y + String.fromCharCode(charB) + String.fromCharCode(charA) + "|")

            charA++
            if(charA === 56){
                charA = 35
            }
            charB++
            if(charB === 97){
                charB = 64
            }
            maxNumPasswords--
            if(maxNumPasswords === 0){
                reachedLimit = true
                break;
            }
        }
        if(reachedLimit){
            break;
        }

    }
    console.log(buffer)
}

printSafePasswords(["2","3","7"])