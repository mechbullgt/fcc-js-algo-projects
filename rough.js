function rot13(str2){
    let str = str2.toUpperCase();
    let strArr = str.split('');
    let opArr=[];
    for(let x in strArr){
        console.log('strArr[x] :', strArr[x]);
        let a = str.charCodeAt(x);
        let b = parseInt(a);
        console.log('b :',b);
        if(b>=65 || b<=90){
            if((b-13)<65){
                opArr.push(String.fromCharCode(b+13));
            } else if((b+13)>90) {
                opArr.push(String.fromCharCode(b-13));
            }
        } else {
            opArr.push(String.fromCharCode(b));
        }
        console.log('opArr :', opArr);
    }
    let opStr = opArr.join('');
    return opStr;
}

console.log('rot13(A) :', rot13("SERR CVMMN"));