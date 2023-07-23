import './App.css';
import Nav from './components/navigation/navigation'
import Home from './components/home/home'
import Kegiatan from './components/kegiatan/kegiatan'
import Keanggotaan from './components/keanggotaan/keanggotaan'
import Prestasi from './components/prestasi/prestasi'
import Contact from './components/contact/contact'

function App() {
  return (
    <div className="App">
      <Nav />
      <Home />
      <Kegiatan />
      <Keanggotaan />
      <Prestasi />
      <Contact />
    </div>
  );
}

export default App;
