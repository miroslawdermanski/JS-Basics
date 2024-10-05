function isMoneyEnough(input){

    let ivanAge = 18

    let legacyMoney = Number(input[0])
    let remainingYear = Number(input[1])

    for(let startYear = 1800; startYear <= remainingYear; startYear++){

        if(startYear % 2 === 0){
            legacyMoney -= 12000
        } else {
            legacyMoney -= (12000 + 50 * ivanAge)
        }
        ivanAge++
    }

    if(legacyMoney < 0){
        console.log(`He will need ${Math.abs(legacyMoney).toFixed(2)} dollars to survive.`)
    } else {
        console.log(`Yes! He will live a carefree life and will have ${legacyMoney.toFixed(2)} dollars left.`);
    }
}

isMoneyEnough(["100000.15","1808"])