
//generating a sudoku board is the same as solving a blank sudoku!
//onl difference being - we iterate oover a random sample to make the board look different

//dfs on the empty board 
//fill a cell with a random no. => check if it breaks the board
//if it does dont place the no. in the grid and remove it from the shuffle sample space (o we ont continuosly iterate on that no.)

const grid = Array(9).fill().map(() => Array(9).fill(''));

const row_check = {} //repitition in the same row
const col_check = {} //repitition in the same col
const sub_check = {} //repitition in the same sub-grid


const init_cache = () => {

    for (let i = 0; i < 9; i++){
        row_check[i] = new Set([]);
        col_check[i] = new Set([]);
    }

    for(let i = 0; i <= 2; i++){
        for(let j = 0; j <= 2; j++){
            sub_check[`${i},${j}`] = new Set([]);
        }
    }

}

const Shuffle = (array) => {

    // Start from the end of the array and swap each element with a random element from the unshuffled portion
    for (let i = array.length - 1; i > 0; i--) {

        // Generate a random index between 0 and i
        const j = Math.floor(Math.random() * (i + 1));
        
        // Swap the elements at index i and index j
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}



const dfs = (row, col) => {

    if(row >= 9){
        return true;
    }

    if(col >= 9){
        return dfs(row+1, 0);
    }

    const key = `${Math.floor(row / 3)},${Math.floor(col / 3)}`;
    const arr = Shuffle([1,2,3,4,5,6,7,8,9]);

    //iterate over random sample => randomize later
    for (let i of arr){

        if(row_check[row].has(i) || col_check[col].has(i) || sub_check[key].has(i)){
            continue;
        }

        grid[row][col] = i;
        row_check[row].add(i);
        col_check[col].add(i);
        sub_check[key].add(i);

        if(dfs(row, col+1)){
            return true;
        }

        grid[row][col] = '';
        row_check[row].delete(i);
        col_check[col].delete(i);
        sub_check[key].delete(i);

    }

    return false;

}

init_cache();
dfs(0,0);
console.log(grid);

// function isValidSudoku(grid) {
//     const size = 9;
    
//     // Check rows
//     for (let i = 0; i < size; i++) {
//         const row = new Set(grid[i]);
//         if (row.size !== size) return false;
//     }
    
//     // Check columns
//     for (let j = 0; j < size; j++) {
//         const column = new Set();
//         for (let i = 0; i < size; i++) {
//             column.add(grid[i][j]);
//         }
//         if (column.size !== size) return false;
//     }
    
//     // Check 3x3 subgrids
//     for (let blockRow = 0; blockRow < 3; blockRow++) {
//         for (let blockCol = 0; blockCol < 3; blockCol++) {
//             const subgrid = new Set();
//             for (let i = 0; i < 3; i++) {
//                 for (let j = 0; j < 3; j++) {
//                     const value = grid[blockRow * 3 + i][blockCol * 3 + j];
//                     subgrid.add(value);
//                 }
//             }
//             if (subgrid.size !== size) return false;
//         }
//     }
    
//     return true;
// }

// console.log(isValidSudoku(grid)); // Check if the grid is valid
