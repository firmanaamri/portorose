import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Masthead from "./components/Masthead";
import Hero from "./components/Hero";
import Clippings from "./components/Clippings";
import Skills from "./components/Skills";
import Archive from "./components/Archive";
import About from "./components/About";
import PressRelease from "./components/PressRelease";
import Loader from "./components/Loader";
import NewsPage from "./pages/NewsPage";

function HomePage({ ready }) {
  return (
    <div className="min-h-screen bg-newsprint text-ink font-body">
      <Masthead />
      <Hero ready={ready} />
      <Clippings />
      <Skills />
      <Archive />
      <About />
      <PressRelease />
    </div>
  );
}

export default function App() {
  const [ready, setReady] = useState(false);

  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage ready={ready} />} />
        <Route path="/berita" element={<NewsPage />} />
      </Routes>
      <Loader onDone={() => setReady(true)} />
    </>
  );
}