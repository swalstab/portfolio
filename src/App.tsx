import { lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import useLocalStorage from "use-local-storage";

import "./App.css";

const PageNav = lazy(() => import("./components/PageNav"));
const HomePage = lazy(() => import("./pages/HomePage"));
const AboutPage = lazy(() => import("./pages/AboutPage"));
const ProjectsPage = lazy(() => import("./pages/ProjectsPage"));
const Footer = lazy(() => import("./components/Footer"));

function App() {
  const defaultDark: boolean = window.matchMedia(
    "(prefers-color-scheme: dark"
  ).matches;
  const [isDark, setIsDark] = useLocalStorage("isDark", defaultDark);

  function handleThemeButton(): void {
    setIsDark(() => !isDark);
  }

  return (
    <div className="app" data-theme={isDark ? "dark" : "light"}>
      <BrowserRouter>
        <PageNav isDark={isDark} handleThemeButton={handleThemeButton} />

        <Routes>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="projects" element={<ProjectsPage />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
