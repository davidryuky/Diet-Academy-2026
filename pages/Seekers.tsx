import React from 'react';
import { Button } from '../components/Button';
import { useNavigate } from 'react-router-dom';
import { Heart, Scale, Smile, Clock } from 'lucide-react';

export const Seekers: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white">
      {/* Header Banner */}
      <div className="relative bg-green-600 h-80">
        <img 
          src="https://picsum.photos/seed/healthyfood/1600/600" 
          alt="Alimentação saudável" 
          className="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-40"
        />
        <div className="relative max-w-7xl mx-auto px-4 h-full flex items-center">
          <div className="max-w-2xl">
            <h1 className="text-4xl font-bold text-white mb-4">Saúde e Bem-estar para Você</h1>
            <p className="text-xl text-green-100">
              Não é apenas sobre perder peso. É sobre ganhar vida, energia e entender o que seu corpo realmente precisa.
            </p>
          </div>
        </div>
      </div>

      {/* Benefits Grid */}
      <section className="py-16 max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="p-6 bg-white rounded-xl shadow-md border border-gray-100 hover:border-green-300 transition-colors">
            <Scale className="h-10 w-10 text-green-600 mb-4" />
            <h3 className="text-lg font-bold mb-2">Controle de Peso</h3>
            <p className="text-gray-600 text-sm">Aprenda a ciência por trás do emagrecimento saudável sem dietas malucas.</p>
          </div>
          <div className="p-6 bg-white rounded-xl shadow-md border border-gray-100 hover:border-green-300 transition-colors">
            <Heart className="h-10 w-10 text-green-600 mb-4" />
            <h3 className="text-lg font-bold mb-2">Saúde Familiar</h3>
            <p className="text-gray-600 text-sm">Crie planos alimentares nutritivos para seus filhos e parceiros.</p>
          </div>
          <div className="p-6 bg-white rounded-xl shadow-md border border-gray-100 hover:border-green-300 transition-colors">
            <Smile className="h-10 w-10 text-green-600 mb-4" />
            <h3 className="text-lg font-bold mb-2">Autoestima</h3>
            <p className="text-gray-600 text-sm">Sinta-se bem no espelho e recupere a confiança com resultados reais.</p>
          </div>
          <div className="p-6 bg-white rounded-xl shadow-md border border-gray-100 hover:border-green-300 transition-colors">
            <Clock className="h-10 w-10 text-green-600 mb-4" />
            <h3 className="text-lg font-bold mb-2">No Seu Tempo</h3>
            <p className="text-gray-600 text-sm">Estude apenas 30 minutos por dia, em casa, no seu próprio ritmo.</p>
          </div>
        </div>
      </section>

      {/* Content Preview */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">O que você vai aprender?</h2>
            <ul className="space-y-4">
              {[
                "Mecanismos da obesidade e emagrecimento",
                "Nutrição básica e avançada",
                "Planejamento de cardápios semanais",
                "Exercícios simples para fazer em casa (Shape-up)",
                "Psicologia da alimentação"
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-green-100 flex items-center justify-center text-green-600 font-bold text-xs mr-3 mt-0.5">
                    {index + 1}
                  </div>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <Button onClick={() => navigate('/courses')}>Ver Detalhes do Curso</Button>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 bg-green-200 rounded-xl transform rotate-2"></div>
            <img 
              src="https://picsum.photos/seed/yoga/800/600" 
              alt="Mulher praticando yoga" 
              className="relative rounded-xl shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-16 max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-2xl font-bold mb-8">Histórias de Sucesso</h2>
        <div className="bg-white p-8 rounded-2xl shadow-lg relative">
          <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
            <img 
              src="https://picsum.photos/seed/person1/100/100" 
              alt="Aluna" 
              className="w-16 h-16 rounded-full border-4 border-white shadow-md"
            />
          </div>
          <p className="mt-6 text-gray-600 italic text-lg">
            "Comecei o curso para perder peso após a gravidez. Não só perdi 15kg em 6 meses, como mudei a alimentação de toda a minha casa. O material é muito fácil de entender, mesmo para quem não é da área."
          </p>
          <div className="mt-4 font-bold text-gray-900">Mariana S.</div>
          <div className="text-sm text-gray-500">Aluna do curso de Diet Advisor</div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-green-600 py-12 text-center text-white">
        <h2 className="text-3xl font-bold mb-4">Comece sua transformação hoje</h2>
        <p className="mb-8 max-w-2xl mx-auto">
          Inscreva-se agora e receba acesso imediato ao material didático.
        </p>
        <Button variant="primary" size="lg" className="bg-white text-green-700 hover:bg-gray-100" onClick={() => navigate('/pricing')}>
          Ver Planos e Preços
        </Button>
      </section>
    </div>
  );
};