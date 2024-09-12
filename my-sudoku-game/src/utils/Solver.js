const solveOneStep = (gameState) => {

    const grid = gameState['grid'];
    const r_check = gameState['row_check'];
    const c_check = gameState['col_check'];
    const s_check = gameState['sub_check'];
    const remove =  gameState['remove'];

    const keys_array = Array.from(Object.keys(remove));

    const key = keys_array.shift();
    const solution = remove[key];

    delete remove[key]

    const i = key[0];
    const j = key[2];

    grid[i][j] = solution;
    r_check[i].add(solution);
    c_check[j].add(solution);

    const s_key = `${Math.floor(i / 3)},${Math.floor(j / 3)}`;
    s_check[s_key].add(solution);
}