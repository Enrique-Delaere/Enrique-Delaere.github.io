const setup = () => {
    const button = document.getElementById("btn");
    button.addEventListener("click", recalculate);
};

function recalculate() {
    let total = 0;
    const rows = document.querySelectorAll("table tr");

    rows.forEach((row, index) => {
        if (index === 0 || index === rows.length - 1) return;

        const priceText = document.querySelectorAll(".price")[index - 1].textContent.trim();
        const price = parseFloat(priceText.replace("EUR", "").trim());
        const quantity = parseFloat(document.querySelectorAll(".quantity")[index - 1].value);
        const taxText = document.querySelectorAll(".tax")[index - 1].textContent.trim();
        const tax = parseFloat(taxText.replace("%", "").trim());

        if (isNaN(quantity) || quantity < 0) return;

        const subtotal = quantity * price * (1 + tax / 100);
        document.querySelectorAll(".subtotal")[index - 1].textContent = subtotal.toFixed(2) + " EUR";
        total += subtotal;
    });

    document.getElementById("total").textContent = total.toFixed(2) + " EUR";
}

window.addEventListener("load", setup);


