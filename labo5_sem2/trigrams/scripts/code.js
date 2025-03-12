const setup = () => {
    let txtTekst = document.getElementById('txtTekst');
    document.getElementById('btnToon').addEventListener('click', () => toon(txtTekst));

    const toon = (tekst) => {
        let tekstUse = tekst.value
        let txtOutput = document.getElementById('lstTrigrams');
        for (let i = 0; i < tekstUse.length; i++) {
            if (tekstUse.slice(i, i + 3).length > 2) {
                console.log(tekstUse.slice(i, i + 3));
                txtOutput.innerHTML += "<li> " + tekstUse.slice(i, i + 3) + "</li>";
            }
        }
    }
}
window.addEventListener("load", setup);