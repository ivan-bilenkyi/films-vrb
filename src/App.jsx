import {Route, Routes} from 'react-router-dom';
import SharedLayout from 'components/SharedLayout/SharedLayout';
import ErrorPage from 'pages/ErrorPage/ErrorPage';
import {lazy} from "react";
import {PrivateRoute} from "./components/PrivateRoute.jsx";

const HomePage = lazy(() => import('./pages/HomePage/HomePage.jsx'));
const FavoritePage = lazy(() => import('./pages/FavoritePage/FavoritePage.jsx'));
const DetailsPage = lazy(() => import('./pages/DetailsPage/DetailsPage.jsx'))

function App() {

    return (
        <Routes>
            <Route path="/" element={<SharedLayout />}>
                <Route path="/" element={<HomePage />} />
                <Route path="/:filmId" element={<DetailsPage />} />
                <Route
                    path="/favorite"
                    element={<PrivateRoute redirectTo="/" component={FavoritePage} />}
                />
            </Route>
            <Route path="*" element={<ErrorPage />} />
        </Routes>

    );
}
export default App;
