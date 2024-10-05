function findPassword(input){

    let controlValue = Number(input[0])
    let password = ""
    let possiblePasswords = ""
    let currentTurn = 0

    for(let a = 1; a <= 9; a++){

        for(let b = 1; b <= 9; b++){

            if(a >= b){
                continue
            }

            for(let c = 1; c <= 9; c++){

                for(let d = 1; d <= 9; d++){

                    if(c <= d){
                        continue
                    }
                    if((a*b+c*d) === controlValue){
                        possiblePasswords +=  `${a}${b}${c}${d} `
                        currentTurn++
                        if(currentTurn === 4){
                            password += `${a}${b}${c}${d}`
                        }
                    }
                }
            }
        }
    }
    if(possiblePasswords !== ""){
        console.log(possiblePasswords)
    }
    if(password !== ""){
        console.log(`Password: ${password}`)
    } else {
        console.log(`No!`)
    }

}

findPassword(["55"])