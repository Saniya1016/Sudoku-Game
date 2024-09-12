const solve = (gameState, full) => {
    
    const { grid, row_check, col_check, sub_check, remove } = gameState;
    const keys_array = Array.from(Object.keys(remove));
    let steps = (full)? keys_array.length : 1;

    while(steps > 0 && keys_array.length > 0){

        const key = keys_array.shift();
        const solution = remove[key];
        delete remove[key];

        const i = key[0];
        const j = key[2];

        grid[i][j] = solution;
        row_check[i].add(solution);
        col_check[j].add(solution);
        const sub_key = `${Math.floor(i / 3)},${Math.floor(j / 3)}`;
        sub_check[sub_key].add(solution);
        steps-=1;

    }
    
    const newGrid = grid.map(row => [...row]);

    return { 
        grid: newGrid, // Deep clone of grid
        row_check: { ...row_check },
        col_check: { ...col_check },
        sub_check: { ...sub_check },
        remove: { ...remove }
    };
}

export default solve;