import React from 'react';
import { Button } from '../components/common/Button';
import { PlaceholderImage } from '../components/common/PlaceholderImage';
import { Sidebar } from '../components/layout/Sidebar';
import { Users, BookOpen, Clock, Sparkles, TrendingUp, ArrowRight, Check, Star, ShieldCheck } from 'lucide-react';
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
            <div className="max-w-3xl animate-in fade-in slide-in-from-left-8 duration-1000">
                <span className="inline-block text-[#FF8C6B] font-bold tracking-widest text-sm md:text-base mb-4 bg-orange-100/50 px-4 py-1 rounded-full border border-orange-200">
                    2026年度 最新カリキュラム
                </span>
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-stone-800 leading-tight md:leading-tight mb-6 font-serif-jp">
                    その知識が、<br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF8C6B] to-[#5D9B9B]">一生モノの価値</span>になる。
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

      {/* Course Tiers Overview */}
      <div className="py-20 bg-white">
          <div className="w-[92%] max-w-[1600px] mx-auto">
              <div className="text-center mb-16">
                  <h2 className="text-3xl md:text-5xl font-bold text-stone-800 mb-6 font-serif-jp">3段階のステップアップ</h2>
                  <p className="text-stone-500 max-w-2xl mx-auto">目的や目標に合わせて、最適なレベルからスタート。段階的な昇級も可能です。</p>
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

      {/* Separation Path: Seekers vs Instructors */}
      <div className="bg-[#FAF9F6] py-20 border-y border-stone-200">
        <div className="w-[92%] max-w-[1600px] mx-auto">
            <div className="text-center mb-12">
                <h2 className="text-2xl md:text-4xl font-bold text-stone-800 mb-4 font-serif-jp">
                    あなたの「目的」はどちらですか？
                </h2>
                <div className="w-12 h-1 bg-[#FF8C6B] mx-auto rounded-full opacity-60"></div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
                {/* For Seekers */}
                <div 
                    onClick={() => navigate('/seekers')}
                    className="group relative overflow-hidden rounded-3xl bg-white border border-stone-200 hover:border-orange-200 transition-all duration-500 cursor-pointer shadow-sm hover:shadow-xl"
                >
                    <div className="p-8 md:p-12">
                        <div className="flex justify-between items-start mb-6">
                            <div className="bg-orange-50 text-[#FF8C6B] text-xs font-bold px-4 py-2 rounded-full border border-orange-100">
                                自分磨き・家族の健康
                            </div>
                        </div>
                        <h3 className="text-2xl md:text-4xl font-bold text-stone-800 mb-6 font-serif-jp">
                            「自分」を変える。<br/>
                            <span className="text-[#FF8C6B]">一生モノ</span>の美しさを。
                        </h3>
                        <p className="text-stone-600 mb-8 text-base leading-relaxed font-medium">
                            流行に左右されない、科学的な栄養学と習慣化メソッドを。まずはレギュラーコースから、正しい知識の基礎を固めましょう。
                        </p>
                        <div className="flex items-center text-[#FF8C6B] font-bold group-hover:translate-x-2 transition-transform">
                            個人向けページへ <ArrowRight size={20} className="ml-2" />
                        </div>
                    </div>
                </div>

                {/* For Instructors */}
                <div 
                    onClick={() => navigate('/instructors')}
                    className="group relative overflow-hidden rounded-3xl bg-white border border-stone-200 hover:border-teal-200 transition-all duration-500 cursor-pointer shadow-sm hover:shadow-xl"
                >
                    <div className="p-8 md:p-12">
                        <div className="flex justify-between items-start mb-6">
                            <div className="bg-teal-50 text-[#5D9B9B] text-xs font-bold px-4 py-2 rounded-full border border-teal-100">
                                指導者・ビジネス・独立
                            </div>
                        </div>
                        <h3 className="text-2xl md:text-4xl font-bold text-stone-800 mb-6 font-serif-jp">
                            「仕事」にする。<br/>
                            <span className="text-[#5D9B9B]">信頼</span>されるプロへ。
                        </h3>
                        <p className="text-stone-600 mb-8 text-base leading-relaxed font-medium">
                            シニア・プロフェッショナルコースで、他者を導くスキルを証明。副業から本業、スクール運営まで、あなたの可能性を最大化します。
                        </p>
                        <div className="flex items-center text-[#5D9B9B] font-bold group-hover:translate-x-2 transition-transform">
                            プロ・講師向けページへ <ArrowRight size={20} className="ml-2" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>

      {/* Main Content Area with Sidebar */}
      <div className="w-[92%] max-w-[1600px] mx-auto py-20 flex flex-col lg:flex-row gap-16">
          
          <aside className="hidden lg:block w-[320px] flex-shrink-0 sticky top-32 self-start">
              <Sidebar />
          </aside>

          <main className="flex-1 space-y-24">
              
                {/* 100% Acquisition Appeal */}
                <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-stone-200 text-center">
                    <h2 className="text-2xl md:text-4xl font-bold text-stone-800 mb-8 font-serif-jp leading-tight">
                        在宅・オンラインで完結。<br />
                        <span className="text-[#FF8C6B]">100%資格取得</span>が可能な学習システム
                    </h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { title: "完全オンライン", icon: Star, text: "スマホ一つで講義、試験、課題提出まで完結。" },
                            { title: "試験免除制度", icon: ShieldCheck, text: "スペシャル講座なら課題提出で認定証を発行。" },
                            { title: "無期限サポート", icon: Users, text: "取得後も、最新情報の提供や質問対応を継続。" }
                        ].map((item, idx) => (
                            <div key={idx} className="p-6">
                                <item.icon className="mx-auto text-[#FF8C6B] mb-4" size={40} />
                                <h4 className="font-bold text-lg mb-2 font-serif-jp">{item.title}</h4>
                                <p className="text-sm text-stone-500">{item.text}</p>
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
                                 <span className="text-xs text-stone-500 bg-white border border-stone-200 px-4 py-1.5 rounded-full font-bold">管理栄養士 / 健康運動指導士</span>
                            </div>
                            <p className="text-stone-700 leading-loose text-base font-medium">
                                ダイエットは単なる減量ではありません。当協会の3つのコースは、最新の栄養学、運動生理学、そして行動心理学を融合させています。初心者が躓きやすいポイントを徹底的に排除し、実生活や現場で「本当に使える」知識だけを厳選しました。
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
                            { name: "S.Kさん", role: "30代 / 主婦", title: "自分への自信がついた", text: "レギュラーコースで学んだおかげで、無理な我慢をせずに健康的に痩せることができました。今では家族の食事作りも楽しくて仕方ありません。" },
                            { name: "T.Mさん", role: "20代 / パーソナルトレーナー", title: "指導の幅が広がった", text: "シニアコースでカウンセリングを学び、クライアントの成約率が劇的に上がりました。知識の裏付けがあることが、大きな自信になっています。" }
                        ].map((t, idx) => (
                            <div key={idx} className="bg-white p-8 rounded-2xl border border-stone-200 shadow-sm">
                                <div className="flex text-orange-400 mb-4"><Star size={16} fill="currentColor"/><Star size={16} fill="currentColor"/><Star size={16} fill="currentColor"/><Star size={16} fill="currentColor"/><Star size={16} fill="currentColor"/></div>
                                <h4 className="font-bold text-lg mb-3 font-serif-jp">「{t.title}」</h4>
                                <p className="text-sm text-stone-600 leading-relaxed mb-6">{t.text}</p>
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