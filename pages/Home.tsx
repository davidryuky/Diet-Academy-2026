import React from 'react';
import { Button } from '../components/common/Button';
import { PlaceholderImage } from '../components/common/PlaceholderImage';
import { Sidebar } from '../components/layout/Sidebar';
import { Users, BookOpen, Clock, Sparkles, TrendingUp, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export const Home: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-stone-50 font-sans text-stone-700 w-full">
      
      {/* Hero Image */}
      <div className="relative w-full bg-[#FFF5F0]">
        <div className="hidden md:block w-full">
            <PlaceholderImage height="500px" color="bg-[#FFF5F0]" textColor="text-[#FF8C6B]" text="MAIN VISUAL (PC)" className="w-full" />
        </div>
        <div className="block md:hidden w-full">
            <PlaceholderImage height="280px" color="bg-[#FFF5F0]" textColor="text-[#FF8C6B]" text="MAIN VISUAL (SP)" className="w-full" />
        </div>
      </div>

      {/* Catch Area - Statistics */}
      <div className="bg-white py-10 md:py-14 border-b border-stone-200 w-full shadow-sm relative z-10">
        <div className="w-[92%] max-w-[1600px] mx-auto">
          <div className="flex flex-col md:flex-row justify-center items-start md:items-center space-y-8 md:space-y-0 md:space-x-12 lg:space-x-20">
            
            {/* Stat Item 1 */}
            <div className="flex items-center w-full md:w-auto group">
              <div className="bg-[#FFF0EB] p-3 md:p-4 rounded-full mr-4 text-[#FF8C6B] flex-shrink-0 group-hover:bg-[#FF8C6B] group-hover:text-white transition-colors duration-300">
                <Users className="w-6 h-6 md:w-7 md:h-7" />
              </div>
              <div className="flex flex-col md:block">
                <span className="text-xs md:text-sm text-stone-500 font-bold mb-0.5 md:mb-0 md:block tracking-wide">実績</span>
                <span className="font-serif-jp font-bold text-lg md:text-xl text-stone-800">
                  資格保持者数 <span className="text-[#FF8C6B] text-3xl md:text-5xl ml-1">4,350人</span> 突破
                </span>
              </div>
            </div>

            {/* Stat Item 2 */}
            <div className="flex items-center w-full md:w-auto group">
              <div className="bg-[#FFF0EB] p-3 md:p-4 rounded-full mr-4 text-[#FF8C6B] flex-shrink-0 group-hover:bg-[#FF8C6B] group-hover:text-white transition-colors duration-300">
                <BookOpen className="w-6 h-6 md:w-7 md:h-7" />
              </div>
              <div className="flex flex-col md:block">
                <span className="text-xs md:text-sm text-stone-500 font-bold mb-0.5 md:mb-0 md:block tracking-wide">安心</span>
                <span className="font-serif-jp font-bold text-lg md:text-xl text-stone-800">
                  初学者 <span className="text-[#FF8C6B] text-3xl md:text-5xl ml-1">88.7%</span> 簡単カリキュラム
                </span>
              </div>
            </div>

            {/* Stat Item 3 */}
            <div className="flex items-center w-full md:w-auto group">
              <div className="bg-[#FFF0EB] p-3 md:p-4 rounded-full mr-4 text-[#FF8C6B] flex-shrink-0 group-hover:bg-[#FF8C6B] group-hover:text-white transition-colors duration-300">
                <Clock className="w-6 h-6 md:w-7 md:h-7" />
              </div>
              <div className="flex flex-col md:block">
                <span className="text-xs md:text-sm text-stone-500 font-bold mb-0.5 md:mb-0 md:block tracking-wide">便利</span>
                <span className="font-serif-jp font-bold text-lg md:text-xl text-stone-800">
                  自宅で <span className="text-[#FF8C6B] text-3xl md:text-5xl ml-1">試験OK</span> 在宅受験対応
                </span>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Target Audience Trigger Section */}
      <div className="bg-[#FAF9F6] py-12 md:py-20 w-full">
        <div className="w-[92%] max-w-[1600px] mx-auto">
            <div className="text-center mb-10 md:mb-12">
                <h2 className="text-2xl md:text-4xl font-bold text-stone-800 mb-4 font-serif-jp">
                    あなたの「目的」はどちらですか？
                </h2>
                <div className="w-12 h-1 bg-[#FF8C6B] mx-auto rounded-full opacity-60"></div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6 md:gap-10">
                {/* Seeker Trigger - Pastel Peach/Rose */}
                <div 
                    onClick={() => navigate('/seekers')}
                    className="group relative overflow-hidden rounded-2xl md:rounded-3xl bg-gradient-to-br from-white via-[#FFF5F0] to-[#FFEBE6] border border-stone-200 hover:border-orange-200 transition-all duration-500 cursor-pointer shadow-sm hover:shadow-lg hover:-translate-y-1"
                >
                    <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity duration-500">
                        <Sparkles size={120} className="text-[#FF8C6B]" />
                    </div>
                    <div className="p-8 md:p-12 relative z-10 flex flex-col justify-center h-full">
                        <div className="flex justify-between items-start mb-4">
                            <div className="inline-block bg-white text-[#FF8C6B] text-xs font-bold px-4 py-1.5 rounded-full shadow-sm border border-stone-100 tracking-wide">
                                自分を変えたい方へ
                            </div>
                        </div>
                        <h3 className="text-xl md:text-3xl font-bold text-stone-800 mb-4 leading-snug font-serif-jp">
                            「我慢」はもう終わり。<br/>
                            <span className="text-[#FF8C6B] decoration-[#FFD1C1] decoration-4 underline-offset-4 underline">一生太らない知識</span>を。
                        </h3>
                        <p className="text-stone-600 mb-8 text-sm md:text-base leading-relaxed max-w-lg font-medium">
                            流行りのダイエットに振り回されるのは卒業。科学的に正しいメソッドで、心も体も満たされる本当の健康美を目指すあなたへ。
                        </p>
                        <div className="flex items-center text-[#FF8C6B] font-bold group-hover:translate-x-2 transition-transform text-sm md:text-lg mt-auto">
                            詳細を見る <ArrowRight size={20} className="ml-2" />
                        </div>
                    </div>
                </div>

                {/* Instructor Trigger - Pastel Teal */}
                <div 
                    onClick={() => navigate('/instructors')}
                    className="group relative overflow-hidden rounded-2xl md:rounded-3xl bg-gradient-to-br from-white via-[#F0FCFC] to-[#E0F7FA] border border-stone-200 hover:border-teal-200 transition-all duration-500 cursor-pointer shadow-sm hover:shadow-lg hover:-translate-y-1"
                >
                    <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity duration-500">
                        <TrendingUp size={120} className="text-[#5D9B9B]" />
                    </div>
                    <div className="p-8 md:p-12 relative z-10 flex flex-col justify-center h-full">
                        <div className="flex justify-between items-start mb-4">
                            <div className="inline-block bg-white text-[#5D9B9B] text-xs font-bold px-4 py-1.5 rounded-full shadow-sm border border-stone-100 tracking-wide">
                                プロを目指す方へ
                            </div>
                        </div>
                        <h3 className="text-xl md:text-3xl font-bold text-stone-800 mb-4 leading-snug font-serif-jp">
                            その経験が価値になる。<br/>
                            <span className="text-[#5D9B9B] decoration-[#B2DFDB] decoration-4 underline-offset-4 underline">信頼されるプロ</span>へ。
                        </h3>
                        <p className="text-stone-600 mb-8 text-sm md:text-base leading-relaxed max-w-lg font-medium">
                            W資格取得で専門性を証明。副業、独立、サロン開業... あなたの「好き」を仕事にするための確かなスキルと自信を。
                        </p>
                        <div className="flex items-center text-[#5D9B9B] font-bold group-hover:translate-x-2 transition-transform text-sm md:text-lg mt-auto">
                            詳細を見る <ArrowRight size={20} className="ml-2" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>

      {/* === SPLIT LAYOUT === */}
      <div className="w-[92%] max-w-[1600px] mx-auto py-10 md:py-16 flex flex-col lg:flex-row gap-10 md:gap-16 items-start relative">
          
          <aside className="hidden lg:block w-[320px] flex-shrink-0 sticky top-32 self-start h-fit">
              <Sidebar />
          </aside>

          <main className="w-full flex-1 min-w-0 space-y-16 md:space-y-24">
              
                {/* Course Title */}
                <div className="text-center">
                    <div className="inline-block text-xs md:text-sm font-bold tracking-[0.2em] text-[#FF8C6B] border border-[#FF8C6B] px-5 py-1.5 rounded-full mb-6 uppercase">Online Course</div>
                    <h2 className="text-3xl md:text-5xl font-bold text-stone-800 tracking-wide font-serif-jp">ダイエットアドバイザー</h2>
                </div>

                {/* Qualification Appeal */}
                <div className="space-y-10 md:space-y-12">
                    <div className="text-center mb-10">
                        <h1 className="text-2xl md:text-4xl font-bold text-stone-800 leading-relaxed font-serif-jp">
                            ダイエットアドバイザー<br />
                            W資格取得スペシャル講座なら<br />
                            <span className="text-[#FF8C6B] bg-[#FFF0EB] px-4 py-1 mt-3 inline-block rounded-lg shadow-sm">1ヶ月で100%資格取得</span>できます
                        </h1>
                    </div>

                    <div className="flex flex-col md:flex-row gap-8 items-center bg-white p-6 md:p-8 rounded-3xl shadow-sm border border-stone-200">
                        <div className="w-full md:w-1/2">
                            <PlaceholderImage height="200px" className="md:h-[280px] rounded-2xl w-full" color="bg-[#E0F2F1]" textColor="text-[#5D9B9B]" text="STUDY IMAGE" />
                        </div>
                        <div className="w-full md:w-1/2">
                            <p className="text-stone-700 leading-loose text-sm md:text-base font-medium">
                                ダイエットマスター資格講座のスペシャル講座なら、<span className="text-[#FF8C6B] font-bold border-b-2 border-[#FF8C6B]/30">「ダイエットアドバイザー」</span>と<span className="text-[#FF8C6B] font-bold border-b-2 border-[#FF8C6B]/30">「シェイプアップインストラクター」</span>の2資格を家にいながら、オンライン講座なら1ヶ月、紙教材なら2ヶ月で課題を提出するだけで<span className="text-lg md:text-xl font-bold text-[#5D9B9B]">100%資格取得</span>できます。
                            </p>
                        </div>
                    </div>

                    {/* 3 Points */}
                    <div className="space-y-6">
                        {[
                            { title: "1ヶ月で100%資格取得", color: "bg-[#E3F2FD]", iconColor: "text-blue-500", text: "資格協会に認められた学習カリキュラムとシステム導入により、1ヶ月で資格取得できる事を実現しました！" },
                            { title: "初心者の方でも安心", color: "bg-[#FCE4EC]", iconColor: "text-pink-500", text: "プロ監修のわかりやすいオリジナル教材。初学者は88.7％！10代から80代まで幅広い年齢層の方が受講。" },
                            { title: "目指せる資格", color: "bg-[#FFF8E1]", iconColor: "text-amber-500", text: "健康的で安全な減量方法や、栄養学・運動学に基づいた知識を体系的に学び、そのスキルを証明する資格。" }
                        ].map((point, idx) => (
                            <div key={idx} className="flex flex-col md:flex-row items-center gap-6 bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-stone-200 hover:shadow-md transition-shadow duration-300">
                                <div className="w-full md:w-2/3 order-2 md:order-1">
                                    <div className="flex items-center gap-3 mb-3">
                                        <div className={`w-2 h-8 rounded-full ${point.iconColor.replace('text', 'bg')}`}></div>
                                        <h3 className="text-lg md:text-xl font-bold text-stone-800 font-serif-jp">
                                            {point.title}
                                        </h3>
                                    </div>
                                    <p className="text-stone-600 leading-relaxed text-sm md:text-base pl-5">{point.text}</p>
                                </div>
                                <div className="w-full md:w-1/3 order-1 md:order-2">
                                    <PlaceholderImage height="120px" className="md:h-[140px] rounded-xl w-full opacity-80" color={point.color} text={`POINT ${idx + 1}`} textColor={point.iconColor} />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Testimonials */}
                <div className="bg-[#FAF9F6] rounded-3xl p-8 md:p-12 border border-stone-200">
                    <h2 className="text-lg md:text-2xl font-bold text-center text-stone-800 mb-8 font-serif-jp">
                        <span className="bg-white px-6 py-3 rounded-full shadow-sm text-[#FF8C6B] border border-[#FF8C6B]/20">合格者の体験談</span>
                    </h2>
                    <div className="bg-white rounded-2xl p-8 shadow-sm border border-stone-200 flex flex-col md:flex-row gap-8 items-start">
                        <div className="md:w-1/4 flex flex-col items-center text-center flex-shrink-0">
                            <PlaceholderImage width="100px" height="100px" className="md:w-[120px] md:h-[120px] rounded-full mb-4" color="bg-stone-200" text="FACE" />
                            <div className="text-sm font-bold text-stone-700">櫻場孝徳 さん <span className="text-xs font-normal text-stone-500 block mt-1">20代 / 会社員</span></div>
                            <div className="flex text-[#FFB088] gap-1 text-sm mt-3 justify-center">
                                ★★★★★
                            </div>
                        </div>
                        <div className="md:w-3/4">
                            <h3 className="font-bold text-lg md:text-xl mb-4 text-[#FF8C6B] leading-relaxed font-serif-jp">「口コミがよかったので安心して受講できました」</h3>
                            <p className="text-stone-700 text-sm leading-8 font-medium">
                                テキストがわかりやすく、情報の量も多いので、ダイエットに関する知識を効率よく身につけることができました。自信がつきました。思い切って受講してよかったです！
                            </p>
                        </div>
                    </div>
                </div>

                {/* Banner Area */}
                <div className="space-y-6">
                    <PlaceholderImage height="100px" className="md:h-[120px] w-full rounded-2xl opacity-90 hover:opacity-100 transition" color="bg-[#FFEBEE]" textColor="text-rose-500" text="HIROMI CAMPAIGN" />
                </div>

                {/* Two Qualifications */}
                <div className="bg-stripe p-8 md:p-12 rounded-3xl border border-stone-200">
                    <div className="text-center mb-10">
                        <p className="text-stone-500 text-xs font-bold mb-3 tracking-widest uppercase">Double License</p>
                        <h2 className="text-2xl md:text-4xl font-bold text-stone-800 font-serif-jp">
                        2つの<span className="text-[#FF8C6B]">資格</span>を<span className="text-[#5D9B9B]">同時</span>に取得
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {[
                            { name: "ダイエットアドバイザー", org: "日本生活環境支援協会", color: "border-orange-200", badge: "bg-orange-50 text-[#FF8C6B]" },
                            { name: "シェイプアップインストラクター", org: "日本インストラクター技術協会", color: "border-teal-200", badge: "bg-teal-50 text-[#5D9B9B]" }
                        ].map((qual, idx) => (
                            <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm border-t-4 border-stone-200 hover:shadow-lg transition-all duration-300 relative overflow-hidden">
                                <div className={`absolute top-0 left-0 w-full h-1 ${qual.badge.split(' ')[0].replace('text', 'bg').replace('50', '400')}`}></div>
                                <div className="text-center mb-6">
                                    <span className={`${qual.badge} text-xs px-3 py-1 rounded-full font-bold tracking-wide`}>資格 {idx + 1}</span>
                                    <h3 className="text-lg md:text-xl font-bold mt-4 text-stone-800 font-serif-jp">{qual.name}</h3>
                                    <p className="text-[10px] md:text-xs text-stone-500 mt-2">{qual.org}</p>
                                </div>
                                <PlaceholderImage height="120px" className="md:h-[140px] w-full rounded-xl mb-4" color="bg-stone-50" text={`CERT ${idx+1}`} />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Merits Section */}
                <div className="bg-white border border-[#FF8C6B]/30 rounded-3xl p-8 md:p-12 text-center relative overflow-hidden">
                     <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#FF8C6B] to-[#FFB088]"></div>
                    <h2 className="text-xl md:text-3xl font-bold text-stone-800 mb-10 font-serif-jp mt-4">
                        資格を活かして<br />様々な場面で活躍できます
                    </h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {["進学・就職", "キャリアアップ", "資格で起業", "プチ開業"].map((m, i) => (
                            <div key={i} className="p-4 hover:bg-stone-50 rounded-xl transition-colors">
                                <PlaceholderImage width="80px" height="80px" className="md:w-[90px] md:h-[90px] mx-auto rounded-full mb-4 shadow-sm" color="bg-[#FFF8E1]" textColor="text-amber-500" text={`ICON ${i+1}`} />
                                <div className="font-bold text-stone-700 text-sm">{m}</div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Special Course Explanation */}
                <div className="bg-[#2D2A26] text-white rounded-3xl p-8 md:p-12 shadow-md">
                    <div className="text-center mb-10">
                        <span className="text-[#FF8C6B] font-bold text-sm tracking-widest block mb-4">RECOMMENDED</span>
                        <h2 className="text-2xl md:text-4xl font-bold font-serif-jp mb-6">スペシャル講座をご用意</h2>
                        <p className="text-xs md:text-sm text-stone-300 leading-loose max-w-2xl mx-auto">
                            卒業課題を提出する事で試験免除となり、<br className="md:hidden"/>2資格が講座卒業と同時に認定されます。
                        </p>
                    </div>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="bg-[#3D3A36] rounded-2xl p-6 text-center border border-stone-600">
                            <h3 className="font-bold text-stone-400 text-sm mb-4">通常の講座</h3>
                            <PlaceholderImage height="100px" className="md:h-[120px] w-full mb-4 opacity-30 rounded-lg" color="bg-stone-700" text="NORMAL" textColor="text-stone-500" />
                            <p className="text-xs text-stone-500">試験を受けて合格が必要</p>
                        </div>
                        <div className="bg-gradient-to-br from-[#FF8C6B] to-[#E67E5B] rounded-2xl p-6 text-center relative overflow-hidden shadow-lg transform md:-translate-y-2">
                             <div className="absolute top-3 right-3 text-[10px] bg-white text-[#E67E5B] px-2 py-1 rounded font-bold shadow-sm">試験免除</div>
                            <h3 className="font-bold text-white text-base mb-4">スペシャル講座</h3>
                            <PlaceholderImage height="100px" className="md:h-[120px] w-full mb-4 rounded-lg bg-white/20" color="transparent" text="SPECIAL" textColor="text-white" />
                            <p className="text-xs text-white/90 font-bold">卒業と同時に資格取得!</p>
                        </div>
                    </div>
                </div>

                {/* Pricing List */}
                <div id="pricing" className="space-y-8">
                     <div className="text-center">
                        <h2 className="text-2xl md:text-3xl font-bold text-stone-800 font-serif-jp">講座コース紹介</h2>
                        <p className="text-stone-600 text-xs md:text-sm mt-3">100%資格が取れるスペシャル講座がおすすめ</p>
                    </div>
                    
                    {/* Course Item */}
                    {[
                        { type: "基本講座", name: "基本講座", price: "56,500", theme: "stone", badge: "通常" },
                        { type: "スペシャル講座", name: "スペシャル講座", price: "74,800", theme: "orange", badge: "試験免除" },
                        { type: "スペシャル講座", name: "スペシャル講座 オンライン", price: "74,800", theme: "teal", badge: "スマホ対応" }
                    ].map((course, idx) => (
                        <div key={idx} className={`bg-white border rounded-2xl overflow-hidden shadow-sm flex flex-col md:flex-row transition-all duration-300 hover:shadow-md ${course.theme === 'orange' ? 'border-orange-200' : course.theme === 'teal' ? 'border-teal-200' : 'border-stone-200'}`}>
                            <div className="md:w-3/4 p-6 md:p-8 border-b md:border-b-0 md:border-r border-stone-100">
                                <div className="flex items-center gap-3 mb-4">
                                    <span className={`text-[10px] md:text-xs text-white px-3 py-1 rounded-full font-bold ${course.theme === 'orange' ? 'bg-[#FF8C6B]' : course.theme === 'teal' ? 'bg-[#5D9B9B]' : 'bg-stone-500'}`}>{course.badge}</span>
                                    <h3 className="font-bold text-lg md:text-xl text-stone-800">{course.name}</h3>
                                </div>
                                <div className="flex gap-6">
                                    <PlaceholderImage width="80px" height="80px" className="md:w-[100px] md:h-[100px] rounded-xl hidden sm:flex" color={course.theme === 'orange' ? 'bg-[#FFF0EB]' : course.theme === 'teal' ? 'bg-[#E0F2F1]' : 'bg-stone-100'} text="IMG" textColor={course.theme === 'orange' ? 'text-[#FF8C6B]' : course.theme === 'teal' ? 'text-[#5D9B9B]' : 'text-stone-400'} />
                                    <ul className="text-xs text-stone-600 space-y-2 font-medium">
                                        <li>受講期間: 6ヶ月</li>
                                        <li>添削: 5回 {course.theme !== 'stone' && <span className="text-[#FF8C6B] font-bold">+ 卒業課題</span>}</li>
                                        <li>教材: {course.theme === 'teal' ? 'デジタル' : 'テキスト一式'}</li>
                                    </ul>
                                </div>
                            </div>
                            <div className={`md:w-1/4 p-6 md:p-8 flex flex-col justify-center items-center ${course.theme === 'orange' ? 'bg-[#FFF5F0]' : course.theme === 'teal' ? 'bg-[#E0F7FA]/30' : 'bg-stone-50'}`}>
                                <div className="text-stone-500 text-xs mb-1">受講料</div>
                                <div className={`text-3xl font-bold mb-4 font-serif-jp ${course.theme === 'stone' ? 'text-stone-700' : course.theme === 'orange' ? 'text-[#FF8C6B]' : 'text-[#5D9B9B]'}`}>{course.price}<span className="text-sm font-normal ml-1 text-stone-500">円</span></div>
                                <Button size="md" variant={course.theme === 'stone' ? 'outline' : course.theme === 'orange' ? 'orange' : 'teal'} className="w-full text-sm rounded-lg shadow-none">申込む</Button>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Supervisor */}
                <div className="bg-white border border-stone-200 rounded-3xl p-8 md:p-10 flex flex-col md:flex-row gap-8 items-center shadow-sm">
                    <div className="md:w-1/3 w-full">
                        <PlaceholderImage height="200px" className="md:h-[260px] rounded-2xl w-full" color="bg-stone-100" text="INSTRUCTOR" />
                    </div>
                    <div className="md:w-2/3 w-full">
                        <h3 className="font-bold text-stone-800 mb-4 text-xl font-serif-jp">プロ監修の教材</h3>
                        <div className="flex items-center gap-4 mb-4">
                             <div className="font-bold text-2xl text-stone-800">山田 花子 先生</div>
                             <span className="text-xs text-stone-500 bg-stone-100 px-3 py-1 rounded-full">管理栄養士</span>
                        </div>
                        <p className="text-sm text-stone-700 leading-loose font-medium">
                            当講座のテキストは、長年の指導実績を持つ専門家が監修しています。初心者の方でも分かりやすく、かつ実践的な内容となっており、知識ゼロからでも無理なくプロのスキルを習得できます。
                        </p>
                    </div>
                </div>

          </main>

      </div>
      {/* === SPLIT LAYOUT ENDS === */}

      {/* Floating CTA (Mobile) */}
      <div className="fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-md shadow-[0_-5px_20px_rgba(0,0,0,0.05)] p-4 md:hidden z-40 border-t border-stone-100 safe-area-bottom">
          <div className="flex gap-3 max-w-md mx-auto">
            <Button fullWidth variant="secondary" size="sm" className="text-xs py-3 h-12 rounded-xl" onClick={() => navigate('/seekers')}>資料請求</Button>
            <Button fullWidth variant="orange" size="sm" className="text-xs py-3 h-12 rounded-xl" onClick={() => navigate('/pricing')}>受講申込</Button>
          </div>
      </div>

    </div>
  );
};