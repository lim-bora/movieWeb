const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2NDFhYTY0NDIxMWQ1MWFhZjc1MTQ1MWQxNjhlMjYwYiIsIm5iZiI6MTcyMTcxODk1MC4wNjMxLCJzdWIiOiI2NjlmNDAzMTE3MDE4ZmYzN2FkZGFjOWEiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.DR0Rx6-U8itkQiVSdzyvceXFiod86f6AGciYm5pG9fE'
    }
  };
  
  fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));

