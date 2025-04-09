const setup = () => {
let btn = document.getElementById("btnCreate").addEventListener("click", change);

}

const change = (e) => {
    let p = document.createElement("p");
    let t = document.createTextNode("dit is een paragraaf");
    document.getElementById("myDIV").appendChild(t);
}
window.addEventListener("load", setup);