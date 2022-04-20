import "./App.css";
import Navbar from "./components/Navbar";
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Image from "./pages/Image";
import Home from "./pages/Home";
import Name from "./pages/Name";
import Age from "./pages/Age";
import Location from "./pages/Location";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/Image" element={<Image/>}></Route>
          <Route path="/Home" element={<Home/>}></Route>
          <Route path="/Name" element={<Name/>}></Route>
          <Route path="/Age" element={<Age/>}></Route>
          <Route path="/Location" element={<Location/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
