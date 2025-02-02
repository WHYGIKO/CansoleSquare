let son = parseInt(+prompt(`Kvadratning tominini kiriting: `))

while (true) {
            if (son === null || isNaN(son) || son===0 ) {
                son = +prompt(`Kvadratning tominini kiriting: `)
            }
            else {
                break;
            }
        }
for (let i = 0; i < son; i++) {
    let square = "";
    for (let j = 0; j < son; j++) {
        if (i === 0 || i === son - 1 || j === 0 || j === son - 1 || i === j) {
            square += "[ ]";
        } else {
            square += "   ";
        }
    }
    console.log(square);
}