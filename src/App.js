import "./App.css";
import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import About from "./pages/About";
import Layout from "./components/Layout";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import PageNotFound from "./pages/PageNotFound";
import ReactGA from "react-ga";

function PageTracker() {
  let location = useLocation();

  useEffect(() => {
    ReactGA.pageview(location.pathname + location.search);
  }, [location]);

  return null;
}

function App() {
  useEffect(() => {
    document.title = "@salvadorbu";
    ReactGA.initialize("G-4HY6ZS7V0F");
  }, []);

  return (
    <Router>
      <PageTracker />
      <Layout>
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
