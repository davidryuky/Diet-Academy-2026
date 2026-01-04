import React from 'react';
import { Button } from '../components/Button';
import { Check, X } from 'lucide-react';

export const Pricing: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
            Escolha seu Caminho
          </h1>
          <p className="mt-5 max-w-xl mx-auto text-xl text-gray-500">
            A principal diferença está na isenção de exames. O Curso Especial garante a certificação na conclusão dos módulos.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          
          {/* Basic Course */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 hover:shadow-lg transition-shadow overflow-hidden">
            <div className="p-8">
              <h3 className="text-2xl font-bold text-gray-900">Curso Básico</h3>
              <p className="mt-4 text-gray-500">Para quem prefere fazer os exames finais externamente.</p>
              <div className="mt-8 flex items-baseline">
                <span className="text-4xl font-extrabold text-gray-900">R$ 598,00</span>
                <span className="ml-2 text-gray-500">único</span>
              </div>
              
              <ul className="mt-8 space-y-4">
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-green-500 mr-3" /> Material Didático Completo
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-green-500 mr-3" /> 5 Correções de Exercícios
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-green-500 mr-3" /> Suporte Ilimitado
                </li>
                <li className="flex items-center text-gray-400">
                  <X className="h-5 w-5 text-red-300 mr-3" /> Isenção de Exames Finais
                </li>
                <li className="flex items-center text-gray-400">
                  <X className="h-5 w-5 text-red-300 mr-3" /> Certificado Automático
                </li>
              </ul>

              <div className="mt-8 bg-yellow-50 p-4 rounded-lg text-sm text-yellow-800">
                Nota: Você precisará pagar taxas extras para realizar os exames nas associações certificadoras.
              </div>
            </div>
            <div className="p-8 bg-gray-50 border-t border-gray-100">
              <Button fullWidth variant="outline">Selecionar Básico</Button>
            </div>
          </div>

          {/* Special Course */}
          <div className="bg-white rounded-2xl shadow-xl border-2 border-orange-500 relative overflow-hidden transform md:-translate-y-4">
            <div className="absolute top-0 right-0 bg-orange-500 text-white text-xs font-bold px-3 py-1 uppercase tracking-wide">
              Recomendado
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-bold text-gray-900">Curso Especial</h3>
              <p className="mt-4 text-gray-500">A rota mais rápida e garantida. 100% de aprovação.</p>
              <div className="mt-8 flex items-baseline">
                <span className="text-4xl font-extrabold text-gray-900">R$ 798,00</span>
                <span className="ml-2 text-gray-500">único</span>
              </div>
              
              <ul className="mt-8 space-y-4">
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-green-500 mr-3" /> Material Didático Completo
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-green-500 mr-3" /> 5 Correções de Exercícios
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-green-500 mr-3" /> Suporte Ilimitado
                </li>
                <li className="flex items-center font-bold text-gray-900">
                  <Check className="h-5 w-5 text-orange-500 mr-3" /> Isenção de Exames Finais
                </li>
                <li className="flex items-center font-bold text-gray-900">
                  <Check className="h-5 w-5 text-orange-500 mr-3" /> Certificado Automático na Graduação
                </li>
              </ul>

              <div className="mt-8 bg-green-50 p-4 rounded-lg text-sm text-green-800">
                Economia Garantida: Não há taxas extras de exames. Você se forma ao entregar o trabalho final.
              </div>
            </div>
            <div className="p-8 bg-gray-50 border-t border-gray-100">
              <Button fullWidth variant="primary">Selecionar Especial</Button>
            </div>
          </div>

        </div>

        <div className="mt-16 text-center text-gray-500 text-sm">
          <p>Pagamento aceito via Cartão de Crédito, Boleto, PIX e PayPal. Parcelamento em até 12x.</p>
        </div>
      </div>
    </div>
  );
};