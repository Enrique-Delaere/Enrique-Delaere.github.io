const setup = () => {
    let par = document.querySelectorAll("p")[0];
    y = par.childNodes[0];
    par.removeChild(y);
    let textNode = document.createTextNode("Good Job!");
    par.appendChild(textNode);


   // let p = document.querySelectorAll("p");
    //for (let i = 0; i < p.length; i++) {
      //  p[i].textContent = "Good Job!";

    //}
}
window.addEventListener("load", setup);