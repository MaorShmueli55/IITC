import {utils} from "./utils.js";
import {API_KEY} from "./secret.js";

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

  const homePage = ()=>{
    saveTheData();
  }

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
    inputTitleValue.value = ``;
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
    inputIdValue.value = ``;
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

  export const movieService={
    saveTheData,
    homePage,
    topRated,
    searchByName,
    getMovieById,
    addToFav,
    renderFav,
  }
