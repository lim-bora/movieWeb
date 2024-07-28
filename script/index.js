/*드래그시 슬라이드*/
const movieList = document.querySelector('.movie-list'); //무비박스
const popularList = document.querySelector('.popular-list'); //인기순ul
const popularListItems = document.querySelectorAll('.popular-list li');

let startX = 0;
let endX = 0;

// function dragAction(i) {
//     popularList.style.transition = "transform 2s";
//     popularList.style.transform = `translateX(-${i * 20}%)`;
// }
function prevMove(i) {
    // 이전 항목으로 이동하는 로직 구현
    console.log("이전으로 이동", i);
}

function nextMove(i) {
    popularList.style.transition = "transform .5s";
    popularList.style.transform = `translateX(-${i * (100 / 3)}%)`;
}



movieList.addEventListener("mousedown", (e) => {
    e.preventDefault();
    console.log("mousedown", e.pageX);
    startX = e.pageX;
});

movieList.addEventListener("mouseup", (e) => {
    endX = e.pageX;
    if(startX < endX){
        prevMove();
        console.log('뒤')
    }else if(startX > endX){
        nextMove(1);
        console.log("이동!!")
    }
});


// function titleOn() {
//     title.classList.remove('displayNone');
//     // title.classList.add('displayBlock');
// }
// function titleOff() {
//     // title.classList.remove('displayBlock');
//     title.classList.add('displayNone');
// }

const title = document.querySelectorAll('.moviesItem h2');
console.log(title);
popularListItems.forEach((img) => {
    console.log(img);
    img.addEventListener("mouseover", () => {
        img.classList.add('active');
        // titleOn();
        
    }); 
    img.addEventListener("mouseout", () => {
        img.classList.remove('active');
        // titleOff();
    }); 
});

const nav = document.querySelector('.nav');
const movieContainer = document.querySelector('.movie-container');
const navText = document.querySelectorAll('.nav-text');

nav.addEventListener("mouseover", () => {
    nav.classList.add('focused');
    movieContainer.classList.add('focused');
}); 
nav.addEventListener("mouseout", () => {
    nav.classList.remove('focused');
    movieContainer.classList.remove('focused');
}); 


const movieModal = document.querySelector('.movie-modal');
const modalOpen = document.querySelector('.modal_btn');
const modalClose = document.querySelector('.close_btn');

//열기 버튼을 눌렀을 때 모달팝업이 열림
modalOpen.addEventListener('click',function(){
    //display 속성을 block로 변경
    movieModal.style.display = 'block';
});
//닫기 버튼을 눌렀을 때 모달팝업이 닫힘
modalClose.addEventListener('click',function(){
   //display 속성을 none으로 변경
   movieModal.style.display = 'none';
});

