import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./Components/modules/Navigation";
import Home from "./Components/models/Home";
import About from "./Components/models/About";
import Service from "./Components/models/Service";

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
