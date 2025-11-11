import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import OurTeam from './pages/OurTeam';
import PastEvents from './pages/PastEvents';
import ProjectCycles from './pages/ProjectCycles';
import PartnerWithUs from './pages/PartnerWithUs';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/our-team" element={<OurTeam />} />
            <Route path="/project-cycles" element={<ProjectCycles />} />
            <Route path="/past-events" element={<PastEvents />} />
            <Route path="/partner" element={<PartnerWithUs />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;