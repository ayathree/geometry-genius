function rhombusCalculation() {
    const diagonalOne = parallelogram('diagonal-one')
    const diagonalTwo = parallelogram('diagonal-two')
    const area = 0.5 * diagonalOne * diagonalTwo;
    console.log(area)

    setCalculation('calculation-4', area)
    
}