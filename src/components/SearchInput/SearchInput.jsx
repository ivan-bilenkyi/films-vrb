import {useState} from 'react';
import {StyledInput} from "./SearchInput.styled.js";

export default function SearchInput({onChange, films}) {
    const [searchTitle, setSearchTitle] = useState('');

    const handleSearchChange = (e) => {
        const value = e.target.value;
        setSearchTitle(value);
        const filtered = films.filter(film => film.title.toLowerCase().includes(value.toLowerCase().trim()));
        onChange(filtered);
    };

    return (
        <StyledInput
            type="text"
            value={searchTitle}
            onChange={handleSearchChange}
            placeholder="Search"
        />
    );
}
