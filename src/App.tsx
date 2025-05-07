import { lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const PageNav = lazy(() => import("./components/PageNav"));
const HomePage = lazy(() => import("./pages/HomePage"));
const AboutPage = lazy(() => import("./pages/AboutPage"));
const ProjectsPage = lazy(() => import("./pages/ProjectsPage"));
const Footer = lazy(() => import("./components/Footer"));

function App() {
  return (
    <BrowserRouter>
      <PageNav />

      <Routes>
        <Route index element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="projects" element={<ProjectsPage />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
