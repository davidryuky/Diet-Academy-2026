import React from 'react';
import { ChevronRight, Smartphone, BookOpen, FileText, ArrowRight, Gift } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export const Sidebar: React.FC = () => {
  const navigate = useNavigate();

  const MenuSection = ({ title, items }: { title: string, items: { label: string, href: string }[] }) => (
    <div className="mb-10 last:mb-0">
      <h4 className="text-base font-bold text-stone-800 border-l-[3px] border-[#FF8C6B] pl-4 mb-5 font-serif-jp tracking-wide flex items-center">
        {title}
      </h4>
      <ul className="space-y-2">
        {items.map((item, idx) => (
          <li key={idx}>
            <a 
              href={item.href} 
              className="group flex items-center justify-between py-3 px-3 rounded-lg text-sm text-stone-700 hover:text-[#FF8C6B] hover:bg-[#FFF5F0] transition-all duration-300"
            >
              <span className="relative transition-transform duration-300 group-hover:translate-x-1 font-medium">
                {item.label}
              </span>
              <ChevronRight size={14} className="text-stone-400 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300 text-[#FF8C6B]" />
            </a>
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <div className="space-y-10">
      
      {/* === Primary CTAs === */}
      <div className="space-y-5">
        
        {/* Online App - Coral Gradient */}
        <button 
            onClick={() => navigate('/pricing')}
            className="w-full group relative overflow-hidden rounded-2xl bg-gradient-to-r from-[#FF8C6B] to-[#FFB088] p-1 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
        >
            <div className="relative bg-white/10 backdrop-blur-[1px] rounded-xl p-4 flex items-center justify-between border border-white/20">
                <div className="flex items-center gap-4">
                    <div className="bg-white text-[#FF8C6B] p-2.5 rounded-full shadow-sm group-hover:scale-110 transition-transform duration-300">
                        <Smartphone size={22} />
                    </div>
                    <div className="text-left text-white">
                        <div className="text-[10px] opacity-90 font-medium tracking-wider mb-0.5">スマホで完結</div>
                        <div className="text-base font-bold font-serif-jp tracking-wide">WEBお申込み</div>
                    </div>
                </div>
                <ArrowRight size={18} className="text-white opacity-80 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
            </div>
        </button>

        {/* Paper App - Teal */}
        <button 
            onClick={() => navigate('/pricing')}
            className="w-full group relative overflow-hidden rounded-2xl bg-[#5D9B9B] p-1 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
        >
            <div className="relative bg-white/10 backdrop-blur-[1px] rounded-xl p-4 flex items-center justify-between border border-white/20">
                <div className="flex items-center gap-4">
                    <div className="bg-white text-[#5D9B9B] p-2.5 rounded-full shadow-sm group-hover:scale-110 transition-transform duration-300">
                        <BookOpen size={22} />
                    </div>
                    <div className="text-left text-white">
                        <div className="text-[10px] opacity-90 font-medium tracking-wider mb-0.5">じっくり学ぶ</div>
                        <div className="text-base font-bold font-serif-jp tracking-wide">郵送お申込み</div>
                    </div>
                </div>
                <ArrowRight size={18} className="text-white opacity-80 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
            </div>
        </button>

        {/* Document Request - White/Coral Outline */}
        <button 
            onClick={() => navigate('/seekers')}
            className="w-full group bg-white border-2 border-[#FF8C6B] rounded-2xl p-4 flex items-center justify-between shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1"
        >
            <div className="flex items-center gap-4">
                <div className="bg-[#FFF5F0] text-[#FF8C6B] p-2.5 rounded-full group-hover:bg-[#FF8C6B] group-hover:text-white transition-colors duration-300">
                    <FileText size={22} />
                </div>
                <div className="text-left">
                    <div className="text-[10px] text-stone-500 font-bold tracking-wider mb-0.5">まずは無料で</div>
                    <div className="text-base font-bold text-stone-800 group-hover:text-[#FF8C6B] transition-colors font-serif-jp tracking-wide">資料請求する</div>
                </div>
            </div>
            <ArrowRight size={18} className="text-stone-400 group-hover:text-[#FF8C6B] group-hover:translate-x-1 transition-all" />
        </button>
      </div>

      {/* === Navigation Menu === */}
      <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-sm relative overflow-hidden">
        {/* Decorative corner */}
        <div className="absolute top-0 right-0 w-16 h-16 bg-[#FFF5F0] rounded-bl-full -mr-8 -mt-8 z-0"></div>
        
        <div className="relative z-10">
            <MenuSection 
                title="講座案内" 
                items={[
                    { label: "ダイエットアドバイザー資格講座TOP", href: "#" },
                    { label: "講座の特徴", href: "#" },
                    { label: "学習カリキュラム", href: "#" },
                    { label: "講座コラム", href: "#" },
                    { label: "受講生の声", href: "#" },
                    { label: "口コミ評価", href: "#kouza_rate" },
                ]} 
            />
            
            <div className="my-8 h-px bg-stone-100 w-full"></div>

            <MenuSection 
                title="取得可能資格" 
                items={[
                    { label: "ダイエットアドバイザー", href: "#" },
                    { label: "シェイプアップインストラクター", href: "#" },
                ]} 
            />
        </div>
      </div>
      
      {/* === Campaign Banner === */}
       <div 
        className="group cursor-pointer relative overflow-hidden rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1"
        onClick={() => navigate('/pricing')}
       >
          <div className="absolute inset-0 bg-gradient-to-br from-[#FFEBE6] to-white z-0"></div>
          <div className="relative z-10 p-6 text-center border-2 border-[#FFD1C1]/50 rounded-2xl m-1">
            <div className="inline-block bg-[#FF8C6B] text-white text-[10px] font-bold px-3 py-1 rounded-full mb-3 tracking-widest">
                CAMPAIGN
            </div>
            <h3 className="text-lg font-bold text-stone-800 font-serif-jp mb-1">
                今なら<span className="text-[#FF8C6B] text-2xl mx-1">20%OFF</span>
            </h3>
            <p className="text-xs text-stone-600 mb-4 font-medium">春の資格取得応援キャンペーン実施中</p>
            <div className="w-12 h-12 bg-white rounded-full mx-auto flex items-center justify-center text-[#FF8C6B] shadow-sm group-hover:scale-110 transition-transform">
                <Gift size={24} />
            </div>
          </div>
       </div>

    </div>
  );
};