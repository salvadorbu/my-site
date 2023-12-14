import "./App.css";
import About from "./pages/About";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Projects from "./pages/Projects";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
