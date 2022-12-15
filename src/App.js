import { useEffect, useState } from 'react';
import './App.css';
import MovieCard from './MovieCard';

function App() {
  const API_URL =
    'https://api.themoviedb.org/3/movie/popular?api_key=fa1192549721df01a1fb28a7788e6608';

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => setMovies(data.results));
  }, []);

  console.log(movies);

  return (
    <div className="App">
      <div className="search_nav">
        <div>
          <h1>Movies</h1>
        </div>

        <div>
          <form>
            <input />
            <button>Search</button>
          </form>
        </div>
      </div>

      <div className="movies">
        {movies.map((movie) => (
          <MovieCard />
        ))}
      </div>
    </div>
  );
}

export default App;
