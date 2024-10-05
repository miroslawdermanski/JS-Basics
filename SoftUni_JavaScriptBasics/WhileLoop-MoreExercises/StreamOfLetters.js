function readHiddenMessage(input){

    let output = ""

    let index = 0
    let currentSymbol = input[index]

    let cCount = 0; let oCount = 0; let nCount = 0
    let message = ""

    while(currentSymbol !== "End"){

        let symbolChar = currentSymbol.charCodeAt(0)
        if( symbolChar === 110 || symbolChar === 111 || symbolChar === 99){

            switch(symbolChar){
                case 110: 
                nCount++; 
                if(nCount > 1){
                    output += currentSymbol
                }
                break;
                case 111:  
                oCount++;
                if(oCount > 1){
                    output += currentSymbol
                }
                break;
                case 99: 
                cCount++;
                if(cCount > 1){
                    output += currentSymbol
                }
                break;

            }

        } else if ((symbolChar >= 65 && symbolChar <= 90) || (symbolChar >= 97 && symbolChar <= 122)){
            output += currentSymbol
        }

        if(nCount >= 1 && oCount >= 1 && cCount >= 1){

            output += " "
            message += output
            output = ""
            nCount = 0; oCount = 0; cCount = 0
        }

        index++
        currentSymbol = input[index]
    }
    console.log(message);
}

readHiddenMessage(["H",
    "n",
    "e",
    "l",
    "l", 
    "o",
    "o",
    "c",
    "t",
    "c",
    "h",
    "o",
    "e",
    "r",
    "e",
    "n",
    "e",
    "End"
    ])