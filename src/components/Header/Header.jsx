import {
    StyledHeader, StyledList, StyledNav, StyledNavLink,
} from './Header.styled';
import {Container} from "../Global.styled.js";
import {AuthNav} from "../AuthNav/AuthNav.jsx";
import {useAuth} from "../hooks/index.js";

export const Header = () => {
    const { isLoggedIn } = useAuth();

  return (
      <StyledHeader>
          <Container>
              <StyledNav>
                  <StyledList>
                      <li>
                          <StyledNavLink to="/">Home</StyledNavLink>
                      </li>
                      {isLoggedIn &&
                          <li>
                            <StyledNavLink to="/favorite">Favorite</StyledNavLink>
                          </li>
                      }
                  </StyledList>
              </StyledNav>
              <AuthNav/>
          </Container>
      </StyledHeader>
  );
};
