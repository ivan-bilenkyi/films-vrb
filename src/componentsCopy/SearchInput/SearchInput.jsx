import {StyledInput} from "./SearchInput.styled.js";
import {useDispatch, useSelector} from "react-redux";
import {getFilter, setFilter} from "../../redux/filterSlice/filterSlice.js";

export default function SearchInput() {
    const dispatch = useDispatch();
    const filter = useSelector(getFilter);

    const onChangeFilter = event => {
        const {value} = event.currentTarget;
        const query = value.trim();
        dispatch(setFilter(query));

    }
    return (
        <StyledInput
            type="text"
            value={filter}
            onChange={onChangeFilter}
            placeholder="Search"
        />
    );
}
