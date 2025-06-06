import { lazy } from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import useLocalStorage from "use-local-storage";

import "./App.css";

const PageNav = lazy(() => import("./components/PageNav"));
const HomePage = lazy(() => import("./pages/HomePage"));
const AboutPage = lazy(() => import("./pages/AboutPage"));
const ProjectsPage = lazy(() => import("./pages/ProjectsPage"));
const Footer = lazy(() => import("./components/Footer"));

function App() {
  const defaultDark: boolean = window.matchMedia(
    "(prefers-color-scheme: dark)"
  ).matches;
  const defaultTheme = defaultDark ? "dark" : "light";
  const [theme, setTheme] = useLocalStorage("theme", defaultTheme);

  function handleThemeButton(): void {
    setTheme((theme) => (theme === "dark" ? "light" : "dark"));
  }

  return (
    <div className="app" data-theme={theme}>
      <HashRouter>
        <PageNav theme={theme} handleThemeButton={handleThemeButton} />

        <Routes>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="projects" element={<ProjectsPage />} />
        </Routes>

        <Footer />
      </HashRouter>
    </div>
  );
}

export default App;
