'use client'
import './App.css';
import { getAllMovie, patchMovie, deleteMovie } from './services/Moovies';
import { useEffect, useState } from 'react';
import Movie from './model/movie-model';

export function App() {

  const [Moovies, setpeliculas] = useState<Movie[]>([]);


  const cargarPeliculas = async () => {
    const rtaPeliculas = await getAllMovie();
    setpeliculas(rtaPeliculas);
  }

  const eliminarPelicula = async (id: number) => {
    const rtaEliminarPeliculas = await deleteMovie(id);
    if (rtaEliminarPeliculas == 200) {
      cargarPeliculas();
    }
  }

  const modificarPeli = async (movie: Movie) => {
    const resp = await patchMovie(movie);
    console.log(resp);
    const peliculasAct = await getAllMovie();
    console.log(peliculasAct)
    setpeliculas(peliculasAct);
  }
  
  useEffect(() => {
    cargarPeliculas();
  }, []);

  return (
    <main className={styles.main}>
    <div className={styles.description}>
      <CardPeliculas modificarPeli= {(pelicula:Movie) => modificarPeli(pelicula)} eliminarPelicula ={(id:number) => eliminarPelicula(id)} peliculas = {Moovies} ></CardPeliculas>
    </div>
  </main>
  )
}

export default App;


