const setup = () => {
    let btnTry = document.getElementById("btnTry");

    // Event-based programming
    btnTry.addEventListener("mouseover", mouseHover);
    btnTry.addEventListener("click", onClick);
    btnTry.addEventListener("mouseout", mouseOut);

    // eventListeners CSS
    document.getElementById("btnWithoutBullets")
        .addEventListener("click", withoutBullets);

    // eventListeners CSS
    document.getElementById("btnWithBullets")
        .addEventListener("click", withBullets);

    document.getElementById("btnContent")
        .addEventListener("click", changeContent);

}
//withoutBulletsFunction
const withoutBullets = () => {
    let listItems = document.getElementsByTagName("li");
    for(let i=0; i<listItems.length; i++) {
        //1ste manier. Geen id list nodig
        //listItems[i].style.listStyleType = "none";
        //listItems[i].style.backgroundColor = "red";
        //2de manier
        //listItems[i].className = "listItemsStyleNone colorRed"

        listItems[i].classList.remove("listItemsStyleDisc");
        listItems[i].classList.remove("colorWhite");
        listItems[i].classList.add("listItemsStyleNone");
        listItems[i].classList.add("colorRed");
        console.log("output", listItems[i].className);
    }
    listItems.className = "btnBullets"

}
//withBulletsFunction
const withBullets = () => {
    let listItems = document.getElementsByTagName("li");
    for(let i=0; i<listItems.length; i++) {
        //1ste manier. Geen id list nodig
        //listItems[i].style.listStyleType = "disc";
        //listItems[i].style.backgroundColor = "white";

        //listItems[i].className = "listItemsStyleDisc colorWhite"

        listItems[i].classList.add("listItemsStyleDisc");
        listItems[i].classList.add("colorWhite");
    }
    listItems.className = "btnBullets"
}

const changeContent = () => {


    document.getElementById("innerHTML").innerHTML="<a href='https://www.vives.be'>VIVES</a>";
    document.getElementById("textContent").textContent="<a href='https://www.vives.be'>VIVES</a>";
}


// mouseHoverFunction
const mouseHover = () => {
    document.getElementById("event").innerHTML += "Mouse Hovered!<br>";

}

// onClickFunction
const onClick = () => {
    document.getElementById("event").innerHTML += "Mouse Clicked!<br>";
}

// mouseOutFunction

const mouseOut = () => {
    document.getElementById("event").innerHTML += "Mouse Out!<br>";
}

window.addEventListener("load", setup);