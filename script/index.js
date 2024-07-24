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

console.log(popularListItems.length) //0????



/*문제 : api.js 에서 동적으로 만든 엘리먼트는 index.js에서 변수로 불러와지지않는데 왜? */
popularListItems.forEach((img) => {
    img.addEventListener("mouseover", () => {
        img.classList.add('active');
    }); 
});

