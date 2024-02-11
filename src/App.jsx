import { useEffect, useState } from 'react'
import './App.css'
import { Layout, Typography, Spin  } from 'antd';
import MovieList from './components/MovieList';
import MovieListInput from './components/MovieListInput';
import TitleHeaderComponent from './components/title/TitleHeaderComponent';
import AddFavourite from './components/AddFavourite';
import RemoveFavourites from './components/RemoveFavourites';

const { Title } = Typography;


const headerStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  textAlign: 'center',
  color: '#fff',
  height: 64,
  paddingInline: 48,
  lineHeight: '64px',
};

const contentStyle = {
  padding: '10px 50px',
  textAlign: 'center',
  minHeight: 0,
  lineHeight: '120px',
  color: '#fff',
  backgroundColor: '#001529',
  display: 'flex',
  flexDirection: 'row',
  gap: '20px', 
  justifyContent: 'start', 
  alignItems: 'start',
  overflowX: 'auto',
  flexWrap: 'nowrap'
};

function App() {
  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [favourites, setFavourites] = useState([]);

  const getMovieRequest = async (searchValue) => {
    const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=85741de0`;

    try {
      const response = await fetch(url);
      const responseJSON = await response.json();

      if (responseJSON.Search) {
        setMovies(responseJSON.Search);
      } else {
        setMovies([]);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
      setMovies([]);
    } 
  };

  useEffect(() => {
    getMovieRequest(searchValue);
  }, [searchValue]);

  useEffect(() => {
    const movieFavourites = JSON.parse(
      localStorage.getItem('react-movie-app-favourites')
    )

    setFavourites(movieFavourites)
  }, [])

  const saveToLocalStorage = (items) => {
      localStorage.setItem('react-movie-app-favourites', JSON.stringify(items))
  }

  const addFavouriteMovie = (movie) => {
    const newFavouriteList = [...favourites, movie];
    setFavourites(newFavouriteList);
    saveToLocalStorage(newFavouriteList);
  }

  const removeFavouritesMovie = (movie) => {
    const newFavouriteList = favourites.filter(favourite => favourite.imdbID !== movie.imdbID);
    setFavourites(newFavouriteList);
    saveToLocalStorage(newFavouriteList);
  }


  return (
    <Layout>
        <Layout.Header style={headerStyle}>
          <TitleHeaderComponent title = 'MovieApp'/>
          <MovieListInput placeholder = "Find something" searchValue = {searchValue} setSearchValue = {setSearchValue}/> 
        </Layout.Header>
        <Layout>
          
          <Layout.Content style={contentStyle} className='movie-container' >
             <MovieList movies = {movies} handleFavouritesClick = {addFavouriteMovie} favouriteComponent = {AddFavourite}/>
          </Layout.Content>  
          <Layout.Content style={contentStyle} className='movie-container' >
            <TitleHeaderComponent title = 'Favourites'/>
          </Layout.Content>
          <Layout.Content style={contentStyle} className='movie-container'>
          <MovieList movies = {favourites} handleFavouritesClick = {removeFavouritesMovie} favouriteComponent = {RemoveFavourites}/>
          </Layout.Content>
        </Layout>
        
        
    </Layout>
      

  )
}

export default App
