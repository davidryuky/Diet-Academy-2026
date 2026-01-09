import React from 'react';
import { Facebook, Twitter, Instagram, Youtube, ChevronRight } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-stone-50 border-t border-stone-200 text-stone-600 font-sans relative overflow-hidden">
      {/* Decorative top border */}
      <div className="w-full h-1 bg-gradient-to-r from-[#FF8C6B] via-[#FFB088] to-[#5D9B9B]"></div>

      {/* Main Footer Content */}
      <div className="w-[92%] max-w-[1600px] mx-auto pt-16 pb-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
          
          {/* Brand Column (Left) */}
          <div className="lg:col-span-4 space-y-6">
             <div className="flex items-end">
                <img src="https://dietacademy.jp/img2023/common/header/logo.png" alt="ダイエットマスター資格講座" className="h-14 md:h-16 w-auto grayscale opacity-80" />
                <span className="text-sm font-bold text-[#FF8C6B] ml-2 tracking-widest font-serif-jp" style={{ writingMode: 'vertical-rl', textOrientation: 'upright' }}>
                  2026
                </span>
              </div>
              <p className="text-sm text-stone-500 leading-relaxed font-medium">
                日本ダイエットアカデミー協会<br/>
                健康的な美しさを追求するすべての人へ。<br/>
                科学的根拠に基づいた正しい知識を提供します。
              </p>
              
              <div className="flex space-x-3 pt-2">
                {[
                  { Icon: Instagram, color: "hover:text-[#E1306C] hover:border-[#E1306C]/30 hover:bg-[#E1306C]/5" },
                  { Icon: Twitter, color: "hover:text-[#1DA1F2] hover:border-[#1DA1F2]/30 hover:bg-[#1DA1F2]/5" },
                  { Icon: Facebook, color: "hover:text-[#1877F2] hover:border-[#1877F2]/30 hover:bg-[#1877F2]/5" },
                  { Icon: Youtube, color: "hover:text-[#FF0000] hover:border-[#FF0000]/30 hover:bg-[#FF0000]/5" }
                ].map(({ Icon, color }, idx) => (
                  <a key={idx} href="#" className={`bg-white p-2.5 rounded-xl shadow-sm border border-stone-200 text-stone-400 transition-all duration-300 hover:-translate-y-1 ${color}`}>
                    <Icon size={18} />
                  </a>
                ))}
              </div>
          </div>

          {/* Links Columns (Right) - 4 Columns Layout */}
          <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-4 gap-8">
            {/* Column 1: 講座案内 */}
            <div>
              <h4 className="font-bold text-stone-800 mb-5 text-sm tracking-wide font-serif-jp flex items-center">
                <span className="w-1.5 h-4 bg-[#FF8C6B] rounded-full mr-2"></span>
                講座案内
              </h4>
              <ul className="space-y-3 text-sm">
                <li><a href="#" className="hover:text-[#FF8C6B] transition-colors flex items-center group"><ChevronRight size={12} className="mr-1 opacity-0 group-hover:opacity-100 transition-opacity -ml-3 group-hover:ml-0 duration-300" />講座一覧</a></li>
                <li><a href="#" className="hover:text-[#FF8C6B] transition-colors flex items-center group"><ChevronRight size={12} className="mr-1 opacity-0 group-hover:opacity-100 transition-opacity -ml-3 group-hover:ml-0 duration-300" />人気ランキング</a></li>
                <li><a href="#" className="hover:text-[#FF8C6B] transition-colors flex items-center group"><ChevronRight size={12} className="mr-1 opacity-0 group-hover:opacity-100 transition-opacity -ml-3 group-hover:ml-0 duration-300" />新着講座</a></li>
              </ul>
            </div>

            {/* Column 2: サポート */}
            <div>
              <h4 className="font-bold text-stone-800 mb-5 text-sm tracking-wide font-serif-jp flex items-center">
                <span className="w-1.5 h-4 bg-[#5D9B9B] rounded-full mr-2"></span>
                サポート
              </h4>
              <ul className="space-y-3 text-sm">
                <li><a href="#" className="hover:text-[#5D9B9B] transition-colors flex items-center group"><ChevronRight size={12} className="mr-1 opacity-0 group-hover:opacity-100 transition-opacity -ml-3 group-hover:ml-0 duration-300" />受講生専用ページ</a></li>
                <li><a href="#" className="hover:text-[#5D9B9B] transition-colors flex items-center group"><ChevronRight size={12} className="mr-1 opacity-0 group-hover:opacity-100 transition-opacity -ml-3 group-hover:ml-0 duration-300" />お問い合わせ</a></li>
                <li><a href="#" className="hover:text-[#5D9B9B] transition-colors flex items-center group"><ChevronRight size={12} className="mr-1 opacity-0 group-hover:opacity-100 transition-opacity -ml-3 group-hover:ml-0 duration-300" />よくある質問</a></li>
              </ul>
            </div>

            {/* Column 3: 会社情報 */}
            <div>
              <h4 className="font-bold text-stone-800 mb-5 text-sm tracking-wide font-serif-jp flex items-center">
                <span className="w-1.5 h-4 bg-stone-300 rounded-full mr-2"></span>
                会社情報
              </h4>
              <ul className="space-y-3 text-sm">
                <li><a href="#" className="hover:text-stone-900 transition-colors flex items-center group"><ChevronRight size={12} className="mr-1 opacity-0 group-hover:opacity-100 transition-opacity -ml-3 group-hover:ml-0 duration-300" />会社概要</a></li>
                <li><a href="#" className="hover:text-stone-900 transition-colors flex items-center group"><ChevronRight size={12} className="mr-1 opacity-0 group-hover:opacity-100 transition-opacity -ml-3 group-hover:ml-0 duration-300" />特定商取引法</a></li>
                <li><a href="#" className="hover:text-stone-900 transition-colors flex items-center group"><ChevronRight size={12} className="mr-1 opacity-0 group-hover:opacity-100 transition-opacity -ml-3 group-hover:ml-0 duration-300" />プライバシーポリシー</a></li>
              </ul>
            </div>

            {/* Column 4: その他 */}
            <div>
              <h4 className="font-bold text-stone-800 mb-5 text-sm tracking-wide font-serif-jp flex items-center">
                <span className="w-1.5 h-4 bg-stone-300 rounded-full mr-2"></span>
                その他
              </h4>
              <ul className="space-y-3 text-sm">
                <li><a href="#" className="hover:text-stone-900 transition-colors flex items-center group"><ChevronRight size={12} className="mr-1 opacity-0 group-hover:opacity-100 transition-opacity -ml-3 group-hover:ml-0 duration-300" />お友達紹介キャンペーン</a></li>
                <li><a href="#" className="hover:text-stone-900 transition-colors flex items-center group"><ChevronRight size={12} className="mr-1 opacity-0 group-hover:opacity-100 transition-opacity -ml-3 group-hover:ml-0 duration-300" />監修者一覧</a></li>
                <li><a href="#" className="hover:text-stone-900 transition-colors flex items-center group"><ChevronRight size={12} className="mr-1 opacity-0 group-hover:opacity-100 transition-opacity -ml-3 group-hover:ml-0 duration-300" />サイトマップ</a></li>
              </ul>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-stone-200 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-stone-400 font-medium">
          <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-6 mb-4 md:mb-0">
             <p>Copyright© 日本ダイエットアカデミー協会</p>
             <p className="hidden md:block text-stone-300">|</p>
             <p>運営：一般社団法人国家資格対策センター</p>
          </div>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-stone-600 transition-colors">利用規約</a>
            <a href="#" className="hover:text-stone-600 transition-colors">サイトマップ</a>
          </div>
        </div>
      </div>
    </footer>
  );
};