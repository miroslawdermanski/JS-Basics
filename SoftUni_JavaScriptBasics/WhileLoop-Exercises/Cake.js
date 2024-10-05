function workOutCountOfCakePieces(input){

    let cakeLength = Number(input[0]);
    let cakeWidth = Number(input[1]);
    let cakeParameter = cakeLength*cakeWidth;
    let index = 2;

    while(cakeParameter > 0){

        var takeQuantity = input[index];
        if (takeQuantity === "STOP"){
            break;
        } else {
            takeQuantity = Number(input[index]);
            cakeParameter -= takeQuantity;
        }

        index++;
    }
    if (cakeParameter > 0){
        console.log(`${cakeParameter} pieces are left.`)
    } else {
        let diff = Math.abs(cakeParameter);
        console.log(`No more cake left! You need ${diff} pieces more.`)
    }

}
workOutCountOfCakePieces(["10","2","2","4","6","STOP","21"]);