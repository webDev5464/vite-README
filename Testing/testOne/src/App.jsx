import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Navigation from "./Navigation";
import About from "./Components/About";
import Service from "./Components/Service";

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="About" element={<About />} />
        <Route path="Service" element={<Service />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
