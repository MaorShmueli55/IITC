import {API_KEY} from "./secret.js";
const containerEl = document.querySelector(".container");

const saveTheData = async () => {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`
      );
      renderMovie(response.data.results);
    } catch (error) {
      console.error(error.message);
    }
  };
  
  saveTheData();

  function renderMovie(data) {
    data.forEach(movie => {
        containerEl.innerHTML += `
<div class="movieCard">
    <div class="movieInner">
        <div class="movieFront">
            <img class = "imgCard" src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="">
            </div>
            <div class="movieBack">
              <div class="movieAbout">${movie.overview}</div>
            </div>
            </div>
            <p>${movie.title}</p>
            <div class="rate"> <span>Rating:</span> ${movie.vote_average}</div>
            <button class="fav">Favorites</button>
</div>
        `
    });
    console.log(data);
  }

