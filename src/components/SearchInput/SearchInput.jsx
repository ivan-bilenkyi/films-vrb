import {StyledInput} from "./SearchInput.styled.js";
import {useDispatch, useSelector} from "react-redux";
import {setFilter} from "../../redux/filterSlice/filterSlice.js";
import {selectFilter} from "../../redux/filterSlice/selectors.js";

export default function SearchInput() {
    const dispatch = useDispatch();
    const filter = useSelector(selectFilter);

    const onChangeFilter = event => {
        const {value} = event.currentTarget;
        const query = value.trim();
        dispatch(setFilter({ key: 'filter', value: query }));

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
