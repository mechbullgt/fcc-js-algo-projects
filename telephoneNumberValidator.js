function telephoneCheck(str) {
    // trim input
    let trimStr = str.trim();
    // let strArr = trimStr.replace(/\s+/g,'');
    // console.log('strArr :', strArr);
    let strAr = trimStr.split('');
    let checkForNum = trimStr.replace(/[()-\s+]/g, '');
    console.log('checkForNum :', checkForNum);
    let checkForNum2 = checkForNum.match(/[\d]/);
    console.log('checkForNum2 :', checkForNum2);
    if (checkForNum2 != null) {
        if (strAr[0] == 1) {
            let numberExCode = strAr.slice(1, strAr.length);
            return checkTheBaseNumber(numberExCode);
        } else {
            console.log("Number doesn't start with code");
            return checkTheBaseNumber(strAr);
        }
    } else {
        console.log("not all numbers");
        return false;
    }

    // escape -()\s
    // verify country code +1
    // length 10 excluding country code
    // brackets only for first 3 digits other than country code
}

function checkTheBaseNumber(numberExCode) {
    console.log('numberExCode :', numberExCode);
    let numberLenTrimmed = (numberExCode.join('')).replace(/[()-\s+]/g, '');
    console.log('numberLenTrimmed :', numberLenTrimmed);
    console.log('numberLen :', numberLenTrimmed.length);
    if (parseInt(numberLenTrimmed.length) != 10) {
        console.log("Length not 10");
        return false
    }
    let numWoSpace = numberExCode.join('').replace(/\s+/g, '');
    console.log('numWoSpace :', numWoSpace);
    let checkBracksOpen = numWoSpace.indexOf('(');
    let checkBracksClose = numWoSpace.indexOf(')');
    if (parseInt(checkBracksOpen)>=0 || parseInt(checkBracksClose)>0) {
        console.log("Found brackets");
        if (checkBracksOpen == 0) {
            console.log('checkBracksOpen :', checkBracksOpen);
            if (checkBracksClose == checkBracksOpen + 4) {
                return true;
            } else {
                return false;
            }
        } else {
            return false;
        }
    }
    else {
        console.log("No brackets not an issue");
        return true;
    }
}

// let test1 = telephoneCheck("(6054756961)");
// console.log('test1 :', test1);

let test2 =telephoneCheck("(555-555-5555");
console.log('test2 :', test2);