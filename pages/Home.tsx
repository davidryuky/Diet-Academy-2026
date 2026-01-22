import React from 'react';
import { Button } from '../components/common/Button';
import { PlaceholderImage } from '../components/common/PlaceholderImage';
import { Sidebar } from '../components/layout/Sidebar';
import { Users, BookOpen, Clock, Sparkles, TrendingUp, ArrowRight, Check, Star, ShieldCheck, Award, Layers, Zap, Monitor, Heart, GraduationCap, Briefcase } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { courses } from '../data/coursesData';

export const Home: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-stone-50 font-sans text-stone-700 w-full">
      
      {/* Dynamic Hero Section */}
      <div className="relative w-full h-[600px] overflow-hidden bg-white">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-50/50 to-teal-50/50"></div>
        <div className="relative w-[92%] max-w-[1600px] mx-auto h-full flex flex-col justify-center">
            <div className="max-w-4xl animate-in fade-in slide-in-from-left-8 duration-1000">
                <span className="inline-block text-[#FF8C6B] font-bold tracking-widest text-sm md:text-base mb-4 bg-orange-100/50 px-4 py-1 rounded-full border border-orange-200">
                    2026年度 最新カリキュラム
                </span>
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-stone-800 leading-tight md:leading-tight mb-6 font-serif-jp">
                    その知識が、<br />
                    <span className="md:whitespace-nowrap">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF8C6B] to-[#5D9B9B]">一生モノの価値</span>になる。
                    </span>
                </h1>
                <p className="text-lg md:text-xl text-stone-600 mb-8 leading-relaxed font-medium">
                    日本ダイエットアカデミー協会は、個人の健康からプロの独立まで、<br className="hidden md:block" />
                    段階的に学べる3つのマスター資格を提供しています。
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                    <Button size="xl" variant="orange" onClick={() => navigate('/pricing')}>コースを比較する</Button>
                    <Button size="xl" variant="outline" className="bg-white" onClick={() => navigate('/seekers')}>まずは資料請求（無料）</Button>
                </div>
            </div>
            
            {/* Visual elements */}
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/3 hidden lg:block opacity-20">
                <PlaceholderImage height="500px" color="bg-stone-200" text="PREMIUM VISUAL" className="rounded-l-full shadow-2xl" />
            </div>
        </div>
      </div>

      {/* Course Tiers Quick Access */}
      <div className="py-20 bg-white">
          <div className="w-[92%] max-w-[1600px] mx-auto">
              <div className="text-center mb-16">
                  <h2 className="text-3xl md:text-5xl font-bold text-stone-800 mb-6 font-serif-jp">3段階のステップアップ</h2>
                  <p className="text-stone-500 max-w-2xl mx-auto">目的や目標に合わせて、最適なレベルからスタート. 段階的な昇級も可能です。</p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                  {courses.map((course) => (
                      <div 
                        key={course.id}
                        className="group relative bg-stone-50 rounded-3xl p-8 border border-stone-200 hover:border-orange-300 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 overflow-hidden"
                      >
                          <div className={`absolute top-0 right-0 w-24 h-24 ${course.color} opacity-5 rounded-bl-full transition-all group-hover:scale-150`}></div>
                          
                          <div className={`w-14 h-14 ${course.color} rounded-2xl flex items-center justify-center text-white mb-6 shadow-lg group-hover:rotate-6 transition-transform`}>
                              <course.icon size={28} />
                          </div>
                          
                          <div className="mb-4">
                              <span className={`text-xs font-bold ${course.accent} tracking-widest uppercase`}>{course.level}</span>
                              <h3 className="text-2xl font-bold text-stone-800 mt-1 font-serif-jp">{course.name}</h3>
                              <p className="text-sm font-bold text-stone-500">{course.subtitle}</p>
                          </div>
                          
                          <p className="text-stone-600 text-sm mb-8 leading-relaxed line-clamp-3">
                              {course.description}
                          </p>

                          <ul className="space-y-3 mb-8">
                              {course.features.slice(0, 3).map((f, i) => (
                                  <li key={i} className="flex items-center text-xs font-bold text-stone-500">
                                      <Check size={14} className={`mr-2 ${course.accent}`} /> {f}
                                  </li>
                              ))}
                          </ul>

                          <Button 
                            fullWidth 
                            variant={course.id === 'regular' ? 'orange' : 'teal'} 
                            size="md"
                            onClick={() => navigate('/courses')}
                          >
                              詳細を見る
                          </Button>
                      </div>
                  ))}
              </div>
          </div>
      </div>

      {/* Main Content Area with Sidebar */}
      <div className="w-[92%] max-w-[1600px] mx-auto py-20 flex flex-col lg:flex-row gap-16">
          
          <aside className="hidden lg:block w-[320px] flex-shrink-0 sticky top-32 self-start">
              <Sidebar />
          </aside>

          <main className="flex-1 space-y-16">

                {/* 1. Path Choice - Rectangular & Top-positioned */}
                <div className="space-y-8">
                    <div className="text-center">
                        <h2 className="text-2xl md:text-3xl font-bold text-stone-800 mb-2 font-serif-jp leading-tight">
                            あなたの「目的」はどちらですか？
                        </h2>
                        <div className="w-12 h-1 bg-[#FF8C6B] mx-auto rounded-full"></div>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                        {/* Seeker Path - More horizontal/rectangular */}
                        <div 
                          onClick={() => navigate('/seekers')}
                          className="group relative overflow-hidden bg-white rounded-3xl p-6 md:p-8 border border-stone-200 hover:border-[#FF8C6B] transition-all duration-500 cursor-pointer shadow-sm hover:shadow-xl flex items-center gap-6"
                        >
                            <div className="flex-shrink-0 p-4 bg-orange-50 text-[#FF8C6B] rounded-2xl group-hover:bg-[#FF8C6B] group-hover:text-white transition-colors duration-500">
                                <Users size={32} strokeWidth={1.5} />
                            </div>
                            <div className="flex-1">
                                <h3 className="text-xl font-bold text-stone-800 mb-2 font-serif-jp">「自分」を変える</h3>
                                <p className="text-stone-500 text-xs leading-relaxed font-medium line-clamp-2">
                                    一生モノの健康を手に入れたい個人の方はこちら
                                </p>
                                <div className="mt-3 flex items-center text-[#FF8C6B] text-[10px] font-bold group-hover:translate-x-1 transition-transform">
                                    個人向けページへ <ArrowRight size={14} className="ml-2" />
                                </div>
                            </div>
                        </div>

                        {/* Instructor Path - More horizontal/rectangular */}
                        <div 
                          onClick={() => navigate('/instructors')}
                          className="group relative overflow-hidden bg-white rounded-3xl p-6 md:p-8 border border-stone-200 hover:border-[#5D9B9B] transition-all duration-500 cursor-pointer shadow-sm hover:shadow-xl flex items-center gap-6"
                        >
                            <div className="flex-shrink-0 p-4 bg-teal-50 text-[#5D9B9B] rounded-2xl group-hover:bg-[#5D9B9B] group-hover:text-white transition-colors duration-500">
                                <Briefcase size={32} strokeWidth={1.5} />
                            </div>
                            <div className="flex-1">
                                <h3 className="text-xl font-bold text-stone-800 mb-2 font-serif-jp">「仕事」にする</h3>
                                <p className="text-stone-500 text-xs leading-relaxed font-medium line-clamp-2">
                                    指導者として、信頼されるプロを目指す方はこちら
                                </p>
                                <div className="mt-3 flex items-center text-[#5D9B9B] text-[10px] font-bold group-hover:translate-x-1 transition-transform">
                                    プロ向けページへ <ArrowRight size={14} className="ml-2" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
              
                {/* 2. 100% Acquisition Appeal */}
                <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-stone-200 text-center">
                    <h2 className="text-2xl md:text-3xl font-bold text-stone-800 mb-8 font-serif-jp leading-tight">
                        在宅・オンラインで完結。<br />
                        <span className="text-[#FF8C6B]">100%資格取得</span>が可能な学習システム
                    </h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { title: "完全オンライン", icon: Star, text: "スマホ一つで講義、試験、課題提出まで完結。" },
                            { title: "試験免除制度", icon: ShieldCheck, text: "スペシャル講座なら課題提出で認定証を発行。" },
                            { title: "無期限サポート", icon: Users, text: "取得後も、最新情報の提供や質問対応を継続。" }
                        ].map((item, idx) => (
                            <div key={idx} className="p-4">
                                <item.icon className="mx-auto text-[#FF8C6B] mb-4" size={32} />
                                <h4 className="font-bold text-base mb-2 font-serif-jp">{item.title}</h4>
                                <p className="text-xs text-stone-500">{item.text}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* 3. Double License */}
                <div className="bg-gradient-to-br from-[#FFF5F0] to-white rounded-3xl p-8 md:p-12 border border-[#FFD1C1] relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-8 opacity-5">
                        <Layers size={140} />
                    </div>
                    <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
                        <div className="md:w-2/3">
                            <span className="bg-[#FF8C6B] text-white text-[10px] font-bold px-3 py-1 rounded-full mb-4 inline-block">Double License</span>
                            <h3 className="text-2xl md:text-3xl font-bold text-stone-800 mb-4 font-serif-jp">2つの資格を同時に取得</h3>
                            <p className="text-stone-600 text-sm leading-relaxed font-medium mb-6">
                                一度の学習で役割の異なる2つの認定資格を取得できる「ダブルライセンス制度」を採用。活動の幅が飛躍的に広がります。
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <div className="flex items-center gap-2 text-stone-700 bg-white/60 px-4 py-2 rounded-lg border border-stone-100 text-xs font-bold">
                                    <Award size={14} className="text-[#FF8C6B]" /> ダイエットアドバイザー
                                </div>
                                <div className="flex items-center gap-2 text-stone-700 bg-white/60 px-4 py-2 rounded-lg border border-stone-100 text-xs font-bold">
                                    <Award size={14} className="text-[#5D9B9B]" /> シェイプアップ講師
                                </div>
                            </div>
                        </div>
                        <div className="md:w-1/3 flex justify-center">
                            <PlaceholderImage height="160px" width="160px" color="bg-white/40" text="CERTIFICATE" className="rounded-2xl border-2 border-dashed border-orange-200" />
                        </div>
                    </div>
                </div>

                {/* 4. Versatility Section */}
                <div className="bg-white rounded-3xl p-8 md:p-12 border border-stone-200 shadow-sm">
                    <div className="text-center mb-10">
                        <h3 className="text-2xl md:text-3xl font-bold text-stone-800 font-serif-jp">
                            資格を活かして 様々な場面で活躍できます
                        </h3>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {[
                            { title: "美容・サロン", text: "付加価値の向上", icon: Sparkles },
                            { title: "ジム・教育", text: "指導力の証明", icon: TrendingUp },
                            { title: "オンライン", text: "SNS・副業展開", icon: Monitor },
                            { title: "家庭・健康", text: "一生モノの習慣", icon: Heart }
                        ].map((item, idx) => (
                            <div key={idx} className="text-center group">
                                <div className="w-12 h-12 bg-stone-50 rounded-2xl flex items-center justify-center text-[#FF8C6B] mx-auto mb-4 group-hover:bg-[#FF8C6B] group-hover:text-white transition-all duration-300">
                                    <item.icon size={22} />
                                </div>
                                <h4 className="text-sm font-bold text-stone-800 mb-1 font-serif-jp">{item.title}</h4>
                                <p className="text-[10px] text-stone-400 font-medium">{item.text}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Supervisor Section */}
                <div className="bg-stripe rounded-3xl p-8 md:p-16 border border-stone-200">
                    <div className="flex flex-col md:flex-row gap-12 items-center">
                        <div className="md:w-1/3 w-full">
                            <PlaceholderImage height="320px" className="rounded-2xl shadow-xl w-full" color="bg-stone-100" text="CHIEF INSTRUCTOR" />
                        </div>
                        <div className="md:w-2/3 w-full">
                            <span className="text-[#FF8C6B] font-bold text-xs tracking-[0.3em] uppercase block mb-4">Supervision</span>
                            <h3 className="text-3xl font-bold text-stone-800 mb-6 font-serif-jp">プロが監修する、妥協のない質。</h3>
                            <div className="flex items-center gap-4 mb-6">
                                 <div className="font-bold text-2xl text-stone-800">山田 花子 先生</div>
                                 <span className="text-xs text-stone-500 bg-white border border-stone-200 px-4 py-1.5 rounded-full font-bold">管理栄養士</span>
                            </div>
                            <p className="text-stone-700 leading-loose text-base font-medium">
                                最新の栄養学、運動生理学を融合。初心者が躓きやすいポイントを徹底的に排除し、現場で「本当に使える」知識を厳選しました。
                            </p>
                            <Button variant="outline" className="mt-8 bg-white" onClick={() => navigate('/methods')}>学習メソッドを見る</Button>
                        </div>
                    </div>
                </div>

                {/* Trust/Testimonials */}
                <div className="space-y-8">
                    <div className="text-center">
                        <h2 className="text-2xl md:text-3xl font-bold font-serif-jp text-stone-800">合格者の声</h2>
                    </div>
                    <div className="grid md:grid-cols-2 gap-6">
                        {[
                            { name: "S.Kさん", role: "30代 / 主婦", title: "自分への自信がついた", text: "無理な我慢をせずに健康的に痩せることができました。今では家族の食事作りも楽しくて仕方ありません。" },
                            { name: "T.Mさん", role: "20代 / トレーナー", title: "指導の幅が広がった", text: "カウンセリングを学び、クライアントの成約率が上がりました. 知識の裏付けがあることが、大きな自信になっています。" }
                        ].map((t, idx) => (
                            <div key={idx} className="bg-white p-8 rounded-2xl border border-stone-200 shadow-sm">
                                <div className="flex text-orange-400 mb-4"><Star size={16} fill="currentColor"/><Star size={16} fill="currentColor"/><Star size={16} fill="currentColor"/><Star size={16} fill="currentColor"/><Star size={16} fill="currentColor"/></div>
                                <h4 className="font-bold text-lg mb-3 font-serif-jp">「{t.title}」</h4>
                                <p className="text-sm text-stone-600 leading-relaxed mb-6 line-clamp-3">{t.text}</p>
                                <div className="text-xs font-bold text-stone-400">{t.name} <span className="font-normal">/ {t.role}</span></div>
                            </div>
                        ))}
                    </div>
                </div>

          </main>
      </div>

      {/* Floating CTA (Mobile) */}
      <div className="fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-md shadow-2xl p-4 md:hidden z-40 border-t border-stone-100 safe-area-bottom">
          <div className="flex gap-3 max-w-md mx-auto">
            <Button fullWidth variant="secondary" size="md" className="rounded-xl" onClick={() => navigate('/seekers')}>資料請求</Button>
            <Button fullWidth variant="orange" size="md" className="rounded-xl" onClick={() => navigate('/pricing')}>受講申込み</Button>
          </div>
      </div>

    </div>
  );
};
