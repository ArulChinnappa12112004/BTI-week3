// 3D Array: 2 layers, each containing 2 rows and 3 columns
let arr = [[[1, 2, 3],[4, 5, 6]],[[7, 8, 9],[10, 11, 12]]];

let sum = 0;
for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
        for (let k = 0; k < arr[i][j].length; k++) {
            sum += arr[i][j][k];
        }
    }
}

console.log("Sum of all elements:", sum);