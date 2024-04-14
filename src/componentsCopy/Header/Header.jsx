import {
    StyledHeader, StyledList, StyledNav, StyledNavLink,
} from './Header.styled';
import SearchInput from "../SearchInput/SearchInput.jsx";
import {Container} from "../Global.styled.js";

export const Header = () => {

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

              <div>
                  <SearchInput />
              </div>
          </Container>

      </StyledHeader>
  );
};
