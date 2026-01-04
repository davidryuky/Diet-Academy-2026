import React from 'react';
import { Button } from '../components/Button';
import { Check, X } from 'lucide-react';

export const Pricing: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
            選べる受講コース
          </h1>
          <p className="mt-5 max-w-xl mx-auto text-xl text-gray-500">
            大きな違いは「試験免除」の有無です。スペシャル講座なら、卒業課題の提出のみで資格認定が保証されます。
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          
          {/* Basic Course */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 hover:shadow-lg transition-shadow overflow-hidden">
            <div className="p-8">
              <h3 className="text-2xl font-bold text-gray-900">基本講座</h3>
              <p className="mt-4 text-gray-500">費用を抑えて学習したい方、試験を受けて実力を試したい方へ。</p>
              <div className="mt-8 flex items-baseline">
                <span className="text-4xl font-extrabold text-gray-900">59,800円</span>
                <span className="ml-2 text-gray-500">(税込)</span>
              </div>
              
              <ul className="mt-8 space-y-4">
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-green-500 mr-3" /> 完全攻略テキスト教材
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-green-500 mr-3" /> 5回の添削指導
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-green-500 mr-3" /> 質問無制限サポート
                </li>
                <li className="flex items-center text-gray-400">
                  <X className="h-5 w-5 text-red-300 mr-3" /> 試験免除 (受験が必要)
                </li>
                <li className="flex items-center text-gray-400">
                  <X className="h-5 w-5 text-red-300 mr-3" /> 卒業と同時に資格取得
                </li>
              </ul>

              <div className="mt-8 bg-yellow-50 p-4 rounded-lg text-sm text-yellow-800">
                注意: 資格取得には、別途試験申し込みと受験料(各10,000円)が必要です。
              </div>
            </div>
            <div className="p-8 bg-gray-50 border-t border-gray-100">
              <Button fullWidth variant="outline">基本講座に申し込む</Button>
            </div>
          </div>

          {/* Special Course */}
          <div className="bg-white rounded-2xl shadow-xl border-2 border-orange-500 relative overflow-hidden transform md:-translate-y-4">
            <div className="absolute top-0 right-0 bg-orange-500 text-white text-xs font-bold px-3 py-1 uppercase tracking-wide">
              人気No.1
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-bold text-gray-900">スペシャル講座</h3>
              <p className="mt-4 text-gray-500">最短ルートで確実に資格取得。100%合格保証付き。</p>
              <div className="mt-8 flex items-baseline">
                <span className="text-4xl font-extrabold text-gray-900">79,800円</span>
                <span className="ml-2 text-gray-500">(税込)</span>
              </div>
              
              <ul className="mt-8 space-y-4">
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-green-500 mr-3" /> 完全攻略テキスト教材
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-green-500 mr-3" /> 5回の添削指導
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-green-500 mr-3" /> 質問無制限サポート
                </li>
                <li className="flex items-center font-bold text-gray-900">
                  <Check className="h-5 w-5 text-orange-500 mr-3" /> 試験免除 (100%合格)
                </li>
                <li className="flex items-center font-bold text-gray-900">
                  <Check className="h-5 w-5 text-orange-500 mr-3" /> 卒業課題提出で即資格認定
                </li>
              </ul>

              <div className="mt-8 bg-green-50 p-4 rounded-lg text-sm text-green-800">
                お得: 受験料がかかりません。卒業課題を提出するだけで資格が授与されます。
              </div>
            </div>
            <div className="p-8 bg-gray-50 border-t border-gray-100">
              <Button fullWidth variant="primary">スペシャル講座に申し込む</Button>
            </div>
          </div>

        </div>

        <div className="mt-16 text-center text-gray-500 text-sm">
          <p>お支払い方法: クレジットカード、Amazon Pay、PayPay、代金引換、コンビニ後払い、分割払い対応。</p>
        </div>
      </div>
    </div>
  );
};