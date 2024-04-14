import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import {Header} from "../Header/Header.jsx";

const SharedLayout = () => {
  return (
    <>
      <Header />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default SharedLayout;
