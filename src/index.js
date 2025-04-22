import React from 'react';
import ReactDOM from 'react-dom/client';
import {HashRouter as BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import AlbumDetail from './components/AlbumDetail';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/home" element={<App />} />
      <Route path="/album/:id" element={<AlbumDetail />} />
    </Routes>
  </BrowserRouter>
);