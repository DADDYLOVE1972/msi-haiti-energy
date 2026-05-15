import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout.jsx';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import MarigotProject from './pages/MarigotProject.jsx';
import Impact from './pages/Impact.jsx';
import Partner from './pages/Partner.jsx';
import Donate from './pages/Donate.jsx';
import Contact from './pages/Contact.jsx';

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/marigot-project" element={<MarigotProject />} />
        <Route path="/impact" element={<Impact />} />
        <Route path="/partner" element={<Partner />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Layout>
  );
}
