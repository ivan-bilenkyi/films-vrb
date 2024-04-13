import {
  StyledHeader, StyledList, StyledNavLink,
} from './Header.styled';

export const Header = () => {

  return (
      <StyledHeader>
        <nav>
          <StyledList>
            <li>
              <StyledNavLink to="/">Home</StyledNavLink>
            </li>
            <li>
              <StyledNavLink to="favorite">Favorite</StyledNavLink>
            </li>
          </StyledList>
        </nav>
      </StyledHeader>
  );
};
