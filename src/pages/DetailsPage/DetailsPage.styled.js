import styled from "styled-components";
import {Link} from "react-router-dom";

export const StyledBackLink = styled(Link)`
text-decoration: none;
display: block;
margin: 40px 0;
text-align: center;
color: #333333;

&:hover {
    color: red;
}
`;
