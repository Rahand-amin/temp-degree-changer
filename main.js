var ff = document.getElementById('f');
var dgma = document.getElementById('dgma');

function toCelsius(f) {
    return (5 / 9) * (f - 32);
}

dgma.addEventListener('click', () => {
    document.getElementById("demo").innerHTML = toCelsius(ff.value).toFixed(1) + " c";

});