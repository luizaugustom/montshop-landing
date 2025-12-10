import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Política de Privacidade | Sistema Montshop',
  description: 'Política de Privacidade do Sistema Montshop conforme LGPD, detalhando dados coletados, finalidades, bases legais, direitos dos titulares e contatos para solicitações.',
  robots: 'index,follow',
}

const lastUpdated = '10 de dezembro de 2025'

const sections = [
  {
    id: 'controlador',
    title: '1. Controlador e Escopo',
    content:
      'O Sistema Montshop trata dados pessoais para operar e melhorar a plataforma de gestão de lojas. Aplicamos a LGPD (Lei 13.709/2018) e demais normas brasileiras. Esta política descreve como coletamos, usamos, compartilhamos e protegemos dados.',
  },
  {
    id: 'dados',
    title: '2. Dados que Coletamos',
    content:
      'Coletamos: (a) dados de conta e contato (nome, e-mail, telefone, empresa); (b) dados de faturamento (CNPJ/CPF, endereço, informações fiscais necessárias); (c) dados de uso e telemetria do produto; (d) registros de suporte e comunicações; (e) cookies e identificadores para funcionalidade, segurança e analytics; (f) dados operacionais inseridos pelo cliente (estoque, vendas etc.), tratados como dados sob controle do cliente.',
  },
  {
    id: 'bases-legais',
    title: '3. Bases Legais',
    content:
      'Tratamos dados com base em: (a) execução de contrato ou procedimentos preliminares (prestação do serviço); (b) cumprimento de obrigações legais e fiscais; (c) legítimo interesse para segurança, melhoria e prevenção a fraudes, com avaliação de impacto; (d) consentimento quando exigido, como para certos cookies ou comunicações opcionais.',
  },
  {
    id: 'finalidades',
    title: '4. Finalidades de Uso',
    content:
      'Usamos dados para: (a) provisionar e operar o sistema; (b) faturar e cobrar; (c) prestar suporte; (d) aprimorar segurança e performance; (e) cumprir obrigações legais e auditorias; (f) enviar comunicações transacionais e, quando permitido, informativos e marketing com opção de opt-out.',
  },
  {
    id: 'cookies',
    title: '5. Cookies e Tecnologias Similares',
    content:
      'Utilizamos cookies essenciais para login e segurança, e cookies/IDs de analytics para entender uso do produto. Você pode gerenciar preferências no navegador; a desativação de cookies essenciais pode impactar o funcionamento. Consentimentos específicos podem ser solicitados quando exigido.',
  },
  {
    id: 'compartilhamento',
    title: '6. Compartilhamento de Dados',
    content:
      'Podemos compartilhar dados com: (a) provedores de infraestrutura, pagamento, e ferramentas de e-mail/suporte; (b) autoridades, quando houver obrigação legal ou ordem válida; (c) parceiros técnicos para integrações escolhidas por você. Exigimos obrigações de segurança e confidencialidade dos terceiros contratados.',
  },
  {
    id: 'transferencias',
    title: '7. Transferências Internacionais',
    content:
      'Serviços de nuvem e ferramentas de terceiros podem operar fora do Brasil. Adotamos salvaguardas contratuais e medidas técnicas compatíveis com a LGPD para proteger os dados em tais transferências.',
  },
  {
    id: 'seguranca',
    title: '8. Segurança da Informação',
    content:
      'Aplicamos controles técnicos e organizacionais razoáveis (criptografia em trânsito, controle de acesso, registros de auditoria e backups) para proteger os dados. Nenhum sistema é totalmente imune; comunique incidentes suspeitos imediatamente pelo canal de suporte.',
  },
  {
    id: 'retencao',
    title: '9. Retenção e Exclusão',
    content:
      'Mantemos dados pessoais enquanto necessários para o contrato, obrigações legais (incluindo fiscais) ou defesa de direitos. Após esses prazos, dados são excluídos ou anonimizados de forma segura. Logs e backups seguem janelas de retenção definidas.',
  },
  {
    id: 'direitos',
    title: '10. Direitos dos Titulares',
    content:
      'Você (ou seus clientes, quando aplicável) pode exercer: confirmação de tratamento, acesso, correção, anonimização, bloqueio ou eliminação, portabilidade, informação sobre compartilhamento, revisão de decisões automatizadas e revogação de consentimento. Solicitações são atendidas nos prazos legais, mediante validação de identidade.',
  },
  {
    id: 'controlador-cliente',
    title: '11. Papel do Cliente como Controlador',
    content:
      'Para dados inseridos no sistema (ex.: clientes e vendas da sua loja), você é o controlador e deve assegurar bases legais, transparência e atendimento a direitos dos titulares. Atuamos como operador conforme instruções legítimas e contrato.',
  },
  {
    id: 'comunicacoes',
    title: '12. Comunicações e Marketing',
    content:
      'Podemos enviar comunicações transacionais (ex.: avisos de faturamento, segurança). Mensagens de marketing são enviadas com base legal adequada e sempre com opção de cancelamento.',
  },
  {
    id: 'criancas',
    title: '13. Crianças e Adolescentes',
    content:
      'O serviço não é direcionado a menores de 18 anos. Evite inserir dados de menores; se necessário, assegure base legal adequada e consentimento dos responsáveis, quando aplicável.',
  },
  {
    id: 'alteracoes',
    title: '14. Alterações desta Política',
    content:
      'Podemos atualizar esta Política para refletir requisitos legais, técnicos ou de negócio. Avisaremos alterações relevantes pelos canais usuais. O uso contínuo após a atualização indica ciência da nova versão.',
  },
  {
    id: 'contato',
    title: '15. Contato e Encarregado (DPO)',
    content:
      'Para dúvidas ou direitos dos titulares, contate: montsoftwares@gmail.com. Encarregado (DPO): montsoftwares@gmail.com. Forneça detalhes mínimos para identificação segura do solicitante.',
  },
]

export default function PoliticaPrivacidadePage() {
  return (
    <main className="bg-gray-950 text-gray-100 min-h-screen">
      <div className="max-w-5xl mx-auto px-6 py-16 md:py-20">
        <header className="mb-12">
          <p className="text-sm uppercase tracking-wide text-primary-300 font-semibold">Política de Privacidade</p>
          <h1 className="text-3xl md:text-4xl font-bold mt-2 text-white">Sistema Montshop</h1>
          <p className="text-gray-400 mt-4 max-w-3xl">
            Esta política explica como tratamos dados pessoais no Sistema Montshop, em conformidade com a LGPD.
            Recomendamos a leitura atenta e o contato em caso de dúvidas.
          </p>
          <p className="text-gray-500 text-sm mt-3">Última atualização: {lastUpdated}</p>
        </header>

        <div className="space-y-8">
          {sections.map((section) => (
            <section
              key={section.title}
              id={section.id}
              className="bg-gray-900/60 border border-gray-800 rounded-2xl p-6 shadow-lg"
            >
              <h2 className="text-xl font-semibold text-white mb-3">{section.title}</h2>
              <p className="text-gray-300 leading-relaxed">{section.content}</p>
            </section>
          ))}
        </div>
      </div>
    </main>
  )
}
