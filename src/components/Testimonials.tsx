'use client'

import { Star, Quote } from 'lucide-react'

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Maria Silva',
      role: 'Dona de Boutique',
      location: 'São Paulo, SP',
      content: 'O MontShop transformou completamente a gestão da minha loja. Consegui reduzir em 60% o tempo gasto com controle de estoque e as vendas aumentaram 35% em apenas 3 meses!',
      rating: 5,
      avatar: '👩‍💼',
    },
    {
      name: 'João Santos',
      role: 'Gerente de Loja de Eletrônicos',
      location: 'Rio de Janeiro, RJ',
      content: 'A emissão automática de NFC-e me poupou horas de trabalho. O sistema é super intuitivo e o suporte é excepcional. Recomendo para todos os lojistas!',
      rating: 5,
      avatar: '👨‍💼',
    },
    {
      name: 'Ana Costa',
      role: 'Proprietária de Farmácia',
      location: 'Belo Horizonte, MG',
      content: 'Melhor investimento que fiz para minha farmácia. Os relatórios detalhados me ajudam a tomar decisões assertivas todos os dias. Vale cada centavo!',
      rating: 5,
      avatar: '👩‍⚕️',
    },
    {
      name: 'Carlos Oliveira',
      role: 'Dono de Supermercado',
      location: 'Curitiba, PR',
      content: 'Testei vários sistemas antes do MontShop. Nenhum se compara em custo-benefício. É completo, rápido e está sempre evoluindo com novos recursos.',
      rating: 5,
      avatar: '👨‍🍳',
    },
    {
      name: 'Patricia Lima',
      role: 'Gerente de Pet Shop',
      location: 'Porto Alegre, RS',
      content: 'O aplicativo mobile é sensacional! Consigo acompanhar as vendas mesmo quando não estou na loja. Minha equipe adora a facilidade do sistema.',
      rating: 5,
      avatar: '👩‍🔬',
    },
    {
      name: 'Roberto Ferreira',
      role: 'Proprietário de Loja de Calçados',
      location: 'Salvador, BA',
      content: 'Instalamos em 3 filiais e a integração funcionou perfeitamente. O controle centralizado de estoque foi um divisor de águas para nosso negócio!',
      rating: 5,
      avatar: '👨‍💻',
    },
  ]

  return (
    <section id="depoimentos" className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-primary-50/30 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block bg-primary-100 text-primary-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            DEPOIMENTOS
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            O que nossos clientes{' '}
            <span className="gradient-text">dizem sobre nós</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Mais de 5.000 lojistas confiam no MontShop para gerenciar seus negócios
          </p>
          
          {/* Rating Summary */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="text-yellow-400 fill-yellow-400" size={24} />
              ))}
            </div>
            <div className="text-left">
              <div className="text-2xl font-bold text-gray-900">4.9/5.0</div>
              <div className="text-sm text-gray-600">Baseado em 1.250+ avaliações</div>
            </div>
          </div>
        </div>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="relative bg-white p-4 sm:p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <Quote className="absolute top-3 sm:top-4 right-3 sm:right-4 text-primary-100 w-8 h-8 sm:w-12 sm:h-12" size={48} />
              
              <div className="flex items-center gap-1 mb-3 sm:mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="text-yellow-400 fill-yellow-400 w-3 h-3 sm:w-4 sm:h-4" size={16} />
                ))}
              </div>

              <p className="text-sm sm:text-base text-gray-700 mb-4 sm:mb-6 relative z-10">"{testimonial.content}"</p>

              <div className="flex items-center gap-2 sm:gap-3 pt-3 sm:pt-4 border-t border-gray-100">
                <div className="text-3xl sm:text-4xl flex-shrink-0">{testimonial.avatar}</div>
                <div className="min-w-0 flex-1">
                  <div className="font-bold text-sm sm:text-base text-gray-900">{testimonial.name}</div>
                  <div className="text-xs sm:text-sm text-gray-600">{testimonial.role}</div>
                  <div className="text-xs text-gray-500">{testimonial.location}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Badges */}
        <div className="mt-12 sm:mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8 text-center">
          <div>
            <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary-600 mb-1 sm:mb-2">5.000+</div>
            <div className="text-xs sm:text-sm text-gray-600">Lojas Ativas</div>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary-600 mb-1 sm:mb-2">98%</div>
            <div className="text-xs sm:text-sm text-gray-600">Satisfação</div>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary-600 mb-1 sm:mb-2">1M+</div>
            <div className="text-xs sm:text-sm text-gray-600">NFCs Emitidas</div>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary-600 mb-1 sm:mb-2">24/7</div>
            <div className="text-xs sm:text-sm text-gray-600">Suporte</div>
          </div>
        </div>
      </div>
    </section>
  )
}

