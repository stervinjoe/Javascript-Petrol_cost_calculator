




const number = parseInt(prompt('Enter an integer: '));


const range = parseInt(prompt('Enter a range: '));


for(let i = 1; i <= range; i++) {
    const result = i * number;
    console.log(`${number} * ${i} = ${result}`);
}






/*function multiplicationTable()
 {
    let number = parseInt(document.getElementById("integerInput").value);
   
    let range = parseInt(document.getElementById("rangeInput").value);
   
    let output = document.getElementById("output");

    output.innerHTML = "";

    for 
        (let i = 1; i <= range; i++) {
        let result = number * i;
        output.innerHTML += `${number} * ${i} = ${result}<br>`;
    }
}
multiplicationtable();*/