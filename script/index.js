
const movieList = document.querySelector('.movie-list'); //무비박스
const popularList = document.querySelector('.popular-list'); //인기순ul
const popularListItems = document.querySelectorAll('.popular-list li');
const searchContainer = document.querySelector('.search-container');
const searchButton = document.querySelector('.searchButton');
const searchItems = document.querySelectorAll('.search-list li');
const homeButton = document.querySelector('.homeButton');

//// 배너 페이드 효과
const banners = document.querySelectorAll('.movie-banner li');
let currentIndex = 0;

function fadeBanner() {
    banners[currentIndex].classList.remove('active');
    currentIndex = (currentIndex + 1) % banners.length;
    banners[currentIndex].classList.add('active');
}
setInterval(fadeBanner, 3000); // 2초마다 배너 전환


//// 네비 마우스올렸을때 효과
const nav = document.querySelector('.nav');
const navBtns = document.querySelectorAll('.nav li');
const movieContainer = document.querySelector('.movie-container');

nav.addEventListener("mouseover", () => {
    nav.classList.add('focused');
    movieContainer.classList.add('focused');
    searchContainer.classList.add('focused');
}); 
nav.addEventListener("mouseout", () => {
    movieContainer.classList.remove('focused');
    searchContainer.classList.remove('focused');
    nav.classList.remove('focused');
});


//// 모달팝업
const movieModal = document.querySelector('.movie-modal');
const modalOpen = document.querySelectorAll('.modal_btn');
const modalClose = document.querySelector('.close_btn');
const modalList = document.querySelectorAll('.modal-list');
const modalTitle = document.querySelector('.movie-modal h3');

for (let i = 0; i < modalOpen.length; i++) {
    //열기 버튼을 눌렀을 때 모달팝업이 열림
modalOpen[i].addEventListener('click',function(){

    movieModal.style.display = 'block';

    // 모든 modalList 항목을 숨김
    modalList.forEach(modal => {
        modal.style.display = 'none';
    });
    modalList[i].style.display = 'grid';

    modalTitle.textContent = (i === 0) ? '인기영화' : '곧 개봉!';
    //리스트가 두개일경우 가능한방법, 리스트가 많은 경우 스위치 써도좋을듯
});
}



//닫기 버튼을 눌렀을 때 모달팝업이 닫힘
modalClose.addEventListener('click',function(){
    movieModal.style.display = 'none';
});

searchButton.addEventListener('click', () => {    
    searchContainer.classList.toggle('visible');
});

homeButton.addEventListener('click', () => {    
    searchContainer.classList.remove('visible');
});


const banersSection = document.querySelector('.movie-banner') ;
setTimeout(() => {        
    banersSection.style.opacity = 1;
},1000);
setTimeout(() => {        
    movieList.style.opacity = 1;
},1200);



for (let i = 0; i < navBtns.length; i++) {
    navBtns[i].addEventListener('click', () => {
        navBtns.forEach(btn => {
            btn.classList.remove('active');
        });
        navBtns[i].classList.toggle('active');
        
    });
}