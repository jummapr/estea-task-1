import React from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { ThemeProvider } from "styled-components";
import { theme } from "./theme";
import Details from "./pages/Details/Details";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
          <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/detail/:id" element={<Details />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
