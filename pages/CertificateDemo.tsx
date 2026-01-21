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
    // Nova abordagem: Usar um iframe oculto para isolar a impressão
    const printContent = document.getElementById('certificate-print-area');
    if (!printContent) return;

    // Criar iframe se não existir
    let iframe = document.getElementById('print-iframe') as HTMLIFrameElement;
    if (!iframe) {
      iframe = document.createElement('iframe');
      iframe.id = 'print-iframe';
      iframe.style.position = 'absolute';
      iframe.style.width = '0px';
      iframe.style.height = '0px';
      iframe.style.border = 'none';
      document.body.appendChild(iframe);
    }

    const doc = iframe.contentWindow?.document;
    if (!doc) return;

    // Injetar conteúdo e estilos no iframe
    doc.open();
    doc.write(`
      <!DOCTYPE html>
      <html>
        <head>
          <title>認定証 - Diet Academy</title>
          <script src="https://cdn.tailwindcss.com"></script>
          <link rel="preconnect" href="https://fonts.googleapis.com">
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
          <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;700&family=Zen+Old+Mincho:wght@400;700&display=swap" rel="stylesheet">
          <style>
            body { margin: 0; padding: 0; background: white; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
            .font-serif-jp { font-family: "Zen Old Mincho", serif; }
            .font-sans-jp { font-family: "Noto Sans JP", sans-serif; }
            @page { size: A4 landscape; margin: 0; }
            .print-container {
              width: 297mm;
              height: 210mm;
              position: relative;
              overflow: hidden;
            }
          </style>
        </head>
        <body class="font-sans-jp">
          <div class="print-container">
            ${printContent.innerHTML}
          </div>
          <script>
            // Aguarda o Tailwind processar e as imagens carregarem antes de imprimir
            window.onload = function() {
              setTimeout(() => {
                window.focus();
                window.print();
              }, 800);
            };
          </script>
        </body>
      </html>
    `);
    doc.close();
  };

  const handleIssue = () => {
    setIsIssuing(true);
    setTimeout(() => setIsIssuing(false), 1500);
  };

  return (
    <div className="min-h-screen bg-stone-100 py-12 md:py-20">
      <div className="max-w-[1400px] mx-auto px-4">
        
        {/* Header - UI Only */}
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
                認定情報の変更
              </h3>
              
              <div className="space-y-6">
                <div>
                  <label className="block text-xs font-bold text-stone-400 uppercase tracking-widest mb-2">認定者氏名</label>
                  <input 
                    type="text" 
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:border-[#FF8C6B] focus:ring-1 focus:ring-[#FF8C6B] outline-none transition-all text-stone-800 font-bold"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-stone-400 uppercase tracking-widest mb-3">コースの切り替え</label>
                  <div className="space-y-3">
                    {courses.map((course) => (
                      <label 
                        key={course.id}
                        className={`flex items-center p-4 rounded-2xl border-2 cursor-pointer transition-all ${
                          selectedCourseId === course.id 
                          ? `border-${course.id === 'regular' ? '[#FF8C6B]' : course.id === 'senior' ? '[#5D9B9B]' : '[#4338ca]'} bg-stone-50 shadow-sm` 
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
                          <div className="text-[10px] font-bold text-stone-400 uppercase">{course.level}</div>
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
                  {isIssuing ? '発行準備中...' : '情報を確定する'}
                </Button>
                <div className="flex gap-2">
                  <Button variant="outline" fullWidth size="md" onClick={handlePrint} className="bg-white">
                    <Printer size={16} className="mr-2" /> 認定証を印刷
                  </Button>
                  <Button variant="outline" fullWidth size="md" className="bg-white">
                    <Download size={16} className="mr-2" /> 保存
                  </Button>
                </div>
                <p className="text-[10px] text-stone-400 text-center font-medium mt-2">※印刷時に「背景のグラフィック」を有効にしてください。</p>
              </div>
            </div>
          </div>

          {/* Certificate Area */}
          <div className="lg:col-span-8 order-1 lg:order-2">
             <div className="sticky top-32">
                <div className="mb-4 flex items-center justify-between px-4">
                  <span className="text-xs font-bold text-stone-400 tracking-widest uppercase">認定証のプレビュー (A4横サイズ)</span>
                </div>

                {/* Main Certificate Container */}
                <div 
                  id="certificate-print-area"
                  className="relative w-full aspect-[1.414/1] bg-white shadow-2xl rounded-sm border border-stone-200 overflow-hidden"
                >
                  {/* Decorative Frames */}
                  <div className="absolute inset-0 p-[2.5%] pointer-events-none">
                     <div className={`w-full h-full border-[6px] md:border-[8px] border-double ${selectedCourseId === 'regular' ? 'border-orange-100' : selectedCourseId === 'senior' ? 'border-teal-100' : 'border-indigo-100'} rounded-sm`}></div>
                     <div className={`absolute inset-[3.5%] border-[1px] ${selectedCourseId === 'regular' ? 'border-orange-200' : 'border-stone-200'} opacity-30`}></div>
                  </div>

                  {/* Corners */}
                  <div className={`absolute top-[4.5%] left-[4.5%] w-6 h-6 border-t-2 border-l-2 ${selectedCourseId === 'regular' ? 'border-orange-300' : 'border-stone-200'}`}></div>
                  <div className={`absolute top-[4.5%] right-[4.5%] w-6 h-6 border-t-2 border-r-2 ${selectedCourseId === 'regular' ? 'border-orange-300' : 'border-stone-200'}`}></div>
                  <div className={`absolute bottom-[4.5%] left-[4.5%] w-6 h-6 border-b-2 border-l-2 ${selectedCourseId === 'regular' ? 'border-orange-300' : 'border-stone-200'}`}></div>
                  <div className={`absolute bottom-[4.5%] right-[4.5%] w-6 h-6 border-b-2 border-r-2 ${selectedCourseId === 'regular' ? 'border-orange-300' : 'border-stone-200'}`}></div>

                  {/* Certificate Internal Content */}
                  <div className="absolute inset-0 flex flex-col items-center justify-between py-[6%] px-[10%] text-center">
                    
                    {/* 1. Header Section (10% height) */}
                    <div className="w-full flex-shrink-0">
                       <img src="https://dietacademy.jp/img2023/common/header/logo.png" alt="Logo" className="h-6 md:h-10 mx-auto mb-1 grayscale brightness-50 opacity-70" />
                       <div className="text-[6px] md:text-[8px] font-bold tracking-[0.3em] text-stone-400 uppercase">Japan Diet Academy Association</div>
                    </div>

                    {/* 2. Title Section (25% height) */}
                    <div className="w-full flex-shrink-0">
                       <h2 className="text-2xl md:text-5xl font-bold text-stone-800 font-serif-jp tracking-[0.2em] mb-1 md:mb-3">認定証</h2>
                       <div className={`w-16 md:w-24 h-0.5 ${selectedCourse.color} mx-auto rounded-full`}></div>
                       <div className="mt-2 md:mt-4">
                          <div className="text-[8px] md:text-xs font-bold text-stone-500 font-serif-jp uppercase tracking-wider">{selectedCourse.level}</div>
                          <div className={`text-xs md:text-xl font-bold ${selectedCourse.accent} font-serif-jp tracking-widest uppercase mt-0.5`}>
                            {selectedCourse.subtitle}
                          </div>
                       </div>
                    </div>

                    {/* 3. Recipient Name Section (15% height) */}
                    <div className="w-full flex-shrink-0">
                       <div className="text-stone-400 text-[6px] md:text-[9px] font-bold mb-1">認定者</div>
                       <div className="relative inline-block px-10 pb-0.5 border-b border-stone-300 min-w-[50%]">
                          <div className="text-lg md:text-3xl font-bold text-stone-900 font-serif-jp">
                             {userName || '　　　　'} <span className="text-xs md:text-lg ml-4 text-stone-500 font-normal">殿</span>
                          </div>
                       </div>
                    </div>

                    {/* 4. Body Text Section (25% height) */}
                    <div className="w-full px-4 flex-shrink-0">
                       <p className="text-[8px] md:text-sm text-stone-600 font-serif-jp leading-loose md:leading-[2.5] max-w-[90%] mx-auto">
                          貴殿は日本ダイエットアカデミー協会が定める<br className="hidden md:block" />
                          全てのカリキュラムを優秀な成績で修了し試験に合格されました<br className="hidden md:block" />
                          よってここに{selectedCourse.level}の資格を認定します
                       </p>
                    </div>

                    {/* 5. Footer Section (20% height) */}
                    <div className="w-full flex justify-between items-end pt-2 md:pt-4 border-t border-stone-100 flex-shrink-0">
                       <div className="text-left space-y-1 md:space-y-3">
                          <div>
                             <div className="text-[6px] md:text-[8px] font-bold text-stone-400 mb-0.5 uppercase tracking-tighter">Issue Date</div>
                             <div className="text-[9px] md:text-xs font-bold text-stone-800 font-serif-jp">2026年3月15日</div>
                          </div>
                          <div>
                             <div className="text-[6px] md:text-[8px] font-bold text-stone-400 mb-0.5 uppercase tracking-tighter">Serial Number</div>
                             <div className="text-[9px] md:text-xs font-bold text-stone-800 font-serif-jp tracking-widest uppercase">JDAA-2026-0001</div>
                          </div>
                       </div>

                       <div className="flex items-center gap-3 md:gap-8">
                          <div className="text-right">
                             <div className="text-[5px] md:text-[7px] font-bold text-stone-400 mb-0.5">一般社団法人 日本ダイエットアカデミー協会</div>
                             <div className="text-[10px] md:text-sm font-bold text-stone-800 font-serif-jp">代表理事　山田 花子</div>
                          </div>
                          
                          {/* Award Seal */}
                          <div className={`relative w-12 h-12 md:w-16 md:h-16 rounded-full border-2 border-double flex items-center justify-center bg-white ${
                            selectedCourseId === 'regular' ? 'border-orange-500/40 text-orange-600' : 
                            selectedCourseId === 'senior' ? 'border-teal-500/40 text-teal-600' : 
                            'border-indigo-500/40 text-indigo-600'
                          }`}>
                             <div className={`absolute inset-0 border border-dashed rounded-full scale-90 opacity-10 ${selectedCourseId === 'regular' ? 'border-orange-500' : 'border-stone-300'}`}></div>
                             <AwardIcon className="w-6 h-6 md:w-8 md:h-8 opacity-90" strokeWidth={1} />
                             <div className="absolute inset-0 flex items-center justify-center text-[3px] md:text-[4px] font-bold opacity-10 uppercase pointer-events-none p-1 tracking-tighter">
                                Official Certified Seal
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

                {/* Extras - UI Only */}
                <div className="mt-8 flex justify-center gap-6">
                  <button className="flex items-center gap-2 text-stone-400 hover:text-stone-600 font-bold text-xs transition-colors">
                    <Share2 size={16} /> SNSシェア
                  </button>
                  <div className="w-px h-4 bg-stone-300"></div>
                  <button className="flex items-center gap-2 text-stone-400 hover:text-stone-600 font-bold text-xs transition-colors">
                    認定URLコピー
                  </button>
                </div>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};