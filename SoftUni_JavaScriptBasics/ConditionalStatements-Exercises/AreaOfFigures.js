function createProject(input){
    let figure = input[0].toLowerCase();
    let area = 0;

    if(figure === "square"){
        let side = Number(input[1]);
        area = side*side;

    } else if (figure === "rectangle"){
        let side1 = Number(input[1]);
        let side2 = Number(input[2]);
        area = side1*side2;

    } else if (figure === "circle"){
        let radius = Number(input[1]);
        area = Math.PI*(radius*radius);
        
    } else if (figure === "triangle"){
        let side = Number(input[1]);
        let height = Number(input[2]);
        area = 0.5 * (side*height);
    }
    console.log(`${area.toFixed(3)}`);
}
createProject(["triangle",4.5, 20]);  