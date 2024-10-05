function generateNumOfCalcs(input){

    let combinations = 0;

    for(let num1 = 0; num1 <= Number(input[0]); num1++){
        for(let num2 = 0; num2 <= Number(input[0]); num2++){
            for(let num3 = 0; num3 <= Number(input[0]); num3++){

                if(num1+num2+num3 === Number(input[0])){
                    combinations++;
                }
            }
        }
    }
    console.log(combinations);

}
generateNumOfCalcs([20])