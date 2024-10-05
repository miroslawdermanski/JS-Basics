function calcFreeSpaceLeft(input){

    let spaceWidth = Number(input[0]);
    let spaceLength = Number(input[1]);
    let spaceHeight = Number(input[2]);
    let cubicSpaceAvailable = spaceWidth*spaceLength*spaceHeight;
    let index = 3;

    while (cubicSpaceAvailable > 0){

        let boxes = input[index];
        if(boxes === "Done"){
            break;
        } else {
            boxes = Number(input[index]);
            cubicSpaceAvailable-=boxes;
        }
        index++;

    }
    if(cubicSpaceAvailable > 0){
        console.log(`${cubicSpaceAvailable} Cubic meters left.`)
    } else {
        console.log(`No more free space! You need ${Math.abs(cubicSpaceAvailable)} Cubic meters more.`);
    }
}

calcFreeSpaceLeft(["10","1","2","4","6","Done","20","122"]);