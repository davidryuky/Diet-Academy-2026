import React from 'react';
import { Button } from '../components/common/Button';
import { PlaceholderImage } from '../components/common/PlaceholderImage';
import { Sidebar } from '../components/layout/Sidebar';
import { ChevronRight, Users, BookOpen, Clock, ChevronDown, Sparkles, TrendingUp, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export const Home: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-white font-sans text-gray-700 w-full">
      
      {/* Hero Image - Full Width Background, 92% Inner */}
      <div className="relative w-full">
        {/* PC Image Placeholder */}
        <div className="hidden md:block w-full">
            <PlaceholderImage height="500px" color="bg-orange-200" text="MAIN VISUAL (PC)" className="w-full" />
        </div>
        {/* SP Image Placeholder - Reduced Height */}
        <div className="block md:hidden w-full">
            <PlaceholderImage height="280px" color="bg-orange-200" text="MAIN VISUAL (SP)" className="w-full" />
        </div>
      </div>

      {/* Catch Area - Statistics (Fluid on Mobile) */}
      <div className="bg-gray-50 py-8 md:py-12 border-b border-gray-200 w-full">
        <div className="w-[92%] max-w-[1600px] mx-auto">
          <div className="flex flex-col md:flex-row justify-center items-start md:items-center space-y-6 md:space-y-0 md:space-x-12 lg:space-x-16">
            
            {/* Stat Item 1 */}
            <div className="flex items-center w-full md:w-auto">
              <div className="bg-orange-100 p-2 md:p-3 rounded-full mr-3 md:mr-4 text-orange-500 flex-shrink-0">
                <Users className="w-6 h-6 md:w-7 md:h-7" />
              </div>
              <div className="flex flex-col md:block">
                <span className="text-xs md:text-sm text-gray-500 font-bold mb-0.5 md:mb-0 md:block">実績</span>
                <span className="font-bold text-lg md:text-xl text-gray-800">
                  資格保持者数 <span className="text-orange-600 text-3xl md:text-5xl font-serif-jp font-bold ml-1">4,350人</span> 突破!
                </span>
              </div>
            </div>

            {/* Stat Item 2 */}
            <div className="flex items-center w-full md:w-auto">
              <div className="bg-orange-100 p-2 md:p-3 rounded-full mr-3 md:mr-4 text-orange-500 flex-shrink-0">
                <BookOpen className="w-6 h-6 md:w-7 md:h-7" />
              </div>
              <div className="flex flex-col md:block">
                <span className="text-xs md:text-sm text-gray-500 font-bold mb-0.5 md:mb-0 md:block">安心</span>
                <span className="font-bold text-lg md:text-xl text-gray-800">
                  初学者 <span className="text-orange-600 text-3xl md:text-5xl font-serif-jp font-bold ml-1">88.7%</span> 簡単カリキュラム!
                </span>
              </div>
            </div>

            {/* Stat Item 3 */}
            <div className="flex items-center w-full md:w-auto">
              <div className="bg-orange-100 p-2 md:p-3 rounded-full mr-3 md:mr-4 text-orange-500 flex-shrink-0">
                <Clock className="w-6 h-6 md:w-7 md:h-7" />
              </div>
              <div className="flex flex-col md:block">
                <span className="text-xs md:text-sm text-gray-500 font-bold mb-0.5 md:mb-0 md:block">便利</span>
                <span className="font-bold text-lg md:text-xl text-gray-800">
                  自宅で <span className="text-orange-600 text-3xl md:text-5xl font-serif-jp font-bold ml-1">試験OK</span> 在宅受験対応!
                </span>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Target Audience Trigger Section */}
      <div className="bg-white py-8 md:py-12 w-full">
        <div className="w-[92%] max-w-[1600px] mx-auto">
            <div className="text-center mb-6 md:mb-8">
                <h2 className="text-xl md:text-3xl font-bold text-gray-800 mb-3 md:mb-4">
                    あなたの「目的」はどちらですか？
                </h2>
                <div className="w-12 md:w-16 h-1 bg-orange-500 mx-auto rounded-full"></div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-4 md:gap-6">
                {/* Seeker Trigger */}
                <div 
                    onClick={() => navigate('/seekers')}
                    className="group relative overflow-hidden rounded-xl md:rounded-2xl bg-gradient-to-br from-orange-50 to-pink-50 border-2 border-transparent hover:border-orange-200 transition-all duration-300 cursor-pointer shadow-sm hover:shadow-xl"
                >
                    <div className="absolute top-[-10px] right-[-10px] p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                        <Sparkles size={80} className="md:w-[100px] md:h-[100px] text-orange-500" />
                    </div>
                    <div className="p-5 md:p-8 relative z-10 flex flex-col justify-center h-full">
                        <div className="flex justify-between items-start mb-2 md:mb-3">
                            <div className="inline-block bg-white text-orange-600 text-[10px] md:text-xs font-bold px-2 py-0.5 md:px-3 md:py-1 rounded-full shadow-sm border border-orange-100">
                                自分を変えたい方へ
                            </div>
                        </div>
                        <h3 className="text-lg md:text-2xl font-bold text-gray-800 mb-2 md:mb-3 leading-snug">
                            「我慢」はもう終わり。<span className="text-orange-600">一生太らない知識</span>を手に入れませんか？
                        </h3>
                        <p className="text-gray-600 mb-4 md:mb-6 text-xs md:text-sm leading-relaxed max-w-2xl">
                            流行りのダイエットに振り回されるのは卒業。科学的に正しいメソッドで、心も体も満たされる本当の健康美を目指すあなたへ。
                        </p>
                        <div className="flex items-center text-orange-600 font-bold group-hover:translate-x-2 transition-transform text-xs md:text-base mt-auto">
                            詳細を見る <ArrowRight size={16} className="ml-2 md:ml-2 w-4 h-4 md:w-[18px] md:h-[18px]" />
                        </div>
                    </div>
                </div>

                {/* Instructor Trigger */}
                <div 
                    onClick={() => navigate('/instructors')}
                    className="group relative overflow-hidden rounded-xl md:rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-50 border-2 border-transparent hover:border-blue-200 transition-all duration-300 cursor-pointer shadow-sm hover:shadow-xl"
                >
                    <div className="absolute top-[-10px] right-[-10px] p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                        <TrendingUp size={80} className="md:w-[100px] md:h-[100px] text-blue-500" />
                    </div>
                    <div className="p-5 md:p-8 relative z-10 flex flex-col justify-center h-full">
                        <div className="flex justify-between items-start mb-2 md:mb-3">
                            <div className="inline-block bg-white text-blue-600 text-[10px] md:text-xs font-bold px-2 py-0.5 md:px-3 md:py-1 rounded-full shadow-sm border border-blue-100">
                                プロを目指す方へ
                            </div>
                        </div>
                        <h3 className="text-lg md:text-2xl font-bold text-gray-800 mb-2 md:mb-3 leading-snug">
                            その経験が価値になる。<span className="text-blue-600">信頼されるプロ</span>として新しいキャリアを。
                        </h3>
                        <p className="text-gray-600 mb-4 md:mb-6 text-xs md:text-sm leading-relaxed max-w-2xl">
                            W資格取得で専門性を証明。副業、独立、サロン開業... あなたの「好き」を仕事にするための確かなスキルと自信を。
                        </p>
                        <div className="flex items-center text-blue-600 font-bold group-hover:translate-x-2 transition-transform text-xs md:text-base mt-auto">
                            詳細を見る <ArrowRight size={16} className="ml-2 md:ml-2 w-4 h-4 md:w-[18px] md:h-[18px]" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>

      {/* === SPLIT LAYOUT STARTS HERE === */}
      <div className="w-[92%] max-w-[1600px] mx-auto py-6 md:py-10 flex flex-col lg:flex-row gap-8 md:gap-12 items-start relative">
          
          {/* Sidebar Column (Desktop Only) */}
          <aside className="hidden lg:block w-[320px] flex-shrink-0 sticky top-32 self-start h-fit">
              <Sidebar />
          </aside>

          {/* Main Content Column */}
          <main className="w-full flex-1 min-w-0 space-y-12 md:space-y-20">
              
                {/* Course Title */}
                <div className="text-center">
                    <div className="inline-block text-xs md:text-sm font-bold tracking-widest text-orange-500 border border-orange-500 px-3 py-1 md:px-4 md:py-1 rounded-full mb-4 md:mb-6">通信教育講座</div>
                    <h2 className="text-2xl md:text-5xl font-bold text-gray-800 tracking-wider">ダイエットアドバイザー</h2>
                </div>

                {/* 100% Qualification Appeal */}
                <div className="space-y-6 md:space-y-10">
                    <div className="text-center mb-6 md:mb-10">
                        <h1 className="text-2xl md:text-4xl font-bold text-gray-800 leading-snug">
                            ダイエットアドバイザー<br />
                            W資格取得スペシャル講座なら<br />
                            <span className="text-orange-600 bg-yellow-100 px-2 md:px-4 py-1 mt-2 inline-block">1ヶ月で100%資格取得</span>できます！
                        </h1>
                    </div>

                    <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-center">
                        <div className="w-full md:w-1/2">
                            {/* Adjusted height for mobile */}
                            <PlaceholderImage height="200px" className="md:h-[300px] rounded-xl md:rounded-2xl w-full shadow-md" color="bg-green-100" text="STUDY IMAGE" />
                        </div>
                        <div className="w-full md:w-1/2">
                            <p className="text-gray-700 leading-loose text-sm md:text-base">
                                ダイエットマスター資格講座のスペシャル講座なら、<span className="text-orange-600 font-bold text-base md:text-lg">「ダイエットアドバイザー」</span>と<span className="text-orange-600 font-bold text-base md:text-lg">「シェイプアップインストラクター」</span>の2資格を家にいながら、オンライン講座なら1ヶ月、紙教材なら2ヶ月で課題を提出するだけで<span className="text-lg md:text-2xl font-bold bg-yellow-100 px-2">100%資格取得</span>できます。
                            </p>
                        </div>
                    </div>

                    {/* 3 Points */}
                    <div className="space-y-6 md:space-y-8">
                        {[
                            { title: "1ヶ月で100%資格取得", color: "bg-blue-50", text: "資格協会に認められた学習カリキュラムとシステム導入により、1ヶ月で資格取得できる事を実現しました！" },
                            { title: "初心者の方でも安心", color: "bg-pink-50", text: "プロ監修のわかりやすいオリジナル教材。初学者は88.7％！10代から80代まで幅広い年齢層の方が受講。" },
                            { title: "目指せる資格", color: "bg-yellow-50", text: "健康的で安全な減量方法や、栄養学・運動学に基づいた知識を体系的に学び、そのスキルを証明する資格。" }
                        ].map((point, idx) => (
                            <div key={idx} className="flex flex-col md:flex-row items-center gap-4 md:gap-6 bg-white p-5 md:p-6 rounded-xl md:rounded-2xl border border-gray-100 shadow-md">
                                <div className="w-full md:w-2/3 order-2 md:order-1">
                                    <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-2 md:mb-3 border-l-4 border-orange-500 pl-3 md:pl-4">
                                        <span className="text-orange-600">{point.title}</span>
                                    </h3>
                                    <p className="text-gray-600 leading-relaxed text-sm md:text-base">{point.text}</p>
                                </div>
                                <div className="w-full md:w-1/3 order-1 md:order-2">
                                    <PlaceholderImage height="120px" className="md:h-[140px] rounded-lg md:rounded-xl w-full" color={point.color} text={`POINT ${idx + 1}`} />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Testimonials */}
                <div className="bg-gray-50 rounded-xl md:rounded-2xl p-6 md:p-10 border border-gray-100">
                    <h2 className="text-lg md:text-2xl font-bold text-center text-gray-800 mb-6 md:mb-8">
                        <span className="bg-orange-100 px-4 py-2 rounded-full text-orange-800 text-sm md:text-base">実際に合格された受講者の体験談！</span>
                    </h2>
                    <div className="bg-white rounded-xl p-6 md:p-8 shadow-sm flex flex-col md:flex-row gap-6 md:gap-8">
                        <div className="md:w-1/4 flex flex-col items-center text-center">
                            <PlaceholderImage width="100px" height="100px" className="md:w-[120px] md:h-[120px] rounded-full mb-3 md:mb-4" color="bg-gray-300" text="FACE" />
                            <div className="text-sm md:text-base font-bold">櫻場孝徳 さん / 20代</div>
                            <div className="flex text-yellow-400 gap-1 text-sm mt-2 justify-center">
                                ★★★★★
                            </div>
                        </div>
                        <div className="md:w-3/4">
                            <h3 className="font-bold text-lg md:text-xl mb-3 md:mb-4 text-orange-600 leading-relaxed">口コミがよかったので安心して受講できました。</h3>
                            <p className="text-gray-600 text-sm leading-loose">
                                テキストがわかりやすく、情報の量も多いので、ダイエットに関する知識を効率よく身につけることができました。自信がつきました。思い切って受講してよかったです！
                            </p>
                        </div>
                    </div>
                </div>

                {/* Banner Area */}
                <div className="space-y-4 md:space-y-6">
                    <PlaceholderImage height="100px" className="md:h-[120px] w-full rounded-lg md:rounded-xl" color="bg-red-50" text="HIROMI CAMPAIGN" />
                    <PlaceholderImage height="70px" className="md:h-[80px] w-full rounded-lg md:rounded-xl" color="bg-gray-100" text="SPONSOR BANNER" />
                </div>

                 {/* Reason Image */}
                <div className="bg-white border border-gray-100 rounded-xl md:rounded-2xl p-6 md:p-8 shadow-sm flex flex-col md:flex-row items-center gap-6 md:gap-8">
                    <div className="md:w-1/2">
                        <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4 text-orange-600">教材は、資格協会認定教材</h3>
                        <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                            ダイエットマスター資格講座の通信講座は、各資格団体に認められた教材です。初心者の方でも学習できる内容で、在宅受験できます。
                        </p>
                    </div>
                    <div className="md:w-1/2 w-full">
                        <PlaceholderImage height="160px" className="md:h-[200px] w-full rounded-lg" color="bg-blue-50" text="CERTIFIED TEXTBOOK" />
                    </div>
                </div>

                {/* Two Qualifications */}
                <div className="bg-stripe p-6 md:p-10 rounded-2xl md:rounded-3xl border border-gray-200">
                    <div className="text-center mb-8 md:mb-10">
                        <p className="text-gray-500 text-xs md:text-sm font-bold mb-2">名刺や履歴書に記載できる</p>
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
                        2つの<span className="text-orange-500">資格</span>を<span className="text-red-500">同時</span>に取得！
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6 md:gap-8">
                        {[
                            { name: "ダイエットアドバイザー", org: "日本生活環境支援協会" },
                            { name: "シェイプアップインストラクター", org: "日本インストラクター技術協会" }
                        ].map((qual, idx) => (
                            <div key={idx} className="bg-white p-6 md:p-8 rounded-xl md:rounded-2xl shadow-md border-t-4 border-orange-400">
                                <div className="text-center mb-4 md:mb-6">
                                    <span className="bg-orange-100 text-orange-600 text-xs md:text-sm px-3 py-1 rounded-full font-bold">資格 {idx + 1}</span>
                                    <h3 className="text-lg md:text-xl font-bold mt-3">{qual.name}</h3>
                                    <p className="text-[10px] md:text-xs text-gray-400 mt-2">{qual.org}</p>
                                </div>
                                <PlaceholderImage height="120px" className="md:h-[140px] w-full rounded-lg mb-4 md:mb-6" color="bg-orange-50" text={`CERT ${idx+1}`} />
                                <div className="bg-gray-50 p-4 rounded-lg text-xs">
                                    <div className="flex justify-between mb-2"><span>受験料</span><span className="font-bold">12,500円</span></div>
                                    <div className="flex justify-between"><span>方法</span><span>在宅受験</span></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Merits Section */}
                <div className="border-4 border-orange-500 rounded-xl p-6 md:p-10 text-center mt-12 relative">
                     <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-orange-500 text-white px-6 md:px-8 py-2 font-bold text-sm md:text-base rounded-full shadow-md w-max">資格取得のメリット</div>
                    <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-8 mt-4">
                        資格を活かして<br />様々な場面で活躍できます！
                    </h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                        {["進学・就職", "キャリアアップ", "資格で起業", "プチ開業"].map((m, i) => (
                            <div key={i} className="p-2 md:p-4">
                                <PlaceholderImage width="80px" height="80px" className="md:w-[100px] md:h-[100px] mx-auto rounded-full mb-3" color="bg-yellow-50" text={`MERIT ${i+1}`} />
                                <div className="font-bold text-xs md:text-sm">{m}</div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Special Course Explanation */}
                <div className="bg-gray-800 text-white rounded-xl md:rounded-2xl p-6 md:p-10">
                    <div className="text-center mb-8 md:mb-10">
                        <span className="text-orange-400 font-bold text-sm md:text-base block mb-2 md:mb-3">課題提出だけで100%合格</span>
                        <h2 className="text-2xl md:text-3xl font-bold">スペシャル講座をご用意！</h2>
                        <p className="text-xs md:text-sm text-gray-300 mt-4 md:mt-5 leading-relaxed bg-gray-700 p-4 rounded max-w-3xl mx-auto">
                            卒業課題を提出する事で試験免除となり、2資格が講座卒業と同時に認定されます。
                        </p>
                    </div>
                    <div className="grid md:grid-cols-2 gap-6 md:gap-8">
                        <div className="bg-gray-700 rounded-xl p-5 md:p-6 text-center">
                            <h3 className="font-bold text-gray-400 text-sm md:text-base mb-3">通常の講座</h3>
                            <PlaceholderImage height="100px" className="md:h-[120px] w-full mb-3 opacity-50" color="bg-gray-600" text="NORMAL" textColor="text-gray-400" />
                            <p className="text-xs text-gray-400">試験を受けて合格が必要</p>
                        </div>
                        <div className="bg-orange-900 border border-orange-500 rounded-xl p-5 md:p-6 text-center relative overflow-hidden">
                             <div className="absolute top-2 right-2 text-[10px] md:text-xs bg-red-600 px-2 py-1 md:px-3 rounded text-white font-bold animate-pulse">試験免除</div>
                            <h3 className="font-bold text-orange-400 text-sm md:text-base mb-3">スペシャル講座</h3>
                            <PlaceholderImage height="100px" className="md:h-[120px] w-full mb-3" color="bg-orange-800" text="SPECIAL" textColor="text-orange-200" />
                            <p className="text-xs text-orange-200">卒業と同時に<span className="font-bold text-white text-sm md:text-base">資格取得!</span></p>
                        </div>
                    </div>
                </div>

                {/* Study Types */}
                <div className="space-y-6 md:space-y-8">
                    <h2 className="text-xl md:text-2xl font-bold text-center">選べる受講方法</h2>
                    <div className="grid md:grid-cols-2 gap-6 md:gap-8">
                         <div className="border border-gray-200 rounded-xl p-6 md:p-8 hover:shadow-lg transition">
                            <div className="text-center mb-4 md:mb-6"><span className="bg-yellow-100 text-yellow-800 text-xs md:text-sm font-bold px-3 py-1 rounded">紙の教材</span></div>
                            <PlaceholderImage height="140px" className="md:h-[180px] w-full rounded-lg mb-4 md:mb-6" color="bg-yellow-50" text="PAPER" />
                            <div className="bg-yellow-50 text-yellow-800 text-center text-xs md:text-sm font-bold py-2 md:py-3 rounded">最短2ヶ月</div>
                        </div>
                         <div className="border border-orange-200 rounded-xl p-6 md:p-8 hover:shadow-lg transition bg-orange-50/30">
                            <div className="text-center mb-4 md:mb-6"><span className="bg-orange-100 text-orange-800 text-xs md:text-sm font-bold px-3 py-1 rounded">オンライン</span></div>
                            <PlaceholderImage height="140px" className="md:h-[180px] w-full rounded-lg mb-4 md:mb-6" color="bg-orange-50" text="ONLINE" />
                            <div className="bg-orange-100 text-orange-800 text-center text-xs md:text-sm font-bold py-2 md:py-3 rounded">最短1ヶ月</div>
                        </div>
                    </div>
                </div>

                {/* 6 Reasons */}
                <div className="bg-gray-50 rounded-2xl md:rounded-3xl p-6 md:p-10">
                     <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-10">
                        選ばれる<span className="text-orange-500 text-3xl md:text-4xl ml-2 font-serif-jp">6つの理由</span>
                    </h2>
                    <div className="grid md:grid-cols-2 gap-4 md:gap-6">
                        {["1ヶ月で資格取得", "受講生満足度96.2%", "卒業後も活躍", "手厚いサポート", "人気教材", "卒業後サポート"].map((r, i) => (
                            <div key={i} className="flex items-center gap-3 md:gap-4 bg-white p-3 md:p-4 rounded-xl shadow-sm">
                                <span className="text-2xl md:text-3xl font-bold text-gray-200 italic">0{i+1}</span>
                                <span className="font-bold text-sm md:text-base">{r}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Pricing List */}
                <div id="pricing" className="space-y-6 md:space-y-8">
                     <div className="text-center">
                        <h2 className="text-2xl md:text-3xl font-bold">講座コース紹介</h2>
                        <p className="text-gray-500 text-xs md:text-sm mt-3">100%資格が取れるスペシャル講座がおすすめ！</p>
                    </div>
                    
                    {/* Course Item */}
                    {[
                        { type: "基本講座", name: "基本講座", price: "56,500", theme: "gray", badge: "通常" },
                        { type: "スペシャル講座", name: "スペシャル講座", price: "74,800", theme: "orange", badge: "試験免除" },
                        { type: "スペシャル講座", name: "スペシャル講座 オンライン", price: "74,800", theme: "blue", badge: "スマホ対応" }
                    ].map((course, idx) => (
                        <div key={idx} className={`border rounded-xl overflow-hidden shadow-sm flex flex-col md:flex-row ${course.theme === 'orange' ? 'border-orange-400 shadow-md ring-1 ring-orange-100' : 'border-gray-200'}`}>
                            <div className="md:w-3/4 p-5 md:p-6 border-b md:border-b-0 md:border-r border-gray-100">
                                <div className="flex items-center gap-3 mb-3 md:mb-4">
                                    <span className={`text-[10px] md:text-xs text-white px-2 py-1 rounded ${course.theme === 'orange' ? 'bg-orange-500' : 'bg-gray-500'}`}>{course.badge}</span>
                                    <h3 className="font-bold text-lg md:text-xl">{course.name}</h3>
                                </div>
                                <div className="flex gap-4 md:gap-6">
                                    <PlaceholderImage width="80px" height="80px" className="md:w-[100px] md:h-[100px] rounded hidden sm:flex" color={`bg-${course.theme}-50`} text="IMG" />
                                    <ul className="text-xs text-gray-500 space-y-1.5 md:space-y-2">
                                        <li>受講期間: 6ヶ月</li>
                                        <li>添削: 5回 {course.theme !== 'gray' && <span className="text-red-500 font-bold">+ 卒業課題</span>}</li>
                                        <li>教材: {course.theme === 'blue' ? 'デジタル' : 'テキスト一式'}</li>
                                    </ul>
                                </div>
                            </div>
                            <div className={`md:w-1/4 p-5 md:p-6 flex flex-col justify-center items-center bg-${course.theme}-50 bg-opacity-30`}>
                                <div className="text-gray-500 text-xs mb-1">受講料</div>
                                <div className={`text-3xl md:text-4xl font-bold mb-3 text-${course.theme === 'gray' ? 'gray-800' : 'orange-600'}`}>{course.price}<span className="text-sm font-normal ml-1">円</span></div>
                                <Button size="md" variant={course.theme === 'gray' ? 'outline' : 'orange'} className="w-full text-sm">申込む</Button>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Supervisor */}
                <div className="bg-white border border-gray-200 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row gap-6 md:gap-8">
                    <div className="md:w-1/3">
                        <PlaceholderImage height="200px" className="md:h-[240px] rounded w-full" color="bg-gray-100" text="INSTRUCTOR" />
                    </div>
                    <div className="md:w-2/3">
                        <h3 className="font-bold text-gray-800 mb-3 text-lg">プロ監修の教材</h3>
                        <div className="flex items-center gap-4 mb-3">
                             <div className="font-bold text-xl">田中 優子 先生</div>
                             <span className="text-xs text-gray-500 bg-gray-100 px-3 py-1 rounded">ヘルスケアスペシャリスト</span>
                        </div>
                        <p className="text-sm text-gray-600 leading-relaxed">
                            業界で長年の実績を持つ専門家が、最新の理論に基づいて教材を全面的に監修しています。初心者の方でも分かりやすく、かつ実践的なスキルが身につく内容です。（※正式な監修者情報は現在準備中です）
                        </p>
                    </div>
                </div>

                 {/* Video */}
                <div className="bg-black rounded-xl overflow-hidden">
                    <PlaceholderImage height="240px" className="md:h-[400px] w-full" color="bg-gray-900" text="YOUTUBE VIDEO" textColor="text-white" />
                </div>

          </main>

      </div>
      {/* === SPLIT LAYOUT ENDS HERE === */}

      {/* Floating CTA (Mobile) */}
      <div className="fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur shadow-[0_-5px_15px_rgba(0,0,0,0.1)] p-3 md:hidden z-50 border-t border-gray-200 safe-area-bottom">
          <div className="flex gap-2 max-w-md mx-auto">
            <Button fullWidth variant="secondary" size="sm" className="text-xs py-3 h-11" onClick={() => navigate('/seekers')}>資料請求</Button>
            <Button fullWidth variant="orange" size="sm" className="text-xs py-3 h-11" onClick={() => navigate('/pricing')}>受講申込</Button>
          </div>
      </div>

    </div>
  );
};