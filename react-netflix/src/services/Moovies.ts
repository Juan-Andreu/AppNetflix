import { AxiosResponse } from 'axios';
import clienteAxios from "./Axios";
import Movie from '../model/movie-model';

export const getAllMovie = async () => {
    try {
      const respuesta: AxiosResponse<any, any> = await clienteAxios.get('/moovies');
      return respuesta.data;
    } catch (err) {
      throw new Error('Error consultando peliculas');
    }
}

export const deleteMovie = async (id:number) => {
    try {
      const respuesta: AxiosResponse<any, any> = await clienteAxios.delete('/moovies/'+id);
      return respuesta.status;
    } catch (err) {
      throw new Error('Error consultando peliculas');
    }
  }

  export const patchMovie = async (peliculaActualizada: Movie) => {
    try {
      const respuesta: AxiosResponse<any, any> = await clienteAxios.patch(`/moovies/${peliculaActualizada.id}`,peliculaActualizada);
      return respuesta.data;
    } catch (err) {
      throw new Error('Error consultando peliculas');
    }
  }
