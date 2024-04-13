import axios from 'axios';

axios.defaults.baseURL = "https://66198904125e9bb9f29a37a3.mockapi.io/films";


export async function getAllFilms() {
    try {
        const {data} = await axios();
        console.log(data)
        return data;
    } catch (error){
        console.log(error)
    }

};

// export async function searchMovies(query) {
//     const response = await axios(`/search/movie?api_key=${API_KEY}&query=${query}`);
//     return response.data;
// };
//
// export async function getDetails(movieId) {
//     const response = await axios(`/movie/${movieId}?api_key=${API_KEY}`);
//     return response.data;
// };
//
// export async function getActors(movieId) {
//     const response = await axios(`/movie/${movieId}/credits?api_key=${API_KEY}`);
//     return response.data;
// };
//
// export async function getReviews(movieId) {
//     const response = await axios(`/movie/${movieId}/reviews?api_key=${API_KEY}`);
//     return response.data;
// };