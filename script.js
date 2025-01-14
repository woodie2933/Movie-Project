// // topRated 모달창
// const topRatedModal = async function () {
//   const data = await fetchMovies(topRated);

//   const topModal = document.querySelector("#top_rated_modal");

//   for (let i = 0; i < 20; i++) {
//     const card2 = document.querySelector(`#card2_${i}`);
//     card2.addEventListener("click", () => {
//       const top = data[i];
//       const topModalVote = top.vote_average.toFixed(1);
//       const img = top.backdrop_path;

//       document.body.style.overflow = "hidden";
//       topModal.classList.remove("hide");
//       topModal.innerHTML += `
//         <div class = "top_rated_modal_wrap" style = "background-image: url('https://image.tmdb.org/t/p/original/${img}')" >
//           <i id = "close_modal2" class="fa-solid fa-xmark"></i>
//           <div class = "top_rated_modal_desc">
//             <p class="top_rated_modal_star">RATING${topModalVote}/10</p>
//             <p class="top_rated_modal_genre">${top.genre_ids}</p>
//             <p class="top_rated_modal_title">${top.title}</p>
//             <p class="top_rated_modal_original_title">${top.original_title}</p>
//             <p class="top_rated_modal_date">${top.release_date}</p>
//             <p class="top_rated_modal_summary">${top.overview}</p>
//           </div>
//         </div>`;

//       // 모달 닫기
//       const closeModal = document.querySelector("#close_modal2");
//       closeModal.addEventListener("click", () => {
//         topModal.classList.add("hide");
//         document.body.style.overflow = "auto";
//         topModal.innerHTML = "";
//       });
//     });
//   }
// };

// topRatedModal();

// const recentModal = async function () {
//   const data = await fetchMovies(popular);
//   const nowModal = document.querySelector("#recent_modal");

//   function showModal(movie) {
//     const recentModalVote = movie.vote_average.toFixed(1);
//     const img = movie.backdrop_path;

//     document.body.style.overflow = "hidden";
//     nowModal.classList.remove("hide"); // 모달 항상 표시

//     nowModal.innerHTML = `
//       <div class="recent_modal_wrap" style="background-image: url('https://image.tmdb.org/t/p/original/${img}')">
//         <div class="shadow">
//           <i id="close_modal" class="fa-solid fa-xmark"></i>
//           <div class="recent_modal_desc">
//             <p class="recent_modal_star">RATING <span style = "font-size: 20px; color: #FFEB46">${recentModalVote}</span> / 10</p>
//             <p class="recent_modal_genre">${movie.genre_ids}</p>
//             <p class="recent_modal_title">${movie.title}</p>
//             <p class="recent_modal_original_title">${movie.original_title}</p>
//             <p class="recent_modal_date">${movie.release_date}</p>
//             <p class="recent_modal_summary">${movie.overview}</p>
//           </div>
//         </div>
//       </div>`;

//     // 닫기 버튼 이벤트 추가
//     const closeModal = document.querySelector("#close_modal");
//     closeModal.addEventListener("click", () => {
//       nowModal.classList.add("hide");
//       document.body.style.overflow = "auto";
//       nowModal.innerHTML = "";
//     });
//   }

//   // **초기 실행 시 첫 번째 영화 자동 표시**
//   // if (data.length > 0) {
//   //   showModal(data[0]);
//   // }

//   // 각 카드 클릭 시 모달 업데이트
//   for (let i = 0; i < 20; i++) {
//     const card = document.querySelector(`#card_${i}`);
//     if (card) {
//       card.addEventListener("click", () => {
//         showModal(data[i]);
//       });
//     }
//   }
// };

// recentModal();

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
//       nowModal.innerHTML += `
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

// recent 모달창
// const recentModal = async function () {
//   const data = await fetchMovies(popular);
//   const nowModal = document.querySelector("#recent_modal");

//   function showModal(movie) {
//     const recentModalVote = movie.vote_average.toFixed(1);
//     const img = movie.backdrop_path;

//     document.body.style.overflow = "hidden";
//     nowModal.classList.remove("hide"); // 모달 항상 표시

//     nowModal.innerHTML = `
//       <div class="recent_modal_wrap" style="background-image: url('https://image.tmdb.org/t/p/original/${img}')">
//         <div class="shadow">
//           <i id="close_modal" class="fa-solid fa-xmark"></i>
//           <div class="recent_modal_desc">
//             <p class="recent_modal_star">RATING <span style = "font-size: 20px; color: #FFEB46">${recentModalVote}</span> / 10</p>
//             <p class="recent_modal_genre">${movie.genre_ids}</p>
//             <p class="recent_modal_title">${movie.title}</p>
//             <p class="recent_modal_original_title">${movie.original_title}</p>
//             <p class="recent_modal_date">${movie.release_date}</p>
//             <p class="recent_modal_summary">${movie.overview}</p>
//           </div>
//         </div>
//       </div>`;

//     // 닫기 버튼 이벤트 추가
//     serTimeout(() => {
//       const closeModal = document.querySelector("#close_modal");
//       if (closeModal) {
//         closeModal.addEventListener("click", () => {
//           nowModal.classList.add("hide");
//           document.body.style.overflow = "auto";
//           nowModal.innerHTML = "";
//         });
//       }
//     }, 0);
//   }

//   // **초기 실행 시 첫 번째 영화 자동 표시**
//   if (data.length > 0) {
//     showModal(data[0]);
//   }

//   // 각 카드 클릭 시 모달 업데이트
//   for (let i = 0; i < 20; i++) {
//     const card = document.querySelector(`#card_${i}`);
//     if (card) {
//       card.addEventListener("click", () => {
//         showModal(data[i]);
//       });
//     }
//   }
// };

// recentModal();
