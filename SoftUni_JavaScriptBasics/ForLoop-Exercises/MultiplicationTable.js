function generateMultTable(input){
    let number = input[0];

    for (let i = 1; i <=10; i++){
        console.log(`${i} * ${number} = ${number*i}`);

    }

}
generateMultTable([5]);