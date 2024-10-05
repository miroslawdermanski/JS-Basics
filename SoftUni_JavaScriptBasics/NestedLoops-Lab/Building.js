function generateRoomNumbers(input){

    for(let floors = Number(input[0]); floors >= 1; floors--){
        let buff = ""
        for(let rooms = 0; rooms < Number(input[1]); rooms++){

            if(floors == Number(input[0])){
                buff+=`L${floors}${rooms} `
            } else if(floors % 2 === 0){
                buff+=`O${floors}${rooms} `
            } else {
                buff+=`A${floors}${rooms} `
            }
        }
        console.log(buff)

    }

}
generateRoomNumbers(["6", "4"])