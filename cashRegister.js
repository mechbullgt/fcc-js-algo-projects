function checkCashRegister(price, cash, cid) {
    var change = {
        status: '',
        change: ''
    };
    console.log('cid :', cid);
    let cidDenominationAmount = [];
    let usCurrency = ['PENNY', 'NICKEL', 'DIME', 'QUARTER', 'ONE', 'FIVE', 'TEN', 'TWENTY', 'ONE HUNDRED'];
    let usDeno = [0.01, 0.05, 0.1, 0.25, 1, 5, 10, 20, 100];
    // let usDenoCurrency = usDeno;
    // usDenoCurrency.reverse();
    let cidAm = [];
    for (let x in cid) {
        let cidCurr = cid[x][0];
        // console.log('cidCurr :', cidCurr);
        let cidValue = usDeno[usCurrency.indexOf(cidCurr)];
        // console.log('cidValue :', cidValue);
        let cidAmount = cid[x][1];
        // console.log('cidAmount :', cidAmount);
        cidAm.push(cidAmount);
        let cidCount = parseInt((cidAmount / cidValue).toFixed());
        cidDenominationAmount.push([
                cidValue,cidCount
        ]);
    }
        console.log('cidDenominationAmount :', cidDenominationAmount);
        let retAmount = cash - price;
        console.log('retAmount :', retAmount);
        let cidAmountTotal = cidAm.reduce((a, b) => a + b);
        console.log('cidAmountTotal :', cidAmountTotal);
        if (retAmount > cidAmountTotal) {
            change.status = 'INSUFFICIENT_FUNDS';
            change.change = [];
        } else if(retAmount==cidAmountTotal){
            change.status="CLOSED";
            change.change=cid;
        }else {
            let changeChange = [];
            let deno;
            for (let x = usDeno.length-1;x>=0; x--) {
                let count = 0;
                let currentCurrAmount=usDeno[x];
                console.log('usDenoCurrency[x] :', currentCurrAmount);
                let cidCount = cidDenominationAmount[x][1];
                console.log('cidCount :', cidCount);
                while (usDeno[x] <= retAmount && count<cidCount) {
                    count += 1;
                    console.log('retAmount :', retAmount);
                    change.status = "OPEN";
                    deno = usDeno[x];
                    console.log('deno :', deno);
                    console.log('count :', count);
                    retAmount = (retAmount-deno).toFixed(2);
                    console.log('retAmount :', retAmount);
                }
                if (count > 0) {
                    console.log('count :', deno,count);
                    changeChange.push([usCurrency[x], deno * count]);
                }
            }
            if(retAmount>0){
                change.status = 'INSUFFICIENT_FUNDS';
                change.change = [];
            } else{
                change.change = changeChange;    
            }
            console.log('changeChange :', changeChange);
        }
        return change;
    }

    //let test =  checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);
    // console.log('test :', test);

//     let test2 = checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);
//  console.log('test2 :', test2);

// let test3 = checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]);
// console.log('test3 :', test3);

let test4=checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]);
console.log('test4 :', test4);