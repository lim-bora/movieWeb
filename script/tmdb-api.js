//영화_인기순
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

        const movieList = document.querySelector('.movie-list'); //무비박스
        const popularList = document.querySelector('.popular-list'); //인기순ul
        const modalPopularList = document.querySelector('.modal-popular-list');
   
        data.results.forEach(e => { //data.results에 있는 모든 요소 e에 담기
            const moviesItemCreate = document.createElement('li'); //movies classname을 가진 li 만듬
            moviesItemCreate.classList.add('moviesItem');
            moviesItemCreate.setAttribute('data-id', e.id); //li에 id값 추가

            ////movies li요소 안에 넣을 html 태그들 : 백틱으로 묶기
            moviesItemCreate.innerHTML = ` 
                <img class="moviesImg" src="https://image.tmdb.org/t/p/w500${e.poster_path}" alt="${e.title}">
                <h2>${e.title}</h2>
            `;
            popularList.appendChild(moviesItemCreate); //인기순ul안에 li 아이템들 추가
            

            const modalItemCreate = document.createElement('li');
            ////modal li요소 안에 넣을 html 태그들 : 백틱으로 묶기
            modalItemCreate.innerHTML = ` 
                <img class="moviesImg" src="https://image.tmdb.org/t/p/w500${e.poster_path}" alt="${e.title}">
                <h2>${e.title}</h2>
            `;
            modalPopularList.appendChild(modalItemCreate); //인기순ul안에 li 아이템들 추가




            ////클릭시 alert창 띄우기
            const moviesItem = document.querySelectorAll('.moviesItem');
            for (let i = 0; i < moviesItem.length; i++) {
                moviesItem[i].addEventListener("click", () => {
                    alert(`영화 id: ${moviesItem[i].getAttribute('data-id')}`);
                }); 
            }

        });
        movieList.appendChild(popularList); //movieList안에 popularList-ul 추가
        // movieList.appendChild(popularList); //movieList안에 popularList-ul 추가
        
    })
    .catch(err => console.error(err));

    





