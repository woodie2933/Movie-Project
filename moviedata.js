import env from "./env.js";

const topRated =
  "https://api.themoviedb.org/3/movie/top_rated?language=ko-KR&page=1";
const popular =
  "https://api.themoviedb.org/3/movie/popular?language=ko-KR&page=1";
const banner =
  "https://api.themoviedb.org/3/movie/upcoming?language=ko-KR&page=1";

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

// 검색창

// 랜덤헤더
const randomMovie = async function () {
  const data = await fetchMovies(popular);

  const headerImg = document.querySelector(".header_contents");
  const randomIndex = Math.floor(Math.random() * 20);
  const img = data[randomIndex].backdrop_path;

  headerImg.style.backgroundImage = `url('https://image.tmdb.org/t/p/original/${img}')`;
};

randomMovie();

// recent 영화카드
const recentMovie = async function () {
  const data = await fetchMovies(popular);

  const nowMovie = document.getElementById("recent");
  data.forEach((item, index) => {
    const recentVote = item.vote_average.toFixed(1);

    nowMovie.innerHTML += `
      <div id = "card_${index}" class = "recent_card">
        <img class= "recent_card_img" src ='https://image.tmdb.org/t/p/w780/${item.backdrop_path}'>
        <div class = "recent_card_desc">
          <p class= "recent_card_title">${item.title}</p>
          <p class= "recent_card_star">⭐ ${recentVote}</p>
        </div>
      </div>`;
  });
};

recentMovie();

// 랜덤배너
const randomBanner = async function () {
  const data = await fetchMovies(banner);

  const headerImg = document.querySelector(".banner");
  const randomIndex = Math.floor(Math.random() * 20);
  const img = data[randomIndex].backdrop_path;

  headerImg.style.backgroundImage = `url('https://image.tmdb.org/t/p/original/${img}')`;

  console.log(data);
};

randomBanner();

// toprated 영화카드
const topRatedMovie = async function () {
  const data = await fetchMovies(topRated);

  const topMovie = document.getElementById("top_rated");
  data.forEach((item, index) => {
    const topRatedVote = item.vote_average.toFixed(1);

    topMovie.innerHTML += `
      <div id = "card2_${index}" class = "toprated_card">
        <img class="toprated_card_img" src ='https://image.tmdb.org/t/p/w780/${item.backdrop_path}'>
        <div class = "toprated_card_desc">
          <p class="toprated_card_title">${item.title}</p>
          <p class="toprated_card_star">⭐ ${topRatedVote}</p>
        </div>
      </div>`;
  });
};

topRatedMovie();

// Modal
const showModal = (data, modalSelector, cards) => {
  const modal = document.querySelector(modalSelector);

  for (let i = 0; i < 20; i++) {
    const card = document.querySelector(`#${cards}_${i}`);
    if (!card) continue;

    card.addEventListener("click", () => {
      const movie = data[i];
      const modalVote = movie.vote_average.toFixed(1);

      document.body.style.overflow = "hidden";
      modal.classList.remove("hide");
      modal.innerHTML = `
        <div class="modal_wrap" style="background-image: url('https://image.tmdb.org/t/p/original/${movie.backdrop_path}')">
          <i id="close_modal" class="fa-solid fa-xmark"></i>
          <div class="modal_desc">
            <p class="modal_star">RATING ${modalVote}/10</p>
            <p class="modal_genre">${movie.genre_ids}</p>
            <p class="modal_title">${movie.title}</p>
            <p class="modal_original_title">${movie.original_title}</p>
            <p class="modal_date">${movie.release_date}</p>
            <p class="modal_summary">${movie.overview}</p>
          </div>
        </div>`;

      // 모달창 닫기
      document.querySelector("#close_modal").addEventListener("click", () => {
        modal.classList.add("hide");
        document.body.style.overflow = "auto";
        modal.innerHTML = "";
      });
    });
  }
};

const recentModal = async () => {
  const data = await fetchMovies(popular);
  showModal(data, "#recent_modal", "card");
};

const topRatedModal = async () => {
  const data = await fetchMovies(topRated);
  showModal(data, "#top_rated_modal", "card2");
};

recentModal();
topRatedModal();
