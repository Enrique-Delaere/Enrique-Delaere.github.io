const setup = () => {
    let knop1 = document.getElementById("aan");
    let knop2 = document.getElementById("uit");
    knop1.addEventListener("click", change);
    knop2.addEventListener("click", undo);
}

const change = () => {
    let kleur = document.getElementById("skibidi");
    let lijst = document.getElementById("lijst");
    kleur.className = "rood";
}

const undo = () => {
    let kleur = document.getElementById("skibidi");
    kleur.className = "zonder";
}

window.addEventListener("load", setup);