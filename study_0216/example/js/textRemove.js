let i = 0;
let j = 0;
const textArray = ["HTML", "CSS", "Javascript"],
    speed = 100,
    target = document.getElementById("type");

type();

//한글자씩 추출해서 html에 출력 charAt
function type(){
    if(i < textArray[j].length){
        (target.innerHTML += textArray[j].charAt(i));
        i++;
        setTimeout(type, speed);
    }else{
        remove();
    }
}
//한글자씩 html에서 제거 slice
function remove(){
    if(0 <= i){
        (target.innerHTML = textArray[j].slice(0,i));
        i--;
        setTimeout(remove, speed);
    }else{
        type();
        textNum();
    }
}
//다음 문자열로 넘어감
function textNum(){
    if(j == textArray.length - 1){
        j=0;
    }else{
        j++;
    }
}