import React, { useState, useEffect } from 'react';
import { NavLink, useNavigate, useLocation } from 'react-router-dom';
import { 
  Menu, X, FileText, Send, 
  Home, Users, Briefcase, BookOpen, Monitor, CreditCard, ChevronRight 
} from 'lucide-react';

export const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'ホーム', path: '/', sub: 'Home', icon: Home },
    { name: '目的から探す', path: '/seekers', sub: 'For Seekers', icon: Users },
    { name: '講師・プロ向け', path: '/instructors', sub: 'For Instructors', icon: Briefcase },
    { name: '講座一覧', path: '/courses', sub: 'Courses', icon: BookOpen },
    { name: '学習方法', path: '/methods', sub: 'Methods', icon: Monitor },
    { name: '受講料', path: '/pricing', sub: 'Pricing', icon: CreditCard },
    { name: 'ブログ', path: '/blog', sub: 'Blog', icon: FileText },
  ];

  return (
    <>
      <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md shadow-sm border-b border-stone-200">
        <div className="w-[92%] max-w-[1600px] mx-auto relative">
          <div className="flex justify-between items-center h-20 md:h-24 transition-all duration-300"> 
            {/* Left: Logo */}
            <div className="flex-shrink-0 flex items-center cursor-pointer py-2 group" onClick={() => navigate('/')}>
              <div className="flex flex-col justify-center">
                <div className="flex items-end">
                  <img src="https://i.postimg.cc/sDKQrDBb/logoremaster.png" alt="ダイエットマスター資格講座" className="h-16 md:h-20 w-auto object-contain" />
                  <span className="text-[10px] md:text-xs font-bold text-[#FF8C6B] ml-2 md:ml-3 font-serif-jp leading-none tracking-widest opacity-90" style={{ writingMode: 'vertical-rl', textOrientation: 'upright' }}>
                    2026
                  </span>
                </div>
              </div>
            </div>

            {/* Center: Main Navigation (Desktop) */}
            <nav className="hidden xl:flex items-center space-x-8 2xl:space-x-12">
              {navLinks.map((link) => (
                <NavLink 
                  key={link.path}
                  to={link.path}
                  className={({ isActive }) => 
                    `flex flex-col items-center group transition-all duration-300 relative py-2 ${isActive ? 'text-[#FF8C6B]' : 'text-stone-700 hover:text-[#FF8C6B]'}`
                  }
                >
                  {({ isActive }) => (
                    <>
                      <span className="text-sm font-bold tracking-wide relative z-10 font-serif-jp">{link.name}</span>
                      <span className="text-[10px] text-stone-500 uppercase tracking-wider group-hover:text-orange-400 transition-colors mt-0.5 font-medium">{link.sub}</span>
                      <span className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 w-8 h-0.5 bg-[#FF8C6B] rounded-full transition-all duration-300 ${isActive ? 'opacity-100 w-full' : 'opacity-0 w-0 group-hover:opacity-50 group-hover:w-4'}`}></span>
                    </>
                  )}
                </NavLink>
              ))}
            </nav>

            {/* Right: CTAs (Desktop) */}
            <div className="hidden md:flex items-center space-x-6">
              <div className="flex items-center gap-3">
                <button 
                  onClick={() => navigate('/seekers')}
                  className="group flex flex-col items-center justify-center w-28 h-12 rounded-xl border border-stone-300 bg-white text-stone-700 hover:border-[#FF8C6B] hover:text-[#FF8C6B] transition-all duration-300 relative overflow-hidden"
                >
                  <div className="flex items-center gap-1.5 z-10">
                    <FileText size={16} className="group-hover:scale-110 transition-transform" />
                    <span className="text-sm font-bold">資料請求</span>
                  </div>
                  <span className="text-[10px] text-stone-500 font-medium tracking-wide z-10 group-hover:text-[#FF8C6B] transition-colors">無料パンフレット</span>
                </button>

                <button 
                  onClick={() => navigate('/pricing')}
                  className="group flex items-center justify-center w-36 h-12 rounded-xl bg-gradient-to-r from-[#FF8C6B] to-[#FFB088] text-white shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 skew-y-12"></div>
                  <div className="flex flex-col items-center leading-none z-10">
                     <span className="text-[10px] font-medium text-white/95 mb-0.5 tracking-wider">Webで完結</span>
                     <div className="flex items-center gap-1">
                        <span className="text-base font-bold tracking-wide">受講お申込み</span>
                        <Send size={14} className="group-hover:translate-x-1 transition-transform" />
                     </div>
                  </div>
                </button>
              </div>
            </div>

            {/* Mobile Menu Toggle */}
            <div className="xl:hidden flex items-center">
               <button
                onClick={() => setIsOpen(!isOpen)}
                className={`text-stone-700 hover:text-[#FF8C6B] focus:outline-none p-2 transition-all duration-300 ${isOpen ? 'text-[#FF8C6B] rotate-90' : ''}`}
                aria-label={isOpen ? "Close menu" : "Open menu"}
              >
                {isOpen ? <X className="h-8 w-8" /> : <Menu className="h-8 w-8" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {isOpen && (
          <div className="xl:hidden absolute top-full left-0 w-full bg-white border-t border-stone-200 shadow-xl z-50 flex flex-col max-h-[calc(100vh-80px)] overflow-y-auto animate-in slide-in-from-top-2 duration-200">
             <div className="px-6 py-6 space-y-6">
                <nav className="flex flex-col">
                  {navLinks.map((link) => (
                    <NavLink
                      key={link.path}
                      to={link.path}
                      onClick={() => setIsOpen(false)}
                      className={({ isActive }) => `
                        flex items-center justify-between py-4 border-b border-stone-100 last:border-0 group transition-colors
                        ${isActive ? 'text-[#FF8C6B] font-bold' : 'text-stone-700 font-medium hover:text-[#FF8C6B]'}
                      `}
                    >
                      {({ isActive }) => (
                        <>
                          <div className="flex items-center gap-3">
                             <link.icon size={20} className={isActive ? 'text-[#FF8C6B]' : 'text-stone-400 group-hover:text-[#FF8C6B]'} />
                             <span className="text-base font-serif-jp">{link.name}</span>
                          </div>
                          <ChevronRight size={16} className={`transition-colors ${isActive ? 'text-[#FF8C6B]' : 'text-stone-300 group-hover:text-orange-200'}`} />
                        </>
                      )}
                    </NavLink>
                  ))}
                </nav>
             </div>
          </div>
        )}
      </header>
    </>
  );
};