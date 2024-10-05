function printPyramidOfNums(input){

    let maxNum = Number(input[0])
    let startNum = 1
    let currentLine = 1
    let currentLineNums = 0
    let output = ''

    while(startNum <= maxNum) {

        if (currentLineNums < currentLine){
            output += `${startNum } `
            currentLineNums++
        } else {
            output += `\n${startNum} `
            currentLine++
            currentLineNums = 1
        }
        startNum++
    }
    console.log(output)

}
printPyramidOfNums(["21"])