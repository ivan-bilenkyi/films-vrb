import axios from 'axios';

axios.defaults.baseURL = "https://66198904125e9bb9f29a37a3.mockapi.io";
// axios.defaults.baseURL = "https://656f7b686529ec1c6237f417.mockapi.io";


export async function getAllFilms() {
    try {
        const { data } = await axios.get('/films');
        console.log(data)
        return data;
    } catch (error) {
        console.log(error)
    }
}

export const getFilmById = async (id) => {
    try {
        const {data} = await axios.get(`/films/${id}`)
        console.log(data)
        return data;
    }catch (e){
        console.log(e)
    }
}

export const updateFilmById = async (filmId, value) => {
    try {
        const { data } = await axios.put(`/films/${filmId}`, { ...value }); // Використовуйте метод .put та передайте URL для оновлення фільму та дані для оновлення
        console.log(data)
    } catch (error) {
        console.log(error)
    }
}
