import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import {Header} from "../Header/Header.jsx";
import {Toaster} from "react-hot-toast";

const SharedLayout = () => {
  return (
    <>
        <Suspense fallback={null}>
            <Header />
            <Outlet />
        </Suspense>
        <Toaster position="top-right" reverseOrder={false} />
    </>
  );
};

export default SharedLayout;
