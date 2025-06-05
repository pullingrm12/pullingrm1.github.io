import "./css/App.css";
import Profile from "./components/Profile";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div>
      <main>
        <NavBar />
        <Profile />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}
export default App;
