import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { Menu, X, Search } from 'lucide-react';
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
      <div className="bg-gray-100 py-2 border-b border-gray-200 hidden md:block">
        <div className="w-[92%] max-w-[1600px] mx-auto flex justify-end space-x-4 text-xs text-gray-600">
          <a href="#" className="hover:text-orange-500">配送・お支払い方法</a>
          <span className="text-gray-300">|</span>
          <a href="#" className="hover:text-orange-500">受講生専用</a>
          <span className="text-gray-300">|</span>
          <a href="#" className="hover:text-orange-500">お問い合わせ</a>
        </div>
      </div>

      <header className="sticky top-0 z-50 w-full bg-white shadow-md">
        <div className="w-[92%] max-w-[1600px] mx-auto">
          <div className="flex justify-between items-center h-20 md:h-28"> 
            {/* Left: Logo */}
            <div className="flex-shrink-0 flex items-center cursor-pointer py-2" onClick={() => navigate('/')}>
              <div className="flex flex-col justify-center">
                <span className="text-[10px] md:text-xs text-gray-500 tracking-widest mb-1">日本ダイエットアカデミー協会</span>
                <div className="flex items-end">
                  {/* Logo Image */}
                  <img src="https://dietacademy.jp/img2023/common/header/logo.png" alt="ダイエットマスター資格講座" className="h-12 md:h-20 w-auto" />
                  {/* Vertical 2026 */}
                  <span className="text-[10px] md:text-xs font-bold text-orange-500 ml-2 md:ml-3 font-serif leading-none tracking-widest opacity-80" style={{ writingMode: 'vertical-rl', textOrientation: 'upright' }}>
                    2026
                  </span>
                </div>
              </div>
            </div>

            {/* Center: Main Navigation (Desktop) - Increased space-x */}
            <nav className="hidden xl:flex items-center space-x-10">
              {navLinks.map((link) => (
                <NavLink 
                  key={link.path}
                  to={link.path}
                  className={({ isActive }) => 
                    `flex flex-col items-center group transition-colors duration-300 ${isActive ? 'text-orange-500' : 'text-gray-600 hover:text-orange-400'}`
                  }
                >
                  <span className="text-sm font-bold tracking-wide">{link.name}</span>
                  <span className="text-[10px] text-gray-400 uppercase tracking-wider group-hover:text-orange-300 transition-colors">{link.sub}</span>
                </NavLink>
              ))}
            </nav>

            {/* Right: Search & CTAs */}
            <div className="hidden md:flex items-center space-x-4">
              <div className="relative hidden 2xl:block">
                <input 
                  type="text" 
                  placeholder="通信講座を検索" 
                  className="pl-4 pr-10 py-2 border border-gray-300 rounded-full text-sm focus:outline-none focus:border-orange-500 w-48 transition-all focus:w-64"
                />
                <Search className="absolute right-3 top-2.5 h-4 w-4 text-gray-400" />
              </div>
              <div className="flex space-x-2">
                <Button size="sm" variant="orange" onClick={() => navigate('/pricing')}>受講申込</Button>
                <Button size="sm" variant="secondary" onClick={() => navigate('/seekers')}>資料請求</Button>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="xl:hidden flex items-center">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-gray-600 hover:text-orange-500 focus:outline-none p-2"
              >
                {isOpen ? <X className="h-6 w-6 md:h-8 md:w-8" /> : <Menu className="h-6 w-6 md:h-8 md:w-8" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Dropdown */}
        {isOpen && (
          <div className="xl:hidden bg-white border-t border-gray-100 absolute w-full shadow-lg h-[calc(100vh-80px)] overflow-y-auto">
            <div className="px-4 py-4 space-y-1">
              {navLinks.map((link) => (
                <NavLink 
                  key={link.path}
                  to={link.path} 
                  onClick={() => setIsOpen(false)} 
                  className="block py-2.5 border-b border-gray-50 text-base font-medium text-gray-800 flex items-center justify-between"
                >
                  {link.name} <span className="text-[10px] text-gray-400 font-normal uppercase">{link.sub}</span>
                </NavLink>
              ))}
              
              <div className="mt-6 space-y-3 pt-2 bg-gray-50 -mx-4 px-4 py-6">
                 <div className="relative mb-4">
                    <input 
                      type="text" 
                      placeholder="講座を検索" 
                      className="pl-4 pr-10 py-2.5 border border-gray-300 rounded-full text-sm w-full bg-white"
                    />
                    <Search className="absolute right-4 top-3 h-4 w-4 text-gray-400" />
                  </div>
                 <div className="grid grid-cols-2 gap-3">
                   <Button fullWidth size="md" variant="secondary" onClick={() => { navigate('/seekers'); setIsOpen(false); }} className="text-xs">
                     無料資料請求
                   </Button>
                   <Button fullWidth size="md" variant="orange" onClick={() => { navigate('/pricing'); setIsOpen(false); }} className="text-xs">
                     受講お申し込み
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