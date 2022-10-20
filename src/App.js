import Navbar from "./components/Navbar";
import Home from "./components/Home";
import SocialMedia from "./components/SocialMedia";
import About from "./components/About";
import Portfolio from "./components/Portfolio";


function App() {
  return (
    <div>
      <Navbar />
      <Home/>
      <About/>
      <Portfolio/>
      <SocialMedia/>
    </div>
  );
}

export default App;
