import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Termos de Uso | Sistema Montshop',
  description: 'Termos de Uso do Sistema Montshop para clientes e usuários, contemplando regras de acesso, responsabilidades, limites de uso e foro aplicável (LGPD e legislação brasileira).',
  robots: 'index,follow',
}

const lastUpdated = '10 de dezembro de 2025'

const sections = [
  {
    title: '1. Aceitação dos Termos',
    content:
      'Ao acessar ou usar o Sistema Montshop, você concorda integralmente com estes Termos de Uso e com a Política de Privacidade. Se não concordar, não utilize o serviço.',
  },
  {
    title: '2. Objeto do Serviço',
    content:
      'O Sistema Montshop oferece solução SaaS para gestão de lojas, incluindo PDV, estoque, emissão de documentos fiscais (quando habilitado), relatórios e integrações permitidas. Recursos podem evoluir sem aviso prévio, preservando-se a continuidade razoável do serviço.',
  },
  {
    title: '3. Cadastro, Conta e Credenciais',
    content:
      'Você deve fornecer dados verdadeiros e manter suas informações atualizadas. É responsável por manter credenciais em sigilo e por toda atividade realizada na conta. Informe-nos imediatamente sobre uso indevido ou violação de segurança.',
  },
  {
    title: '4. Planos, Pagamentos e Renovação',
    content:
      'Planos são cobrados conforme valores e periodicidade divulgados. Cobranças recorrentes renovam automaticamente até cancelamento. Falta de pagamento pode resultar em suspensão e posterior exclusão dos dados, observando prazos legais e de retenção contratual.',
  },
  {
    title: '5. Uso Permitido e Restrições',
    content:
      'É vedado: (a) usar o serviço de forma ilícita; (b) violar direitos de terceiros; (c) contornar limites técnicos; (d) realizar engenharia reversa fora das hipóteses legais; (e) introduzir malware ou prejudicar a infraestrutura; (f) compartilhar licenças sem autorização.',
  },
  {
    title: '6. Conteúdo do Usuário e Conformidade Legal',
    content:
      'Você é responsável pelos dados inseridos e declara ter base legal para tratá-los conforme a LGPD. Não insira dados sensíveis ou de menores sem base legal adequada. Podemos remover ou bloquear conteúdo que viole a lei ou estes Termos.',
  },
  {
    title: '7. Propriedade Intelectual',
    content:
      'O Sistema Montshop, seus códigos, marcas, layout e funcionalidades são protegidos por direitos de propriedade intelectual. Nenhuma licença é concedida além do uso limitado e não exclusivo conforme o plano contratado.',
  },
  {
    title: '8. Integrações e Terceiros',
    content:
      'Integrações com serviços de terceiros são fornecidas “como estão” e podem exigir concordância com termos próprios. Não nos responsabilizamos por indisponibilidades ou alterações desses terceiros.',
  },
  {
    title: '9. Garantias e Disponibilidade',
    content:
      'O serviço é fornecido “como está”, com esforços comerciais razoáveis para disponibilidade e segurança. Não garantimos operação ininterrupta ou livre de erros. Manutenções programadas ou emergenciais podem ocorrer; buscaremos mitigar impactos.',
  },
  {
    title: '10. Limitação de Responsabilidade',
    content:
      'Na extensão máxima permitida pela lei, não seremos responsáveis por lucros cessantes, perdas de receita, dados ou danos indiretos. Nossa responsabilidade total, quando aplicável, limita-se ao montante pago pelo usuário nos 3 (três) meses anteriores ao evento.',
  },
  {
    title: '11. Suporte e Comunicação',
    content:
      'Oferecemos suporte pelos canais oficiais indicados no site (ex.: WhatsApp e e-mail). Prazos de resposta seguem níveis de serviço divulgados para cada plano, quando aplicável.',
  },
  {
    title: '12. Suspensão e Rescisão',
    content:
      'Podemos suspender ou encerrar o acesso em caso de violação destes Termos, uso ilícito, inadimplência ou ordem legal. Você pode encerrar a conta a qualquer momento; poderá haver retenção de dados conforme obrigações legais e fiscais.',
  },
  {
    title: '13. Privacidade e Proteção de Dados',
    content:
      'O tratamento de dados pessoais segue a Política de Privacidade e a LGPD (Lei 13.709/2018). Como controlador dos dados que inserir, você deve garantir bases legais, transparência e exercício de direitos dos titulares.',
  },
  {
    title: '14. Alterações dos Termos',
    content:
      'Podemos atualizar estes Termos para refletir mudanças legais, técnicas ou operacionais. Notificaremos alterações relevantes pelos canais de contato ou avisos no produto. Uso continuado após a atualização implica concordância com a nova versão.',
  },
  {
    title: '15. Lei Aplicável e Foro',
    content:
      'Aplica-se a legislação brasileira. Fica eleito o foro da Comarca de Biguaçu/SC, Brasil, com renúncia a qualquer outro, por mais privilegiado que seja, salvo disposições legais de competência absoluta.',
  },
  {
    title: '16. Contato Legal',
    content:
      'Dúvidas sobre estes Termos: montsoftwares@gmail.com. Para demandas de titulares de dados, consulte também a Política de Privacidade.',
  },
]

export default function TermosDeUsoPage() {
  return (
    <main className="bg-gray-950 text-gray-100 min-h-screen">
      <div className="max-w-5xl mx-auto px-6 py-16 md:py-20">
        <header className="mb-12">
          <p className="text-sm uppercase tracking-wide text-primary-300 font-semibold">Termos de Uso</p>
          <h1 className="text-3xl md:text-4xl font-bold mt-2 text-white">Sistema Montshop</h1>
          <p className="text-gray-400 mt-4 max-w-3xl">
            Leia estes Termos para entender as regras de uso do Sistema Montshop. Se tiver dúvidas, fale conosco
            pelo suporte ou pelo e-mail indicado abaixo.
          </p>
          <p className="text-gray-500 text-sm mt-3">Última atualização: {lastUpdated}</p>
        </header>

        <div className="space-y-8">
          {sections.map((section) => (
            <section key={section.title} className="bg-gray-900/60 border border-gray-800 rounded-2xl p-6 shadow-lg">
              <h2 className="text-xl font-semibold text-white mb-3">{section.title}</h2>
              <p className="text-gray-300 leading-relaxed">{section.content}</p>
            </section>
          ))}
        </div>
      </div>
    </main>
  )
}
