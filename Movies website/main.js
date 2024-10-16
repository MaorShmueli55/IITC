import {API_KEY} from "./secret.js";
import {utils} from "./utils.js";

const MOVIE_STORAGE_KEY = "movie"
const favArr =  utils.getFromStorage(MOVIE_STORAGE_KEY) || [];

let mainPage = 1;
let topPage = 1;
let onFavorite = false;
let onTopRated = false;
const containerEl = document.querySelector(".container");
const topRateEl = document.querySelector(".topRate");
const searchNameBtn = document.querySelector(".searchNameBtn");
const searchIdBtn = document.querySelector(".searchIdBtn");
const favoriteBtn = document.querySelector(".favorite");
const iconBtn = document.querySelector(".icon");
const pageOne = document.querySelector(".one");
const pageTwo = document.querySelector(".two");
const pageTree = document.querySelector(".three");
const titleEl = document.querySelector("h1");
const buttonListEl = document.querySelector(".pages")
const movieInfoEl = document.querySelector(".movieInfo")


const homePage = ()=>{
  saveTheData();
}

const saveTheData = async () => {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=${mainPage}`
      );
      renderMovie(response.data.results);
    } catch (error) {
      console.error(error.message);
    }
  };

  const topRated = async () =>{
    try{
      const response = await axios.get(
       `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US&page=${topPage}`
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
                      <a href="img.html"><img class = "imgCard" src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt=""></a>
                  </div>
                  <div class="movieBack">
                      <a href="img.html"><div class="movieAbout">${movie.overview}</div></a>
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

     
         
         movieEl.addEventListener("click" , ()=>{
         const movieii=document.createElement("div")
         movieii.innerHTML = `
          <h1>${movie.title}</h1>
          <img src="${movie.backdrop_path}" alt="">
          <p>${movie.overview}</p>
          <p>Rating: ${movie.vote_average}</p>
          <p>release date: ${movie.releas_date}</p>
            `   
         })

         movieInfoEl.appendChild(movieii)
         containerEl.appendChild(movieEl)
        });
   console.log(data);
  };
  


  topRateEl.addEventListener("click" , ()=>{
    onFavorite = false;
    onTopRated = true;
    buttonListEl.classList.remove("hidden");
    titleEl.textContent = "TOP RARED";
    topRated();
  });
  
  searchNameBtn.addEventListener("click" , ()=>{
    onFavorite = false;
    buttonListEl.classList.add("hidden");
    const inputTitleValue = document.querySelector(".inputTitle").value;
    searchByName(inputTitleValue);
  });

  searchIdBtn.addEventListener("click" , async ()=>{
    onFavorite = false;
    buttonListEl.classList.add("hidden");
    const inputIdValue = document.querySelector(".inputId").value;
    const data = []
    data.push(await getMovieById(inputIdValue));
    renderMovie(data);
  });
  
  favoriteBtn.addEventListener("click" , async ()=>{
    onFavorite = true;
    onTopRated = false;
    titleEl.textContent = "FAVORITE";
    buttonListEl.classList.add("hidden");
    renderFav();
  });

  iconBtn.addEventListener("click" , async ()=>{
    onFavorite = false;
    onTopRated = false;
    buttonListEl.classList.remove("hidden");
    titleEl.textContent = "HOME PAGE";
    homePage();
  });

  pageOne.addEventListener("click" , ()=>{
    if(!onTopRated){
    mainPage = 1;
    saveTheData()
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  }else{
    topPage = 1;
    topRated()
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  }
  }); 

  pageTwo.addEventListener("click" , ()=>{
    if(!onTopRated){
      mainPage = 2;
      saveTheData()
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      })
    }else{
      topPage = 2;
      topRated()
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      })
    }
  }); 

  pageTree.addEventListener("click" , ()=>{
    if(!onTopRated){
      mainPage = 3;
      saveTheData()
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      })
    }else{
      topPage = 3;
      topRated()
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      })
    }
  }); 


  
 
  
  
  