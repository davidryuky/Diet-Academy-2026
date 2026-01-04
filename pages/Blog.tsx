import React from 'react';
import { useNavigate } from 'react-router-dom';
import { blogPosts } from '../data/blogData';
import { Button } from '../components/common/Button';

export const Blog: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* Header Banner */}
      <div className="bg-white py-16 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">公式ブログ</h1>
          <p className="text-gray-500">ダイエット、栄養、健康に関する最新情報やプロの知識をお届けします。</p>
        </div>
      </div>

      {/* Blog Grid */}
      <div className="max-w-7xl mx-auto px-4 mt-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <div 
              key={post.id} 
              className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden cursor-pointer flex flex-col h-full border border-gray-100 group"
              onClick={() => navigate(`/blog/${post.id}`)}
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-sm">
                  {post.category}
                </div>
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <div className="text-xs text-gray-400 mb-2">{post.date}</div>
                <h2 className="text-lg font-bold text-gray-800 mb-3 leading-snug group-hover:text-orange-600 transition-colors">
                  {post.title}
                </h2>
                <p className="text-sm text-gray-600 mb-4 line-clamp-3 flex-1">
                  {post.excerpt}
                </p>
                <div className="mt-auto pt-4 border-t border-gray-50 text-right">
                  <span className="text-sm text-orange-500 font-bold group-hover:underline">続きを読む &rarr;</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Categories (Optional sidebar-like section could go here, for now simple bottom navigation) */}
        <div className="mt-16 text-center">
          <Button variant="outline" onClick={() => navigate('/courses')}>
            講座一覧に戻る
          </Button>
        </div>
      </div>
    </div>
  );
};