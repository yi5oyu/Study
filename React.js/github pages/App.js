import React from 'react'
import { HashRouter, Routes, Route } from 'react-router-dom'
import logo from './logo.svg';
import './App.css';

import Portfolio from './pages/Portfolio/Portfolio'
import Home from './pages/Home/Home'
// import Layout from './pages/Layout/Layout'

function App() {

  return (
    <HashRouter>
        <Routes basename="/react">
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />}>
          {/* <Route path="/layout" element={<Layout />}> */}
            {/* <Route path=":cardId" element={<DetailCard />} /> */}
          </Route>
        </Routes>
    </HashRouter>
  );

}

export default App;
