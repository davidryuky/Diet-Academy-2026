import React from 'react';
import { Button } from '../components/common/Button';
import { useNavigate } from 'react-router-dom';
import { Heart, Scale, Smile, Clock, CheckCircle2, ArrowRight } from 'lucide-react';
import { courses } from '../data/coursesData';

export const Seekers: React.FC = () => {
  const navigate = useNavigate();
  const regularCourse = courses[0];

  return (
    <div className="min-h-screen bg-white">
      {/* Dynamic Hero */}
      <div className="relative h-[550px] flex items-center bg-[#FFF9F6]">
        <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_#FFD1C1_0%,_transparent_60%)] opacity-30"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 w-full relative z-10">
          <div className="max-w-2xl">
            <span className="text-[#FF8C6B] font-bold tracking-[0.2em] text-sm uppercase mb-6 block">For Your Personal Life</span>
            <h1 className="text-4xl md:text-6xl font-bold text-stone-800 mb-6 font-serif-jp leading-tight">
              「我慢」のダイエットを、<br /><span className="text-[#FF8C6B]">「学び」のライフスタイル</span>へ。
            </h1>
            <p className="text-xl text-stone-600 mb-10 leading-relaxed font-medium">
              自分らしく、心地よく、理想の体型を維持するための科学的な知識。レギュラーコースで、一生モノの健康習慣を身につけませんか。
            </p>
            <div className="flex gap-4">
                <Button size="xl" variant="orange" onClick={() => navigate('/pricing')}>コース詳細を見る</Button>
                <Button size="xl" variant="outline" className="bg-white/50 backdrop-blur-sm">まずは資料請求</Button>
            </div>
          </div>
        </div>
      </div>

      {/* Philosophy Section */}
      <section className="py-24 max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-stone-800 mb-6 font-serif-jp">私たちが提供するのは「解決力」です</h2>
            <p className="text-stone-500 max-w-2xl mx-auto">一時的な減量ではなく、生涯にわたって理想の状態をコントロールできる「知識の力」を提供します。</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { icon: Scale, title: "リバウンド卒業", text: "無理な制限ではなく、代謝の仕組みを理解することで自然と維持できる体へ。" },
            { icon: Heart, title: "家族の健康管理", text: "自分だけでなく、大切な人のための栄養バランスや献立作成をマスター。" },
            { icon: Smile, title: "揺るぎない自信", text: "科学的な裏付けがあるから、情報に振り回されず自分の判断に自信が持てます。" },
            { icon: Clock, title: "スキマ時間学習", text: "家事や育児の合間に、1日15分からの学習で着実にスキルアップ。" }
          ].map((item, idx) => (
            <div key={idx} className="p-8 bg-white rounded-3xl border border-stone-100 shadow-sm hover:shadow-xl hover:border-orange-200 transition-all duration-300">
              <item.icon className="h-10 w-10 text-[#FF8C6B] mb-6" strokeWidth={1.5} />
              <h3 className="text-lg font-bold mb-4 text-stone-800 font-serif-jp">{item.title}</h3>
              <p className="text-stone-500 text-sm leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Course: Regular */}
      <section className="bg-stone-50 py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-white rounded-[2.5rem] overflow-hidden shadow-xl border border-stone-200 flex flex-col lg:flex-row">
            <div className="lg:w-2/5 bg-gradient-to-br from-[#FF8C6B] to-[#FFB088] p-12 text-white flex flex-col justify-center">
                <span className="text-white/80 font-bold tracking-widest text-xs uppercase mb-4">Recommended For Beginners</span>
                <h2 className="text-3xl md:text-5xl font-bold mb-6 font-serif-jp leading-tight">Diet Master<br /><span className="text-2xl opacity-90 font-sans">レギュラーコース</span></h2>
                <p className="text-white/90 text-lg mb-8 leading-relaxed font-medium">
                  まずはここから。ダイエットの基礎から応用まで、実践的な知識を網羅した人気No.1コース。
                </p>
                <ul className="space-y-4 mb-10">
                    {regularCourse.features.map((f, i) => (
                        <li key={i} className="flex items-center gap-3 text-sm font-bold">
                            <CheckCircle2 size={18} className="text-white" /> {f}
                        </li>
                    ))}
                </ul>
                <Button variant="outline" className="bg-white/20 border-white text-white hover:bg-white hover:text-[#FF8C6B]" onClick={() => navigate('/courses')}>
                    詳細を見る <ArrowRight className="ml-2" size={16} />
                </Button>
            </div>
            <div className="lg:w-3/5 p-12 md:p-16 flex flex-col justify-center">
                 <h3 className="text-2xl font-bold text-stone-800 mb-8 font-serif-jp">具体的に学べること</h3>
                 <div className="grid md:grid-cols-2 gap-8">
                     {[
                        { title: "代謝のメカニズム", desc: "なぜ太るのか、どうすれば効率よく脂肪が燃えるのか、生理学的に学びます。" },
                        { title: "賢い栄養選択", desc: "カロリーだけではない、血糖値や栄養素の質を考慮した食材選びの極意。" },
                        { title: "メンタルコントロール", desc: "挫折しやすい食欲の波を、心理学の知見からコントロールする技術。" },
                        { title: "継続の仕組みづくり", desc: "「頑張る」のをやめて、日常のルーティンにダイエットを組み込む方法。" }
                     ].map((item, idx) => (
                        <div key={idx}>
                            <h4 className="font-bold text-stone-800 mb-2 flex items-center text-sm">
                                <span className="w-1.5 h-1.5 rounded-full bg-[#FF8C6B] mr-2"></span>
                                {item.title}
                            </h4>
                            <p className="text-stone-500 text-xs leading-relaxed">{item.desc}</p>
                        </div>
                     ))}
                 </div>
                 <div className="mt-12 p-8 bg-stone-50 rounded-2xl border border-stone-100 italic text-stone-600 text-sm leading-relaxed">
                    「産後、何をしても体重が戻らなかった私が、このコースでの学びを通じて自分の体の声を聞けるようになりました。数値以上に、心に余裕ができたことが一番の収穫です。」 — <span className="font-bold text-stone-800">30代受講生 Sさん</span>
                 </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Bottom */}
      <section className="py-24 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 font-serif-jp text-stone-800">新しい自分への第一歩、<br />今日から始めませんか？</h2>
        <div className="flex justify-center gap-4 px-4">
            <Button size="xl" variant="orange" onClick={() => navigate('/pricing')}>受講プランをチェック</Button>
            <Button size="xl" variant="outline" onClick={() => navigate('/')}>ホームへ戻る</Button>
        </div>
      </section>
    </div>
  );
};