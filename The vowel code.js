function encode(string) {
  let codeObj = {
    'a':  1 ,
    'e' : 2 ,
    'i' : 3 ,
    'o' : 4 ,
    'u' : 5
  };

  let newString = [];
  for(let i = 0; i < string.length; i++){
    if(codeObj.hasOwnProperty(string[i]))
      newString.push(codeObj[string[i]]);
    else
      newString.push(string[i]);
  }
  return newString.join("");
}


function decode(string) {
  let encodeObj = {
    1 : 'a' ,
    2 : 'e' ,
    3 : 'i' ,
    4 : 'o' ,
    5 : 'u'
  };
  let newString = [];
  for(let i = 0; i < string.length; i++){
    if(encodeObj.hasOwnProperty(string[i]))
      newString.push(encodeObj[string[i]]);
    else {
      newString.push(string[i]);
    }
  }
  return newString.join("");
}
