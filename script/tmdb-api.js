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
        // movieList.innerHTML = ''; //
        data.results.forEach(e => { //data.results에 있는 모든 요소 e에 담기
            const moviesItem = document.createElement('li'); //movies classname을 가진 li 만듬
            moviesItem.classList.add('moviesItem');

            ////movies li요소 안에 넣을 html 태그들 : 백틱으로 묶기
            moviesItem.innerHTML = ` 
                <img src="https://image.tmdb.org/t/p/w500${e.poster_path}" alt="${e.title}">
                <h2>${e.title}</h2>
            `;


            popularList.appendChild(moviesItem); //인기순ul안에 li 아이템들 추가
            movieList.appendChild(popularList); //movieList안에 popularList-ul 추가



            // const popularListItems = document.querySelectorAll('.popular-list li');
            // popularListItems.forEach((img) => {
            //     img.addEventListener("mouseover", () => {
            //         img.classList.add('active');
            //     }); 
            // });
        });
    })
    .catch(err => console.error(err));

    





