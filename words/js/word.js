var count = 0;
function word(){
    var firstNameText = document.getElementsByName('js_firstName')[0].value;
    var answer = document.getElementsByName('js_answer')[0].value;

    //답이 비워있을 경우
    if(answer==""){
        alert("답을 입력하세요");
    }
    //답이 맞았을경우
    else if(firstNameText.charAt(firstNameText.length-1)===answer.charAt(0)){
        document.getElementsByName('js_firstName')[0].value = answer;
        document.getElementsByName('js_answer')[0].value = "";
        document.getElementsByName('js_textarea')[0].value += firstNameText + " ";
        count += 1;
        if(count == 4){
            alert("축축하 끝");
           
        }
        
        
        alert('축하' +  count);
    }
    else{
        document.getElementsByName('js_answer')[0].value = "";
        alert('땡');
    }
}
