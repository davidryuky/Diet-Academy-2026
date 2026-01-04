import React from 'react';
import { Button } from '../components/Button';
import { Smartphone, Book, Mail, Video } from 'lucide-react';

export const Methods: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="py-16 text-center max-w-4xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">Como você quer estudar?</h1>
        <p className="text-xl text-gray-500">
          Adaptamos o ensino ao seu estilo de vida. Escolha entre a flexibilidade do digital ou o conforto do papel.
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
              <h2 className="text-2xl font-bold">100% Online (E-learning)</h2>
            </div>
            <p className="text-gray-600 mb-6">
              Ideal para quem quer rapidez e estudar em qualquer lugar. Acesse pelo celular, tablet ou PC.
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center text-sm text-gray-700">✅ Acesso imediato</li>
              <li className="flex items-center text-sm text-gray-700">✅ Menor custo</li>
              <li className="flex items-center text-sm text-gray-700">✅ Envio de tarefas digital</li>
              <li className="flex items-center text-sm text-gray-700">✅ Duração média: 1 mês</li>
            </ul>
            <img 
              src="https://picsum.photos/seed/mobilelearning/600/300" 
              alt="Estudo no celular" 
              className="rounded-lg w-full object-cover h-48 mb-6"
            />
          </div>

          {/* Paper Method */}
          <div className="border border-gray-200 rounded-2xl p-8 hover:shadow-lg transition">
             <div className="flex items-center mb-6">
              <div className="p-3 bg-yellow-100 rounded-lg text-yellow-600 mr-4">
                <Book size={32} />
              </div>
              <h2 className="text-2xl font-bold">Híbrido (Apostilas Físicas)</h2>
            </div>
            <p className="text-gray-600 mb-6">
              Para quem gosta de grifar, escrever e ter o material físico em mãos. Enviamos tudo para sua casa.
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center text-sm text-gray-700">✅ Material impresso de alta qualidade</li>
              <li className="flex items-center text-sm text-gray-700">✅ Menos tempo de tela</li>
              <li className="flex items-center text-sm text-gray-700">✅ Correção via correio ou digital</li>
              <li className="flex items-center text-sm text-gray-700">✅ Duração média: 2 meses</li>
            </ul>
             <img 
              src="https://picsum.photos/seed/books/600/300" 
              alt="Livros e cadernos" 
              className="rounded-lg w-full object-cover h-48 mb-6"
            />
          </div>

        </div>
      </section>

      {/* Support System */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Sistema de Suporte</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="flex">
              <Mail className="flex-shrink-0 h-8 w-8 text-orange-500 mt-1 mr-4" />
              <div>
                <h3 className="text-xl font-bold mb-2">Perguntas Ilimitadas</h3>
                <p className="text-gray-600">Não entendeu algo? Pergunte quantas vezes quiser aos tutores através do portal do aluno.</p>
              </div>
            </div>
            <div className="flex">
              <Video className="flex-shrink-0 h-8 w-8 text-orange-500 mt-1 mr-4" />
              <div>
                <h3 className="text-xl font-bold mb-2">Vídeos Complementares</h3>
                <p className="text-gray-600">Acesso a vídeos explicativos para os movimentos do curso Shape-up Instructor.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 max-w-3xl mx-auto px-4">
        <h2 className="text-2xl font-bold mb-8">Dúvidas Frequentes</h2>
        <div className="space-y-6">
          <div className="border-b pb-4">
            <h3 className="font-bold text-lg mb-2">Preciso ter conhecimento prévio?</h3>
            <p className="text-gray-600">Não. 92% dos nossos alunos são iniciantes. O curso começa do básico.</p>
          </div>
          <div className="border-b pb-4">
            <h3 className="font-bold text-lg mb-2">O certificado é reconhecido?</h3>
            <p className="text-gray-600">Sim, nossas certificações são aceitas em associações de fitness e permitidas para atuação como consultor livre.</p>
          </div>
          <div className="border-b pb-4">
            <h3 className="font-bold text-lg mb-2">Quanto tempo tenho para terminar?</h3>
            <p className="text-gray-600">O prazo padrão é de 6 meses, mas a maioria termina em 1 ou 2 meses. Você dita o ritmo.</p>
          </div>
        </div>
      </section>
    </div>
  );
};