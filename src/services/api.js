import axios from 'axios';

axios.defaults.baseURL = "https://66198904125e9bb9f29a37a3.mockapi.io/films";


export async function getAllFilms() {
    try {
        const {data} = await axios();
        return data;
    } catch (error){
        console.log(error)
    }

};
