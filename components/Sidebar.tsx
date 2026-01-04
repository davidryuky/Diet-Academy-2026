import React from 'react';
import { PlaceholderImage } from './PlaceholderImage';
import { ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export const Sidebar: React.FC = () => {
  const navigate = useNavigate();

  const MenuSection = ({ title, items }: { title: string, items: { label: string, href: string }[] }) => (
    <div className="mb-8">
      <h4 className="text-sm font-bold text-gray-800 border-l-4 border-orange-500 pl-3 mb-3">
        {title}
      </h4>
      <ul className="space-y-0">
        {items.map((item, idx) => (
          <li key={idx} className="border-b border-gray-100 last:border-0">
            <a 
              href={item.href} 
              className="block py-3 text-xs text-gray-600 hover:text-orange-500 hover:bg-orange-50 transition-colors flex items-center justify-between group"
            >
              {item.label}
              <ChevronRight size={14} className="text-gray-300 group-hover:text-orange-500" />
            </a>
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <div className="space-y-8">
      {/* Offer Buttons Area */}
      <div className="space-y-4">
        {/* Online App */}
        <div className="cursor-pointer transition-transform hover:-translate-y-1 shadow-sm hover:shadow-md rounded-lg overflow-hidden" onClick={() => navigate('/pricing')}>
            <PlaceholderImage 
                height="74px" 
                color="bg-gradient-to-r from-orange-400 to-orange-500" 
                textColor="text-white"
                text="ONLINE APPLICATION"
                className="w-full"
            />
            <div className="bg-orange-600 text-white text-[10px] text-center py-1 font-bold">
                スマホで簡単！受講お申込み (オンライン)
            </div>
        </div>

        {/* Paper App */}
        <div className="cursor-pointer transition-transform hover:-translate-y-1 shadow-sm hover:shadow-md rounded-lg overflow-hidden" onClick={() => navigate('/pricing')}>
            <PlaceholderImage 
                height="74px" 
                color="bg-gradient-to-r from-green-500 to-green-600" 
                textColor="text-white"
                text="PAPER APPLICATION"
                className="w-full"
            />
             <div className="bg-green-700 text-white text-[10px] text-center py-1 font-bold">
                じっくり学ぶ！受講お申込み (郵送)
            </div>
        </div>

        {/* Document Request */}
        <div className="cursor-pointer transition-transform hover:-translate-y-1 shadow-sm hover:shadow-md rounded-lg overflow-hidden" onClick={() => navigate('/seekers')}>
            <PlaceholderImage 
                height="74px" 
                color="bg-gradient-to-r from-blue-400 to-blue-500" 
                textColor="text-white"
                text="DOCUMENT REQUEST"
                className="w-full"
            />
             <div className="bg-blue-600 text-white text-[10px] text-center py-1 font-bold">
                まずは無料で資料請求
            </div>
        </div>
      </div>

      {/* Navigation Menu */}
      <div className="bg-gray-50 p-4 rounded-xl border border-gray-200">
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
        
        <MenuSection 
            title="取得可能資格" 
            items={[
                { label: "ダイエットアドバイザー", href: "#" },
                { label: "シェイプアップインストラクター", href: "#" },
            ]} 
        />
      </div>
      
      {/* Mini Banner */}
       <div className="cursor-pointer opacity-90 hover:opacity-100 transition">
          <PlaceholderImage height="200px" color="bg-gray-200" text="CAMPAIGN" className="rounded-lg" />
       </div>

    </div>
  );
};