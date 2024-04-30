import {Navigate, Route, Routes} from 'react-router-dom';
import SharedLayout from 'components/SharedLayout/SharedLayout';
import ErrorPage from 'pages/ErrorPage/ErrorPage';
import {lazy, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {auth} from "./firebase.js";
import {setUser} from "./redux/auth/authSlice.js";
import {selectIsLoggedIn} from "./redux/auth/selectors.js";
import {PrivateRoute} from "./components/PrivateRoute.jsx";

const HomePage = lazy(() => import('./pages/HomePage/HomePage.jsx'));
const FavoritePage = lazy(() => import('./pages/FavoritePage/FavoritePage.jsx'));
const DetailsPage = lazy(() => import('./pages/DetailsPage/DetailsPage.jsx'))

function App() {
    const dispatch = useDispatch();
    const isLoggedId = useSelector(selectIsLoggedIn);

    useEffect(() => {
        if (!isLoggedId){
            auth.onAuthStateChanged((user) => {
                if (user !== null) {
                    const {email, displayName, uid} = user
                    dispatch(setUser({displayName, email, uid}))
                }
            });
        }
    }, [auth]);


    return (
        <Routes>
            <Route path="/" element={<SharedLayout />}>
                <Route path="/" element={<HomePage />} />
                <Route path="/:filmId" element={<DetailsPage />} />
                <Route
                    path="/favorite"
                    element={
                        <PrivateRoute redirectTo="/" component={<FavoritePage />} />
                    }
                />
                <Route path="*" element={<Navigate to="/404" />} />
            </Route>
            <Route path="*" element={<ErrorPage />} />
        </Routes>
    );
}
export default App;
