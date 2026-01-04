import React from 'react';
import { Button } from '../components/Button';
import { useNavigate } from 'react-router-dom';
import { Heart, Scale, Smile, Clock } from 'lucide-react';

export const Seekers: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white">
      {/* Header Banner */}
      <div className="relative bg-green-600 h-80">
        <img 
          src="https://picsum.photos/seed/healthyfood/1600/600" 
          alt="健康的な食事" 
          className="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-40"
        />
        <div className="relative max-w-7xl mx-auto px-4 h-full flex items-center">
          <div className="max-w-2xl">
            <h1 className="text-4xl font-bold text-white mb-4">理想の自分に出会うために</h1>
            <p className="text-xl text-green-100">
              単なる減量ではありません。活力あふれる生活と、体が本当に求めているものを理解するための学びです。
            </p>
          </div>
        </div>
      </div>

      {/* Benefits Grid */}
      <section className="py-16 max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="p-6 bg-white rounded-xl shadow-md border border-gray-100 hover:border-green-300 transition-colors">
            <Scale className="h-10 w-10 text-green-600 mb-4" />
            <h3 className="text-lg font-bold mb-2">無理のない体重管理</h3>
            <p className="text-gray-600 text-sm">極端な食事制限ではなく、科学的根拠に基づいた健康的な痩せ方を学びます。</p>
          </div>
          <div className="p-6 bg-white rounded-xl shadow-md border border-gray-100 hover:border-green-300 transition-colors">
            <Heart className="h-10 w-10 text-green-600 mb-4" />
            <h3 className="text-lg font-bold mb-2">家族の健康を守る</h3>
            <p className="text-gray-600 text-sm">パートナーや子供のために、栄養バランスの取れた食事プランを作成できます。</p>
          </div>
          <div className="p-6 bg-white rounded-xl shadow-md border border-gray-100 hover:border-green-300 transition-colors">
            <Smile className="h-10 w-10 text-green-600 mb-4" />
            <h3 className="text-lg font-bold mb-2">自信を取り戻す</h3>
            <p className="text-gray-600 text-sm">確かな結果を出すことで、鏡を見るのが楽しくなり、自己肯定感が高まります。</p>
          </div>
          <div className="p-6 bg-white rounded-xl shadow-md border border-gray-100 hover:border-green-300 transition-colors">
            <Clock className="h-10 w-10 text-green-600 mb-4" />
            <h3 className="text-lg font-bold mb-2">マイペース学習</h3>
            <p className="text-gray-600 text-sm">1日30分、自宅で好きな時間に学習可能。忙しい方でも続けられます。</p>
          </div>
        </div>
      </section>

      {/* Content Preview */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">具体的に何を学ぶの？</h2>
            <ul className="space-y-4">
              {[
                "肥満と痩身のメカニズム",
                "基礎栄養学と応用栄養学",
                "理想的な献立作成の実践",
                "自宅でできる簡単エクササイズ (シェイプアップ)",
                "食欲をコントロールする心理学"
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-green-100 flex items-center justify-center text-green-600 font-bold text-xs mr-3 mt-0.5">
                    {index + 1}
                  </div>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <Button onClick={() => navigate('/courses')}>講座詳細を見る</Button>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 bg-green-200 rounded-xl transform rotate-2"></div>
            <img 
              src="https://picsum.photos/seed/yoga/800/600" 
              alt="ヨガをする女性" 
              className="relative rounded-xl shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-16 max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-2xl font-bold mb-8">受講生の成功ストーリー</h2>
        <div className="bg-white p-8 rounded-2xl shadow-lg relative">
          <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
            <img 
              src="https://picsum.photos/seed/person1/100/100" 
              alt="受講生" 
              className="w-16 h-16 rounded-full border-4 border-white shadow-md"
            />
          </div>
          <p className="mt-6 text-gray-600 italic text-lg leading-loose">
            「産後太りを解消したくて受講しました。半年で15kgの減量に成功しただけでなく、家族全員の食生活も改善できました。専門的な内容も噛み砕いて解説されているので、知識ゼロからでも安心して学べました。」
          </p>
          <div className="mt-4 font-bold text-gray-900">佐藤 まりな 様 (30代)</div>
          <div className="text-sm text-gray-500">ダイエットアドバイザー講座 修了</div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-green-600 py-12 text-center text-white">
        <h2 className="text-3xl font-bold mb-4">今日から新しい自分へ</h2>
        <p className="mb-8 max-w-2xl mx-auto">
          申し込み後、すぐに学習を始められます。まずはコース内容をご確認ください。
        </p>
        <Button variant="primary" size="lg" className="bg-white text-green-700 hover:bg-gray-100" onClick={() => navigate('/pricing')}>
          受講料・プランを見る
        </Button>
      </section>
    </div>
  );
};