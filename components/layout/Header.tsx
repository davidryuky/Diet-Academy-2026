import React, { useState, useEffect } from 'react';
import { NavLink, useNavigate, useLocation } from 'react-router-dom';
import { 
  Menu, X, Search, FileText, Send, 
  Home, Users, Briefcase, BookOpen, Monitor, CreditCard, ChevronRight 
} from 'lucide-react';

export const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // Fecha o menu automaticamente ao mudar de rota
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
      {/* Top Bar (Hidden on mobile) */}
      <div className="bg-gray-50 py-2 border-b border-gray-200 hidden md:block">
        <div className="w-[92%] max-w-[1600px] mx-auto flex justify-end space-x-6 text-xs text-gray-500 font-medium">
          <a href="#" className="hover:text-orange-500 transition-colors">配送・お支払い方法</a>
          <span className="text-gray-300">|</span>
          <a href="#" className="hover:text-orange-500 transition-colors">受講生専用ページ</a>
          <span className="text-gray-300">|</span>
          <a href="#" className="hover:text-orange-500 transition-colors">お問い合わせ</a>
        </div>
      </div>

      <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-sm shadow-sm border-b border-gray-100">
        <div className="w-[92%] max-w-[1600px] mx-auto relative">
          <div className="flex justify-between items-center h-20 md:h-24 transition-all duration-300"> 
            {/* Left: Logo */}
            <div className="flex-shrink-0 flex items-center cursor-pointer py-2 group" onClick={() => navigate('/')}>
              <div className="flex flex-col justify-center">
                {/* Association Text: Hidden on Mobile */}
                <span className="hidden md:block text-xs text-gray-500 tracking-widest mb-1 group-hover:text-orange-500 transition-colors">日本ダイエットアカデミー協会</span>
                <div className="flex items-end">
                  {/* Logo Image: Increased size on mobile (h-14) */}
                  <img src="https://dietacademy.jp/img2023/common/header/logo.png" alt="ダイエットマスター資格講座" className="h-14 md:h-16 w-auto object-contain" />
                  {/* Vertical 2026 */}
                  <span className="text-[10px] md:text-xs font-bold text-orange-500 ml-2 md:ml-3 font-serif leading-none tracking-widest opacity-80" style={{ writingMode: 'vertical-rl', textOrientation: 'upright' }}>
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
                    `flex flex-col items-center group transition-all duration-300 relative py-2 ${isActive ? 'text-orange-600' : 'text-gray-600 hover:text-orange-500'}`
                  }
                >
                  {({ isActive }) => (
                    <>
                      <span className="text-sm font-bold tracking-wide relative z-10">{link.name}</span>
                      <span className="text-[9px] text-gray-400 uppercase tracking-wider group-hover:text-orange-300 transition-colors mt-0.5 font-medium">{link.sub}</span>
                      <span className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 w-8 h-0.5 bg-orange-500 rounded-full transition-all duration-300 ${isActive ? 'opacity-100 w-full' : 'opacity-0 w-0 group-hover:opacity-50 group-hover:w-4'}`}></span>
                    </>
                  )}
                </NavLink>
              ))}
            </nav>

            {/* Right: Search & CTAs (Desktop) */}
            <div className="hidden md:flex items-center space-x-6">
              <div className="relative hidden 2xl:block group">
                <input 
                  type="text" 
                  placeholder="通信講座を検索" 
                  className="pl-4 pr-10 py-2.5 border border-gray-200 bg-gray-50 rounded-full text-sm focus:outline-none focus:border-orange-500 focus:bg-white focus:ring-2 focus:ring-orange-100 w-48 transition-all duration-300 group-hover:border-orange-200"
                />
                <Search className="absolute right-3 top-3 h-4 w-4 text-gray-400 group-hover:text-orange-400 transition-colors" />
              </div>
              
              <div className="flex items-center gap-3">
                <button 
                  onClick={() => navigate('/seekers')}
                  className="group flex flex-col items-center justify-center w-28 h-12 rounded-lg border border-orange-200 bg-white text-orange-600 hover:bg-orange-50 hover:border-orange-400 hover:shadow-md transition-all duration-300 relative overflow-hidden"
                >
                  <div className="flex items-center gap-1.5 z-10">
                    <FileText size={16} className="group-hover:scale-110 transition-transform" />
                    <span className="text-sm font-bold">資料請求</span>
                  </div>
                  <span className="text-[9px] text-orange-400 font-medium tracking-wide z-10 group-hover:text-orange-600 transition-colors">無料パンフレット</span>
                </button>

                <button 
                  onClick={() => navigate('/pricing')}
                  className="group flex items-center justify-center w-36 h-12 rounded-lg bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-lg shadow-orange-200 hover:shadow-orange-300 hover:-translate-y-0.5 hover:scale-[1.02] transition-all duration-300 relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 skew-y-12"></div>
                  <div className="flex flex-col items-center leading-none z-10">
                     <span className="text-[10px] font-medium text-orange-50 mb-0.5 tracking-wider opacity-90">Webで完結</span>
                     <div className="flex items-center gap-1">
                        <span className="text-base font-bold tracking-wide">受講お申込み</span>
                        <Send size={14} className="group-hover:translate-x-1 transition-transform" />
                     </div>
                  </div>
                </button>
              </div>
            </div>

            {/* Mobile Menu Toggle Button */}
            <div className="xl:hidden flex items-center">
               <button
                onClick={() => setIsOpen(!isOpen)}
                className={`text-gray-600 hover:text-orange-500 focus:outline-none p-2 transition-all duration-300 ${isOpen ? 'text-orange-500 rotate-90' : ''}`}
                aria-label={isOpen ? "Close menu" : "Open menu"}
              >
                {isOpen ? <X className="h-8 w-8" /> : <Menu className="h-8 w-8" />}
              </button>
            </div>
          </div>
        </div>

        {/* 
          SIMPLE MOBILE MENU DROPDOWN 
          Positioned absolutely below the header using top-full.
          Simplified: No internal logo, no bottom buttons.
        */}
        {isOpen && (
          <div className="xl:hidden absolute top-full left-0 w-full bg-white border-t border-gray-100 shadow-xl z-50 flex flex-col max-h-[calc(100vh-80px)] overflow-y-auto">
             <div className="px-6 py-6 space-y-6">
                
                {/* Search Bar (Simple) */}
                <div className="relative">
                    <input 
                      type="text" 
                      placeholder="キーワード検索..." 
                      className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-orange-400 focus:ring-2 focus:ring-orange-100 transition-all"
                    />
                    <Search className="absolute left-3 top-3 text-gray-400" size={18} />
                </div>

                {/* Simple List Navigation */}
                <nav className="flex flex-col">
                  {navLinks.map((link) => (
                    <NavLink
                      key={link.path}
                      to={link.path}
                      onClick={() => setIsOpen(false)}
                      className={({ isActive }) => `
                        flex items-center justify-between py-4 border-b border-gray-100 last:border-0 group transition-colors
                        ${isActive ? 'text-orange-600 font-bold' : 'text-gray-700 font-medium hover:text-orange-500'}
                      `}
                    >
                      {({ isActive }) => (
                        <>
                          <div className="flex items-center gap-3">
                             <link.icon size={20} className={isActive ? 'text-orange-500' : 'text-gray-400 group-hover:text-orange-400'} />
                             <span className="text-base">{link.name}</span>
                          </div>
                          <ChevronRight size={16} className={`transition-colors ${isActive ? 'text-orange-500' : 'text-gray-300 group-hover:text-orange-300'}`} />
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