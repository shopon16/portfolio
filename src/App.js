import Intro from "./components/intro"
import About from "./components/About"
import { Route, Routes } from "react-router-dom";
import NavBar from "./components/Navbar";
import Skills from "./components/Skills";
import Technologies from "./components/Technologies";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
function App() {

  return (
    <div id="home">
      <Routes>
        <Route path="/" element={<NavBar />}>
          <Route index element={<Intro />} />
          <Route path = "about" element={<About/>}/>
          <Route path = "skills" element={<Skills/>}/>
          <Route path = "projects" element={<Technologies/>}/>
          <Route path = "blog" element={<Blog/>}/>
          <Route path = "contact" element={<Contact/>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
