const setup = () => {

    let sliders = document.getElementsByClassName("slider");
    let btn = document.getElementById('btnClick').addEventListener('click', save);

    for(let i = 0; i < sliders.length; i++){
        sliders[i].addEventListener("input", update);
        sliders[i].addEventListener("change", update);
    }
};

const update = () => {
    let redSlider = document.getElementById("sldRed");
    let valuered = redSlider.value;
    let greenSlider = document.getElementById("sldGreen");
    let valuegreen = greenSlider.value;
    let blueSlider = document.getElementById("sldBlue");
    let valueblue = blueSlider.value;

    document.getElementById("lblRed").innerHTML = valuered;
    document.getElementById("lblGreen").innerHTML = valuegreen;
    document.getElementById("lblBlue").innerHTML = valueblue;

    let swatch = document.getElementById("swatch");
    swatch.style.backgroundColor = "rgb("+valuered+","+valuegreen+","+valueblue+")";
}

const save = () => {
    const r = document.getElementById('sldRed').value;
    const g = document.getElementById('sldGreen').value;
    const b = document.getElementById('sldBlue').value;
    const color = `rgb(${r}, ${g}, ${b})`;

    const box = document.createElement('div');
    box.className = 'saved-color';
    box.style.backgroundColor = color;

    const close = document.createElement('div');
    close.className = 'close-btn';
    close.innerHTML = 'X';
    close.onclick = () => box.remove();

    box.appendChild(close);
    document.getElementById('savedColors').appendChild(box);
}

window.addEventListener("load", setup);