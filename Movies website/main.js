import {API_KEY} from "./secret.js";
import {utils} from "./utils.js";

const MOVIE_STORAGE_KEY = "movie"
const favArr =  utils.getFromStorage(MOVIE_STORAGE_KEY) || [];
const orderList = utils.getFromStorage(MOVIE_STORAGE_KEY) || [];

let mainPage = 1;
let topPage = 1;
let onFavorite = false;
let onTopRated = false;
const orderEl = document.querySelector(".order");
const containerEl = document.querySelector(".container");
const topRateEl = document.querySelector(".topRate");
const searchNameBtn = document.querySelector(".searchNameBtn");
const searchIdBtn = document.querySelector(".searchIdBtn");
const favoriteBtn = document.querySelector(".favorite");
const iconBtn = document.querySelector(".icon");
const titleEl = document.querySelector("h1");
const buttonListEl = document.querySelector(".pages");
const ordersBtn = document.querySelector(".orders");
const showOrder = document.querySelector(".showOrder");
const searchEl = document.querySelector(".search");
const inputTitleValue = document.querySelector(".inputTitle");
const inputIdValue = document.querySelector(".inputId");


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
      if(response.data.results.length){
        renderMovie(response.data.results);
      }else{
        containerEl.innerHTML = `This movie does not exist`
      }
    } catch(error){
      console.log(error);
      
    }
    inputTitleValue.value = ``;
  };

  const getMovieById = async (id) =>{
    try{
      const response = await axios.get(
       `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`
      );
      return response.data;
    } catch(error){
      console.log(error);
      
    }
    inputIdValue.value = ``;
  };

  const addToFav = async (movieId, add , remove)=>{
    add.classList.toggle("hidden")
    remove.classList.toggle("hidden")
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
      utils.saveToStorage(MOVIE_STORAGE_KEY , orderList)
      orderMovieEl.innerHTML = `Your order has been received in the system!`
      setTimeout(function(){
        saveTheData();
        buttonListEl.classList.remove("hidden");
        searchEl.classList.remove("hidden");
        titleEl.textContent = "HOME PAGE";
      }, 3000)
      
      
    })
    orderEl.appendChild(orderMovieEl)
  };

function getOrders(){
  containerEl.innerHTML = ``;
  if(orderList.length === 0){
    showOrder.innerHTML = `
    <div>No existing orders</div>
    `
  }else{
    orderList.forEach((order)=>{
      const showOrderEl = document.createElement("div");
      showOrderEl.classList.add("showOrders")
      showOrderEl.innerHTML += `
      <div class = "nameOrder">${order.name}</div>
      <div><span>City:</span> ${order.city}</div>
      <div><span>Date:</span> ${order.date}</div>
      <div><span>Hour:</span> ${order.hour}</div>
      `
      showOrder.appendChild(showOrderEl);
    })
  }
}

function updateFavBtn(add, remove, movie) {
    if (favArr.find(item => item.id === movie.id)) {
        add.classList.add("hidden")
        remove.classList.remove("hidden")
    }
}
  
  saveTheData();

  function renderMovie(data) {
    containerEl.innerHTML = ``;
    orderEl.innerHTML = ``;
    showOrder.innerHTML = ``;
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
                    <button class="fav"><span class = "add">Add to favorite</span> <span class = "remove hidden">Remove from favorite</span></button>
          `
          const favBtn = movieEl.querySelector(".fav");
          const add = movieEl.querySelector(".add");
          const remove = movieEl.querySelector(".remove");
          updateFavBtn(add, remove , movie);
          favBtn.addEventListener("click" , ()=>{
          addToFav(movie.id , add , remove);
         })

         const movieCardEl = movieEl.querySelector(".movieInner");
         movieCardEl.addEventListener("click" , ()=>{
          buttonListEl.classList.add("hidden");
          titleEl.textContent = "";
          searchEl.classList.add("hidden");
          orderMovie(movie.id);
        })
        containerEl.appendChild(movieEl)
      });
      console.log(data);
        
  };

  topRateEl.addEventListener("click" , ()=>{
    onFavorite = false;
    onTopRated = true;
    topPage = 1
    buttonListEl.classList.remove("hidden");
    searchEl.classList.add("hidden");
    titleEl.textContent = "TOP RARED";
    topRated();
  });
  
  searchNameBtn.addEventListener("click" , ()=>{
    onFavorite = false;
    buttonListEl.classList.add("hidden");
    searchByName(inputTitleValue.value);
  });

  searchIdBtn.addEventListener("click" , async ()=>{
    onFavorite = false;
    buttonListEl.classList.add("hidden");
    const data = []
    if(await getMovieById(inputIdValue.value)){ 
     data.push(await getMovieById(inputIdValue.value));
     renderMovie(data);
    }else{
      containerEl.innerHTML = `This movie does not exist`
    }
    inputIdValue.value = ``;
  });
  
  favoriteBtn.addEventListener("click" , async ()=>{
    onFavorite = true;
    onTopRated = false;
    titleEl.textContent = "FAVORITE";
    buttonListEl.classList.add("hidden");
    searchEl.classList.add("hidden");
    renderFav();
  });

  iconBtn.addEventListener("click" , async ()=>{
    onFavorite = false;
    onTopRated = false;
    mainPage = 1
    buttonListEl.classList.remove("hidden");
    searchEl.classList.remove("hidden");
    titleEl.textContent = "HOME PAGE";
    homePage();
  });

  buttonListEl.addEventListener("click" , function(e){
    if (e.target.tagName === 'BUTTON'){ 
    if(!onTopRated){
      mainPage = e.target.textContent;
      saveTheData()
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      })
    }else{
      topPage = e.target.textContent;
      topRated()
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      })
    }
  }
  })

  ordersBtn.addEventListener("click" , ()=>{
    titleEl.textContent = "ORDERS";
    buttonListEl.classList.add("hidden");
    searchEl.classList.add("hidden");
    getOrders();
  })


 