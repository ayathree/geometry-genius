function calculationParallelogram() {
    const base = parallelogram('base-pa')
    console.log(base)
    const height =parallelogram('height-pa')
    console.log(height)

    const area = base*height;
    console.log(area);

    setCalculation('calculation-3', area);

    const inputPara = document.getElementById('area-para').innerText ;
    const conPara = document.getElementById('area-calc');
    const pPara = document.createElement('p');
    pPara.innerText = inputPara;
    conPara.appendChild(pPara);


    
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