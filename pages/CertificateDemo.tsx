import React, { useState } from 'react';
import { Button } from '../components/common/Button';
import { courses } from '../data/coursesData';
import { User, CheckCircle, Printer, Download, Share2, Award as AwardIcon } from 'lucide-react';

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
    setTimeout(() => setIsIssuing(false), 1500);
  };

  return (
    <div className="min-h-screen bg-stone-100 py-12 md:py-20 print:p-0 print:bg-white">
      {/* UI Elements - Hidden on Print via CSS */}
      <div className="max-w-[1400px] mx-auto px-4 print:hidden">
        <div className="text-center mb-12">
          <span className="text-[#FF8C6B] font-bold tracking-widest text-xs uppercase mb-4 block">Beta Feature</span>
          <h1 className="text-3xl md:text-5xl font-bold text-stone-800 font-serif-jp">認定証発行システム</h1>
          <p className="mt-4 text-stone-500 font-medium tracking-wide">合格おめでとうございます。記載内容を確認し、認定証を発行してください。</p>
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
                    placeholder="お名前を入力"
                  />
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
          </div>

          {/* Certificate Area */}
          <div className="lg:col-span-8 order-1 lg:order-2">
             <div className="sticky top-32">
                <div className="mb-4 flex items-center justify-between px-4">
                  <span className="text-xs font-bold text-stone-400 tracking-widest uppercase">認定証プレビュー</span>
                </div>

                {/* The Actual Certificate Canvas */}
                <div 
                  id="certificate-printable-area"
                  className="relative w-full aspect-[1.414/1] bg-white shadow-2xl rounded-sm border border-stone-200 overflow-hidden"
                >
                  {/* Ornate Frame */}
                  <div className="absolute inset-0 p-[2.5%] pointer-events-none">
                     <div className={`w-full h-full border-[10px] border-double ${selectedCourseId === 'regular' ? 'border-orange-100' : selectedCourseId === 'senior' ? 'border-teal-50' : 'border-indigo-50'} rounded-sm`}></div>
                     <div className={`absolute inset-[3%] border-[1px] ${selectedCourseId === 'regular' ? 'border-orange-200' : selectedCourseId === 'senior' ? 'border-teal-100' : 'border-indigo-100'} opacity-30`}></div>
                  </div>

                  {/* Corners */}
                  <div className={`absolute top-[4%] left-[4%] w-10 h-10 border-t-2 border-l-2 ${selectedCourseId === 'regular' ? 'border-orange-300' : 'border-stone-200'}`}></div>
                  <div className={`absolute top-[4%] right-[4%] w-10 h-10 border-t-2 border-r-2 ${selectedCourseId === 'regular' ? 'border-orange-300' : 'border-stone-200'}`}></div>
                  <div className={`absolute bottom-[4%] left-[4%] w-10 h-10 border-b-2 border-l-2 ${selectedCourseId === 'regular' ? 'border-orange-300' : 'border-stone-200'}`}></div>
                  <div className={`absolute bottom-[4%] right-[4%] w-10 h-10 border-b-2 border-r-2 ${selectedCourseId === 'regular' ? 'border-orange-300' : 'border-stone-200'}`}></div>

                  {/* Internal Content - Reduced padding to prevent clipping */}
                  <div className="absolute inset-0 flex flex-col items-center justify-between py-[4%] px-[10%] text-center">
                    
                    {/* Header */}
                    <div className="w-full">
                       <img src="https://dietacademy.jp/img2023/common/header/logo.png" alt="Logo" className="h-8 md:h-12 mx-auto mb-1 grayscale brightness-50 opacity-70" />
                       <div className="text-[7px] md:text-[9px] font-bold tracking-[0.3em] text-stone-400 uppercase">Japan Diet Academy Association</div>
                    </div>

                    {/* Main Title */}
                    <div className="w-full">
                       <h2 className="text-3xl md:text-5xl font-bold text-stone-800 font-serif-jp tracking-[0.2em] mb-3">認定証</h2>
                       <div className={`w-24 h-0.5 ${selectedCourse.color} mx-auto rounded-full`}></div>
                       <div className="mt-3 space-y-1">
                          <div className="text-[10px] md:text-sm font-bold text-stone-500 font-serif-jp">{selectedCourse.level}</div>
                          <div className={`text-sm md:text-xl font-bold ${selectedCourse.accent} font-serif-jp tracking-wide uppercase`}>
                            {selectedCourse.subtitle}
                          </div>
                       </div>
                    </div>

                    {/* Recipient Name */}
                    <div className="w-full my-2">
                       <div className="text-stone-400 text-[8px] md:text-xs font-bold mb-1">認定者</div>
                       <div className="relative inline-block px-10 pb-1">
                          <div className="text-xl md:text-3xl lg:text-4xl font-bold text-stone-900 font-serif-jp">
                             {userName || '　　　　'} <span className="text-base md:text-xl ml-4 text-stone-500 font-normal">殿</span>
                          </div>
                          <div className="absolute bottom-0 left-0 w-full h-[1px] bg-stone-300"></div>
                       </div>
                    </div>

                    {/* Certification Text */}
                    <div className="w-full px-4">
                       <p className="text-[9px] md:text-[11px] lg:text-sm text-stone-600 font-serif-jp leading-relaxed md:leading-loose">
                          貴殿は日本ダイエットアカデミー協会が定める<br className="hidden md:block" />
                          全てのカリキュラムを優秀な成績で修了し試験に合格されました<br className="hidden md:block" />
                          よってここに{selectedCourse.level}の資格を認定します
                       </p>
                    </div>

                    {/* Footer Info & Seal */}
                    <div className="w-full flex justify-between items-end pt-4 border-t border-stone-100">
                       <div className="text-left space-y-2 md:space-y-4">
                          <div>
                             <div className="text-[7px] md:text-[8px] font-bold text-stone-400 mb-0.5">発行日</div>
                             <div className="text-[10px] md:text-xs font-bold text-stone-800 font-serif-jp">2026年3月15日</div>
                          </div>
                          <div>
                             <div className="text-[7px] md:text-[8px] font-bold text-stone-400 mb-0.5">登録番号</div>
                             <div className="text-[10px] md:text-xs font-bold text-stone-800 font-serif-jp tracking-widest uppercase">JDAA-2026-0001</div>
                          </div>
                       </div>

                       <div className="flex items-center gap-4 md:gap-8">
                          <div className="text-right">
                             <div className="text-[7px] md:text-[8px] font-bold text-stone-400 mb-1">一般社団法人 日本ダイエットアカデミー協会</div>
                             <div className="text-[11px] md:text-sm lg:text-base font-bold text-stone-800 font-serif-jp">代表理事　山田 花子</div>
                          </div>
                          
                          {/* THE SEAL - Reduced size for safe fit */}
                          <div className={`relative w-14 h-14 md:w-20 md:h-20 rounded-full border-4 border-double flex items-center justify-center bg-white ${
                            selectedCourseId === 'regular' ? 'border-orange-500/40 text-orange-600' : 
                            selectedCourseId === 'senior' ? 'border-teal-500/40 text-teal-600' : 
                            'border-indigo-500/40 text-indigo-600'
                          }`}>
                             <div className={`absolute inset-0 border border-dashed rounded-full scale-90 opacity-20 ${selectedCourseId === 'regular' ? 'border-orange-500' : 'border-stone-300'}`}></div>
                             <AwardIcon className="w-6 h-6 md:w-10 md:h-10 opacity-90" strokeWidth={1} />
                             <div className="absolute inset-0 flex items-center justify-center text-[4px] md:text-[5px] font-bold opacity-10 uppercase pointer-events-none p-1 tracking-tighter">
                                Certified Professional JDAA Authentic Seal
                             </div>
                          </div>
                       </div>
                    </div>
                  </div>

                  {/* Issuing Overlay */}
                  {isIssuing && (
                    <div className="absolute inset-0 bg-white/95 backdrop-blur-sm flex flex-col items-center justify-center animate-in fade-in duration-300 z-50">
                      <div className="w-12 h-12 border-4 border-stone-200 border-t-[#FF8C6B] rounded-full animate-spin mb-4"></div>
                      <div className="text-lg font-bold text-stone-800 font-serif-jp">認定証を作成中...</div>
                    </div>
                  )}
                </div>

                {/* Share Options - Hidden on Print */}
                <div className="mt-8 flex justify-center gap-6 print:hidden">
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

      {/* NEW IMPROVED PRINT APPROACH */}
      <style>{`
        @page {
          size: A4 landscape;
          margin: 0;
        }

        @media print {
          /* 1. Hide everything by default using visibility to preserve layout for the target */
          body * {
            visibility: hidden;
          }

          /* 2. Show the certificate container and all its children */
          #certificate-printable-area, 
          #certificate-printable-area * {
            visibility: visible;
          }

          /* 3. Position the certificate to cover the page */
          #certificate-printable-area {
            position: fixed !important;
            top: 0 !important;
            left: 0 !important;
            width: 297mm !important;
            height: 210mm !important;
            margin: 0 !important;
            padding: 0 !important;
            border: none !important;
            box-shadow: none !important;
            border-radius: 0 !important;
            background-color: #fff !important;
            z-index: 9999999;
          }

          /* Ensure images and colors are printed */
          * {
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
          }
        }
      `}</style>
    </div>
  );
};