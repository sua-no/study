var plus = document.getElementById('bt1');
var minus = document.getElementById('bt2');
target = document.getElementById('number');
var i = 0;
plus.onclick = () =>{
    if(i<10){
        target.innerHTML = ++i;   
    }else{
        alert('최대수량입니다');
    }
}
minus.onclick = () =>{
    if(i>0){
    target.innerHTML = --i; 
    }
}
