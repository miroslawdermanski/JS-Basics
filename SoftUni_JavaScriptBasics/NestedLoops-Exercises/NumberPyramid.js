function createPyramidOfNumbers(input){

    let current = 1
    let isBigger = false
    let printCurrentLine = ""

    for (let rows = 1; rows <= Number(input[0]); rows++) {

        for (let columns = 1; columns <= rows; columns++){

            if(current > Number(input[0])){
                isBigger = true
                break
            }
            printCurrentLine += current + " "
            current++
        }
        console.log(printCurrentLine)
        printCurrentLine = ""
        if(isBigger) {
            break
        }
    }
}
createPyramidOfNumbers(["20"])