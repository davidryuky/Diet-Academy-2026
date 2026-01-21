import React from 'react';
import { Button } from '../components/common/Button';
import { Check, X, ShieldCheck, HelpCircle, AlertCircle, Info } from 'lucide-react';
import { courses } from '../data/coursesData';
import { useNavigate } from 'react-router-dom';

export const Pricing: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-stone-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-[#FF8C6B] font-bold tracking-widest text-xs uppercase mb-4 block">Plan & Pricing</span>
          <h1 className="text-4xl md:text-6xl font-bold text-stone-800 tracking-tight font-serif-jp">
            選べる3つの受講コース
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-lg text-stone-500 font-medium">
            全コース共通で、質問無制限・24時間受付。自分に合ったレベルから、プロフェッショナルな知識を。
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {courses.map((course, idx) => (
            <div 
              key={course.id} 
              className={`relative flex flex-col bg-white rounded-3xl overflow-hidden transition-all duration-500 hover:shadow-2xl border-2 ${idx === 1 ? 'border-[#FF8C6B] shadow-xl md:-translate-y-4' : 'border-stone-100 shadow-sm'}`}
            >
              {idx === 1 && (
                <div className="bg-[#FF8C6B] text-white text-[10px] font-bold text-center py-2 tracking-[0.2em] uppercase">
                  Most Popular - 人気No.1
                </div>
              )}
              
              <div className="p-10 flex-grow">
                <div className={`w-12 h-12 rounded-xl ${course.color} flex items-center justify-center text-white mb-6`}>
                    <course.icon size={24} />
                </div>
                <h3 className="text-xl font-bold text-stone-800 font-serif-jp">{course.name}</h3>
                <p className="text-xs text-stone-400 font-bold tracking-wider mt-1 mb-6">{course.level}</p>
                
                <div className="mb-8 flex items-baseline">
                  <span className={`text-4xl font-extrabold ${idx === 1 ? 'text-[#FF8C6B]' : 'text-stone-800'} font-serif-jp`}>{course.price}</span>
                  <span className="ml-1 text-sm text-stone-400 font-medium">円 (税込)</span>
                </div>
                
                <ul className="space-y-4 text-sm font-medium text-stone-600 mb-10">
                  {course.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-start">
                      <Check className={`h-5 w-5 ${course.accent} mr-3 flex-shrink-0 mt-0.5`} /> 
                      <span>{feature}</span>
                    </li>
                  ))}
                  <li className="flex items-start text-stone-400">
                    <Info className="h-5 w-5 text-stone-300 mr-3 flex-shrink-0 mt-0.5" />
                    <span>受講期間: {course.period}</span>
                  </li>
                </ul>
              </div>

              <div className="p-10 bg-stone-50 border-t border-stone-100">
                <Button 
                    fullWidth 
                    variant={idx === 1 ? 'orange' : idx === 2 ? 'teal' : 'outline'} 
                    size="lg"
                    className="rounded-2xl"
                    onClick={() => navigate('/pricing')}
                >
                  このコースを申込む
                </Button>
                <p className="text-center text-[10px] text-stone-400 mt-4 font-bold tracking-widest">
                  8日間返品保証・分割払い対応
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Guarantee Section */}
        <div className="max-w-4xl mx-auto mb-20">
          <div className="bg-white border border-stone-200 rounded-[2.5rem] p-8 md:p-12 relative overflow-hidden shadow-sm flex flex-col md:flex-row items-center gap-10">
            <div className="w-24 h-24 bg-orange-100 rounded-full flex items-center justify-center text-[#FF8C6B] flex-shrink-0">
                <ShieldCheck size={48} strokeWidth={1.5} />
            </div>
            <div className="text-center md:text-left flex-1">
                <h3 className="text-2xl font-bold text-stone-800 mb-4 font-serif-jp">
                  全コース共通 100%取得サポート
                </h3>
                <p className="text-stone-600 leading-relaxed font-medium">
                  当協会の認定講座は、受講生が最後までやり遂げられるよう、プロの講師による無制限の質問サポートを提供しています。また、「スペシャル講座」を選択いただくことで、試験免除での資格取得が可能です。
                </p>
                <div className="mt-6 inline-flex items-center gap-2 text-xs font-bold text-stone-400 bg-stone-50 px-4 py-2 rounded-full">
                    <AlertCircle size={14} /> お支払い方法：クレカ / Amazon Pay / PayPay / コンビニ後払い
                </div>
            </div>
          </div>
        </div>

        {/* FAQ */}
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-stone-800 font-serif-jp">よくあるご質問</h2>
          </div>

          <div className="space-y-6">
            {[
              { q: "未経験でもプロフェッショナルコースから受講できますか？", a: "はい、可能です。プロフェッショナルコースの教材にはレギュラー、シニアの内容も含まれており、基礎から経営スキルまでを一貫して学ぶことができます。" },
              { q: "取得した資格に有効期限はありますか？", a: "いいえ、更新料や年会費は一切かかりません。取得いただいた資格は一生涯有効なスキルとしてご活用いただけます。" },
              { q: "海外からの受講は可能ですか？", a: "オンライン講座であれば、インターネット環境があれば世界中どこからでも受講・受験が可能です。" }
            ].map((item, idx) => (
              <div key={idx} className="bg-white border border-stone-100 rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-lg font-bold text-stone-800 mb-4 flex items-start">
                  <span className="w-8 h-8 rounded-lg bg-stone-100 flex items-center justify-center text-stone-400 text-xs font-bold mr-4 flex-shrink-0 mt-0.5">Q</span>
                  {item.q}
                </h3>
                <div className="pl-12 text-stone-500 text-sm leading-relaxed font-medium border-l-2 border-orange-100">
                  {item.a}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};