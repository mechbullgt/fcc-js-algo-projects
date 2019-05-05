function checkCashRegister(price, cash, cid) {
    var change;
    var currencyArr = ['ONE HUNDRED',
        'TWENTY',
        'TEN',
        'FIVE',
        'ONE',
        'QUARTER',
        'DIME',
        'NICKEL',
        'PENNY'];
    var amountArr = [ 100, 20, 10, 5, 1, 0.25, 0.1, 0.05, 0.01 ];
    console.log('amountArr :', amountArr);
    //cid operations
    let cidCurrency = [];
    let cidAmount = [];
    for (let y in cid) {
        cidCurrency.push(cid[y][0]);
        cidAmount.push(cid[y][1]);
    }
    console.log('cid :', cid);
    // let cidCurr = cidCurrency.reverse();
    // console.log('cidCurrency :', cidCurr);
    let cidAm = cidAmount.reverse();
    console.log('cidAmount :', cidAm);
    let cidCurrAm = [];
    for (let z in amountArr) {
        cidCurrAm.push([amountArr[z], (cidAmount[z] / (amountArr[z]))]);
    }
    console.log('cidCurrAm :', cidCurrAm);
    let changeAmount = cash - price;
    console.log('changeAmount :', changeAmount);
    let returnAmount = [];
    for (let x in cidCurrAm) {
        console.log('cidCurrAm[x][0] :', cidCurrAm[x][0]);
        let count = 0;
        while (cidCurrAm[x][0] <= changeAmount && cidCurrAm[x][1] != count) {
            console.log('changeAmount :', changeAmount);
            changeAmount -= cidCurrAm[x][0];
            count += 1;
            console.log('count :', count);
        }
        if (count > 0) {
            returnAmount.push([currencyArr[amountArr.indexOf(cidCurrAm[x][0])], cidCurrAm[x][0] * count]);
        }
    }

    console.log('returnAmount :', returnAmount);
    return returnAmount;
}

// Example cash-in-drawer array:
// [["PENNY", 1.01],
// ["NICKEL", 2.05],
// ["DIME", 3.1],
// ["QUARTER", 4.25],
// ["ONE", 90],
// ["FIVE", 55],
// ["TEN", 20],
// ["TWENTY", 60],
// ["ONE HUNDRED", 100]]

//   checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);

checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]])