import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { Menu, X, Search, FileText, Send } from 'lucide-react';
import { Button } from '../common/Button';

export const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const navLinks = [
    { name: 'ホーム', path: '/', sub: 'Home' },
    { name: '目的から探す', path: '/seekers', sub: 'For Seekers' },
    { name: '講師・プロ向け', path: '/instructors', sub: 'For Instructors' },
    { name: '講座一覧', path: '/courses', sub: 'Courses' },
    { name: '学習方法', path: '/methods', sub: 'Methods' },
    { name: '受講料', path: '/pricing', sub: 'Pricing' },
    { name: 'ブログ', path: '/blog', sub: 'Blog' },
  ];

  return (
    <>
      {/* Top Bar (Hidden on mobile usually, but kept for elegance) */}
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
        <div className="w-[92%] max-w-[1600px] mx-auto">
          <div className="flex justify-between items-center h-20 md:h-24 transition-all duration-300"> 
            {/* Left: Logo */}
            <div className="flex-shrink-0 flex items-center cursor-pointer py-2 group" onClick={() => navigate('/')}>
              <div className="flex flex-col justify-center">
                <span className="text-[10px] md:text-xs text-gray-500 tracking-widest mb-1 group-hover:text-orange-500 transition-colors">日本ダイエットアカデミー協会</span>
                <div className="flex items-end">
                  {/* Logo Image */}
                  <img src="https://dietacademy.jp/img2023/common/header/logo.png" alt="ダイエットマスター資格講座" className="h-12 md:h-16 w-auto object-contain" />
                  {/* Vertical 2026 */}
                  <span className="text-[10px] md:text-xs font-bold text-orange-500 ml-2 md:ml-3 font-serif leading-none tracking-widest opacity-80" style={{ writingMode: 'vertical-rl', textOrientation: 'upright' }}>
                    2026
                  </span>
                </div>
              </div>
            </div>

            {/* Center: Main Navigation (Desktop) - Increased space-x */}
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

            {/* Right: Search & CTAs */}
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
                {/* Document Request Button - Elegant Ghost Style */}
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

                {/* Application Button - Prominent Gradient Style */}
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

            {/* Mobile menu button */}
            <div className="xl:hidden flex items-center">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-gray-600 hover:text-orange-500 focus:outline-none p-2 transition-colors"
              >
                {isOpen ? <X className="h-6 w-6 md:h-8 md:w-8" /> : <Menu className="h-6 w-6 md:h-8 md:w-8" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Dropdown */}
        {isOpen && (
          <div className="xl:hidden bg-white border-t border-gray-100 absolute w-full shadow-xl h-[calc(100vh-80px)] overflow-y-auto animate-fadeIn">
            <div className="px-4 py-4 space-y-1">
              {navLinks.map((link) => (
                <NavLink 
                  key={link.path}
                  to={link.path} 
                  onClick={() => setIsOpen(false)} 
                  className={({ isActive }) => `block py-3 px-2 border-b border-gray-50 text-base font-medium flex items-center justify-between ${isActive ? 'text-orange-600 bg-orange-50/50' : 'text-gray-800'}`}
                >
                  {link.name} <span className="text-[10px] text-gray-400 font-normal uppercase">{link.sub}</span>
                </NavLink>
              ))}
              
              <div className="mt-6 space-y-3 pt-6 pb-8 bg-gray-50 -mx-4 px-6 border-t border-gray-100">
                 <div className="relative mb-6">
                    <input 
                      type="text" 
                      placeholder="講座を検索" 
                      className="pl-4 pr-10 py-3 border border-gray-200 rounded-full text-sm w-full bg-white shadow-sm focus:border-orange-500 focus:ring-1 focus:ring-orange-200 outline-none"
                    />
                    <Search className="absolute right-4 top-3.5 h-4 w-4 text-gray-400" />
                  </div>
                 <div className="flex flex-col gap-3">
                   <Button fullWidth size="lg" variant="secondary" onClick={() => { navigate('/seekers'); setIsOpen(false); }} className="h-12 border-orange-300 text-orange-600 bg-white hover:bg-orange-50">
                     <FileText size={18} className="mr-2" /> 無料資料請求
                   </Button>
                   <Button fullWidth size="lg" variant="orange" onClick={() => { navigate('/pricing'); setIsOpen(false); }} className="h-12 bg-gradient-to-r from-orange-500 to-red-500 shadow-lg shadow-orange-200">
                     <Send size={18} className="mr-2" /> 受講お申し込み
                   </Button>
                 </div>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};