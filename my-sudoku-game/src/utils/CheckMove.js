
const isValidMove = (gameState, val, row, col) => {

    const grid = gameState['grid'];
    const r_check = gameState['row_check'];
    const c_check = gameState['col_check'];
    const s_check = gameState['sub_check'];

    const key = `${Math.floor(row / 3)},${Math.floor(col / 3)}`;

    if(r_check[row].has(val) || c_check[col].has(val) || s_check[key].has(val)){
        return false;
    }

    r_check[row].add(val);
    c_check[col].add(val);
    s_check[key].add(val);

    grid[row][col] = val;
    
    return true;

}

const removePrevious = (gameState, valid, prevVal, row, col) => {

    if(prevVal !== '' && valid){

        const grid = gameState['grid'];
        const r_check = gameState['row_check'];
        const c_check = gameState['col_check'];
        const s_check = gameState['sub_check'];

        r_check[row].delete(prevVal);
        c_check[col].delete(prevVal);

        const key = `${Math.floor(row / 3)},${Math.floor(col / 3)}`
        s_check[key].delete(prevVal);

        grid[row][col] = '';
    }
};

export default {isValidMove, removePrevious};