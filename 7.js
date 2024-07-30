let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 'а', null, 'e'];
let countE = 0;
let countO = 0;
let countH = 0;

for (let i = 0; i < arr.length; i++){
    if ((arr[i] === 0) || (typeof(arr[i]) != 'number')) {
        countH++;
    } else {
        if (arr[i] % 2 === 0) {
            countE++;
        } else {
            countO++;
        }
    }
}

console.log("четный " + countE);
console.log("нечетный " + countO);
console.log("другие " + countH);