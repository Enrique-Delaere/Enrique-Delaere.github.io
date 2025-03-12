const setup = () => {
    let input = document.getElementById('input');
    let btnConsole = document.getElementById('btnConsole');

    btnConsole.addEventListener('click', () => aanroepenConsole(input));
}

const aanroepenConsole = (input) => {
    let text = input.value;
    console.log(text);

    let newText = text.split("de").join("het");

    console.log(newText);
};
window.addEventListener("load", setup);