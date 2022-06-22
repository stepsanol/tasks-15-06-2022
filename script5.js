let num = prompt();

function colonOdd (num) {
    const stri = num.toString();
    const result = [stri[0]];
    for(let i=1; i<stri.length; i++) {
        if((stri[i-1]%2 !== 0)&&(stri[i]%2 !== 0)) {
          result.push(':', stri[i]);
         }
        else {
          result.push(stri[i]);
        }
    }
    return result.join('');  
  }
  
  document.writeln(colonOdd(num));