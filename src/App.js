import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Registration from "./components/registration.js";
import Login from "./components/login.js";
import Home from "./components/home.js";
import HiddenPage from "./components/hiddenPage.js"
import "bootstrap/dist/css/bootstrap.min.css";

import "./styles.css";

export default function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route path="/submit" element={<Registration/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/dashboard" element={<HiddenPage/>}/>
        </Routes>
      </div>
    </Router>
  );
}
