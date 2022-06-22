const arr = ["php", "php", "css", "css", "script", "script", "html", "html", "java"];
const result = [];
function removeDuplicates(arr) {
    const obj = {};
    let j = 0;
    for(let i = 1; i < arr.length; i++) {
        const item = arr[i];
        if(obj[item] !== 1){
            obj[item] = 1;
            result[j++] = item
        }
    }
    return result;
}
removeDuplicates(arr);
document.writeln(result);

