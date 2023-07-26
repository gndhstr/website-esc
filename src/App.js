import './App.css';
import Nav from './components/navigation/navigation'
import Home from './components/home/home'
import Kegiatan from './components/kegiatan/kegiatan'
import Keanggotaan from './components/keanggotaan/keanggotaan'
import Prestasi from './components/prestasi/prestasi'
import Contact from './components/contact/contact'

import PSDM from './components/keanggotaan/details/psdm'
import PH from './components/keanggotaan/details/ph'
import BRT from './components/keanggotaan/details/brt'
import Software from './components/keanggotaan/details/software'
import Kominfo from './components/keanggotaan/details/kominfo'
import Hardware from './components/keanggotaan/details/hardware'


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
            <Route path="/Keanggotaan/PSDM" element={<PSDM />} />
            <Route path="/Keanggotaan/PH" element={<PH />} />
            <Route path="/Keanggotaan/BRT" element={<BRT />} />
            <Route path="/Keanggotaan/Software" element={<Software />} />
            <Route path="/Keanggotaan/Komp-Info" element={<Kominfo />} />
            <Route path="/Keanggotaan/Hardware" element={<Hardware />} />
          <Route path="/Prestasi" element={<Prestasi />} />
        </Routes>
      </Router>
      <Contact />
    </div>
  );
}

export default App;
