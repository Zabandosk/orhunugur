import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header.js'
import Sidebar from './components/Sidebar.js'
import Home from './pages/Home.js'
import Tarot from './pages/Tarot.js'
import Blog from './pages/Blog.js'
import CV from './pages/CV.js'

function App() {
  return (
    <Router>
      <Header />
      <div className='maincontent'>
       <Sidebar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tarot" element={<Tarot />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/cv" element={<CV />} />
      </Routes>
      </div>
    </Router>
  );
}

export default App;
