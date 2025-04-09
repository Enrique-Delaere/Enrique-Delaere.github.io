const setup = () => {
let list = document.querySelectorAll("li");

    for (let i = 0; i < list.length; i++) {
        list[i].classList.add("listitem");
    }

let img = document.createElement("img");
img.setAttribute("src", "images/kat.jpg")
    img.setAttribute("alt", "kat")
    document.querySelector("body").appendChild(img);


}
window.addEventListener("load", setup);