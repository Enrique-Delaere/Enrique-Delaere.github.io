const setup = () => {
  document.getElementById('imgPhoto').addEventListener('mouseover', herplaatsen);

}

const herplaatsen = () => {
    let photo = document.getElementById('imgPhoto');
    photo.src = "images/kat.jpg";

    document.getElementById('txtText').innerHTML = "Cat of schools";
}

window.addEventListener("load", setup);