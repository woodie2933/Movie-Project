import env from "./env.js";

const topRated =
  "https://api.themoviedb.org/3/movie/top_rated?language=ko-KR&page=1";
const popular =
  "https://api.themoviedb.org/3/movie/popular?language=ko-KR&page=1";

// Movie API
const fetchMovies = async function (url) {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0MmNmNTQyYzIyMjE3OWY3NjFjNTczN2UxYzBhNjJmOCIsIm5iZiI6MTcyNDg0OTMxNy4wNSwic3ViIjoiNjZjZjFjYTVlNGE2Mzg5NGZhYmQ4M2FiIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.W_V_CswMXMloBhQQKfS-Ti5WeC46akHcNtIHLIG5kCA",
    },
  };

  try {
    const movieRes = await fetch(url, options);
    const movieJson = await movieRes.json();
    return movieJson.results;
  } catch (err) {
    console.error("error", error);
  }
};

// 랜덤헤더
const randomMovie = async function () {
  const data = await fetchMovies(popular);

  const headerImg = document.querySelector(".header_contents");
  const randomIndex = Math.floor(Math.random() * 20);
  const img = data[randomIndex].backdrop_path;

  headerImg.style.backgroundImage = `url('https://image.tmdb.org/t/p/original/${img}')`;

  console.log(data);
};

randomMovie();

// toprated 영화카드
const recentMovie = async function () {
  const data = await fetchMovies(popular);

  const nowMovie = document.getElementById("recent");
  data.forEach((item) => {
    nowMovie.innerHTML += `
      <div class = "recent_card">
        <img class= "recent_card_img" src ='https://image.tmdb.org/t/p/w300/${item.backdrop_path}'>
        <div class = "recent_card_desc">
          <p class= "recent_card_title">${item.title}</p>
          <p class= "recent_card_star">${item.vote_average}</p>
        </div>
      </div>`;
  });
  console.log(data);
};

recentMovie(fetchMovies(popular));

// toprated 영화카드
const topRatedMovie = async function () {
  const data = await fetchMovies(topRated);

  const topMovie = document.getElementById("top_rated");
  data.forEach((item) => {
    topMovie.innerHTML += `
      <div class = "toprated_card">
        <img class="toprated_card_img" src ='https://image.tmdb.org/t/p/w300/${item.backdrop_path}'>
        <p class="toprated_card_title">${item.title}</p>
        <p class="toprated_card_star">${item.vote_average}</p>
      </div>`;
  });
  console.log(data);
};

topRatedMovie(fetchMovies(topRated));
