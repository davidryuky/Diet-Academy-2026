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
          alt="Instrutor fitness" 
          className="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-40"
        />
        <div className="relative max-w-7xl mx-auto px-4 h-full flex items-center">
          <div className="max-w-2xl">
            <h1 className="text-4xl font-bold text-white mb-4">Carreira Profissional em Fitness</h1>
            <p className="text-xl text-orange-100">
              Torne-se uma autoridade em emagrecimento e consultoria de imagem. Obtenha certificação dupla e comece a atuar.
            </p>
          </div>
        </div>
      </div>

      {/* Why Choose Section */}
      <section className="py-16 max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Por que escolher a Diet Academy?</h2>
          <p className="text-gray-500 mt-2">Diferenciais que impulsionam sua carreira</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center p-6 border rounded-lg hover:shadow-lg transition">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-orange-100 text-orange-600 mb-4">
              <Award size={32} />
            </div>
            <h3 className="text-lg font-bold mb-2">Dupla Certificação</h3>
            <p className="text-sm text-gray-600">Diet Advisor + Shape-up Instructor em um único curso.</p>
          </div>
          <div className="text-center p-6 border rounded-lg hover:shadow-lg transition">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-orange-100 text-orange-600 mb-4">
              <ShieldCheck size={32} />
            </div>
            <h3 className="text-lg font-bold mb-2">Garantia de Aprovação</h3>
            <p className="text-sm text-gray-600">Com o "Curso Especial", você é isento de exames finais ao completar as tarefas.</p>
          </div>
          <div className="text-center p-6 border rounded-lg hover:shadow-lg transition">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-orange-100 text-orange-600 mb-4">
              <Briefcase size={32} />
            </div>
            <h3 className="text-lg font-bold mb-2">Suporte Comercial</h3>
            <p className="text-sm text-gray-600">Aprenda não só a técnica, mas como abrir seu consultório ou atuar online.</p>
          </div>
          <div className="text-center p-6 border rounded-lg hover:shadow-lg transition">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-orange-100 text-orange-600 mb-4">
              <TrendingUp size={32} />
            </div>
            <h3 className="text-lg font-bold mb-2">Mercado em Alta</h3>
            <p className="text-sm text-gray-600">A demanda por profissionais de saúde preventiva nunca foi tão alta.</p>
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
                alt="Consultoria" 
                className="rounded-xl shadow-2xl"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6 text-orange-500">Onde você poderá atuar?</h2>
              <ul className="space-y-4">
                <li className="flex items-center border-b border-gray-700 pb-2">
                  <span className="w-2 h-2 bg-orange-500 rounded-full mr-3"></span>
                  <span>Consultoria de emagrecimento online</span>
                </li>
                <li className="flex items-center border-b border-gray-700 pb-2">
                  <span className="w-2 h-2 bg-orange-500 rounded-full mr-3"></span>
                  <span>Academias e Estúdios de Fitness</span>
                </li>
                <li className="flex items-center border-b border-gray-700 pb-2">
                  <span className="w-2 h-2 bg-orange-500 rounded-full mr-3"></span>
                  <span>Spas e Centros de Estética</span>
                </li>
                <li className="flex items-center border-b border-gray-700 pb-2">
                  <span className="w-2 h-2 bg-orange-500 rounded-full mr-3"></span>
                  <span>Palestras e Workshops de Saúde</span>
                </li>
                <li className="flex items-center border-b border-gray-700 pb-2">
                  <span className="w-2 h-2 bg-orange-500 rounded-full mr-3"></span>
                  <span>Criação de conteúdo digital sobre saúde</span>
                </li>
              </ul>
              <div className="mt-8">
                <Button variant="primary" onClick={() => navigate('/pricing')}>Investir na Minha Carreira</Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Curriculum Highlight */}
      <section className="py-16 max-w-5xl mx-auto px-4">
        <div className="bg-orange-50 rounded-2xl p-8 md:p-12 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Do Zero ao Profissional em 2 Meses
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Nosso método híbrido permite que você estude online ou com material físico. 
            92% dos nossos alunos começaram sem conhecimento prévio e hoje atuam na área.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button onClick={() => navigate('/courses')}>Ver Grade Curricular</Button>
            <Button variant="outline" onClick={() => navigate('/methods')}>Entender o Método</Button>
          </div>
        </div>
      </section>
    </div>
  );
};