var btn = document.getElementById('open');
var close = document.getElementById('close');
var wrap = document.getElementsByClassName('modal-wrapper');
btn.onclick = () =>{
    wrap[0].style.display = "flex";
}
close.onclick = () =>{
    wrap[0].style.display = "none";
}