import {API_KEY} from "./secret.js";
import {utils} from "./utils.js";

const MOVIE_STORAGE_KEY = "movie"
const favArr =  utils.getFromStorage(MOVIE_STORAGE_KEY) || [];

let onFavorite = false;
const containerEl = document.querySelector(".container");
const topRateEl = document.querySelector(".topRate");
const searchNameBtn = document.querySelector(".searchNameBtn");
const searchIdBtn = document.querySelector(".searchIdBtn");
const favoriteBtn = document.querySelector(".favorite");
const iconeBtn = document.querySelector(".icone");

const homePage = ()=>{
  saveTheData();
}

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

  const topRated = async () =>{
    try{
      const response = await axios.get(
       `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`
      );
      renderMovie(response.data.results);
    } catch(error){
      console.error(error.message);
    }
  };

  const searchByName = async (title) =>{
    try{
      const response = await axios.get(
       `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${title}`
      );
      renderMovie(response.data.results);
    } catch(error){
      console.error(error.message);
    }
  };

  const getMovieById = async (id) =>{
    try{
      const response = await axios.get(
       `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`
      );
      return response.data;
    } catch(error){
      console.error(error.message);
    }
  };


  const addToFav = async (movieId)=>{
    let find = favArr.findIndex((movie)=>{
      return movie.id === movieId;
    })
    if(find===-1){
      favArr.push(await getMovieById(movieId));
    } else{
      favArr.splice(find , 1);
      if(onFavorite){
        renderFav(favArr)
      }
    }
    utils.saveToStorage(MOVIE_STORAGE_KEY , favArr)
  }
  
  const renderFav = ()=>{
    renderMovie(favArr);
  };
  
  saveTheData();

  function renderMovie(data) {
    containerEl.innerHTML = ``;
    data.forEach(movie => {
      const movieEl=document.createElement("div")
      movieEl.classList.add("movieCard")
      movieEl.innerHTML += `
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
          `
         const favBtn = movieEl.querySelector(".fav");
         favBtn.addEventListener("click" , ()=>{
          addToFav(movie.id);
         })
         containerEl.appendChild(movieEl)
        });
   console.log(data);
  };
  


  topRateEl.addEventListener("click" , ()=>{
    topRated();
  });
  
  searchNameBtn.addEventListener("click" , ()=>{
    const inputTitleValue = document.querySelector(".inputTitle").value;
    searchByName(inputTitleValue);
  });

  searchIdBtn.addEventListener("click" , async ()=>{
    const inputIdValue = document.querySelector(".inputId").value;
    const data = []
    data.push(await getMovieById(inputIdValue));
    renderMovie(data);
  });
  
  favoriteBtn.addEventListener("click" , async ()=>{
    onFavorite = true;
    renderFav();
  });

  iconeBtn.addEventListener("click" , async ()=>{
    homePage();
  });



  
 
  
  
  