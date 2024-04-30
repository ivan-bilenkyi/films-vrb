import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import {Header} from "../Header/Header.jsx";
import {Toaster} from "react-hot-toast";

const SharedLayout = () => {
  return (
    <>
        <Header />
        <Suspense fallback={null}>
            <Outlet />
        </Suspense>
        <Toaster position="top-right" reverseOrder={false} />
    </>
  );
};

export default SharedLayout;
