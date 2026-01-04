import React from 'react';
import { Button } from '../components/common/Button';
import { Smartphone, Book, Mail, Video } from 'lucide-react';

export const Methods: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="py-16 text-center max-w-4xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">ライフスタイルに合わせて選べる学習法</h1>
        <p className="text-xl text-gray-500">
          デジタルでの効率学習か、紙教材でのじっくり学習か。あなたの生活スタイルに最適な方法をお選びいただけます。
        </p>
      </div>

      {/* Methods Comparison */}
      <section className="max-w-7xl mx-auto px-4 pb-16">
        <div className="grid md:grid-cols-2 gap-8">
          
          {/* Online Method */}
          <div className="border border-gray-200 rounded-2xl p-8 hover:shadow-lg transition">
            <div className="flex items-center mb-6">
              <div className="p-3 bg-blue-100 rounded-lg text-blue-600 mr-4">
                <Smartphone size={32} />
              </div>
              <h2 className="text-2xl font-bold">完全オンライン学習 (eラーニング)</h2>
            </div>
            <p className="text-gray-600 mb-6">
              スキマ時間を有効活用したい方におすすめ。スマホ、タブレット、PCでいつでもどこでも学習可能。
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center text-sm text-gray-700">✅ 申し込み後すぐに学習開始</li>
              <li className="flex items-center text-sm text-gray-700">✅ 重い教材を持ち歩く必要なし</li>
              <li className="flex items-center text-sm text-gray-700">✅ 課題提出もデジタルで完結</li>
              <li className="flex items-center text-sm text-gray-700">✅ 最短1ヶ月で資格取得</li>
            </ul>
            <img 
              src="https://picsum.photos/seed/mobilelearning/600/300" 
              alt="スマホ学習" 
              className="rounded-lg w-full object-cover h-48 mb-6"
            />
          </div>

          {/* Paper Method */}
          <div className="border border-gray-200 rounded-2xl p-8 hover:shadow-lg transition">
             <div className="flex items-center mb-6">
              <div className="p-3 bg-yellow-100 rounded-lg text-yellow-600 mr-4">
                <Book size={32} />
              </div>
              <h2 className="text-2xl font-bold">ハイブリッド学習 (テキスト教材)</h2>
            </div>
            <p className="text-gray-600 mb-6">
              書き込みながらじっくり学びたい方へ。分かりやすいフルカラーテキストをご自宅へお届けします。
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center text-sm text-gray-700">✅ 高品質な製本テキスト</li>
              <li className="flex items-center text-sm text-gray-700">✅ 目の疲れを気にせず学習</li>
              <li className="flex items-center text-sm text-gray-700">✅ 添削課題は郵送またはデジタル選択可</li>
              <li className="flex items-center text-sm text-gray-700">✅ 標準2ヶ月で資格取得</li>
            </ul>
             <img 
              src="https://picsum.photos/seed/books/600/300" 
              alt="テキスト教材" 
              className="rounded-lg w-full object-cover h-48 mb-6"
            />
          </div>

        </div>
      </section>

      {/* Support System */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">充実のサポート体制</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="flex">
              <Mail className="flex-shrink-0 h-8 w-8 text-orange-500 mt-1 mr-4" />
              <div>
                <h3 className="text-xl font-bold mb-2">質問無制限</h3>
                <p className="text-gray-600">分からないことがあれば、受講生専用ページから何度でもプロの講師に質問できます。</p>
              </div>
            </div>
            <div className="flex">
              <Video className="flex-shrink-0 h-8 w-8 text-orange-500 mt-1 mr-4" />
              <div>
                <h3 className="text-xl font-bold mb-2">実技解説動画</h3>
                <p className="text-gray-600">シェイプアップインストラクターコースの実技は、動画を見ながら細かい動きを確認できます。</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 max-w-3xl mx-auto px-4">
        <h2 className="text-2xl font-bold mb-8">よくあるご質問</h2>
        <div className="space-y-6">
          <div className="border-b pb-4">
            <h3 className="font-bold text-lg mb-2">予備知識は必要ですか？</h3>
            <p className="text-gray-600">いいえ、受講生の92%は未経験からのスタートです。基礎から丁寧に解説されていますのでご安心ください。</p>
          </div>
          <div className="border-b pb-4">
            <h3 className="font-bold text-lg mb-2">資格は履歴書に書けますか？</h3>
            <p className="text-gray-600">はい、履歴書の資格欄に正式名称で記載いただけます。就職や転職のアピールポイントになります。</p>
          </div>
          <div className="border-b pb-4">
            <h3 className="font-bold text-lg mb-2">受講期間はどのくらいですか？</h3>
            <p className="text-gray-600">標準学習期間は6ヶ月ですが、早い方は1〜2ヶ月で修了されています。ご自身のペースで進められます。</p>
          </div>
        </div>
      </section>
    </div>
  );
};