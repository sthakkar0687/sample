import logo from './logo.svg';
import './App.css';
import { Greet } from './components/Greet';
import { Count } from './components/Count';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import { Home } from './components/Home';
import { Aboutus } from './components/Aboutus';
import { Contactus } from './components/Contactus';

function App() {
  return (
    // <div className="App">
    //   <Greet Name="Sagar" />
    //   <Count />
    // </div>
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/about' element={<Aboutus />} />
          <Route path='/contact' element={<Contactus />} />
          <Route path='/newpage' element={<Greet />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
