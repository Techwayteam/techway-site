import { CheckCircle2 } from 'lucide-react';

export default function ReplyComparison() {
  return (
    <figure className="my-10" aria-label="Comparação ilustrativa entre responder e resolver">
      <h3 className="text-2xl font-semibold mb-5">Responder é diferente de resolver.</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="rounded-2xl border border-gray-200 bg-white p-5">
          <h4 className="font-semibold text-gray-800 mb-5">Resposta automática</h4>
          <div className="space-y-3 text-base">
            <p className="rounded-xl bg-gray-100 p-3"><span className="block text-sm font-semibold mb-1">Cliente</span>Tem horário amanhã à tarde?</p>
            <p className="rounded-xl border border-gray-200 p-3"><span className="block text-sm font-semibold mb-1">Empresa</span>Atendemos das 9h às 18h. Retornaremos em breve.</p>
          </div>
          <p className="mt-5 font-medium text-gray-600">Cliente ainda espera.</p>
        </div>
        <div className="rounded-2xl border border-blue-200 bg-blue-50 p-5">
          <h4 className="font-semibold text-blue-900 mb-5">Atendimento inteligente</h4>
          <div className="space-y-3 text-base">
            <p className="rounded-xl bg-white p-3"><span className="block text-sm font-semibold mb-1">Cliente</span>Tem horário amanhã à tarde?</p>
            <p className="rounded-xl bg-blue-100 p-3"><span className="block text-sm font-semibold mb-1">Agente</span>Tenho 14h ou 16h. Qual prefere?</p>
            <p className="rounded-xl bg-white p-3"><span className="block text-sm font-semibold mb-1">Cliente</span>16h, por favor.</p>
            <p className="rounded-xl bg-blue-100 p-3"><span className="block text-sm font-semibold mb-1">Agente</span>Perfeito! Agendamento confirmado para amanhã às 16h.</p>
          </div>
          <p className="mt-5 flex items-center gap-2 font-semibold text-blue-900"><CheckCircle2 size={20} aria-hidden="true" />Pedido resolvido.</p>
        </div>
      </div>
      <figcaption className="mt-3 text-sm text-gray-600">Exemplo ilustrativo de um atendimento conectado à agenda da empresa.</figcaption>
    </figure>
  );
}
