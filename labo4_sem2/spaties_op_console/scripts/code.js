const setup = () => {
    let btnSubmit = document.getElementById("btnSubmit");
    btnSubmit.addEventListener("click", aanroepenConsole);
}

const aanroepenConsole = () => {
    let textInput = document.getElementById("textInput").value;
    let textOutput = ""
    for(let i = 0; i < textInput.length; i++) {
        textOutput += textInput.charAt(i) + " ";
    }
    console.log(textOutput);
}
window.addEventListener("load", setup);