function calculateProfit(input){

    let oneLevCoinsNum = Number(input[0])
    let twoLevCoinsNum = Number(input[1])
    let fiveLevNotesNum = Number(input[2])
    let amount = Number(input[3])

    for(let oneLevCoins = 0; oneLevCoins <= oneLevCoinsNum; oneLevCoins++){

        for(let twoLevCoins = 0; twoLevCoins <= twoLevCoinsNum; twoLevCoins++){

            for(let fiveLevNotes = 0; fiveLevNotes <= fiveLevNotesNum; fiveLevNotes++){

                let totalAmount = oneLevCoins + 2*twoLevCoins + 5*fiveLevNotes;

                if(totalAmount === amount){

                    console.log(`${oneLevCoins} * 1 lv. + ${twoLevCoins} * 2 lv. + ${fiveLevNotes} * 5 lv. = ${amount} lv.`)
                }
            }
        }
    }

}

calculateProfit(["5","3","1","7"])