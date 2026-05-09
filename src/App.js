import './App.css';
import Layout from './components/layout';
import Home from './components/home/Home';
import api from './api/axiosconfig';
import {useState, useEffect} from 'react';
import {Routes, Route} from 'react-router-dom';

function App() {

  const [movies, setMovies] = useState();
  const getMovies = async () => {
    try {
      console.log('Fetching movies...');
      const response = await api.get('/api/v1/movies');
      console.log(response.data);
      setMovies(response.data);
    } catch (error) {
      console.error('Error fetching movies:', error);
    }
  }

  useEffect(() => {
    getMovies();
  }, [])

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route path='/' element={<Home movies={movies}/>}></Route>
        </Route>


      </Routes>
    </div>
  );
}

export default App;

