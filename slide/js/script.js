
// 변수 지정
var sliderContainer = document.getElementsByClassName('slider-container');
var currentIndex = 0;
var navPrev = document.getElementById('prev');
var navNext = document.getElementById('next');
var slides = document.getElementsByClassName('slide');
var slideCount = slides.length; //슬라이드 개수 
var slideWrapper = document.getElementsByClassName('container');
var topHeight = 0;
//기본값, 페이지 초기화 용도
// if(currentIndex == 0){
//     navPrev.classList.add('disabled');
// } else{
//     navPrev.classList.remove('disabled');
// };

//li 위치
for(var i = 0 ; i <= slideCount - 1; i++){
    slides[i].style.left =  i * (100) + "%";
};
function height(){
    for(var j = 0; j <= slideCount - 1; j++){
        if(topHeight <= slides[j].offsetHeight){
            topHeight = slides[j].offsetHeight;
            console.log(j + "|" + topHeight);
        } else{}

}
slideWrapper[0].style.height = topHeight + "px";
sliderContainer[0].style.height = topHeight + "px";
}
height();
// 슬라이드 이동 함수 
function gotoSlide(idx){
    sliderContainer[0].style.left = idx * (-100) + "%";
    currentIndex = idx;
    // 버튼 사라지게 하기, 페이지 이동했을 때마다 if문 실행
    // slideBtn();
    
}
function slideBtn(){
    if(currentIndex == 0){
        navPrev.classList.add('disabled');
    } else{
        navPrev.classList.remove('disabled');
    } 
    if(currentIndex == slides.length - 1){
        navNext.classList.add('disabled');
    } else{
        navNext.classList.remove('disabled');
    }
}
//버튼을 클릭하면 슬라이드 이동시키기
navPrev.addEventListener('click',function(e){
    e.preventDefault();
    if(currentIndex == 0){
        gotoSlide(slideCount - 1);
    }else{gotoSlide(currentIndex - 1);
    }
});
navNext.addEventListener('click',function(e){
    e.preventDefault();
    if(currentIndex == slideCount - 1){
        gotoSlide(0);
    }else{gotoSlide(currentIndex + 1);
    }
});


// (추가) 첫번째 슬라이드 먼저 보이도록 하기

// (추가) 슬라이드가 있으면 가로로 배열하기

// (추가) 슬라이드의 높이 확인하여 부모의 높이로 지정하기

// (추가) 처음에서 뒤로가는 버튼 누르면 마지막으로 가기 (마지막도 동일)