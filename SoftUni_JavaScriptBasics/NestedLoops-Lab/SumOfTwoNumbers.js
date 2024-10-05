function findCombinations(input){

    let magicNum =  Number(input[2]);
    let combination = 0;
    let foundMatch = false;

    for(let num1 = Number(input[0]); num1 <= Number(input[1]); num1++){
        for(let num2 = Number(input[0]); num2 <= Number(input[1]); num2++){
            combination++;
            if((num1 + num2) === magicNum){
                console.log(`Combination N:${combination} (${num1} + ${num2} = ${magicNum})`);
                foundMatch = true;
                break;
            }
        }
        if(foundMatch){
            break;
        }
    }
    if(foundMatch == false){
    console.log(`${combination} combinations - neither equals ${magicNum}`);
    }
}
findCombinations([23,24,20])