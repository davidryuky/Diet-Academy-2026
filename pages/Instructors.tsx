import React from 'react';
import { Button } from '../components/common/Button';
import { PlaceholderImage } from '../components/common/PlaceholderImage';
import { useNavigate } from 'react-router-dom';
import { Award, Briefcase, TrendingUp, ShieldCheck, ChevronRight, CheckCircle2, Globe, Building2, Monitor, Users } from 'lucide-react';
import { courses } from '../data/coursesData';

export const Instructors: React.FC = () => {
  const navigate = useNavigate();
  const seniorCourse = courses[1];
  const proCourse = courses[2];

  return (
    <div className="min-h-screen bg-white">
      {/* Professional Hero */}
      <div className="relative h-[600px] flex items-center bg-stone-900 overflow-hidden">
        <div className="absolute inset-0 opacity-40 bg-[url('https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=1600&auto=format&fit=crop&q=80')] bg-cover bg-center"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-stone-950 via-stone-900/80 to-transparent"></div>
        
        <div className="max-w-7xl mx-auto px-4 w-full relative z-10 text-white">
          <div className="max-w-2xl">
            <span className="text-teal-500 font-bold tracking-[0.4em] text-xs uppercase mb-6 block">Professional Career Program</span>
            <h1 className="text-4xl md:text-6xl font-bold mb-8 font-serif-jp leading-tight">
              その経験を、<br /><span className="text-teal-500">信頼</span>という武器に変える。
            </h1>
            <p className="text-xl text-stone-400 mb-10 leading-relaxed font-medium">
              ダイエットのプロとして。指導者、そして経営者へ。W資格取得と高度なマネジメントスキルで、市場価値を最大化します。
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
                <Button size="xl" variant="teal" onClick={() => navigate('/pricing')}>プロ向けコースを見る</Button>
                <Button size="xl" variant="outline" className="border-white text-white hover:bg-white/10">資料請求（法人/個人事業）</Button>
            </div>
          </div>
        </div>
      </div>

      {/* Why Professional Section */}
      <section className="py-24 max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-stone-800 font-serif-jp">選ばれる指導者であるために</h2>
          <p className="text-stone-500 mt-4 font-medium">知識だけで終わらせない、現場で勝てる「実戦スキル」を証明。</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { icon: Award, title: "高度な認定資格", text: "「教える」ための心理学と、科学的根拠に基づいた指導メソッドを習得。" },
            { icon: ShieldCheck, title: "100%合格保証", text: "現場に集中できるよう、スペシャル講座では課題提出で確実な資格取得を支援。" },
            { icon: Building2, title: "独立・開業支援", text: "スクール運営、サロン開設、リスク管理などビジネスに必要な知識をパッケージ。" },
            { icon: Globe, title: "広がるフィールド", text: "オンライン指導、執筆、セミナー講師。全国どこからでもプロとして活躍。" }
          ].map((item, idx) => (
            <div key={idx} className="p-10 border border-stone-200 rounded-3xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 group">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-teal-50 text-teal-600 mb-6 group-hover:bg-teal-600 group-hover:text-white transition-colors duration-300 shadow-sm">
                <item.icon size={32} />
              </div>
              <h3 className="text-xl font-bold mb-4 text-stone-800 font-serif-jp">{item.title}</h3>
              <p className="text-sm text-stone-500 leading-relaxed font-medium">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Career Versatility Section */}
      <section className="py-24 bg-stone-50 border-y border-stone-200">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-stone-800 font-serif-jp leading-tight mb-4">
              資格を活かして 様々な場面で活躍できます
            </h2>
            <p className="text-stone-500 font-medium">専門家として、あなたの活躍の場は無限に広がります。</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Personal Trainer", desc: "ジムでの運動指導に高品質な食事指導をプラスし、クライアントの成果を加速させます。", icon: TrendingUp },
              { title: "Online Consultant", desc: "場所を選ばず、ZoomやSNSを通じて全国の悩める人々にカウンセリングを提供。", icon: Monitor },
              { title: "Seminar Instructor", desc: "地域のコミュニティや企業向けに、健康経営や食育に関するセミナーを主催。", icon: Users },
              { title: "Salon Management", desc: "エステや美容サロンのメニューに「内面美容」としての栄養学を導入。", icon: Building2 },
              { title: "Writer / Blogger", desc: "専門知識を活かし、Webメディアや雑誌でのコラム執筆、SNSでの情報発信。", icon: Briefcase },
              { title: "Corporate Wellness", desc: "企業の福利厚生として、社員の健康管理やメタボ対策のアドバイザーとして活躍。", icon: ShieldCheck }
            ].map((item, idx) => (
              <div key={idx} className="bg-white p-8 rounded-[2rem] border border-stone-200 shadow-sm hover:border-teal-200 transition-all flex flex-col items-center text-center">
                <div className="w-14 h-14 bg-teal-50 rounded-2xl flex items-center justify-center text-teal-600 mb-6">
                  <item.icon size={28} />
                </div>
                <h4 className="text-xl font-bold text-stone-800 mb-3 font-serif-jp">{item.title}</h4>
                <p className="text-sm text-stone-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Senior & Professional Courses */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 space-y-16">
            <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-stone-800 font-serif-jp">プロフェッショナル・ラインナップ</h2>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-10">
                {/* Senior Course */}
                <div className="bg-white rounded-[2rem] p-10 md:p-14 border border-stone-200 shadow-sm flex flex-col">
                    <div className="flex-grow">
                        <span className="text-teal-600 font-bold tracking-widest text-xs uppercase mb-2 block">{seniorCourse.level}</span>
                        <h3 className="text-3xl font-bold text-stone-800 mb-6 font-serif-jp">{seniorCourse.name}</h3>
                        <p className="text-stone-500 mb-8 font-medium leading-relaxed">{seniorCourse.description}</p>
                        <div className="space-y-4 mb-10">
                            {seniorCourse.features.map((f, i) => (
                                <div key={i} className="flex items-center gap-3 text-sm font-bold text-stone-700">
                                    <CheckCircle2 className="text-teal-600" size={18} /> {f}
                                </div>
                            ))}
                        </div>
                    </div>
                    <Button variant="teal" fullWidth size="lg" onClick={() => navigate('/courses')}>
                        指導者向け詳細を見る
                    </Button>
                </div>

                {/* Professional Course */}
                <div className="bg-stone-900 text-white rounded-[2rem] p-10 md:p-14 border border-stone-800 shadow-xl flex flex-col relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-8 opacity-10">
                        <TrendingUp size={150} />
                    </div>
                    <div className="flex-grow relative z-10">
                        <span className="text-teal-400 font-bold tracking-widest text-xs uppercase mb-2 block">{proCourse.level}</span>
                        <h3 className="text-3xl font-bold text-white mb-6 font-serif-jp">{proCourse.name}</h3>
                        <p className="text-stone-400 mb-8 font-medium leading-relaxed">{proCourse.description}</p>
                        <div className="space-y-4 mb-10">
                            {proCourse.features.map((f, i) => (
                                <div key={i} className="flex items-center gap-3 text-sm font-bold text-stone-200">
                                    <CheckCircle2 className="text-teal-400" size={18} /> {f}
                                </div>
                            ))}
                        </div>
                    </div>
                    <Button variant="teal" fullWidth size="lg" className="relative z-10" onClick={() => navigate('/courses')}>
                        経営・責任者向け詳細を見る
                    </Button>
                </div>
            </div>
        </div>
      </section>

      {/* Message Area */}
      <section className="bg-stripe py-24 text-center">
        <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-stone-800 mb-8 font-serif-jp">最短で確かな信頼を築く、究極のロードマップ</h2>
            <p className="text-stone-500 leading-loose text-lg font-medium">
                当アカデミーのプロフェッショナルプログラムは、受講生の92%が専門知識ゼロからスタート。体系化されたステップアップにより、短期間で「教えられるプロ」としての自信と資格を手にしています。
            </p>
        </div>
      </section>
    </div>
  );
};