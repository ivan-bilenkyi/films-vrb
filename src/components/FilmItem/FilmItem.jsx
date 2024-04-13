import {Link, useLocation} from "react-router-dom";
//
// {
//     "id": 5,
//     "title": "Schindler's List",
//     "description": "The story of Oskar Schindler, who saved the lives of thousands of Jews during the Holocaust.",
//     "rating": 8.9,
//     "release_date": "1993-12-15",
//     "genre": [
//     "historical drama",
//     "war"
// ],
//     "actors": [
//     "Liam Neeson",
//     "Ben Kingsley",
//     "Ralph Fiennes"
// ],
//     "director": "Steven Spielberg",
//     "image": "https://upload.wikimedia.org/wikipedia/en/3/38/Schindler%27s_List_movie.jpg"
// },


export const FilmItem = ({item}) => {
    const location = useLocation();
    const {id, title, genre, image} = item
    console.log(item)
    return (
        <li>
            <Link to={`/${id}`} state={{from: location}}>
                <div>
                    <img src={image} alt={title}/>
                </div>
            </Link>
        </li>
    )
}