//Notes:
//generating a sudoku board is the same as solving a blank sudoku!
//only difference being - we iterate over a random sample to make the board look different

//backtracking on the empty board 
//fill a cell with a random no. => check if it breaks the board
//if it does dont place the no. in the grid

const grid = Array(9).fill().map(() => Array(9).fill(''));

const row_check = {} //repitition in the same row
const col_check = {} //repitition in the same col
const sub_check = {} //repitition in the same sub-grid

const r_check = {}; //for valid sudoku
const c_check = {}; //for valid sudoku
const s_check = {}; //for valid sudoku

const remove = {} //save removed cells



//initialise all the memory we have
const init_cache = () => {

    for (let i = 0; i < 9; i++){

        row_check[i] = new Set([]);
        col_check[i] = new Set([]);

        r_check[i] = new Set([]);
        c_check[i] = new Set([]);
    }

    for(let i = 0; i <= 2; i++){
        for(let j = 0; j <= 2; j++){
            sub_check[`${i},${j}`] = new Set([]);
            s_check[`${i},${j}`] = new Set([]);
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



//backtracking algorithm to solve an empty board randomly - to generate different problems
const dfs = (row, col) => {

    if(row >= 9){
        return true;
    }

    if(col >= 9){
        return dfs(row+1, 0);
    }

    const key = `${Math.floor(row / 3)},${Math.floor(col / 3)}`;
    const arr = Shuffle([1,2,3,4,5,6,7,8,9]);

    //iterate over random sample
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



//check validity of the generated board
function isValidSudoku(grid) {
    
    for(let i = 0; i < 9; i++){

        for(let j = 0; j < 9; j++){

            if(grid[i][j] === ''){
                continue;
            }

            const key = `${Math.floor(i / 3)},${Math.floor(j / 3)}`;
            if(r_check[i].has(grid[i][j]) || c_check[j].has(grid[i][j]) || s_check[key].has(grid[i][j])){
                return false;
            }

            r_check[i].add(grid[i][j]);
            c_check[j].add(grid[i][j]);
            s_check[key].add(grid[i][j]);
        }
    }
    return true;
}



//remove difficulty number of cells from the board for the user to solve
const removeCells = (difficulty) => {

    console.log(isValidSudoku(grid));

    const cells = [];

    for(let i = 0; i <= 8; i++){

        for(let j = 0; j <= 8; j++){

            cells.push([i,j]);
        }
    }

    Shuffle(cells);

    while(difficulty > 0){

        const r = cells.shift();
        const i = r[0];
        const j = r[1];
        const key = `${i},${j}`;

        remove[key]  = grid[i][j]
        row_check[i].delete(grid[i][j]);
        col_check[j].delete(grid[i][j]);

        const s_key = `${Math.floor(i / 3)},${Math.floor(j / 3)}`;
        sub_check[s_key].delete(grid[i][j]);

        grid[i][j] = '';
        difficulty -= 1;

    }

}



const generateBoard = (difficulty) => {

    init_cache();
    dfs(0,0);
    removeCells(difficulty);
    console.log(grid);
    console.log(remove);

    return {'grid': grid, 'remove': remove, 'row_check': row_check, 'col_check': col_check, 'sub_check': sub_check};

}

// const test = generateBoard(10); //as input number increases => more cells are removed => difficulty increases

export default generateBoard;