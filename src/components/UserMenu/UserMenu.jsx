import { useDispatch } from 'react-redux';
import {logOut} from "../../redux/auth/operations.js";
import {useAuth} from "../hooks/index.js";
import {Button, Text, Wrapper} from "./UserMenu.styled.js";

export const UserMenu = () => {
    const dispatch = useDispatch();
    const { user } = useAuth();

    return (
        <Wrapper>
            <Text>Welcome, {user.name}</Text>
            <Button type="button" onClick={() => dispatch(logOut())}>
                Logout
            </Button>
        </Wrapper>
    );
};