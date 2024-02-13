function rhombusCalculation() {
    const diagonalOne = parallelogram('diagonal-one')
    const diagonalTwo = parallelogram('diagonal-two')
    const area = 0.5 * diagonalOne * diagonalTwo;
    console.log(area)

    setCalculation('calculation-4', area)

    const inputRh = document.getElementById('area-rh').innerText ;
    const conRh = document.getElementById('area-calc');
    const pRh = document.createElement('p');
    pRh.innerText = inputRh;
    conRh.appendChild(pRh);
    
}