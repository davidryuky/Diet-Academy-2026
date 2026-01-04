import React from 'react';
import { Button } from '../components/Button';
import { useNavigate } from 'react-router-dom';
import { BookOpen, Activity } from 'lucide-react';

export const Courses: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white pb-20">
      <div className="bg-gray-50 py-12 mb-12 border-b">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-gray-900">取得可能な資格</h1>
          <p className="mt-4 text-xl text-gray-500">
            栄養士とフィットネス専門家によって開発された充実のカリキュラム
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12">
          
          {/* Certification 1 */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200">
            <div className="bg-green-600 p-6 flex items-center justify-between text-white">
              <h2 className="text-2xl font-bold">ダイエットアドバイザー</h2>
              <BookOpen size={32} />
            </div>
            <div className="p-8">
              <p className="text-gray-600 mb-6">
                食事指導のプロフェッショナルへ。エビデンスに基づいた栄養戦略を立て、クライアントのライフスタイルに合わせたアドバイスが可能になります。
              </p>
              
              <h3 className="font-bold text-gray-900 mb-3 uppercase text-sm tracking-wide">学習内容:</h3>
              <ul className="space-y-2 mb-8">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  <span>基礎代謝とカロリー計算の理論</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  <span>栄養素の働きと代謝メカニズム</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  <span>食行動の心理学とメンタルサポート</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  <span>体質や目的に合わせた食事プラン作成</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Certification 2 */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200">
            <div className="bg-orange-500 p-6 flex items-center justify-between text-white">
              <h2 className="text-2xl font-bold">シェイプアップインストラクター</h2>
              <Activity size={32} />
            </div>
            <div className="p-8">
              <p className="text-gray-600 mb-6">
                美しいボディラインを作るための運動指導資格。栄養学に加え、機能的かつ美容的なエクササイズ処方を学びます。
              </p>
              
              <h3 className="font-bold text-gray-900 mb-3 uppercase text-sm tracking-wide">学習内容:</h3>
              <ul className="space-y-2 mb-8">
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">•</span>
                  <span>筋肉の解剖学とバイオメカニクス基礎</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">•</span>
                  <span>脂肪燃焼と筋肥大のためのトレーニング理論</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">•</span>
                  <span>自宅でできるファンクショナルトレーニング</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">•</span>
                  <span>姿勢改善と動作の修正指導</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Supervision */}
        <div className="mt-16 bg-gray-900 rounded-3xl p-8 md:p-16 text-white flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <h2 className="text-3xl font-bold mb-4">専門家による監修</h2>
            <p className="text-gray-300 text-lg mb-6">
              全てのカリキュラムは、経験豊富なヘルスケアスペシャリストによって開発・監修されています。（※現在、正式なプロフィールデータ待機中）
            </p>
            <div className="flex items-center gap-4">
               <img 
                src="https://picsum.photos/seed/nutritionist/100/100" 
                alt="田中 優子" 
                className="w-16 h-16 rounded-full border-2 border-orange-500"
              />
              <div>
                <div className="font-bold text-lg">田中 優子 先生</div>
                <div className="text-sm text-orange-400">ヘルスケアスペシャリスト</div>
              </div>
            </div>
          </div>
          <div className="flex-1">
             <img 
              src="https://picsum.photos/seed/studying/600/400" 
              alt="教材イメージ" 
              className="rounded-xl shadow-lg"
            />
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <Button size="lg" onClick={() => navigate('/pricing')}>受講申込みへ進む</Button>
        </div>
      </div>
    </div>
  );
};