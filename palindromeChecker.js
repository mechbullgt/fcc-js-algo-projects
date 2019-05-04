"use strict";

function palindrome(str) {
    // trim the string
    let tStr = str.trim();
    console.log('Original :', tStr);
    // remove all the space, punctations, symbols
    let regex = /[()//\s_*,.:-]/g;
    let cleanStr = tStr.replace(regex,"");
    console.log('cleanStr :', cleanStr);
    // lowercase the str
    let finalStr = cleanStr.toLowerCase();
    console.log('finalStr :', finalStr);
    // check for palindrome
    let palindromeStatus = checkForPalindrome(finalStr);
    return palindromeStatus;
  }
  
  function checkForPalindrome(str){
      let strArr = str.split("");
      console.log('strArr :', strArr);
      let y=0;
      let oppStrArr=[];
      for(let x = strArr.length-1;x>=0;x--){
        oppStrArr.push(strArr[x]);
      }
      let finalStr = oppStrArr.join('');
      console.log('plaindromStr :', finalStr);
      if(finalStr==str){
          console.log("Success Palindrome");
          return true;
      } else{
          console.log("Fail not plalindrome");
          return false;
      }
  }
  
//  palindrome("2A3*3a2");
palindrome("0_0 (: /-\ :) 0-0");