import Index from "./pages/Index";
import Index2 from "./pages/Index2";
import Kursus from "./pages/Kursus";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Galeri from "./pages/Galeri";
import Profile from "./pages/Profile";
import Gabung from "./pages/Gabung";
import Login from "./pages/Login";
import SeduhKopi1 from "./pages/SeduhKopi1";
import SeduhKopi2 from "./pages/SeduhKopi2";
import SeduhKopi3 from "./pages/SeduhKopi3";
import SeduhKopi4 from "./pages/SeduhKopi4";
import SeduhKopi5 from "./pages/SeduhKopi5";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  // function openNav() {
  //   document.getElementById("mySidepanel").style.width = "250px";
  // }

  // function closeNav() {
  //   document.getElementById("mySidepanel").style.width = "0";
  // }
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" element={<Index />} />
        <Route exact path="/Index2" element={<Index2 />} />
        <Route exact path="/Kursus" element={<Kursus />} />
        <Route exact path="/About" element={<About />} />
        <Route exact path="/Contact" element={<Contact />} />
        <Route exact path="/Galeri" element={<Galeri />} />
        <Route exact path="/SeduhKopi1" element={<SeduhKopi1 />} />
        <Route exact path="/SeduhKopi2" element={<SeduhKopi2 />} />
        <Route exact path="/SeduhKopi3" element={<SeduhKopi3 />} />
        <Route exact path="/SeduhKopi4" element={<SeduhKopi4 />} />
        <Route exact path="/SeduhKopi5" element={<SeduhKopi5 />} />
        <Route exact path="/Profile" element={<Profile />} />
        <Route exact path="/Gabung" element={<Gabung />} />
        <Route exact path="/Login" element={<Login />} />
      </Switch>

      {/* <Index />
      <About /> */}
    </BrowserRouter>
  );
}

export default App;
