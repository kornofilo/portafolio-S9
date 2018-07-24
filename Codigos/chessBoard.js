let board = "";
let evenRow = "# # # # ";
let oddRow = " # # # #";

for ( i = 0; i < 8; i++ ) {

    if ( i%2 == 0 ) board += oddRow + '\n';
    else board += evenRow + '\n';
}

console.log(board);