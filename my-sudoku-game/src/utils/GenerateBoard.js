
import Shuffle from "./Shuffle.js";


//Notes:
//generating a sudoku board is the same as solving a blank sudoku!
//only difference being - we iterate over a random sample to make the board look different

//backtracking on the empty board 
//fill a cell with a random no. => check if it breaks the board
//if it does dont place the no. in the grid



//initialise all the memory we have
const init_cache = () => {

    const grid = Array(9).fill().map(() => Array(9).fill(-1));

    const row_check = {} //repitition in the same row
    const col_check = {} //repitition in the same col
    const sub_check = {} //repitition in the same sub-grid
    const remove = {} //save removed cells

    for (let i = 0; i < 9; i++){

        row_check[i] = new Set([]);
        col_check[i] = new Set([]);
    }

    for(let i = 0; i <= 2; i++){
        for(let j = 0; j <= 2; j++){
            sub_check[`${i},${j}`] = new Set([]);
        }
    }

    return {'grid': grid, 'remove': remove, 'row_check': row_check, 'col_check': col_check, 'sub_check': sub_check};

}



const dfs = (gameState, row, col) => {

    if(row >= 9){
        return true;
    }

    if(col >= 9){
        return dfs(gameState, row+1, 0);
    }

    const key = `${Math.floor(row / 3)},${Math.floor(col / 3)}`;
    const arr = Shuffle([1,2,3,4,5,6,7,8,9]);

    const { grid, row_check, col_check, sub_check } = gameState;

    //iterate over random sample
    for (let i of arr){

        if(row_check[row].has(i) || col_check[col].has(i) || sub_check[key].has(i)){
            continue;
        }

        grid[row][col] = i;
        row_check[row].add(i);
        col_check[col].add(i);
        sub_check[key].add(i);

        if(dfs(gameState, row, col+1)){
            return true;
        }

        grid[row][col] = -1;
        row_check[row].delete(i);
        col_check[col].delete(i);
        sub_check[key].delete(i);

    }

    return false;
}


//remove difficulty number of cells from the board for the user to solve
const removeCells = (gameState, difficulty) => {

    const cells = [];


    for(let i = 0; i <= 8; i++){

        for(let j = 0; j <= 8; j++){

            cells.push([i,j]);
        }
    }

    Shuffle(cells);

    const { grid, row_check, col_check, sub_check, remove } = gameState;


    while(difficulty > 0){

        const r = cells.shift();
        const i = r[0];
        const j = r[1];
        const key = `${i},${j}`;

        remove[key]  = grid[i][j];
        row_check[i].delete(grid[i][j]);
        col_check[j].delete(grid[i][j]);

        const s_key = `${Math.floor(i / 3)},${Math.floor(j / 3)}`;
        sub_check[s_key].delete(grid[i][j]);

        grid[i][j] = -1;
        difficulty -= 1;

    }

}



const generateBoard = (difficulty) => {

    const gameState = init_cache();
    if(dfs(gameState, 0, 0)){
        removeCells(gameState, difficulty);
    } else{
        console.error('Error creating board');
    }
    
    return gameState;

}

export default generateBoard;





// const g = generateBoard();
// console.log(g.grid);
// console.log(g.remove);
// const g1 = solve(g, true);
// console.log(g1.grid);
// console.log(g1.remove);