let son =(+prompt(`Kvadratning tominini kiriting: `))

for (let i = 0; i < son; i++) {
    let kvadrat = "";
    for (let j = 0; j < son; j++) {
        if (i === 0 || i === son - 1 || j === 0 || j === son - 1 || i === j ) {
            kvadrat += "[ ]";
        } else {
            kvadrat += "   ";
        }
    }
    console.log(kvadrat);
}
