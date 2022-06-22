const array1 = [5, 2, 1, -10, 8];
const array2 = [5, 2, 1, -9, 3, 7]; 

function union(array1, array2) {
    const arr = [...array1, ...array2]
    const result = [];
    function removeDuplicates(arr) {
        const obj = {};
        let j = 0;
        for(let i = 1; i < arr.length; i++) {
            const item = arr[i];
            if(obj[item] !== 1){
                obj[item] = 1;
                result[j++] = item;
            }
        }
        return result;
    }  
    removeDuplicates(arr);
    console.log(result);
}
console.log(union(array1, array2));
document.writeln(union(array1, array2)); // [-10,8,5,2,1,-9,3,7]