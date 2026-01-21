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
      <div className="max-w-[1400px] mx-auto px-4 no-print">
        <div className="text-center mb-12">
          <span className="text-[#FF8C6B] font-bold tracking-widest text-xs uppercase mb-4 block">Beta Feature</span>
          <h1 className="text-3xl md:text-5xl font-bold text-stone-800 font-serif-jp">認定証発行システム</h1>
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
                このデモ画面で生成された認定証はサンプルです。公式な認定証はマイページから正式に発行いただけます。
              </p>
            </div>
          </div>

          {/* Certificate Preview Panel */}
          <div className="lg:col-span-8 order-1 lg:order-2 preview-panel-container">
            <div className="sticky top-32">
              <div className="mb-4 flex items-center justify-between px-4 no-print">
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
                className="relative w-full aspect-[1.414/1] bg-white shadow-2xl rounded-sm border border-stone-200 certificate-main-body"
                style={{ 
                  boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.15)',
                  backgroundColor: 'white'
                }}
              >
                {/* Ornate Border */}
                <div className="absolute inset-0 p-[2.5%] pointer-events-none">
                   <div className={`w-full h-full border-[10px] border-double ${selectedCourseId === 'regular' ? 'border-orange-200' : selectedCourseId === 'senior' ? 'border-teal-100' : 'border-indigo-100'} rounded-sm`}></div>
                   <div className={`absolute inset-[3.5%] border-[1px] ${selectedCourseId === 'regular' ? 'border-orange-300' : selectedCourseId === 'senior' ? 'border-teal-300' : 'border-indigo-300'} opacity-30`}></div>
                </div>

                {/* Content Container */}
                <div className="relative w-full h-full flex flex-col items-center justify-between py-[5%] px-[10%] text-center">
                   
                   {/* Logo / Header */}
                   <div className="mb-1">
                      <img src="https://dietacademy.jp/img2023/common/header/logo.png" alt="Association Logo" className="h-8 md:h-14 mx-auto mb-1 grayscale brightness-50" />
                      <div className="text-[8px] md:text-[10px] font-bold tracking-[0.4em] text-stone-400 uppercase">Japan Diet Academy Association</div>
                   </div>

                   {/* Title */}
                   <div className="space-y-1">
                      <h2 className="text-3xl md:text-5xl font-bold text-stone-800 font-serif-jp tracking-tight">認定証</h2>
                      <div className={`w-24 h-0.5 ${selectedCourse.color} mx-auto rounded-full`}></div>
                   </div>

                   {/* Course & Level */}
                   <div className="space-y-0.5">
                      <div className="text-xs md:text-base font-bold text-stone-500 font-serif-jp">{selectedCourse.level}</div>
                      <div className={`text-lg md:text-2xl font-bold ${selectedCourse.accent} font-serif-jp tracking-wide`}>
                        {selectedCourse.subtitle}
                      </div>
                   </div>

                   {/* Recipient Name */}
                   <div className="my-2 md:my-6 w-full">
                      <div className="text-stone-400 text-[10px] md:text-xs font-bold mb-1">認定者</div>
                      <div className="relative inline-block px-8 md:px-12">
                         <div className="text-2xl md:text-4xl font-bold text-stone-900 font-serif-jp min-w-[150px]">
                            {userName || '　　　　　'} <span className="text-base md:text-xl ml-2 text-stone-500 font-normal">殿</span>
                         </div>
                         <div className="absolute bottom-0 left-0 w-full h-0.5 bg-stone-200"></div>
                      </div>
                   </div>

                   {/* Text */}
                   <p className="text-[10px] md:text-sm lg:text-base text-stone-600 font-serif-jp leading-relaxed max-w-2xl px-2">
                      貴殿は日本ダイエットアカデミー協会が定める<br />
                      全てのカリキュラムを優秀な成績で修了し試験に合格されました<br />
                      よってここに{selectedCourse.level}の資格を認定します
                   </p>

                   {/* Footer Info */}
                   <div className="w-full flex justify-between items-end mt-2 pt-4 border-t border-stone-100">
                      <div className="text-left space-y-2">
                         <div>
                            <div className="text-[8px] md:text-[10px] font-bold text-stone-400">発行日</div>
                            <div className="text-xs md:text-sm font-bold text-stone-800 font-serif-jp">2026年3月15日</div>
                         </div>
                         <div>
                            <div className="text-[8px] md:text-[10px] font-bold text-stone-400">登録番号</div>
                            <div className="text-xs md:text-sm font-bold text-stone-800 font-serif-jp tracking-widest uppercase">JDAA-2026-0001</div>
                         </div>
                      </div>

                      {/* Seal / Signature Area */}
                      <div className="flex items-center gap-4 md:gap-8">
                         <div className="text-right">
                            <div className="text-[8px] md:text-[10px] font-bold text-stone-400 mb-0.5">一般社団法人 日本ダイエットアカデミー協会</div>
                            <div className="text-xs md:text-base font-bold text-stone-800 font-serif-jp">代表理事　山田 花子</div>
                         </div>
                         
                         {/* Visual Seal - Properly positioned and visible */}
                         <div className={`w-14 h-14 md:w-20 md:h-20 rounded-full border-4 border-double flex items-center justify-center p-2 relative z-30 bg-white ${
                           selectedCourseId === 'regular' ? 'border-orange-500/50 text-orange-600' : 
                           selectedCourseId === 'senior' ? 'border-teal-500/50 text-teal-600' : 
                           'border-indigo-500/50 text-indigo-600'
                         }`}>
                            <div className={`absolute inset-0 border border-dashed rounded-full scale-90 opacity-30 ${
                               selectedCourseId === 'regular' ? 'border-orange-500' : 
                               selectedCourseId === 'senior' ? 'border-teal-500' : 
                               'border-indigo-500'
                            }`}></div>
                            <AwardIcon size={32} className="md:w-10 md:h-10" strokeWidth={1.5} />
                            <div className="absolute inset-0 flex items-center justify-center text-[5px] md:text-[6px] font-bold tracking-tighter opacity-10 uppercase pointer-events-none p-1">
                                OFFICIAL SEAL JDAA CERTIFIED
                            </div>
                         </div>
                      </div>
                   </div>
                </div>

                {/* Overlay while generating */}
                {isIssuing && (
                  <div className="absolute inset-0 bg-white/90 backdrop-blur-sm flex flex-col items-center justify-center animate-in fade-in duration-300 z-50">
                    <div className="w-12 h-12 border-4 border-stone-200 border-t-[#FF8C6B] rounded-full animate-spin mb-4"></div>
                    <div className="text-base font-bold text-stone-800 font-serif-jp">認定証を作成中...</div>
                  </div>
                )}
              </div>

              {/* Share Controls */}
              <div className="mt-8 flex justify-center gap-6 no-print">
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
      
      {/* CSS for print media - Surgical approach */}
      <style>{`
        @page {
          size: A4 landscape;
          margin: 0;
        }

        @media print {
          /* Hide all page chrome and UI */
          header, footer, .no-print, .scroll-to-top-button, button, input {
            display: none !important;
          }

          /* Reset body and container to allow full width for the certificate */
          body, html {
            background: white !important;
            margin: 0 !important;
            padding: 0 !important;
            width: 100vw !important;
            height: 100vh !important;
            overflow: visible !important;
          }

          /* Ensure root container doesn't restrict layout */
          #root, #root > div, main {
            display: block !important;
            margin: 0 !important;
            padding: 0 !important;
            width: 100% !important;
            max-width: none !important;
          }

          /* Target the certificate panel parent and make it visible */
          .preview-panel-container {
            display: block !important;
            width: 100vw !important;
            height: 100vh !important;
            position: absolute !important;
            top: 0 !important;
            left: 0 !important;
            padding: 0 !important;
            margin: 0 !important;
          }

          /* The main certificate body fills the whole paper */
          #certificate-print-area {
            position: absolute !important;
            top: 0 !important;
            left: 0 !important;
            width: 100vw !important;
            height: 100vh !important;
            box-shadow: none !important;
            border: none !important;
            margin: 0 !important;
            background-color: white !important;
            z-index: 1000 !important;
          }

          /* Force high quality graphics */
          * {
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
            color-adjust: exact !important;
          }
        }
      `}</style>
    </div>
  );
};