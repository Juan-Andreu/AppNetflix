import './App.css'
import { getMovies } from './services/Moovies'

function App() {

  const getAllMovie = () => {
    (getMovies())
  }

  return (
    <>
      <div className='App'>
      <button onClick={(getAllMovie)}>Buscar pelicula</button>
      </div>
    </>
  )
}

export default App
