let switcher = document.getElementById("switch");

function switchy () {
    let input12 = document.getElementById("input1");
    let input23 = document.getElementById("input2");
    input12.value = input23.value
}
switcher.addEventListener("click", switchy)

