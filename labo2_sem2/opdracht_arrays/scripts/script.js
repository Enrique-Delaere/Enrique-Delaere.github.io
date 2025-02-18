let familie = ['bob', 'bubu', 'banaan', 'appel', 'zetmeel'];

console.log("Aantal elementen in de array: " + familie.length);

for(let i = 0; i<familie.length; i=i+2){
    if(i%2 === 0){
        console.log("familielid "  + familie[i]);
    }
}

let nieuwenaam = prompt("geef een nieuw familielid");
function VoegNaamToe(arr, nieuwenaam){
    arr.push(nieuwenaam);
}
VoegNaamToe(familie, nieuwenaam);
console.log(familie);

let message = familie.join(" - ");
console.log("Array: " + message);