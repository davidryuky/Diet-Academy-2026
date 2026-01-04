import React from 'react';
import { Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100 text-gray-600 pt-16 pb-8 border-t border-gray-200">
      <div className="w-[92%] max-w-[1600px] mx-auto">
        
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <div className="mb-6 md:mb-0 text-center md:text-left">
             <div className="flex items-end justify-center md:justify-start">
                <img src="https://dietacademy.jp/img2023/common/header/logo.png" alt="ダイエットマスター資格講座" className="h-14 md:h-16 w-auto grayscale opacity-70" />
                <span className="text-sm font-bold text-gray-500 ml-2 tracking-widest font-serif" style={{ writingMode: 'vertical-rl' }}>
                  2026
                </span>
              </div>
              <p className="text-xs mt-2 text-gray-500">日本ダイエットアカデミー協会ダイエットマスター資格講座</p>
          </div>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-blue-600"><Facebook className="h-6 w-6" /></a>
            <a href="#" className="text-gray-400 hover:text-blue-400"><Twitter className="h-6 w-6" /></a>
            <a href="#" className="text-gray-400 hover:text-pink-600"><Instagram className="h-6 w-6" /></a>
            <a href="#" className="text-gray-400 hover:text-red-600"><Youtube className="h-6 w-6" /></a>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-sm mb-12">
          <div>
            <h4 className="font-bold text-gray-800 mb-4 text-base">講座案内</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-orange-500">講座一覧</a></li>
              <li><a href="#" className="hover:text-orange-500">人気ランキング</a></li>
              <li><a href="#" className="hover:text-orange-500">新着講座</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-gray-800 mb-4 text-base">サポート</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-orange-500">受講生専用ページ</a></li>
              <li><a href="#" className="hover:text-orange-500">お問い合わせ</a></li>
              <li><a href="#" className="hover:text-orange-500">よくある質問</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-gray-800 mb-4 text-base">会社情報</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-orange-500">会社概要</a></li>
              <li><a href="#" className="hover:text-orange-500">特定商取引法</a></li>
              <li><a href="#" className="hover:text-orange-500">プライバシーポリシー</a></li>
            </ul>
          </div>
           <div>
            <h4 className="font-bold text-gray-800 mb-4 text-base">その他</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-orange-500">お友達紹介キャンペーン</a></li>
              <li><a href="#" className="hover:text-orange-500">監修者一覧</a></li>
              <li><a href="#" className="hover:text-orange-500">サイトマップ</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-8 text-center text-xs text-gray-500 leading-relaxed">
          <p className="mb-1">Copyright© 日本ダイエットマスター協会</p>
          <p>© Diet Master Certification Course All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};