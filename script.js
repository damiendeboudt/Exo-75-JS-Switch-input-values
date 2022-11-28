let switcher = document.getElementById("switch");

function switchy () {
    let box1 = document.getElementById("input1");
    let box2 =document.getElementById("input2");
    let value1 = document.getElementById("input1").value;
    let value2 = document.getElementById("input2").value;
    box1.value = value2
    box2.value = value1

}
switcher.addEventListener("click", switchy)

