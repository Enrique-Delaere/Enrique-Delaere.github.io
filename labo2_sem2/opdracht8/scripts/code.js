const setup = () => {
    let btn = document.getElementById("btn");
    btn.addEventListener("click", substring);

}
const substring = () => {
    let tekst = document.getElementById("inputText");
    let nieuweteskt = tekst.value;
    let output = document.getElementById("output");

    let startpositie = parseInt(document.getElementById("eerstenr").value, 10);
    let lengte = parseInt(document.getElementById("tweedenr").value, 10);

    let resultaat = nieuweteskt.substring(startpositie, startpositie + lengte);
    output.innerHTML = "= " + resultaat;
}

window.addEventListener("load", setup);