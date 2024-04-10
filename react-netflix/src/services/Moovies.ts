import clienteAxios from "./Axios";

export const getMovies = () =>{
    try {
        const response = Promise.resolve(clienteAxios.get('/movies'))
        console.log(response);
        return response;
    } catch (error) {
        console.log(error)
    }
}