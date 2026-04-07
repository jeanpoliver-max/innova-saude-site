/*
 * Política de Privacidade — Innova Saúde
 * Cores: Azul escuro (#1B4F7A), Azul ciano (#5B9BD5), Verde limão (#7AB929)
 */
import { ArrowLeft } from "lucide-react";
import { Link } from "wouter";

const LOGO_URL = "https://d2xsxph8kpxj0f.cloudfront.net/310519663445619617/imGYmRuaxbExofTAsafwbN/logo-transparent_57153529.png";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Header */}
      <header className="bg-white border-b border-[#5B9BD5]/15 sticky top-0 z-50 backdrop-blur-lg">
        <div className="container flex items-center justify-between h-16 lg:h-18">
          <Link href="/" className="flex items-center gap-2 shrink-0">
            <img src={LOGO_URL} alt="Innova Saúde" className="h-10 lg:h-12 w-auto object-contain" />
          </Link>
          <Link href="/" className="inline-flex items-center gap-2 text-sm font-medium text-[#1B4F7A] hover:text-[#5B9BD5] transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Voltar ao Início
          </Link>
        </div>
      </header>

      {/* Content */}
      <main className="container py-12 lg:py-16">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl lg:text-4xl font-extrabold text-[#1B4F7A] mb-2 tracking-tight" style={{ fontFamily: "var(--font-heading)" }}>
            Política de Privacidade
          </h1>
          <p className="text-sm text-slate-500 mb-10">Última atualização: Março de 2026</p>

          <div className="prose prose-slate max-w-none space-y-8">
            <section>
              <h2 className="text-xl font-bold text-[#1B4F7A] mb-3">1. Introdução</h2>
              <p className="text-slate-600 leading-relaxed">
                A Innova Saúde, inscrita no CNPJ sob o número [a definir], com sede na Rua Victor Meirelles, 411, 
                CEP 88.133-370, Palhoça - SC - Brasil, está comprometida com a proteção da privacidade e dos dados 
                pessoais de seus clientes, parceiros e visitantes do site. Esta Política de Privacidade descreve como 
                coletamos, utilizamos, armazenamos e protegemos suas informações pessoais, em conformidade com a 
                Lei Geral de Proteção de Dados (LGPD - Lei nº 13.709/2018).
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#1B4F7A] mb-3">2. Dados Coletados</h2>
              <p className="text-slate-600 leading-relaxed mb-3">
                Podemos coletar os seguintes dados pessoais quando você interage com nosso site ou serviços:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-slate-600">
                <li><strong>Dados de identificação:</strong> nome completo, e-mail, telefone e nome da empresa, fornecidos voluntariamente através do formulário de contato.</li>
                <li><strong>Dados de navegação:</strong> endereço IP, tipo de navegador, páginas visitadas, tempo de permanência e dados de cookies, coletados automaticamente para fins de análise e melhoria do site.</li>
                <li><strong>Dados de comunicação:</strong> mensagens enviadas através do formulário de contato ou WhatsApp.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#1B4F7A] mb-3">3. Finalidade do Tratamento</h2>
              <p className="text-slate-600 leading-relaxed mb-3">
                Os dados pessoais coletados são utilizados para as seguintes finalidades:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-slate-600">
                <li>Responder às solicitações de contato e cotação de equipamentos.</li>
                <li>Fornecer informações sobre nossos produtos e serviços de Point of Care.</li>
                <li>Prestar suporte técnico e assistência aos clientes.</li>
                <li>Melhorar a experiência de navegação e funcionalidades do site.</li>
                <li>Cumprir obrigações legais e regulatórias.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#1B4F7A] mb-3">4. Compartilhamento de Dados</h2>
              <p className="text-slate-600 leading-relaxed">
                A Innova Saúde não vende, aluga ou compartilha seus dados pessoais com terceiros para fins 
                comerciais. Seus dados poderão ser compartilhados apenas nas seguintes situações: com prestadores 
                de serviços essenciais ao funcionamento do site (hospedagem, análise de dados); quando exigido por 
                lei, ordem judicial ou autoridade competente; e para proteção dos direitos, propriedade ou segurança 
                da Innova Saúde, seus clientes ou terceiros.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#1B4F7A] mb-3">5. Armazenamento e Segurança</h2>
              <p className="text-slate-600 leading-relaxed">
                Adotamos medidas técnicas e organizacionais adequadas para proteger seus dados pessoais contra 
                acesso não autorizado, perda, destruição ou alteração. Os dados são armazenados em servidores 
                seguros e mantidos apenas pelo tempo necessário para cumprir as finalidades para as quais foram 
                coletados, respeitando os prazos legais aplicáveis.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#1B4F7A] mb-3">6. Seus Direitos (LGPD)</h2>
              <p className="text-slate-600 leading-relaxed mb-3">
                De acordo com a LGPD, você tem os seguintes direitos em relação aos seus dados pessoais:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-slate-600">
                <li><strong>Confirmação e acesso:</strong> saber se tratamos seus dados e acessar as informações.</li>
                <li><strong>Correção:</strong> solicitar a correção de dados incompletos, inexatos ou desatualizados.</li>
                <li><strong>Anonimização ou eliminação:</strong> solicitar a anonimização ou eliminação de dados desnecessários.</li>
                <li><strong>Portabilidade:</strong> solicitar a transferência dos seus dados a outro fornecedor de serviço.</li>
                <li><strong>Revogação do consentimento:</strong> revogar o consentimento a qualquer momento.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#1B4F7A] mb-3">7. Cookies</h2>
              <p className="text-slate-600 leading-relaxed">
                Nosso site utiliza cookies para melhorar a experiência de navegação e coletar dados analíticos. 
                Cookies são pequenos arquivos de texto armazenados em seu dispositivo. Você pode configurar seu 
                navegador para recusar cookies, mas isso pode afetar algumas funcionalidades do site. Utilizamos 
                cookies essenciais para o funcionamento do site e cookies analíticos para entender como os 
                visitantes interagem com nossas páginas.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#1B4F7A] mb-3">8. Alterações nesta Política</h2>
              <p className="text-slate-600 leading-relaxed">
                A Innova Saúde reserva-se o direito de atualizar esta Política de Privacidade a qualquer momento. 
                Quaisquer alterações serão publicadas nesta página com a data de atualização revisada. 
                Recomendamos que você revise esta política periodicamente para se manter informado sobre como 
                protegemos seus dados.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#1B4F7A] mb-3">9. Contato</h2>
              <p className="text-slate-600 leading-relaxed">
                Para exercer seus direitos, esclarecer dúvidas ou fazer solicitações relacionadas a esta 
                Política de Privacidade, entre em contato conosco:
              </p>
              <div className="mt-4 bg-blue-50/50 rounded-xl p-5 border border-[#5B9BD5]/15">
                <p className="text-slate-700 font-semibold mb-2">Innova Saúde</p>
                <p className="text-slate-600 text-sm">Rua Victor Meirelles, 411 - CEP: 88.133-370 - Palhoça - SC - Brasil</p>
                <p className="text-slate-600 text-sm">E-mail: <a href="mailto:gestao@innovasaude.com.br" className="text-[#1B4F7A] hover:underline">gestao@innovasaude.com.br</a></p>
                <p className="text-slate-600 text-sm">Telefone / WhatsApp: <a href="https://wa.me/5548991125309" target="_blank" rel="noopener noreferrer" className="text-[#1B4F7A] hover:underline">(48) 99112-5309</a></p>
              </div>
            </section>
          </div>

          {/* Back button */}
          <div className="mt-12 pt-8 border-t border-slate-200">
            <Link href="/" className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#1B4F7A] to-[#2B6A9E] text-white font-semibold rounded-xl hover:from-[#163F62] hover:to-[#1B4F7A] transition-all duration-200 shadow-md shadow-[#1B4F7A]/25">
              <ArrowLeft className="w-4 h-4" />
              Voltar ao Início
            </Link>
          </div>
        </div>
      </main>

      {/* Footer mini */}
      <footer className="bg-slate-900 text-slate-400 py-6">
        <div className="container text-center text-sm">
          &copy; {new Date().getFullYear()} Innova Saúde. Todos os direitos reservados.
        </div>
      </footer>
    </div>
  );
}
