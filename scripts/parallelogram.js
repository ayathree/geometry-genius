function calculationParallelogram() {
    const base = parallelogram('base-pa')
    console.log(base)
    const height =parallelogram('height-pa')
    console.log(height)

    const area = base*height;
    console.log(area);

    setCalculation('calculation-3', area);


    
}

function parallelogram(inputFieldId) {
    const inputField = document.getElementById(inputFieldId);
    const inputValue = inputField.value;
    const input = parseFloat(inputValue);
    return input;
    
}

function setCalculation(itemId, area) {
    const item = document.getElementById(itemId);
    item.innerText = area;
    
}