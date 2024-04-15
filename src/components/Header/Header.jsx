import {
    StyledHeader, StyledList, StyledNav, StyledNavLink, Wrapper,
} from './Header.styled';
import SearchInput from "../SearchInput/SearchInput.jsx";
import {Container} from "../Global.styled.js";
import {EditButton} from "../../pages/DetailsPage/DetailsPage.styled.js";
import Modal from "../Modal/Modal.jsx";
import {createFilms, updateFilmById} from "../../redux/filmsSlice/operations.js";
import {useState} from "react";
import {useDispatch} from "react-redux";

export const Header = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const dispatch = useDispatch();


    const handleOpenModal = () => {
        setIsModalOpen(!isModalOpen);
    };

    const handleSubmit = (id, values) => {
        console.log(values)
        dispatch(createFilms(values))
    };

  return (
      <StyledHeader>
          <Container>
              <StyledNav>
                  <StyledList>
                      <li>
                          <StyledNavLink to="/">Home</StyledNavLink>
                      </li>
                      <li>
                          <StyledNavLink to="favorite">Favorite</StyledNavLink>
                      </li>
                  </StyledList>
              </StyledNav>

              <Wrapper>
                  <EditButton onClick={handleOpenModal}>Add Film</EditButton>
                  <SearchInput />
              </Wrapper>
              {isModalOpen && <Modal onClose={handleOpenModal} onSubmit={handleSubmit} /> }
          </Container>
      </StyledHeader>
  );
};
