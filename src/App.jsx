import { useState } from "react";
import Masthead from "./components/Masthead";
import Hero from "./components/Hero";
import Clippings from "./components/Clippings";
import Skills from "./components/Skills";
import Archive from "./components/Archive";
import About from "./components/About";
import PressRelease from "./components/PressRelease";
import Loader from "./components/Loader";

export default function App() {
  const [ready, setReady] = useState(false);

  return (
    <div className="min-h-screen bg-newsprint text-ink font-body">
      <Masthead />
      <Hero ready={ready} />
      <Clippings />
      <Skills />
      <Archive />
      <About />
      <PressRelease />
      <Loader onDone={() => setReady(true)} />
    </div>
  );
}