import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import About from "./pages/About";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="proyectos" element={<Projects />} />
          <Route path="aptitudes" element={<Skills />} />
          <Route path="sobre-mi" element={<About />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
