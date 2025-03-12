const setup = () => {
    let btn = document.getElementById("btn");
    let message = document.getElementById("message");
    btn.addEventListener("click", test);
}

const test = () =>
    message.innerHTML = "skibidi"
window.addEventListener("load", setup);