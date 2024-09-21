import './App.css';
import Taskbar from './components/Taskbar';
import Footer from './components/Footer';
import Aboutus from './components/Aboutus';
import Services from './components/Services';
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Landing from './components/Landing';
function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
      <Taskbar />
       <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/mission" element={<Aboutus />} />
      <Route path="/vision" element={<Services />} />

     </Routes> 
      <Footer />
      </BrowserRouter>
      
    </div>
  );
}

export default App;
