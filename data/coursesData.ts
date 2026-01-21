import { GraduationCap, Award, Crown } from 'lucide-react';

export interface CourseDetail {
  id: string;
  level: string;
  name: string;
  subtitle: string;
  description: string;
  target: string;
  price: string;
  period: string;
  features: string[];
  color: string;
  accent: string;
  icon: any;
  path: string;
}

export const courses: CourseDetail[] = [
  {
    id: 'regular',
    level: 'レギュラーコース',
    name: 'Diet Master',
    subtitle: 'ダイエット基礎実践認定',
    description: '健康的で安全な減量方法や、栄養学の基礎を体系的に学びます。自分自身や家族の健康管理に。',
    target: '個人・初心者向け',
    price: '59,800',
    period: '標準2ヶ月 (最短1ヶ月)',
    features: ['基礎栄養学の習得', 'リバウンドしない食事法', '日常的な運動習慣化', '認定証授与'],
    color: 'bg-orange-500',
    accent: 'text-orange-500',
    icon: GraduationCap,
    path: '/courses/regular'
  },
  {
    id: 'senior',
    level: 'シニアコース',
    name: 'Diet Coaching Master',
    subtitle: 'ダイエット指導者認定',
    description: 'カウンセリング技術や指導メソッドを習得。他者へのアドバイスやコーチングが可能になります。',
    target: '講師・トレーナー向け',
    price: '84,800',
    period: '標準3ヶ月 (最短1.5ヶ月)',
    features: ['コーチング心理学', '献立作成指導技術', '停滞期脱出メソッド', '指導者資格授与'],
    color: 'bg-teal-600',
    accent: 'text-teal-600',
    icon: Award,
    path: '/courses/senior'
  },
  {
    id: 'professional',
    level: 'プロフェッショナルコース',
    name: 'Diet Professional Master',
    subtitle: 'ダイエットマネジメント・運営責任者認定',
    description: 'ビジネスとしてのダイエット事業運営、スクール開設、運営責任者としての高度なスキルを証明。',
    target: '独立・開業・経営者向け',
    price: '128,000',
    period: '標準4ヶ月 (最短2ヶ月)',
    features: ['店舗・スクール運営', 'リスクマネジメント', 'マーケティング戦略', 'マスター資格授与'],
    color: 'bg-indigo-700',
    accent: 'text-indigo-700',
    icon: Crown,
    path: '/courses/professional'
  }
];