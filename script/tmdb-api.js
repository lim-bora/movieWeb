const searchList = document.querySelector('.search-list'); //검색결과 ul
const searchListItem = document.querySelectorAll('.search-list li');
const searchBar = document.querySelector('.search-box');
const searchInput = document.querySelector('.searchInput');
let movie = [];


//// 영화_인기순 ////
const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2NDFhYTY0NDIxMWQ1MWFhZjc1MTQ1MWQxNjhlMjYwYiIsIm5iZiI6MTcyMTcxODk1MC4wNjMxLCJzdWIiOiI2NjlmNDAzMTE3MDE4ZmYzN2FkZGFjOWEiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.DR0Rx6-U8itkQiVSdzyvceXFiod86f6AGciYm5pG9fE'
    }
  };
  
  fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', options)
    .then(response => response.json())
    .then(data => { //response.json()의 값을 data에 담기
        console.log(data)

        const popularList = document.querySelector('.popular-list'); //item 감씨는 ul
        const modalList = document.querySelector('.popularModal'); //모달-item 감씨는 ul
   
        //** main : item 생성 **//
        data.results.forEach(mv => { 
            const moviesItemCreate = document.createElement('li'); 
            moviesItemCreate.classList.add('moviesItem', 'item'); //개별클래스:moviesItem, 공통클래스:item
            moviesItemCreate.setAttribute('data-id', mv.id); //li에 id값 추가

            //movies li요소 안에 넣을 html 태그들 : 백틱으로 묶기
            moviesItemCreate.innerHTML = ` 
                <img class="moviesImg" src="https://image.tmdb.org/t/p/w500${mv.poster_path}" alt="${mv.title}">
                <h2>${mv.title}</h2>
            `;
            popularList.appendChild(moviesItemCreate); //인기순ul안에 li 아이템들 추가
            
            //클릭시 alert창 띄우기 - ${data.id} 버전 - getAttribute 사용해보기
            moviesItemCreate.addEventListener("click", () => {
                alert(`영화 id: ${moviesItemCreate.getAttribute('data-id')}`);
            }); 
            
            ////modal-list
            const modalItemCreate = document.createElement('li');
            //modal li요소 안에 넣을 html 태그들 : 백틱으로 묶기
            modalItemCreate.innerHTML = ` 
                <img class="moviesImg" src="https://image.tmdb.org/t/p/w500${mv.poster_path}" alt="${mv.title}">
                <h2>${mv.title}</h2>
                <span>${mv.release_date}</span>
                <span class="btn">
                    <ion-icon name="ellipsis-horizontal-outline"></ion-icon>
                    <p class="overview-text">${mv.overview}</p>
                </span>
            `;
            modalList.appendChild(modalItemCreate); //인기순ul안에 li 아이템들 추가
        });
        
        //** search : item 생성 **//
        movie = data.results.map((item) => {
            const li = document.createElement('li');
            const img = document.createElement('img');
            const title = document.createElement('h2');
            img.src = `https://image.tmdb.org/t/p/w200${item.poster_path}`;
            title.textContent = item.title;

            li.appendChild(img);
            li.appendChild(title);
            searchList.appendChild(li);

            return { 
                title: item.title,
                element: li
            };
        });
        // console.log(movie);
    })
    .catch(err => console.error(err));
//// 영화_인기순 end////




//// 영화_곧개봉 ////
const options2 = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2NDFhYTY0NDIxMWQ1MWFhZjc1MTQ1MWQxNjhlMjYwYiIsIm5iZiI6MTcyMTcxODk1MC4wNjMxLCJzdWIiOiI2NjlmNDAzMTE3MDE4ZmYzN2FkZGFjOWEiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.DR0Rx6-U8itkQiVSdzyvceXFiod86f6AGciYm5pG9fE'
    }
  };

    fetch('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1', options2)
        .then(response => response.json())
        .then(data => { //response.json()의 값을 data에 담기
        console.log(data)

        const upcomingSlide = document.querySelector('.upcomingSlide'); //슬라이드 감씨는 ul
        const upcomingList = document.querySelector('.upcoming-list'); //곧개봉ul
        const modalList = document.querySelector('.upcomingModal'); //모달-item 감씨는 ul

        //** main : item 생성 **// 
        data.results.forEach(mv => {
            const moviesItemCreate = document.createElement('li'); 
            moviesItemCreate.classList.add('moviesItem', 'item'); //개별클래스:upcomingItem, 공통클래스:item
            moviesItemCreate.setAttribute('data-id', mv.id); //li에 id값 추가

            //movies li요소 안에 넣을 html 태그들 : 백틱으로 묶기
            moviesItemCreate.innerHTML = ` 
                <img class="moviesImg" src="https://image.tmdb.org/t/p/w500${mv.poster_path}" alt="${mv.title}">
                <h2>${mv.title}</h2>
            `;
            upcomingList.appendChild(moviesItemCreate); //ul안에 li 아이템들 추가
            
            ////클릭시 alert창 띄우기 - ${mv.id} 버전
            moviesItemCreate.addEventListener("click", () => { 
                alert(`영화 id:${mv.id}`);
            }); 
            
            ////modal-list
            const modalItemCreate = document.createElement('li');
            //modal li요소 안에 넣을 html 태그들 : 백틱으로 묶기
            modalItemCreate.innerHTML = ` 
                <img class="moviesImg" src="https://image.tmdb.org/t/p/w500${mv.poster_path}" alt="${mv.title}">
                <h2>${mv.title}</h2>
                <span>${mv.release_date}</span>
                <span class="btn">
                    <ion-icon name="ellipsis-horizontal-outline"></ion-icon>
                    <p class="overview-text">${mv.overview}</p>
                </span>
            `;
            modalList.appendChild(modalItemCreate);
        });

        //** search : item 생성 **//
        movie = data.results.map((item) => {
            const li = document.createElement('li');
            const img = document.createElement('img');
            const title = document.createElement('h2');
            img.src = `https://image.tmdb.org/t/p/w200${item.poster_path}`;
            title.textContent = item.title;

            li.appendChild(img);
            li.appendChild(title);
            searchList.appendChild(li);

            return { 
                title: item.title,
                element: li
            };
        });
    })
    .catch(err => console.error(err));
//// 영화_곧개봉 end////



document.addEventListener('DOMContentLoaded', () => {
    // 검색어에 따라 필터링함수
    function filterUsers(value) { //value: 검색어
            let searchList = document.querySelector('.search-list'); // 검색결과 ul

            movie.forEach((keyword) => { //mv배열을 순회하면서
            
            if (value === '') { //검색어가 없으면
                keyword.element.classList.remove('visible'); // 검색결과 li에 visible 클래스
            }else{
                const isVisible = keyword.title.toLowerCase().includes(value); //검색어가 포함된 사용자를 찾아서
                
                if (isVisible) {
                    keyword.element.classList.add('visible'); // 검색결과 li에 visible 클래스 추가
                    searchList.appendChild(keyword.element); //검색결과 ul에 추가
                }else{
                    keyword.element.classList.remove('visible'); // 검색결과 li에 visible 클래스
                }
                console.log("검색됨")
            }
        });
    }

    // 검색 입력 이벤트
    searchInput.addEventListener('input', (e) => { //input에 입력할때마다 이벤트
        const val = e.target.value.toLowerCase(); //입력한값 + 소문자로 변환
        console.log('검색어:', val);
        searchList.innerHTML = ''; //검색결과 ul초기화
        filterUsers(val);;
        
        searchListChildrenCheck()
    });


    // search-list 요소의 자식 요소가 있는지 확인하는 함수
    function searchListChildrenCheck() {
        if (searchList.children.length > 0) { //있음
            console.log('ㅇㅇ'); 
            searchBar.classList.add('active');
            searchInput.classList.add('active');
        } else { //없음
            console.log('ㄴㄴ');
            searchBar.classList.remove('active');
            searchInput.classList.remove('active');
        }
    }


});


