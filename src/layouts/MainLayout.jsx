import { useState } from 'react';
import Sidebar from '../components/Sidebar';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import MainHeader from '../components/MainHeader/MainHeader';

const MainLayout = () => {

  return (
    <>
    <MainHeader/>
    <Outlet/>
    </>
  );
};

export default MainLayout;
