import { useEffect, useState } from "react";
import { getAllFilms } from "../../services/api.js";
import { useLocation } from "react-router-dom";
import { FilmsList } from "../../components/FilmsList/FilmsList.jsx";
import { Container } from "../../components/Global.styled.js";
import SearchInput from "../../components/SearchInput/SearchInput.jsx";

export default function HomePage() {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [films, setFilms] = useState([]);
    const [filteredFilms, setFilteredFilms] = useState([]);

    const location = useLocation();

    useEffect(() => {
        const getFilms = async () => {
            setIsLoading(true);
            try {
                const results = await getAllFilms();
                setFilms(results);
                setFilteredFilms(results);
            } catch (error) {
                setError(error);
            } finally {
                setIsLoading(false);
            }
        };
        getFilms();
    }, []);

    return (
        <Container>
            <SearchInput onChange={setFilteredFilms} films={films} />
            <FilmsList films={filteredFilms} />
        </Container>
    );
}
