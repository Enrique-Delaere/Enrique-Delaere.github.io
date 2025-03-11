const setup = () => {
    let btnSubmit = document.getElementById('btnSubmit')
    btnSubmit.addEventListener('click', Aanroepen);
}

const Aanroepen = () => {
    let textInput = document.getElementById("textInput").value;
    let res = maakMetSpaties(textInput);
    console.log(res);
}
const maakMetSpaties = (inputText) => {
    let result="";
    for(let i = 0; i < inputText.length; i++) {
        result += inputText.charAt(i) + " ";
    }
    return result;
}
window.addEventListener("load", setup);