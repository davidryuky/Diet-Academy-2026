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
          <h1 className="text-4xl font-bold text-gray-900">Nossas Certificações</h1>
          <p className="mt-4 text-xl text-gray-500">
            Um currículo completo desenvolvido por nutricionistas e especialistas em fitness.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12">
          
          {/* Certification 1 */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200">
            <div className="bg-green-600 p-6 flex items-center justify-between text-white">
              <h2 className="text-2xl font-bold">Diet Advisor</h2>
              <BookOpen size={32} />
            </div>
            <div className="p-8">
              <p className="text-gray-600 mb-6">
                Torne-se um especialista em aconselhamento dietético. Aprenda a criar estratégias nutricionais baseadas em evidências para diferentes tipos de metabolismo e estilos de vida.
              </p>
              
              <h3 className="font-bold text-gray-900 mb-3 uppercase text-sm tracking-wide">O que você aprende:</h3>
              <ul className="space-y-2 mb-8">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  <span>Fundamentos da nutrição e metabolismo</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  <span>Cálculo de TMB e necessidades calóricas</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  <span>Psicologia do comportamento alimentar</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  <span>Dietas para patologias específicas</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Certification 2 */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200">
            <div className="bg-orange-500 p-6 flex items-center justify-between text-white">
              <h2 className="text-2xl font-bold">Shape-up Instructor</h2>
              <Activity size={32} />
            </div>
            <div className="p-8">
              <p className="text-gray-600 mb-6">
                Complemente o conhecimento nutricional com prescrição de exercícios para modelagem corporal. Focado em resultados estéticos e funcionais.
              </p>
              
              <h3 className="font-bold text-gray-900 mb-3 uppercase text-sm tracking-wide">O que você aprende:</h3>
              <ul className="space-y-2 mb-8">
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">•</span>
                  <span>Anatomia muscular e biomecânica básica</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">•</span>
                  <span>Treinos para queima de gordura vs. hipertrofia</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">•</span>
                  <span>Exercícios funcionais em casa</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">•</span>
                  <span>Postura e correção de movimentos</span>
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
              alt="Material didático" 
              className="rounded-xl shadow-lg"
            />
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <Button size="lg" onClick={() => navigate('/pricing')}>Ver Opções de Matrícula</Button>
        </div>
      </div>
    </div>
  );
};