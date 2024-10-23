import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Pic from "./components/pic.js";
import Home from "./components/home.js";
import "bootstrap/dist/css/bootstrap.min.css";

import "./styles.css";

export default function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route path="/submit" element={<Pic/>}/>
        </Routes>
      </div>
    </Router>
  );
}
