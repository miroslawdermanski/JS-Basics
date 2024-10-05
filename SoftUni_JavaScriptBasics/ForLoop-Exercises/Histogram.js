function calcPercentOfNums(input){

    let n = input[0];
    let p1Nums=0; let p2Nums=0; let p3Nums=0; let p4Nums=0; let p5Nums=0;

    for (let i = 1; i <= n; i++){

        let number =  input[i];

        if (number < 200){
            p1Nums++;
        } else if (number < 400){
            p2Nums++;
        } else if (number < 600){
            p3Nums++;
        } else if (number < 800){
            p4Nums++;
        } else {
            p5Nums++;
        }
    }
    console.log(`${((p1Nums / n)*100).toFixed(2)}%\n${((p2Nums / n)*100).toFixed(2)}%\n${((p3Nums / n)*100).toFixed(2)}%\n${((p4Nums / n)*100).toFixed(2)}%\n${((p5Nums / n)*100).toFixed(2)}%\n`);

}
calcPercentOfNums([7,800,801,250,199,399,599,799]);