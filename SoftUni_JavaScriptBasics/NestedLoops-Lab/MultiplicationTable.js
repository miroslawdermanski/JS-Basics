function generateMultTable(){

    for(let i = 1; i <= 10; i++){
        for(let k = 1; k <= 10; k++){
            console.log(`${i} * ${k} = ${k * i}`);
        }
    }
}
generateMultTable()