
const isValidMove = (gameState, val, row, col) => {

    const { grid, row_check, col_check, sub_check } = gameState;

    const key = `${Math.floor(row / 3)},${Math.floor(col / 3)}`;

    if(row_check[row].has(val) || col_check[col].has(val) || sub_check[key].has(val)){
        return false;
    }

    row_check[row].add(val);
    col_check[col].add(val);
    sub_check[key].add(val);

    grid[row][col] = val;
    
    return true;

}

const removePrevious = (gameState, valid, prevVal, row, col) => {

    if(prevVal !== -1 && valid){

        const { grid, row_check, col_check, sub_check } = gameState;

        row_check[row].delete(prevVal);
        col_check[col].delete(prevVal);

        const key = `${Math.floor(row / 3)},${Math.floor(col / 3)}`
        sub_check[key].delete(prevVal);

        grid[row][col] = -1;
    }
};

export default {isValidMove, removePrevious};