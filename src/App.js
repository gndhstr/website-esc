import './App.css';
import Nav from './components/navigation/navigation'
import Home from './components/home/home'
import Kegiatan from './components/kegiatan/kegiatan'
import Keanggotaan from './components/keanggotaan/keanggotaan'
import Prestasi from './components/prestasi/prestasi'
import Contact from './components/contact/contact'

import { BrowserRouter as Router, Routes, Route, Switch } from 'react-router-dom'


function App() {
  return (
    <div className="App">
      <Nav />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Kegiatan" element={<Kegiatan />} />
          <Route path="/Keanggotaan" element={<Keanggotaan />} />
          <Route path="/Prestasi" element={<Prestasi />} />
        </Routes>
      </Router>
      <Contact />
    </div>
  );
}

export default App;
