import { Route, Routes, HashRouter } from "react-router-dom";
import Home from "./pages/Home";
import Projets from "./pages/Projects";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import ProjectPage from "./pages/ProjectPage";

function App() {
  return (
    <div>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projets />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projectpage/:id" element={<ProjectPage />} />
        </Routes>
        <Footer />
      </HashRouter>
    </div>
  );
}

export default App;
