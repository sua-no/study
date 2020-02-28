var led = document.getElementById('led');
function text(){
    led.innerHTML = document.getElementById('inputText').value;
}
function color(){
    led.style.color = document.getElementById('inputColor').value;
}