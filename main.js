function calcolaPrezzo() {

    const numeroKm = document.getElementById('kmInput').value;
    console.log('kmInput: ', kmInput)

    const etaUser = document.getElementById('etaInput').value;
    console.log('etaInput: ', etaInput)

    const prezzoBase = numeroKm * 0.21;
    console.log('prezzoBase: ', prezzoBase)

    let sconto = 0;

    if (etaUser >= 65) {
        sconto = prezzoBase * 0.4;
        console.log('sconto: ', sconto)

    } else if (etaUser < 18) {
        sconto = prezzoBase * 0.2;
        console.log('sconto: ', sconto)
    }


}