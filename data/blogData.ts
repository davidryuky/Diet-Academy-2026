export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  date: string;
  image: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: "why-diets-fail",
    title: "なぜ90%のダイエットは失敗するのか？痩せない原因となる「見えない習慣」",
    excerpt: "心理的な要因や、睡眠・ストレスなど、見落としがちな日常の習慣がダイエット成功の鍵を握っています。",
    category: "心理学・習慣",
    date: "2026.03.01",
    image: "https://images.unsplash.com/photo-1576678927484-cc907957088c?w=800&auto=format&fit=crop&q=60",
    content: `
      <h2 class="text-2xl font-bold mb-4 text-gray-800">努力しているのに痩せない理由</h2>
      <p class="mb-6 leading-relaxed">「食事制限も運動も頑張っているのに、なぜか結果が出ない...」そんな経験はありませんか？実は、ダイエットの成功を左右するのは、カロリー計算だけではありません。</p>
      
      <h3 class="text-xl font-bold mb-3 text-orange-600">1. 睡眠不足という隠れた敵</h3>
      <p class="mb-6 leading-relaxed">睡眠時間が足りないと、食欲を増進させるホルモン「グレリン」が増え、満腹中枢を刺激する「レプチン」が減ります。つまり、寝不足の状態では、生理的に食欲を抑えることが難しくなるのです。</p>

      <h3 class="text-xl font-bold mb-3 text-orange-600">2. ストレスホルモン「コルチゾール」</h3>
      <p class="mb-6 leading-relaxed">ストレスを感じると分泌されるコルチゾールは、脂肪を溜め込みやすくする働きがあります。特に、お腹周りの脂肪はストレスと密接に関係しています。</p>

      <h3 class="text-xl font-bold mb-3 text-orange-600">3. 完璧主義の罠</h3>
      <p class="mb-6 leading-relaxed">「今日は食べ過ぎたからもうダメだ」と、一度の失敗で全てを投げ出してしまう思考（オール・オア・ナッシング）こそが、継続を阻む最大の要因です。80点で合格とする心の余裕が、長期的な成功を生みます。</p>

      <div class="bg-gray-100 p-6 rounded-lg mt-8">
        <p class="font-bold">まとめ</p>
        <p>食事や運動を見直す前に、まずは「睡眠」「ストレスケア」「思考の癖」を見直してみましょう。これらが整うだけで、ダイエットの効果は劇的に変わります。</p>
      </div>
    `
  },
  {
    id: "eat-without-hunger",
    title: "空腹を我慢しない！食欲を自然にコントロールする食事の組み立て方",
    excerpt: "「食べない」ではなく「何を食べるか」。満腹感を得ながら無理なく痩せるための食事術を紹介します。",
    category: "食事術",
    date: "2026.03.01",
    image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800&auto=format&fit=crop&q=60",
    content: `
      <h2 class="text-2xl font-bold mb-4 text-gray-800">我慢は続かない。賢く食べる選択を。</h2>
      <p class="mb-6 leading-relaxed">空腹と戦うダイエットは、いつか必ず爆発します。重要なのは、少ないカロリーで高い満足感を得られる食事を選ぶことです。</p>

      <h3 class="text-xl font-bold mb-3 text-orange-600">ボリューム・イーティングのすすめ</h3>
      <p class="mb-6 leading-relaxed">野菜、きのこ、海藻など、水分と食物繊維が多く含まれる食材を積極的に取り入れましょう。これらは物理的に胃を満たし、脳に「食べた」という満足感を与えます。</p>

      <h3 class="text-xl font-bold mb-3 text-orange-600">タンパク質の力</h3>
      <p class="mb-6 leading-relaxed">タンパク質は、炭水化物や脂質に比べて消化に時間がかかり、満腹感が持続しやすい栄養素です。朝食に卵や納豆、ヨーグルトなどをプラスするだけで、昼食前の空腹感を抑えることができます。</p>

      <h3 class="text-xl font-bold mb-3 text-orange-600">血糖値の乱高下を防ぐ</h3>
      <p class="mb-6 leading-relaxed">急激に血糖値が上がると、その反動で急激に下がり、その時に強い空腹感を感じます。ベジファースト（野菜から食べる）や、精製されていない穀物（玄米など）を選ぶことで、食欲を安定させましょう。</p>
    `
  },
  {
    id: "metabolism-myth",
    title: "「代謝が悪い」は嘘？脂肪燃焼を左右する本当の要因とは",
    excerpt: "多くの人が信じている代謝の誤解を解き、日常生活で効率よく脂肪を燃やすための科学的な真実を解説。",
    category: "基礎知識",
    date: "2026.03.01",
    image: "https://images.unsplash.com/photo-1486739985386-d4fae04ca6f7?w=800&auto=format&fit=crop&q=60",
    content: `
      <h2 class="text-2xl font-bold mb-4 text-gray-800">「年齢のせい」にする前に知っておくべきこと</h2>
      <p class="mb-6 leading-relaxed">「昔と同じ食事なのに太る」「代謝が落ちた気がする」。そう感じる人は多いですが、実は基礎代謝の変化は想像よりも緩やかです。</p>

      <h3 class="text-xl font-bold mb-3 text-orange-600">NEAT（ニート）をご存知ですか？</h3>
      <p class="mb-6 leading-relaxed">NEATとは「非運動性熱産生」のこと。ジムでの運動以外の、日常生活での活動（通勤、家事、姿勢維持など）で消費されるエネルギーを指します。実は、肥満の人と痩せている人の大きな違いは、このNEATの量にあると言われています。</p>

      <h3 class="text-xl font-bold mb-3 text-orange-600">筋肉量と代謝の関係</h3>
      <p class="mb-6 leading-relaxed">確かに筋肉が多いほど基礎代謝は上がりますが、筋トレだけで劇的に代謝が倍増するわけではありません。むしろ、筋肉をつけることで活動的になり、結果として総消費カロリーが増えるというサイクルが重要です。</p>

      <h3 class="text-xl font-bold mb-3 text-orange-600">今日からできる代謝アップ</h3>
      <p class="mb-6 leading-relaxed">エスカレーターではなく階段を使う、座りっぱなしを防ぐ、キビキビと歩く。魔法のような代謝アップ法を探すより、これら毎日の積み重ねが、年間数キロの脂肪燃焼の差を生み出します。</p>
    `
  },
  {
    id: "diet-vs-exercise",
    title: "食事制限 vs 運動：ダイエットに本当に効果があるのはどっち？",
    excerpt: "永遠のテーマに決着。減量において優先すべきはどちらなのか、効率的なバランスについて徹底比較します。",
    category: "検証",
    date: "2026.03.01",
    image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&auto=format&fit=crop&q=60",
    content: `
      <h2 class="text-2xl font-bold mb-4 text-gray-800">結論：減量なら「食事」、ボディメイクなら「運動」</h2>
      <p class="mb-6 leading-relaxed">ダイエットにおいて、食事と運動の重要度は「食事8割、運動2割」と言われることが多いですが、これは科学的にも理にかなっています。</p>

      <h3 class="text-xl font-bold mb-3 text-orange-600">カロリー収支の現実</h3>
      <p class="mb-6 leading-relaxed">おにぎり1個分のカロリー（約200kcal）を消費するには、ウォーキングなら約1時間必要です。運動でカロリーを消費するのは大変ですが、食事で摂取カロリーを控えるのは比較的容易です。体重を落とす段階では、食事管理が圧倒的に効率的です。</p>

      <h3 class="text-xl font-bold mb-3 text-orange-600">では、なぜ運動が必要なのか？</h3>
      <p class="mb-6 leading-relaxed">食事制限だけで痩せると、脂肪とともに筋肉も落ちてしまいます。その結果、体重は減っても「やつれた」印象になったり、リバウンドしやすい体質になります。美しく引き締まった体を作り、太りにくい体を維持するためには運動が不可欠です。</p>

      <div class="bg-orange-50 p-6 rounded-lg mt-8 border-l-4 border-orange-500">
        <p class="font-bold text-orange-800">最適なアプローチ</p>
        <p class="text-orange-900">まずは食事の見直しで無駄な摂取カロリーをカットし、同時に軽い筋トレを取り入れて代謝の低下を防ぐ。これが最短かつ健康的なルートです。</p>
      </div>
    `
  },
  {
    id: "signs-body-not-ready",
    title: "ダイエットを始める前に！体が痩せる準備できていない「7つのサイン」",
    excerpt: "無理に始めても失敗します。まずは自分の体の状態をチェックし、痩せやすい土台を作るためのポイント。",
    category: "健康管理",
    date: "2026.03.01",
    image: "https://images.unsplash.com/photo-1544367563-12123d8965cd?w=800&auto=format&fit=crop&q=60",
    content: `
      <h2 class="text-2xl font-bold mb-4 text-gray-800">体がSOSを出していませんか？</h2>
      <p class="mb-6 leading-relaxed">体が生命維持の危機を感じている状態で、さらにエネルギーを制限するダイエットを行うのは危険であり、逆効果です。以下のサインがある場合は、減量よりも体調回復を優先しましょう。</p>

      <ul class="space-y-4 mb-8">
        <li class="flex items-start"><span class="text-red-500 mr-2">●</span> <strong>慢性的な疲労感：</strong> 寝ても疲れが取れない。</li>
        <li class="flex items-start"><span class="text-red-500 mr-2">●</span> <strong>睡眠の質が悪い：</strong> 入眠困難や中途覚醒がある。</li>
        <li class="flex items-start"><span class="text-red-500 mr-2">●</span> <strong>消化機能の低下：</strong> 便秘や下痢を繰り返している。</li>
        <li class="flex items-start"><span class="text-red-500 mr-2">●</span> <strong>月経不順：</strong> ホルモンバランスが乱れている。</li>
        <li class="flex items-start"><span class="text-red-500 mr-2">●</span> <strong>極端な冷え性：</strong> 代謝機能が落ちている可能性。</li>
        <li class="flex items-start"><span class="text-red-500 mr-2">●</span> <strong>イライラが止まらない：</strong> メンタルが不安定。</li>
        <li class="flex items-start"><span class="text-red-500 mr-2">●</span> <strong>髪や肌のトラブル：</strong> 栄養不足のサイン。</li>
      </ul>

      <p class="leading-relaxed">これらのサインが出ている状態で無理な食事制限をすると、体は「飢餓状態」と判断し、逆に脂肪を溜め込もうとします。まずは、バランスの良い食事と休養で「痩せる土台」を整えることから始めましょう。</p>
    `
  },
  {
    id: "how-to-maintain-weight",
    title: "リバウンド知らず！痩せた後の体重をキープする「教えられていない秘訣」",
    excerpt: "痩せることよりも難しい「維持すること」。多くのダイエットプログラムが語らない、長期的な体型維持の極意。",
    category: "維持・習慣",
    date: "2026.03.01",
    image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&auto=format&fit=crop&q=60",
    content: `
      <h2 class="text-2xl font-bold mb-4 text-gray-800">ダイエットは「目標体重達成」で終わりではない</h2>
      <p class="mb-6 leading-relaxed">統計によると、ダイエット成功者の約8割が2年以内にリバウンドすると言われています。なぜでしょうか？それは、「ダイエット期間」と「通常期間」を分けて考えているからです。</p>

      <h3 class="text-xl font-bold mb-3 text-orange-600">セットポイント理論</h3>
      <p class="mb-6 leading-relaxed">体には、体重を一定に保とうとする機能（ホメオスタシス）があります。急激に体重を落とすと、脳はそれを「異常事態」と認識し、元の体重に戻そうと食欲を増やし、代謝を下げます。これを防ぐには、新しい体重を脳に「正常」と認識させる期間が必要です。</p>

      <h3 class="text-xl font-bold mb-3 text-orange-600">習慣化というゴール</h3>
      <p class="mb-6 leading-relaxed">リバウンドしない唯一の方法は、「頑張らなくても続けられる生活習慣」を身につけることです。特別な食事制限ではなく、「腹八分目」「野菜から食べる」「日常的によく動く」といった小さな習慣こそが、一生モノのスタイルを作ります。</p>

      <h3 class="text-xl font-bold mb-3 text-orange-600">体重計との付き合い方</h3>
      <p class="mb-6 leading-relaxed">維持期には、毎日体重を測る必要はありませんが、週に1回はチェックすることをお勧めします。「2kg増えたら調整する」といった自分なりのルールを持つことで、大きなリバウンドを未然に防ぐことができます。</p>
    `
  }
];