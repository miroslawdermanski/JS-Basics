function calculateAccommodationCost(input){
    let stayInNights = Number(input[0]) - 1;
    let typeOfFacility = input[1];
    let feedback = input[2];

    let totalCostForStay = 0;

    switch (typeOfFacility) {
        case "room for one person": totalCostForStay = stayInNights * 18;
          break;

        case "apartment": totalCostForStay = stayInNights * 25;

            if (stayInNights+1 < 10){
                totalCostForStay *= 0.70;
            } else if (stayInNights+1 <= 15){
                totalCostForStay *=  0.65;
            } else{
                totalCostForStay *= 0.50;
            }
          break;

        case "president apartment": totalCostForStay = stayInNights * 35;

            if (stayInNights+1 < 10){
                totalCostForStay *= 0.90;
            } else if (stayInNights+1 <= 15){
                totalCostForStay *=  0.85;
            } else{
                totalCostForStay *= 0.80;
            }
          break;
    }

    if (feedback === "positive"){
        totalCostForStay *= 1.25;
    } else if (feedback === "negative"){
        totalCostForStay *= 0.90;
    }

    console.log(totalCostForStay.toFixed(2));
}

calculateAccommodationCost(["30","president apartment","negative"]);