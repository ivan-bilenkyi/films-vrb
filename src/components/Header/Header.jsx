import {
    StyledHeader, StyledList, StyledNav, StyledNavLink,
} from './Header.styled';
import {Container} from "../Global.styled.js";
import {AuthNav} from "../AuthNav/AuthNav.jsx";


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
                          <StyledNavLink to="/favorite">Favorite</StyledNavLink>
                      </li>
                  </StyledList>
              </StyledNav>
              <AuthNav/>
          </Container>
      </StyledHeader>
  );
};
