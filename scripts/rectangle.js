function calculateRectangle() {
    const widthCalculation = document.getElementById('width');
    const widthValue = widthCalculation.value;
    const width = parseFloat(widthValue);
    console.log(width);

    const lengthCalculation = document.getElementById('length');
    const lengthValue = lengthCalculation.value;
    const length = parseFloat(lengthValue);
    console.log(length);

    const calculation = width*length;
    console.log(calculation)

    const result = document.getElementById('calculation-2')
    result.innerText = calculation;
    
}