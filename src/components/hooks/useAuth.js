import { useSelector } from 'react-redux';
import {
    selectUser,
    selectIsLoggedIn,
    selectIsLogOut,
} from '../../redux/auth/selectors';

export const useAuth = () => {
    const isLoggedIn = useSelector(selectIsLoggedIn);
    const user = useSelector(selectUser);
    const isLogOut = useSelector(selectIsLogOut)

    return {
        isLoggedIn,
        isLogOut,
        user,
    };
};