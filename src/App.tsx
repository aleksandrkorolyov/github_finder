import {Route, Routes} from 'react-router-dom'
import React from 'react';

import './App.css';
import { Navigation } from './Components/Navigation';
import { HomePage } from './pages/HomePage';
import { SearchPage } from './pages/SearchPage';
import { FavouritesPage } from './pages/FavouritesPage';

function App() {
  return (
    <>
      <Navigation/>
      <Routes>
        <Route path="/" element={ <HomePage/>} />
        <Route path="/favouroves" element={ <FavouritesPage/>} />
        <Route path="/search" element={ <SearchPage/> } />
      </Routes>
    </>
  );
}

export default App;
