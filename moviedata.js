import env from "./env.js";

const topRated =
  "https://api.themoviedb.org/3/movie/top_rated?language=ko-KR&page=1";
const popular =
  "https://api.themoviedb.org/3/movie/popular?language=ko-KR&page=1";
const banner =
  "https://api.themoviedb.org/3/movie/upcoming?language=ko-KR&page=1";
const genreAPI = "https://api.themoviedb.org/3/genre/movie/list?language=ko";

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

// 장르

// recent 모달창
// const recentModal = async function () {
//   const data = await fetchMovies(popular);
//   const nowModal = document.querySelector("#recent_modal");

//   for (let i = 0; i < 20; i++) {
//     const card = document.querySelector(`#card_${i}`);
//     card.addEventListener("click", () => {
//       const now = data[i];
//       const recentModalVote = now.vote_average.toFixed(1);
//       const img = now.backdrop_path;

//       document.body.style.overflow = "hidden";
//       nowModal.classList.remove("hide");
//       nowModal.innerHTML = `
//         <div class = "recent_modal_wrap" style = "background-image: url('https://image.tmdb.org/t/p/original/${img}')" >
//           <i id = "close_modal" class="fa-solid fa-xmark"></i>
//           <div class = "recent_modal_desc">
//             <p class="recent_modal_star">RATING${recentModalVote}/10</p>
//             <p class="recent_modal_genre">${now.genre_ids}</p>
//             <p class="recent_modal_title">${now.title}</p>
//             <p class="recent_modal_original_title">${now.original_title}</p>
//             <p class="recent_modal_date">${now.release_date}</p>
//             <p class="recent_modal_summary">${now.overview}</p>
//           </div>
//         </div>`;

//       // 모달 닫기
//       const closeModal = document.querySelector("#close_modal");
//       closeModal.addEventListener("click", () => {
//         nowModal.classList.add("hide");
//         document.body.style.overflow = "auto";
//         nowModal.innerHTML = "";
//       });
//     });
//   }
// };

// recentModal();

const recentModal = async function () {
  const data = await fetchMovies(popular);
  const nowModal = document.querySelector("#recent_modal");

  function showModal(movie) {
    const recentModalVote = movie.vote_average.toFixed(1);
    const img = movie.backdrop_path;

    document.body.style.overflow = "hidden";
    nowModal.classList.remove("hide"); // 모달 항상 표시

    nowModal.innerHTML = `
      <div class="recent_modal_wrap" style="background-image: url('https://image.tmdb.org/t/p/original/${img}')">
        <div class="shadow">
          <i id="close_modal" class="fa-solid fa-xmark"></i>
          <div class="recent_modal_desc">
            <p class="recent_modal_star">RATING <span style = "font-size: 20px; color: #FFEB46">${recentModalVote}</span> / 10</p>
            <p class="recent_modal_genre">${movie.genre_ids}</p>
            <p class="recent_modal_title">${movie.title}</p>
            <p class="recent_modal_original_title">${movie.original_title}</p>
            <p class="recent_modal_date">${movie.release_date}</p>
            <p class="recent_modal_summary">${movie.overview}</p>
          </div>
        </div>
      </div>`;

    // 닫기 버튼 이벤트 추가
    const closeModal = document.querySelector("#close_modal");
    closeModal.addEventListener("click", () => {
      nowModal.classList.add("hide");
      document.body.style.overflow = "auto";
      nowModal.innerHTML = "";
    });
  }

  // **초기 실행 시 첫 번째 영화 자동 표시**
  // if (data.length > 0) {
  //   showModal(data[0]);
  // }

  // 각 카드 클릭 시 모달 업데이트
  for (let i = 0; i < 20; i++) {
    const card = document.querySelector(`#card_${i}`);
    if (card) {
      card.addEventListener("click", () => {
        showModal(data[i]);
      });
    }
  }
};

recentModal();

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

// topRated 모달창
const topRatedModal = async function () {
  const data = await fetchMovies(topRated);

  const topModal = document.querySelector("#top_rated_modal");

  for (let i = 0; i < 20; i++) {
    const card2 = document.querySelector(`#card2_${i}`);
    card2.addEventListener("click", () => {
      const top = data[i];
      const topModalVote = top.vote_average.toFixed(1);
      const img = top.backdrop_path;

      document.body.style.overflow = "hidden";
      topModal.classList.remove("hide");
      topModal.innerHTML += `
        <div class = "top_rated_modal_wrap" style = "background-image: url('https://image.tmdb.org/t/p/original/${img}')" >
          <i id = "close_modal2" class="fa-solid fa-xmark"></i>
          <div class = "top_rated_modal_desc">
            <p class="top_rated_modal_star">RATING${topModalVote}/10</p>
            <p class="top_rated_modal_genre">${top.genre_ids}</p>
            <p class="top_rated_modal_title">${top.title}</p>
            <p class="top_rated_modal_original_title">${top.original_title}</p>
            <p class="top_rated_modal_date">${top.release_date}</p>
            <p class="top_rated_modal_summary">${top.overview}</p>
          </div>
        </div>`;

      // 모달 닫기
      const closeModal = document.querySelector("#close_modal2");
      closeModal.addEventListener("click", () => {
        topModal.classList.add("hide");
        document.body.style.overflow = "auto";
        topModal.innerHTML = "";
      });
    });
  }
};

topRatedModal();
