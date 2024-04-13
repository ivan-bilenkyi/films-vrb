import {useLocation} from "react-router-dom";
import {useRef} from "react";
import {StyledBackLink} from "./DetailsPage.styled.js";
import {IoIosArrowBack} from "react-icons/io";

export default function DetailsPage () {

    const location = useLocation();
    const backLink = useRef(location);

    const item = location.state.item
    console.log(item)
    return <StyledBackLink to={backLink.current.state?.from ?? "/"}><IoIosArrowBack style={{ width: '16px', height: "16px", verticalAlign: 'bottom' }} /> Go back</StyledBackLink>
}