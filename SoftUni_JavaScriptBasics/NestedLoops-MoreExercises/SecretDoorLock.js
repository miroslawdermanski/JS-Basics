function findCombinations(input){

    let hundredsLimit = Number(input[0])
    let tensLimit = Number(input[1])
    let onesLimit = Number(input[2])

    for(let currentHundred = 1; currentHundred <= hundredsLimit; currentHundred++){

        for(let currentTen = 2; currentTen <= tensLimit; currentTen++){

            for(let currentOne = 1; currentOne <= onesLimit; currentOne++){

                if(currentHundred % 2 === 0 && currentOne % 2 === 0){
                    
                    let isPrime = true
                    for(let i = 2; i < currentTen; i++){           
                        if(currentTen % i === 0){
                            isPrime = false
                            break
                        }
                    }
                    if(!isPrime){
                        continue
                    } else {
                        console.log(`${currentHundred} ${currentTen} ${currentOne}`);
                    }
                }
                
            }
        }
    }

}

findCombinations(["8","2","8"])