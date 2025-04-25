import Header from "./components/Header";
import Banner from "./components/Banner";
import "./App.css";
import AboutUs from "./components/AboutUs";
import OurPrograms from "./components/OurPrograms";
import OurTeam from "./components/OurTeam";
import Contact from "./components/Contact";
function App() {
  return (
    <>
      <main>
        <Header />
        <Banner id="home" />
        <AboutUs />
        <OurPrograms id="programs" />
        <OurTeam />
        <Contact id="contact" />
      </main>
    </>
  );
}

export default App;
