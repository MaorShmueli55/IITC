import {API_KEY} from "./secret.js";
import {utils} from "./utils.js";

const MOVIE_STORAGE_KEY = "movie"
const favArr =  utils.getFromStorage(MOVIE_STORAGE_KEY) || [];

let mainPage = 1;
let topPage = 1;
let onFavorite = false;
let onTopRated = false;
let orderList = [];
const orderEl = document.querySelector(".order");
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

  const orderMovie = async (movieId)=>{
    const movie = await getMovieById(movieId)
    const today = new Date().toISOString().split('T')[0];
    const orderMovieEl = document.createElement("div");
    orderMovieEl.classList.add("orderMovie")
    containerEl.innerHTML = ``;
    orderMovieEl.innerHTML = `
    <div class = "OrderImg">
       <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="">
    </div>
       <div class = "movieDetails">
       <div class = "OrderTitle">${movie.title}</div>
       <div class = "OrderInfo">${movie.overview}</div>
       <div class = "OrderRating"><span>Rating:</span>${movie.vote_average}</div>
           <div class="orderDetails">
        <form>
            <h2>Order a movie</h2>
            <label for="city">City:</label>
            <select name="city" id="city">
                <option value=""></option>
                <option value="Rishon LeZion">Rishon LeZion</option>
                <option value="Tel Aviv">Tel Aviv</option>
                <option value="Jerusalem">Jerusalem</option>
                <option value="Haifa">Haifa</option>
                <option value="Netanya">Netanya</option>
            </select>
            <label for="date">Date:</label>
            <input type="date" id="date" min = ${today}        
            placeholder="Enter a date"
            required>
            <label for="hour">Hour:</label>
            <select name="hour" id="hour">
                <option value="10:00">10:00</option>
                <option value="11:00">11:00</option>
                <option value="12:00">12:00</option>
                <option value="13:00">13:00</option>
                <option value="14:00">14:00</option>
                <option value="15:00">15:00</option>
                <option value="16:00">16:00</option>
                <option value="17:00">17:00</option>
                <option value="18:00">18:00</option>
                <option value="19:00">19:00</option>
                <option value="20:00">20:00</option>
                <option value="21:00">21:00</option>
                <option value="22:00">22:00</option>
                <option value="23:00">23:00</option>
                <option value="00:00">24:00</option>
            </select>
            <button class = "orderBtn" >Order</button>
        </form>
    </div>
    </div>
    `

    const orderBtn = orderMovieEl.querySelector("form")
    const city = orderMovieEl.querySelector("#city");
    const date = orderMovieEl.querySelector("#date");
    const hour = orderMovieEl.querySelector("#hour");
    orderBtn.addEventListener("submit" , function(e){ 
      e.preventDefault();
      const order = {
          name:movie.title,
          city: city.value,
          hour: hour.value,
          date: date.value
      };
      orderList.push(order);
      orderMovieEl.innerHTML = `Your order has been received in the system!`
      setTimeout(function(){
        saveTheData();
        titleEl.textContent = "HOME PAGE";
      }, 3000)
      
      console.log(orderList);
      
    })
    orderEl.appendChild(orderMovieEl)
  };
  
  saveTheData();

  function renderMovie(data) {
    containerEl.innerHTML = ``;
    orderEl.innerHTML = ``;
    data.forEach(movie => {
      const movieEl = document.createElement("div")
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
                    <button class="fav">⭐</button>
          `
         const favBtn = movieEl.querySelector(".fav");
         favBtn.addEventListener("click" , ()=>{
          addToFav(movie.id);
         })

         const movieCardEl = movieEl.querySelector(".movieInner");
         movieCardEl.addEventListener("click" , ()=>{
          buttonListEl.classList.add("hidden");
          titleEl.textContent = "";
          orderMovie(movie.id);
         })


         containerEl.appendChild(movieEl)
        });

   console.log(data);
   console.log(orderList);
   
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


  
 
  
  
  