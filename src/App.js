import Navbar from "./components/Navbar";
import Home from "./components/Home";
import SocialMedia from "./components/SocialMedia";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import MySkills from "./components/MySkills";
import Contact from "./components/Contact";

function App() {
  return (
    <div>
      <Navbar />
      <Home/>
      <About/>
      <Portfolio/>
      <MySkills/>
      <Contact/>
      <SocialMedia/>
    </div>
  );
}

export default App;
