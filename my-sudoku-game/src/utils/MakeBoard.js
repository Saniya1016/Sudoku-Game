
//generating a sudoku board is the same as solving a blank sudoku!
//onl difference being - we iterate oover a random sample to make the board look different

//dfs on the empty board 
//fill a cell with a random no. => check if it beaaks the board
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



const dfs = (row, col) => {

    if(row >= 9){
        return
    }

    if(col >= 9){
        return dfs(row+1, 0);
    }

    //iterate over random sample => randomize later
    for (let i = 1; i < 10; i++){
        


    }


}