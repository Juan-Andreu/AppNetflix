import Movie from '../model/movie-model';"
import './cardPelicula.css'
import { useEffect, useState } from "react";
import { getAllMovie, patchMovie } from '../services/Moovies'; 

export const CardPeliculas = (props: any) => {
  const { peliculas , eliminarPelicula, modificarPeli }: { peliculas: Pelicula[] , eliminarPelicula : Function, modificarPeli: Function} = props;
  const [mostrarForm, setMostrarForm] = useState<boolean>(false);
  const [peliculasMostrar, setPeliculas] = useState<Movie[]>(peliculas);

  const modificarPelicula = async (pelicula: Movie) => {
    /*await patchPelicula(pelicula);
    const peliculasAct = await getAllPeliculas();
    setPeliculas(peliculasAct);*/
    modificarPeli(pelicula);
  }

  useEffect(() => {
    setPeliculas(peliculas)
  }, [peliculas]);

  return (
    <>
      {peliculasMostrar.map((mv: Movie) => (
        <div className="card-peliculas d-flex flex-column align-items-center" key={mv.id}>
          {/* <img src={mv.imagen} className="card-img" alt={pl.imagen} /> */}
          <p>{mv.title}</p>
          <p>Sinopsis: {mv.synopsis}</p>

          <button onClick={() => eliminarPelicula(mv.id)}>Eliminar Pelicula</button>
          <button onClick={() => setMostrarForm(!mostrarForm)}>Modificar Pelicula</button>
            {mostrarForm && <FormModificarPelicula modificarPelicula ={(pelicula: Movie) => modificarPelicula(pelicula)}  pelicula ={mv}/>}
        </div>
      ))}
    </>
  )
}