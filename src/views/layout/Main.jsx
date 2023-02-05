import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from './NavBar';

function Main() {
  return (
    <NavBar>
      <Outlet />
    </NavBar>
  );
}

export default Main; <h3>I am Main</h3>;
