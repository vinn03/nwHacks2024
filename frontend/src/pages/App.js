import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Nav from "./nav";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/nav" element={<Nav />} />
      </Routes>
    </Router>
  );
}

export default App;