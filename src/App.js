import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Sidebar from './components/Sidebar.js'
import Home from './pages/Home.js'
import Tarot from './pages/Tarot.js'
import Clog from './pages/Clog.js'
import CV from './pages/CV.js'
import About from './pages/About.js'
import DIY from './pages/DIY.js'

function App() {
  return (
    <Router>
      <div className='maincontent'>
       <Sidebar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tarot" element={<Tarot />} />
        <Route path="/clog" element={<Clog />} />
        <Route path="/cv" element={<CV />} />
        <Route path="/about" element={<About />} />
        <Route path="/diy-heritage" element={<DIY />} />
      </Routes>
      </div>
    </Router>
  );
}

export default App;
