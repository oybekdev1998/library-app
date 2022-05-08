import React from 'react';
import Home from './pages/Home/Home';
import {Routes, Route} from 'react-router-dom'
import AsideMenu from './components/AsideMenu/AsideMenu';
import LoginPage from './pages/LoginPage/LoginPage';

function App() {
  return (
    <div className="App">
      <Home />
      <Routes>
        <Route path='/asideMenu' element={<AsideMenu />} />
        <Route path='/loginPage' element={<LoginPage />} />

      </Routes>
    </div>
  );
}

export default App;
