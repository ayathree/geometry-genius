function calculateTriangle() {
    // for base
    const calculateBase = document.getElementById('base')
    const baseValue = calculateBase.value;
    const base = parseFloat(baseValue);
    console.log( base);
    // for height
    const calculateHeight = document.getElementById('height')
    const heightValue = calculateHeight.value;
    const height = parseFloat(heightValue);
    console.log(height);
    // calculation
    const resultTriangle = 0.5*base*height;
    console.log(resultTriangle);
    // show-result
    const showTriangle = document.getElementById('calculation');
    showTriangle.innerText = resultTriangle;

    const inputTri = document.getElementById('area-tri').innerText ;
    const conTri = document.getElementById('area-calc');
    const pTri = document.createElement('p');
    pTri.innerText = inputTri;
    conTri.appendChild(pTri);

}

