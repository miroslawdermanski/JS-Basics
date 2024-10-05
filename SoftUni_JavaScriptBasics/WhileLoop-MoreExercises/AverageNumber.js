function findAverageNum(input){

    let index = 0
    let totalNumbers = Number(input[index])
    index++

    let sumOfAllNums = 0

    for(let i = 1; i <= totalNumbers; i++){

        let currentNum = Number(input[index])
        sumOfAllNums += currentNum
        index++
    }
    console.log(`${(sumOfAllNums/totalNumbers).toFixed(2)}`)

}

findAverageNum(["4","95","23","76","23"])