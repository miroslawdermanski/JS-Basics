function calcFewestNumOfCoins(input){

    let centsChange = parseInt(Number(input[0]) * 100);
    let coins = 0; 

    while (centsChange > 0){
        
        if (centsChange >= 200){
            centsChange-=200;
            coins++;
        } else if(centsChange >= 100){
            centsChange-= 100;
            coins++;
        } else if(centsChange >= 50){
            centsChange -= 50;
            coins++;
        } else if (centsChange >= 20){
            centsChange-=20;
            coins++;
        } else if (centsChange >= 10){
            centsChange-=10;
            coins++;
        } else if (centsChange >= 5){
            centsChange-=5;
            coins++;
        } else if(centsChange >= 2){
            centsChange-=2;
            coins++;
        } else if (centsChange >= 1){
            centsChange-=1;
            coins++;
        }
    }
    console.log(coins);
    

}

calcFewestNumOfCoins(["0.56"]);