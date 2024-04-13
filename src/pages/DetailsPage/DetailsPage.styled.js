import styled from "styled-components";
import {Link} from "react-router-dom";

export const StyledBackLink = styled(Link)`
text-decoration: none;
display: block;
margin: 40px 0;
text-align: center;
color: #22389e;

&:hover {
    color: #c92d2d;
}
`;