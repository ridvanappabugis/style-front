import {  Routes, Route, BrowserRouter } from "react-router-dom"

import './App.css';
import NotFound from "./pages/exception/NotFound";
import Error from "./pages/exception/Error";
import Home from "./pages/home/Home";
import StylizeChose from "./pages/stylize/StylizeChose";
import React from "react";
import Artwork from "./pages/artwork/Artwork";
import Modal from 'react-modal';
import Search from "./pages/search/Search";
import StylizeConfigure from "./pages/stylize/StylizeConfigure";
import Artists from "./pages/artists/Artists";
import Artist from "./pages/artists/Artist";

function App() {
  Modal.setAppElement('#root');

  return (
      <BrowserRouter>
          <Routes>
              <Route path="/" exact element={<Home />} />
              <Route path="/404" element={<NotFound />} />
              <Route path="/500" element={<Error />} />
              <Route path="/artwork/:id" element={<Artwork />} />
              <Route path="/stylize-choose" element={<StylizeChose />} />
              <Route path="/stylize-configure" element={<StylizeConfigure />} />
              <Route path="/search" element={<Search />} />
              <Route path="/artists" element={<Artists />} />
              <Route path="/artist-paintings/:id" element={<Artist />} />
          </Routes>
      </BrowserRouter>
  );
}

export default App;
