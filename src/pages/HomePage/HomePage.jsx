import {useEffect, useState} from "react";
import {getAllFilms} from "../../services/api.js";
import {useLocation} from "react-router-dom";
import {FilmsList} from "../../components/FilmsList/FilmsList.jsx";
import {Container} from "../../components/Global.styled.js";


export default function HomePage() {

    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [films, setFilms] = useState([]);
    const location = useLocation();

    useEffect(() => {
        console.log(films)
        const getFilms = async () => {
            setIsLoading(true)
            try {
                const results = await getAllFilms()
                setFilms(results)
            } catch (error) {
                setError(error)
            } finally {
                setIsLoading(false)
            }
        }
        getFilms()
    }, [])


    return (
        <Container>
            <FilmsList films={films}/>
        </Container>
    )
}