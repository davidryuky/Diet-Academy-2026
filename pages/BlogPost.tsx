import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { blogPosts } from '../data/blogData';
import { Button } from '../components/common/Button';
import { ChevronLeft, Calendar, Tag } from 'lucide-react';

export const BlogPost: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const post = blogPosts.find(p => p.id === id);

  if (!post) {
    return (
      <div className="min-h-screen bg-white flex flex-col items-center justify-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">記事が見つかりませんでした</h2>
        <Button onClick={() => navigate('/blog')}>ブログ一覧に戻る</Button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      
      {/* Hero Image Area */}
      <div className="relative h-[400px] w-full bg-gray-800">
        <img src={post.image} alt={post.title} className="w-full h-full object-cover opacity-60" />
        <div className="absolute inset-0 flex items-end">
            <div className="max-w-4xl mx-auto px-4 w-full pb-12">
                 <div className="inline-flex items-center bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full mb-4">
                    <Tag size={12} className="mr-1" />
                    {post.category}
                 </div>
                 <h1 className="text-3xl md:text-4xl font-bold text-white leading-tight mb-4 shadow-sm">
                    {post.title}
                 </h1>
                 <div className="flex items-center text-gray-200 text-sm">
                    <Calendar size={14} className="mr-2" />
                    {post.date}
                 </div>
            </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 -mt-8 relative z-10">
        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-sm border border-gray-100">
            
            {/* Breadcrumb / Back */}
            <button 
                onClick={() => navigate('/blog')}
                className="flex items-center text-sm text-gray-500 hover:text-orange-500 mb-8 transition-colors"
            >
                <ChevronLeft size={16} className="mr-1" />
                ブログ一覧に戻る
            </button>

            {/* Post Content */}
            <div 
                className="prose prose-lg max-w-none text-gray-700 prose-headings:font-bold prose-h2:text-2xl prose-h3:text-xl prose-p:leading-8 prose-orange"
                dangerouslySetInnerHTML={{ __html: post.content }}
            />

            {/* Post Footer / CTA */}
            <div className="mt-12 pt-8 border-t border-gray-100">
                <div className="bg-orange-50 rounded-xl p-8 text-center">
                    <h3 className="text-xl font-bold text-gray-800 mb-4">
                        ダイエットの正しい知識を、<br/>一生モノのスキルにしませんか？
                    </h3>
                    <p className="text-gray-600 mb-6 text-sm">
                        ダイエットアドバイザー資格講座では、栄養学からメンタルケアまで、<br/>
                        プロとして活躍できる知識を体系的に学べます。
                    </p>
                    <div className="flex justify-center gap-4">
                        <Button variant="orange" onClick={() => navigate('/courses')}>
                            講座の詳細を見る
                        </Button>
                        <Button variant="outline" onClick={() => navigate('/seekers')}>
                            無料資料請求
                        </Button>
                    </div>
                </div>
            </div>

        </div>
      </div>
    </div>
  );
};