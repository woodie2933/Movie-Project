import env from "./env.js";

const getMovies = async function () {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0MmNmNTQyYzIyMjE3OWY3NjFjNTczN2UxYzBhNjJmOCIsIm5iZiI6MTcyNDg0OTMxNy4wNSwic3ViIjoiNjZjZjFjYTVlNGE2Mzg5NGZhYmQ4M2FiIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.W_V_CswMXMloBhQQKfS-Ti5WeC46akHcNtIHLIG5kCA",
    },
  };

  const url =
    "https://api.themoviedb.org/3/movie/top_rated?language=ko-KR&page=1";

  try {
    const topRatedRes = await fetch(url, options);
    const topRatedJson = await topRatedRes.json();
    const topRatedData = topRatedJson.results;

    renderMovie(topRatedData);
  } catch (err) {
    console.error("error", error);
  }
};

const renderMovie = function (data) {
  const movie = document.getElementById("movies");
  data.forEach((item) => {
    movie.innerHTML += `<h3 class>${item.title}</h3>
<p>${item.vote_average}</p>
<img class="img" src ='https://image.tmdb.org/t/p/w300/${item.poster_path}'>`;
  });
  console.log(data);
};

getMovies();
