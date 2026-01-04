import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { Seekers } from './pages/Seekers';
import { Instructors } from './pages/Instructors';
import { Courses } from './pages/Courses';
import { Pricing } from './pages/Pricing';
import { Methods } from './pages/Methods';

// Component to scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = React.useMemo(() => window.location, []);
  
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  
  return null;
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/seekers" element={<Seekers />} />
            <Route path="/instructors" element={<Instructors />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/methods" element={<Methods />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;