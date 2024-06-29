function calculateSquareRoot() {
    const number = document.getElementById('numberInput').value;
    const result = Math.sqrt(number);
    document.getElementById('result').textContent = `平方根は: ${result}`;
}
