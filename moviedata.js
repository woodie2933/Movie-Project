import env from "./env.js";

// Movie API
const fetchMovies = async function () {
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
  const movie = document.getElementById("top_rated");
  data.forEach((item) => {
    movie.innerHTML += `
      <div class = "card">
        <h3>${item.title}</h3>
        <p>${item.vote_average}</p>
        <img class="img" src ='https://image.tmdb.org/t/p/w300/${item.backdrop_path}'>
      </div>`;
  });
  console.log(data);
};

fetchMovies();

// random
const randomMovie = function (data) {
  const randomIndex = Math.random(Math.floor() * 20);
  const headerImg = document.querySelector(".header_contents");
  const img = data[randomIndex].backdrop_path;

  headerImg.style.backgroundImage = `url('https://image.tmdb.org/t/p/w300/${img}')`;

  console.log(data);
};

randomMovie(fetchMovies());
