var input = document.getElementById("binaryNumber");

input.addEventListener("keydown", function(event) {
    // Number 13 is the "Enter" key on the keyboard
    if (event.keyCode === 13) {
        document.getElementById("submit").click();
    }
});

function reciveBinary() {
    let textUser = document.getElementById('binaryNumber').value
    let bin = textUser.split("");

    const found = bin.find(element => element >= 2);

    if (found == undefined) {
        const total = calcBinary(bin);

        document.getElementById('result').innerText = `This number in decimal is ${total}`
    } else {
        alert("USE ONLY BINARY NUMBERS");
    }
}


function calcBinary(bin) {
    let size = bin.length - 1;
    let total = 0;

    bin.forEach(function(number, index) {
        if (bin[index] == 1) {
            total += Math.pow(2, size);
        }
        size--;
    })

    return total;
}