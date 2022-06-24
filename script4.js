const arr = [2, 'str', 4];
function str(){
    return arr.join(' ,');
}

str()

//4.2

const coll = ['milk', 'butter',2,5];


    const parts = [];
    for (let i = 0; i < coll.length; i++) {
      parts.push(coll[i]);
    }
    console.log(coll)
    console.log(parts)