'use client'

import { Check, Zap, Crown, Rocket } from 'lucide-react'

export default function Pricing() {
  const plans = [
    {
      name: 'Basic',
      icon: Zap,
      price: '49,90',
      description: 'Perfeito para pequenos negócios começando',
      featured: false,
      features: [
        'PDV completo com busca rápida',
        'Controle de estoque básico',
        'Até 250 produtos cadastrados',
        '1 vendedor',
        'Até 5 contas a pagar',
        'Cadastro de clientes ilimitado',
        'Relatórios de vendas',
        'Backup automático diário',
        'Suporte via WhatsApp',
      ],
      cta: 'Começar Grátis',
      highlight: false,
    },
    {
      name: 'Plus',
      icon: Crown,
      price: '139,90',
      description: 'Para lojas em crescimento',
      featured: true,
      features: [
        'Tudo do plano Basic',
        'Até 800 produtos cadastrados',
        '2 vendedores',
        'Até 15 contas a pagar',
        '💬 Mensagens automáticas WhatsApp para cobrança de vendas a prazo',
        'Parcelamento de vendas',
        'Sistema de comissões',
        'Relatórios avançados',
        'Web, Desktop e Mobile (Android e iOS)',
        'Suporte prioritário via WhatsApp',
      ],
      cta: 'Começar Grátis',
      highlight: true,
    },
    {
      name: 'Pro',
      icon: Rocket,
      price: '289,90',
      description: 'Para empresas que querem máximo potencial',
      featured: false,
      features: [
        'Tudo do plano Plus',
        'Produtos ilimitados',
        'Vendedores ilimitados',
        'Contas a pagar ilimitadas',
        '🌐 Catálogo digital público personalizado na web',
        'Link único para seus clientes navegarem',
        'Busca e filtros avançados de produtos',
        'Botão WhatsApp integrado no catálogo',
        '📸 Upload de fotos dos produtos',
        '💬 Mensagens automáticas de cobrança de vendas a prazo',
        'Relatórios executivos',
        'Suporte VIP 24/7 via WhatsApp',
      ],
      cta: 'Começar Grátis',
      highlight: false,
    },
  ]

  return (
    <section id="planos" className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block bg-primary-100 text-primary-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            PLANOS E PREÇOS
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Escolha o plano ideal para{' '}
            <span className="gradient-text">seu negócio</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-6">
            Teste grátis por 7 dias. Sem cartão de crédito. Cancele quando quiser.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
                  className={`relative rounded-2xl sm:rounded-3xl p-6 sm:p-8 transition-all duration-300 animate-fade-in ${
                plan.featured
                  ? 'bg-gradient-to-b from-primary-600 to-accent-600 text-white shadow-2xl lg:scale-105 lg:-mt-4'
                  : 'bg-white border-2 border-gray-200 hover:border-primary-300 hover:shadow-xl'
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {plan.featured && (
                <div className="absolute -top-4 sm:-top-5 left-1/2 transform -translate-x-1/2">
                  <div className="bg-accent-500 text-white px-3 sm:px-4 py-0.5 sm:py-1 rounded-full text-xs sm:text-sm font-bold shadow-lg">
                    MAIS POPULAR
                  </div>
                </div>
              )}

              <div className="text-center mb-4 sm:mb-6">
                <div className={`inline-flex p-2 sm:p-3 rounded-xl sm:rounded-2xl mb-3 sm:mb-4 ${
                  plan.featured ? 'bg-white/20' : 'bg-primary-100'
                }`}>
                  <plan.icon className={`${plan.featured ? 'text-white' : 'text-primary-600'} w-6 h-6 sm:w-8 sm:h-8`} />
                </div>
                <h3 className={`text-xl sm:text-2xl font-bold mb-1 sm:mb-2 ${plan.featured ? 'text-white' : 'text-gray-900'}`}>
                  {plan.name}
                </h3>
                <p className={`text-xs sm:text-sm mb-3 sm:mb-4 ${plan.featured ? 'text-white/90' : 'text-gray-600'}`}>
                  {plan.description}
                </p>
                <div className="flex items-baseline justify-center gap-1 sm:gap-2">
                  <span className={`text-3xl sm:text-4xl md:text-5xl font-bold ${plan.featured ? 'text-white' : 'text-gray-900'}`}>
                    R$ {plan.price}
                  </span>
                  <span className={`text-sm sm:text-base ${plan.featured ? 'text-white/80' : 'text-gray-600'}`}>/mês</span>
                </div>
              </div>

              <ul className="space-y-2 sm:space-y-3 md:space-y-4 mb-6 sm:mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-2 sm:gap-3">
                    <Check
                      className={`flex-shrink-0 mt-0.5 w-4 h-4 sm:w-5 sm:h-5 ${
                        plan.featured ? 'text-white' : 'text-green-500'
                      }`}
                    />
                    <span className={`text-xs sm:text-sm ${plan.featured ? 'text-white' : 'text-gray-700'}`}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <a
                href={`https://wa.me/5548998482590?text=${encodeURIComponent(`Olá! Tenho interesse no plano ${plan.name} do MontShop e gostaria de começar o teste gratuito de 7 dias.`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className={`block w-full text-center py-3 sm:py-4 rounded-full font-semibold text-sm sm:text-base transition-all transform hover:scale-105 ${
                  plan.featured
                    ? 'bg-white text-primary-600 hover:bg-gray-100 shadow-lg'
                    : 'bg-primary-600 text-white hover:bg-primary-700 shadow-lg'
                }`}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-4">
            Precisa de um plano personalizado para sua empresa?
          </p>
          <a
            href="#contato"
            className="inline-flex items-center gap-2 text-primary-600 font-semibold hover:text-primary-700 transition-colors"
          >
            Fale com nosso time de vendas →
          </a>
        </div>
      </div>
    </section>
  )
}

