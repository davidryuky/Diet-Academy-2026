import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { Home } from './pages/Home';
import { Seekers } from './pages/Seekers';
import { Instructors } from './pages/Instructors';
import { Courses } from './pages/Courses';
import { Pricing } from './pages/Pricing';
import { Methods } from './pages/Methods';
import { Blog } from './pages/Blog';
import { BlogPost } from './pages/BlogPost';
import { useScrollToTop } from './hooks/useScrollToTop';

// Component to scroll to top on route change, using the hook
const ScrollToTop = () => {
  useScrollToTop();
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
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:id" element={<BlogPost />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;