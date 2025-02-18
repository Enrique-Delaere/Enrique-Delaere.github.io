const setup = () => {
    let btn = document.getElementById("btn");
    btn.addEventListener("click", kopieer);

}
const kopieer = () =>{
    let txt = document.getElementById("bob");
    let value = txt.value;
    console.log(value);
}

window.addEventListener("load", setup);