'use client'

import { useState } from 'react'
import { ChevronDown, HelpCircle } from 'lucide-react'

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs = [
    {
      question: 'Como funciona o período de teste gratuito?',
      answer: 'Você tem 7 dias para testar o Sistema Montshop gratuitamente, sem precisar cadastrar cartão de crédito. Durante esse período, você terá acesso completo a todos os recursos do plano escolhido. Se decidir continuar, basta fazer o cadastro do pagamento ao final do período de teste.',
    },
    {
      question: 'Posso mudar de plano depois?',
      answer: 'Sim! Você pode fazer upgrade ou downgrade do seu plano a qualquer momento. As mudanças são aplicadas imediatamente e o valor é ajustado proporcionalmente no próximo pagamento. Nossa equipe de suporte está sempre disponível para ajudar com essas alterações.',
    },
    {
      question: 'Como funciona a emissão de NFC-e?',
      answer: 'A emissão de NFC-e é totalmente integrada e automática. Você configura uma vez com seus dados fiscais, certificado digital e integração com a Focus NFe. Todas as notas são emitidas automaticamente após cada venda e enviadas por email para o cliente. O sistema se conecta diretamente com a SEFAZ do seu estado.',
    },
    {
      question: 'Meus dados ficam seguros?',
      answer: 'Absolutamente! Utilizamos criptografia de ponta (SSL/TLS) para todas as comunicações e armazenamento de dados. Realizamos backup automático diário de todas as informações. Nossos servidores são hospedados em data centers certificados com redundância e alta disponibilidade.',
    },
    {
      question: 'Preciso instalar algum programa?',
      answer: 'Não! O Sistema Montshop funciona 100% online através do navegador. Você também pode usar nosso aplicativo desktop e mobile para Android e iOS. Para impressoras térmicas não fiscais, você pode configurar uma impressora compartilhada na sua rede local.',
    },
    {
      question: 'Como funciona o suporte?',
      answer: 'Oferecemos suporte via WhatsApp para todos os planos. O plano Basic tem suporte padrão via WhatsApp. Os planos Plus e Pro têm suporte prioritário via WhatsApp. Todas as respostas são rápidas e detalhadas. Também disponibilizamos documentação completa sobre todas as funcionalidades do sistema.',
    },
    {
      question: 'O que são os limites de produtos e vendedores?',
      answer: 'Cada plano tem limites específicos: Basic permite até 250 produtos e 1 vendedor. Plus permite até 800 produtos e 2 vendedores. O plano Pro tem produtos e vendedores ilimitados. A quantidade de clientes cadastrados é ilimitada em todos os planos.',
    },
    {
      question: 'Como funciona o sistema de mensagens automáticas de cobrança?',
      answer: 'O sistema detecta automaticamente quando uma venda a prazo vence e envia uma mensagem personalizada via WhatsApp para o cliente. Disponível nos planos Plus e Pro, aumenta significativamente o índice de recebimento.',
    },
    {
      question: 'O que é o catálogo digital público?',
      answer: 'É uma página web personalizada exclusiva para sua loja com link único. Seus clientes podem navegar todos os produtos, ver preços, estoques disponíveis, buscar e filtrar. Inclui botão de WhatsApp para facilitar pedidos. Disponível apenas no plano Pro, transforma sua loja em uma vitrine online profissional.',
    },
    {
      question: 'Quais funcionalidades são exclusivas de cada plano?',
      answer: 'O plano Plus e Pro incluem mensagens automáticas de cobrança via WhatsApp para vendas a prazo. Apenas o plano Pro inclui catálogo público personalizado na web, com link único para seus clientes navegarem produtos e fazer pedidos. Todas as outras funcionalidades (PDV, estoque, NFC-e, relatórios, acesso web/desktop/mobile) estão disponíveis em todos os planos.',
    },
    {
      question: 'Posso cancelar quando quiser?',
      answer: 'Sim, não há fidelidade. Você pode cancelar sua assinatura a qualquer momento diretamente no painel de controle. Ao cancelar, você ainda terá acesso aos recursos até o final do período já pago. Recomendamos fazer backup dos seus dados antes do cancelamento.',
    },
  ]

  return (
    <section id="faq" className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary-100 text-primary-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <HelpCircle size={16} />
            PERGUNTAS FREQUENTES
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Tire suas <span className="gradient-text">dúvidas</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600">
            Tudo que você precisa saber sobre o Sistema Montshop
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border-2 border-gray-200 rounded-2xl overflow-hidden transition-all duration-300 hover:border-primary-300 animate-fade-in"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-4 sm:p-6 text-left bg-white hover:bg-gray-50 transition-colors"
              >
                <span className="text-base sm:text-lg font-bold text-gray-900 pr-4">{faq.question}</span>
                <ChevronDown
                  className={`flex-shrink-0 text-primary-600 transition-transform duration-300 w-5 h-5 sm:w-6 sm:h-6 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                  size={24}
                />
              </button>
              
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <div className="px-4 sm:px-6 pb-4 sm:pb-6 text-sm sm:text-base text-gray-700 leading-relaxed">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center p-8 bg-gradient-to-br from-primary-50 to-accent-50 rounded-2xl">
          <h3 className="text-xl font-bold text-gray-900 mb-2">
            Ainda tem dúvidas?
          </h3>
          <p className="text-gray-600 mb-4">
            Nossa equipe está pronta para ajudar você
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/5548998482590"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-primary-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-primary-700 transition-colors"
            >
              Falar com Especialista via WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

