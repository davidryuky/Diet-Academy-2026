import React from 'react';
import { Button } from '../components/common/Button';
import { Check, X, ShieldCheck, HelpCircle, ChevronDown, AlertCircle } from 'lucide-react';

export const Pricing: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 tracking-tight">
            選べる受講コース
          </h1>
          <p className="mt-4 max-w-xl mx-auto text-lg text-gray-500">
            大きな違いは「試験免除」の有無です。スペシャル講座なら、卒業課題の提出のみで資格認定が保証されます。
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
          
          {/* Basic Course */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 hover:shadow-lg transition-shadow overflow-hidden flex flex-col">
            <div className="p-8 flex-1">
              <h3 className="text-2xl font-bold text-gray-900">基本講座</h3>
              <p className="mt-4 text-gray-500 text-sm">費用を抑えて学習したい方、試験を受けて実力を試したい方へ。</p>
              <div className="mt-6 flex items-baseline">
                <span className="text-3xl md:text-4xl font-extrabold text-gray-900">59,800円</span>
                <span className="ml-2 text-gray-500">(税込)</span>
              </div>
              
              <ul className="mt-8 space-y-4 text-sm">
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" /> 完全攻略テキスト教材
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" /> 5回の添削指導
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" /> 質問無制限サポート
                </li>
                <li className="flex items-center text-gray-400">
                  <X className="h-5 w-5 text-red-300 mr-3 flex-shrink-0" /> 試験免除 (受験が必要)
                </li>
                <li className="flex items-center text-gray-400">
                  <X className="h-5 w-5 text-red-300 mr-3 flex-shrink-0" /> 卒業と同時に資格取得
                </li>
              </ul>

              <div className="mt-8 bg-yellow-50 p-4 rounded-lg text-xs text-yellow-800 flex items-start">
                <AlertCircle size={16} className="mr-2 flex-shrink-0 mt-0.5" />
                <span>注意: 資格取得には、別途試験申し込みと受験料(各10,000円)が必要です。</span>
              </div>
            </div>
            <div className="p-8 bg-gray-50 border-t border-gray-100 mt-auto">
              <Button fullWidth variant="outline">基本講座に申し込む</Button>
            </div>
          </div>

          {/* Special Course */}
          <div className="bg-white rounded-2xl shadow-xl border-2 border-orange-500 relative overflow-hidden transform md:-translate-y-4 flex flex-col">
            <div className="absolute top-0 right-0 bg-orange-500 text-white text-xs font-bold px-4 py-1 uppercase tracking-wide rounded-bl-lg">
              人気No.1
            </div>
            <div className="p-8 flex-1">
              <h3 className="text-2xl font-bold text-gray-900">スペシャル講座</h3>
              <p className="mt-4 text-gray-500 text-sm">最短ルートで確実に資格取得。100%合格保証付き。</p>
              <div className="mt-6 flex items-baseline">
                <span className="text-3xl md:text-4xl font-extrabold text-gray-900">79,800円</span>
                <span className="ml-2 text-gray-500">(税込)</span>
              </div>
              
              <ul className="mt-8 space-y-4 text-sm">
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" /> 完全攻略テキスト教材
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" /> 5回の添削指導
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" /> 質問無制限サポート
                </li>
                <li className="flex items-center font-bold text-gray-900 bg-orange-50 p-2 rounded -mx-2">
                  <Check className="h-5 w-5 text-orange-500 mr-3 flex-shrink-0" /> 試験免除 (100%合格)
                </li>
                <li className="flex items-center font-bold text-gray-900 bg-orange-50 p-2 rounded -mx-2">
                  <Check className="h-5 w-5 text-orange-500 mr-3 flex-shrink-0" /> 卒業課題提出で即資格認定
                </li>
              </ul>

              <div className="mt-8 bg-green-50 p-4 rounded-lg text-xs text-green-800 flex items-start">
                 <Check size={16} className="mr-2 flex-shrink-0 mt-0.5" />
                 <span>お得: 受験料は一切かかりません。卒業課題を提出するだけで資格が授与されます。</span>
              </div>
            </div>
            <div className="p-8 bg-gray-50 border-t border-gray-100 mt-auto">
              <Button fullWidth variant="orange" className="text-lg py-4 shadow-lg shadow-orange-200">スペシャル講座に申し込む</Button>
              <p className="text-center text-xs text-gray-400 mt-3">※ 分割払いも可能です</p>
            </div>
          </div>
        </div>

        {/* 1. Explicit Guarantee Section (Trust) */}
        <div className="max-w-3xl mx-auto mb-20">
          <div className="bg-amber-50 border-2 border-amber-200 rounded-2xl p-6 md:p-10 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-2 h-full bg-amber-400"></div>
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="bg-white p-4 rounded-full shadow-md border border-amber-100 flex-shrink-0">
                <ShieldCheck size={48} className="text-amber-500" />
              </div>
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-2">
                  安心の8日間返品保証
                </h3>
                <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                  教材がお手元に届いてから8日以内であれば、返品が可能です。
                  「思っていた内容と違う」「続けられるか不安」といった場合でも安心です。
                  まずは教材を手に取って、品質をお確かめください。
                </p>
                <p className="text-xs text-gray-500 mt-2">
                  ※ テキストへの書き込みや汚れがない場合に限ります。送料はお客様負担となります。
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 2. Objection Handling FAQ (Risk Reduction) */}
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold text-gray-900 flex items-center justify-center">
              <HelpCircle className="mr-2 text-orange-500" />
              受講前のよくある不安にお答えします
            </h2>
          </div>

          <div className="space-y-6">
            <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
              <h3 className="text-lg font-bold text-gray-800 mb-3 flex items-start">
                <span className="bg-gray-200 text-gray-600 text-xs px-2 py-1 rounded mr-3 mt-0.5">Q</span>
                万が一、試験に落ちてしまったらどうなりますか？
              </h3>
              <div className="pl-10 text-gray-600 text-sm leading-relaxed">
                <span className="font-bold text-orange-600">A.</span> 基本講座の方は再受験が可能ですが、別途受験料がかかります。不安な方には、試験自体が免除され、卒業と同時に資格が取得できる<span className="font-bold underline decoration-orange-300 decoration-2">「スペシャル講座」</span>を強くお勧めします。こちらは100%の取得を保証しています。
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
              <h3 className="text-lg font-bold text-gray-800 mb-3 flex items-start">
                <span className="bg-gray-200 text-gray-600 text-xs px-2 py-1 rounded mr-3 mt-0.5">Q</span>
                資格取得後、更新料や年会費はかかりますか？
              </h3>
              <div className="pl-10 text-gray-600 text-sm leading-relaxed">
                <span className="font-bold text-orange-600">A.</span> いいえ、<span className="font-bold">一切かかりません。</span>取得した資格は一生涯有効です。維持費を気にすることなく、永続的にあなたのスキルとして履歴書や名刺に記載いただけます。
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
              <h3 className="text-lg font-bold text-gray-800 mb-3 flex items-start">
                <span className="bg-gray-200 text-gray-600 text-xs px-2 py-1 rounded mr-3 mt-0.5">Q</span>
                この資格は、就職や開業に使えますか？
              </h3>
              <div className="pl-10 text-gray-600 text-sm leading-relaxed">
                <span className="font-bold text-orange-600">A.</span> はい、もちろん可能です。履歴書の資格欄に正式名称で記載できるため、就職活動でのアピールになります。また、自宅サロンや教室を開く際、壁に認定証を掲示することで、クライアントへの<span className="font-bold">信頼性の証明</span>として大きな効果を発揮します。
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
              <h3 className="text-lg font-bold text-gray-800 mb-3 flex items-start">
                <span className="bg-gray-200 text-gray-600 text-xs px-2 py-1 rounded mr-3 mt-0.5">Q</span>
                本当に未経験からでもついていけますか？
              </h3>
              <div className="pl-10 text-gray-600 text-sm leading-relaxed">
                <span className="font-bold text-orange-600">A.</span> 受講生の<span className="font-bold">約9割が初学者</span>からのスタートです。専門用語を使わず、図解豊富なテキストを使用しているため、知識ゼロからでもスムーズに学習できます。分からない点は何度でも無料でプロの講師に質問できるので、挫折の心配はありません。
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center text-gray-500 text-xs md:text-sm bg-gray-100 p-4 rounded-lg max-w-2xl mx-auto">
          <p>お支払い方法: クレジットカード、Amazon Pay、PayPay、代金引換、コンビニ後払い、分割払い対応。</p>
        </div>
      </div>
    </div>
  );
};