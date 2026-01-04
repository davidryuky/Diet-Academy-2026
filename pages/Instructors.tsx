import React from 'react';
import { Button } from '../components/Button';
import { useNavigate } from 'react-router-dom';
import { Award, Briefcase, TrendingUp, ShieldCheck } from 'lucide-react';

export const Instructors: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white">
      {/* Header Banner */}
      <div className="relative bg-orange-600 h-80">
        <img 
          src="https://picsum.photos/seed/fitnessclass/1600/600" 
          alt="フィットネスインストラクター" 
          className="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-40"
        />
        <div className="relative max-w-7xl mx-auto px-4 h-full flex items-center">
          <div className="max-w-2xl">
            <h1 className="text-4xl font-bold text-white mb-4">プロとして活躍するキャリア</h1>
            <p className="text-xl text-orange-100">
              ダイエットとボディメイクの専門家へ。W資格取得で即戦力としてのスキルを証明し、活動の場を広げましょう。
            </p>
          </div>
        </div>
      </div>

      {/* Why Choose Section */}
      <section className="py-16 max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">当講座が選ばれる理由</h2>
          <p className="text-gray-500 mt-2">キャリアを加速させる4つの強み</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center p-6 border rounded-lg hover:shadow-lg transition">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-orange-100 text-orange-600 mb-4">
              <Award size={32} />
            </div>
            <h3 className="text-lg font-bold mb-2">W資格取得</h3>
            <p className="text-sm text-gray-600">ダイエットアドバイザー + シェイプアップインストラクターの2つの資格を同時に取得可能。</p>
          </div>
          <div className="text-center p-6 border rounded-lg hover:shadow-lg transition">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-orange-100 text-orange-600 mb-4">
              <ShieldCheck size={32} />
            </div>
            <h3 className="text-lg font-bold mb-2">100%合格保証</h3>
            <p className="text-sm text-gray-600">「スペシャル講座」なら、課題を提出するだけで試験免除で資格が認定されます。</p>
          </div>
          <div className="text-center p-6 border rounded-lg hover:shadow-lg transition">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-orange-100 text-orange-600 mb-4">
              <Briefcase size={32} />
            </div>
            <h3 className="text-lg font-bold mb-2">開業サポート</h3>
            <p className="text-sm text-gray-600">技術だけでなく、自宅サロンの開業やオンライン指導のノウハウも学べます。</p>
          </div>
          <div className="text-center p-6 border rounded-lg hover:shadow-lg transition">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-orange-100 text-orange-600 mb-4">
              <TrendingUp size={32} />
            </div>
            <h3 className="text-lg font-bold mb-2">成長する市場</h3>
            <p className="text-sm text-gray-600">予防医学や健康管理への関心が高まっており、専門家の需要は急増しています。</p>
          </div>
        </div>
      </section>

      {/* Career Possibilities */}
      <section className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://picsum.photos/seed/consulting/800/600" 
                alt="カウンセリング風景" 
                className="rounded-xl shadow-2xl"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6 text-orange-500">活躍できるフィールド</h2>
              <ul className="space-y-4">
                <li className="flex items-center border-b border-gray-700 pb-2">
                  <span className="w-2 h-2 bg-orange-500 rounded-full mr-3"></span>
                  <span>オンラインでのダイエット指導・コンサルティング</span>
                </li>
                <li className="flex items-center border-b border-gray-700 pb-2">
                  <span className="w-2 h-2 bg-orange-500 rounded-full mr-3"></span>
                  <span>スポーツジム・フィットネスクラブ</span>
                </li>
                <li className="flex items-center border-b border-gray-700 pb-2">
                  <span className="w-2 h-2 bg-orange-500 rounded-full mr-3"></span>
                  <span>エステサロン・美容サロン</span>
                </li>
                <li className="flex items-center border-b border-gray-700 pb-2">
                  <span className="w-2 h-2 bg-orange-500 rounded-full mr-3"></span>
                  <span>カルチャースクール・セミナー講師</span>
                </li>
                <li className="flex items-center border-b border-gray-700 pb-2">
                  <span className="w-2 h-2 bg-orange-500 rounded-full mr-3"></span>
                  <span>美容・健康系ライター、SNSインフルエンサー</span>
                </li>
              </ul>
              <div className="mt-8">
                <Button variant="primary" onClick={() => navigate('/pricing')}>キャリアへの投資を始める</Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Curriculum Highlight */}
      <section className="py-16 max-w-5xl mx-auto px-4">
        <div className="bg-orange-50 rounded-2xl p-8 md:p-12 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            未経験から最短2ヶ月でプロへ
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            当スクールのハイブリッド学習システムにより、働きながらでも無理なく学習可能です。
            受講生の92%が専門知識ゼロからスタートし、現在プロとして活躍しています。
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button onClick={() => navigate('/courses')}>カリキュラム詳細</Button>
            <Button variant="outline" onClick={() => navigate('/methods')}>学習方法について</Button>
          </div>
        </div>
      </section>
    </div>
  );
};