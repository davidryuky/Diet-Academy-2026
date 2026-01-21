import React, { useState } from 'react';
import { Button } from '../components/common/Button';
import { courses } from '../data/coursesData';
import { Award, Download, Printer, Share2, CheckCircle, User, Award as AwardIcon } from 'lucide-react';

export const CertificateDemo: React.FC = () => {
  const [userName, setUserName] = useState('山田 太郎');
  const [selectedCourseId, setSelectedCourseId] = useState('regular');
  const [isIssuing, setIsIssuing] = useState(false);

  const selectedCourse = courses.find(c => c.id === selectedCourseId) || courses[0];

  const handlePrint = () => {
    window.print();
  };

  const handleIssue = () => {
    setIsIssuing(true);
    setTimeout(() => setIsIssuing(false), 2000);
  };

  return (
    <div className="min-h-screen bg-stone-100 py-12 md:py-20">
      <div className="max-w-[1400px] mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-[#FF8C6B] font-bold tracking-widest text-xs uppercase mb-4 block">Beta Feature</span>
          <h1 className="text-3xl md:text-5xl font-bold text-stone-800 font-serif-jp">認定証発行システム (デモ)</h1>
          <p className="mt-4 text-stone-500 font-medium">合格おめでとうございます。記載名を確認し、認定証を発行してください。</p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-start">
          
          {/* Controls Panel */}
          <div className="lg:col-span-4 space-y-6 order-2 lg:order-1">
            <div className="bg-white rounded-3xl p-8 shadow-sm border border-stone-200">
              <h3 className="text-lg font-bold text-stone-800 mb-6 font-serif-jp flex items-center gap-2">
                <User size={20} className="text-[#FF8C6B]" />
                情報の確認・変更
              </h3>
              
              <div className="space-y-6">
                <div>
                  <label className="block text-xs font-bold text-stone-400 uppercase tracking-widest mb-2">認定者氏名</label>
                  <input 
                    type="text" 
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:border-[#FF8C6B] focus:ring-1 focus:ring-[#FF8C6B] outline-none transition-all text-stone-800 font-bold"
                    placeholder="お名前を入力してください"
                  />
                  <p className="mt-2 text-[10px] text-stone-400 font-medium">※認定証に印字される正式な氏名を入力してください。</p>
                </div>

                <div>
                  <label className="block text-xs font-bold text-stone-400 uppercase tracking-widest mb-3">取得コースの選択</label>
                  <div className="space-y-3">
                    {courses.map((course) => (
                      <label 
                        key={course.id}
                        className={`flex items-center p-4 rounded-2xl border-2 cursor-pointer transition-all ${
                          selectedCourseId === course.id 
                          ? `border-${course.id === 'regular' ? '[#FF8C6B]' : course.id === 'senior' ? '[#5D9B9B]' : '[#4338ca]'} bg-stone-50` 
                          : 'border-stone-100 bg-white hover:border-stone-200'
                        }`}
                      >
                        <input 
                          type="radio" 
                          name="course" 
                          className="hidden" 
                          checked={selectedCourseId === course.id}
                          onChange={() => setSelectedCourseId(course.id)}
                        />
                        <div className={`w-10 h-10 rounded-xl ${course.color} flex items-center justify-center text-white mr-4 flex-shrink-0`}>
                          <course.icon size={20} />
                        </div>
                        <div className="flex-1">
                          <div className="text-xs font-bold text-stone-400">{course.level}</div>
                          <div className="text-sm font-bold text-stone-800">{course.name}</div>
                        </div>
                        {selectedCourseId === course.id && <CheckCircle size={18} className={course.accent} />}
                      </label>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-10 space-y-3">
                <Button 
                  fullWidth 
                  variant={selectedCourseId === 'regular' ? 'orange' : 'teal'} 
                  size="lg"
                  onClick={handleIssue}
                  disabled={isIssuing}
                >
                  {isIssuing ? '発行中...' : '認定証を確定する'}
                </Button>
                <div className="flex gap-2">
                  <Button variant="outline" fullWidth size="md" onClick={handlePrint} className="bg-white">
                    <Printer size={16} className="mr-2" /> 印刷
                  </Button>
                  <Button variant="outline" fullWidth size="md" className="bg-white">
                    <Download size={16} className="mr-2" /> PDF保存
                  </Button>
                </div>
              </div>
            </div>

            <div className="bg-[#FFF5F0] rounded-2xl p-6 border border-[#FFD1C1]/50">
              <h4 className="text-sm font-bold text-stone-800 mb-2 flex items-center gap-2">
                <AwardIcon size={16} className="text-[#FF8C6B]" /> 認定証の取り扱いについて
              </h4>
              <p className="text-[11px] text-stone-500 leading-relaxed font-medium">
                このデモ画面で生成された認定証はサンプルです。実際の資格取得には、各コースの全カリキュラム修了と試験合格が必要です。公式な認定証はマイページから正式に発行いただけます。
              </p>
            </div>
          </div>

          {/* Certificate Preview Panel */}
          <div className="lg:col-span-8 order-1 lg:order-2">
            <div className="sticky top-32">
              <div className="mb-4 flex items-center justify-between px-4">
                <span className="text-xs font-bold text-stone-400 tracking-widest uppercase">Live Preview</span>
                <div className="flex gap-4">
                  <div className="flex items-center gap-1.5 text-[10px] font-bold text-stone-400">
                    <div className="w-2 h-2 rounded-full bg-green-500"></div> System Active
                  </div>
                </div>
              </div>

              {/* The Certificate Canvas */}
              <div 
                id="certificate-print-area"
                className="relative w-full aspect-[1.414/1] bg-white shadow-2xl rounded-sm overflow-hidden p-[3%] border-[1px] border-stone-200"
                style={{ 
                  boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.15)',
                  backgroundImage: 'radial-gradient(#f1f1f1 0.5px, transparent 0.5px)',
                  backgroundSize: '20px 20px'
                }}
              >
                {/* Ornate Border */}
                <div className="absolute inset-0 p-[2.5%] pointer-events-none">
                   <div className={`w-full h-full border-[12px] border-double ${selectedCourseId === 'regular' ? 'border-orange-100' : selectedCourseId === 'senior' ? 'border-teal-50' : 'border-indigo-50'} rounded-sm`}></div>
                   <div className={`absolute inset-[3.5%] border-[1px] ${selectedCourseId === 'regular' ? 'border-orange-200' : selectedCourseId === 'senior' ? 'border-teal-200' : 'border-indigo-200'} opacity-50`}></div>
                </div>

                {/* Corners */}
                <div className={`absolute top-[4%] left-[4%] w-16 h-16 border-t-2 border-l-2 ${selectedCourseId === 'regular' ? 'border-orange-300' : selectedCourseId === 'senior' ? 'border-teal-300' : 'border-indigo-300'}`}></div>
                <div className={`absolute top-[4%] right-[4%] w-16 h-16 border-t-2 border-r-2 ${selectedCourseId === 'regular' ? 'border-orange-300' : selectedCourseId === 'senior' ? 'border-teal-300' : 'border-indigo-300'}`}></div>
                <div className={`absolute bottom-[4%] left-[4%] w-16 h-16 border-b-2 border-l-2 ${selectedCourseId === 'regular' ? 'border-orange-300' : selectedCourseId === 'senior' ? 'border-teal-300' : 'border-indigo-300'}`}></div>
                <div className={`absolute bottom-[4%] right-[4%] w-16 h-16 border-b-2 border-r-2 ${selectedCourseId === 'regular' ? 'border-orange-300' : selectedCourseId === 'senior' ? 'border-teal-300' : 'border-indigo-300'}`}></div>

                {/* Content Container */}
                <div className="relative w-full h-full flex flex-col items-center justify-between py-[6%] px-[10%] text-center">
                   
                   {/* Logo / Header */}
                   <div className="mb-4">
                      <img src="https://dietacademy.jp/img2023/common/header/logo.png" alt="Association Logo" className="h-12 md:h-20 mx-auto mb-2 grayscale brightness-50" />
                      <div className="text-[10px] md:text-xs font-bold tracking-[0.4em] text-stone-400 uppercase">Japan Diet Academy Association</div>
                   </div>

                   {/* Title */}
                   <div className="space-y-4">
                      <h2 className="text-4xl md:text-6xl font-bold text-stone-800 font-serif-jp tracking-tight">認定証</h2>
                      <div className={`w-24 h-0.5 ${selectedCourse.color} mx-auto rounded-full`}></div>
                   </div>

                   {/* Course & Level */}
                   <div className="space-y-1">
                      <div className="text-sm md:text-lg font-bold text-stone-500 font-serif-jp">{selectedCourse.level}</div>
                      <div className={`text-xl md:text-3xl font-bold ${selectedCourse.accent} font-serif-jp tracking-wide`}>
                        {selectedCourse.subtitle}
                      </div>
                   </div>

                   {/* Recipient Name */}
                   <div className="my-6 md:my-10 w-full">
                      <div className="text-stone-400 text-xs md:text-sm font-bold mb-2">認定者</div>
                      <div className="relative inline-block px-12">
                         <div className="text-3xl md:text-5xl font-bold text-stone-900 font-serif-jp min-w-[200px]">
                            {userName || '　　　　　'} <span className="text-lg md:text-2xl ml-2 text-stone-500 font-normal">殿</span>
                         </div>
                         <div className="absolute bottom-0 left-0 w-full h-0.5 bg-stone-200"></div>
                      </div>
                   </div>

                   {/* Text */}
                   <p className="text-xs md:text-base text-stone-600 font-serif-jp leading-relaxed max-w-2xl">
                      貴殿は日本ダイエットアカデミー協会が定める<br />
                      全てのカリキュラムを優秀な成績で修了し試験に合格されました<br />
                      よってここに{selectedCourse.level}の資格を認定します
                   </p>

                   {/* Footer Info */}
                   <div className="w-full flex justify-between items-end mt-8 border-t border-stone-100 pt-8">
                      <div className="text-left">
                         <div className="text-xs font-bold text-stone-400 mb-1">発行日</div>
                         <div className="text-sm md:text-base font-bold text-stone-800 font-serif-jp">2026年3月15日</div>
                         <div className="text-xs font-bold text-stone-400 mt-4 mb-1">登録番号</div>
                         <div className="text-sm font-bold text-stone-800 font-serif-jp tracking-widest uppercase">JDAA-2026-0001</div>
                      </div>

                      {/* Seal / Signature */}
                      <div className="relative flex items-center gap-6">
                         <div className="text-right">
                            <div className="text-xs font-bold text-stone-400 mb-1">一般社団法人 日本ダイエットアカデミー協会</div>
                            <div className="text-sm md:text-lg font-bold text-stone-800 font-serif-jp">代表理事　山田 花子</div>
                         </div>
                         
                         {/* Visual Seal */}
                         <div className={`w-16 h-16 md:w-24 md:h-24 rounded-full border-4 border-double ${selectedCourseId === 'regular' ? 'border-orange-500/30 text-orange-500/80' : selectedCourseId === 'senior' ? 'border-teal-500/30 text-teal-500/80' : 'border-indigo-500/30 text-indigo-500/80'} flex items-center justify-center p-2 relative`}>
                            <div className={`absolute inset-0 border border-dashed rounded-full scale-90 opacity-40 ${selectedCourseId === 'regular' ? 'border-orange-500' : selectedCourseId === 'senior' ? 'border-teal-500' : 'border-indigo-500'}`}></div>
                            <Award size={48} strokeWidth={1} />
                            <div className="absolute inset-0 flex items-center justify-center text-[8px] font-bold tracking-tighter opacity-20 uppercase pointer-events-none">
                                Official Certification Seal Official Certification Seal
                            </div>
                         </div>
                      </div>
                   </div>
                </div>

                {/* Overlay while generating */}
                {isIssuing && (
                  <div className="absolute inset-0 bg-white/80 backdrop-blur-sm flex flex-col items-center justify-center animate-in fade-in duration-300">
                    <div className="w-16 h-16 border-4 border-stone-200 border-t-[#FF8C6B] rounded-full animate-spin mb-4"></div>
                    <div className="text-lg font-bold text-stone-800 font-serif-jp">認定証を作成中...</div>
                  </div>
                )}
              </div>

              {/* Share Controls */}
              <div className="mt-8 flex justify-center gap-6">
                <button className="flex items-center gap-2 text-stone-400 hover:text-stone-600 font-bold text-xs transition-colors">
                  <Share2 size={16} /> SNSでシェアする
                </button>
                <div className="w-px h-4 bg-stone-300"></div>
                <button className="flex items-center gap-2 text-stone-400 hover:text-stone-600 font-bold text-xs transition-colors">
                  認定証URLをコピー
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* CSS for print media */}
      <style>{`
        @media print {
          body * {
            visibility: hidden;
          }
          #certificate-print-area, #certificate-print-area * {
            visibility: visible;
          }
          #certificate-print-area {
            position: fixed;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            margin: 0;
            padding: 0;
            border: none;
            box-shadow: none;
            border-radius: 0;
          }
        }
      `}</style>
    </div>
  );
};