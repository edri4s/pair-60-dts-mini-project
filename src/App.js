//import logo from './logo.svg'; 
import './App.css';
import React, { useEffect, useState } from "react";
import Home from './components/Home';

const POPULER_API = "https://api.themoviedb.org/3/movie/popular?api_key=eac2fb034a00cbefd16d1b4689d2543a&language=en-US";
const SEARCH_API = "https://api.themoviedb.org/3/search/movie?api_key=eac2fb034a00cbefd16d1b4689d2543a&query=";

function App() {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    getMovies(POPULER_API);
  }, [])

  const getMovies = (API) => {
    fetch(API)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setMovies(data.results);
      });
  }

  const handlerOnSubmit = (e) => {
    e.preventDefault();

    if (searchTerm) {
      getMovies(SEARCH_API + searchTerm)
      setSearchTerm('');
    }
  }

  const handlerOnChange = (e) => {
    setSearchTerm(e.target.value);
  }

  return (
    <>
      <header>
        <span className='identity'>PAIR-60 MOVIE</span>

        <span>
        </span>
        <form onSubmit={handlerOnSubmit}>
          <input className='search' type="search" placeholder='Search...' value={searchTerm} onChange={handlerOnChange} />
        </form>
      </header>

      <div className="movie-container">
        {movies.length > 0 && movies.map(movie => (
          <Home key={movie.id} {...movie} />
        ))}
      </div>
    </>
  );
}

export default App;
