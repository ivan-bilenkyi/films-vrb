import {
    StyledHeader, StyledList, StyledNav, StyledNavLink,
} from './Header.styled';

export const Header = () => {

  return (
      <StyledHeader>
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
      </StyledHeader>
  );
};
