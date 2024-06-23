import React from "react";
import { Header } from "./components/organisms";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
  AboutMePage,
  ProjectsPage,
  ContactPage,
  VideosPage,
} from "./components/pages";

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="*" element={<VideosPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/" element={<VideosPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/about-me" element={<AboutMePage />} />
      </Routes>
    </Router>
  );
};

export default App;
