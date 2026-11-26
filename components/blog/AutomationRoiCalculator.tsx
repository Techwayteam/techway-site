import { useState } from 'react';

const fields = [
  { key: 'conversations', label: 'Conversas por mês', initial: '300', max: 10000000, step: '1' },
  { key: 'resolved', label: 'Conversas com economia de tempo (%)', initial: '60', max: 100, step: '0.1' },
  { key: 'minutes', label: 'Minutos líquidos poupados por conversa', initial: '4', max: 1440, step: '0.1' },
  { key: 'hourly', label: 'Valor de uma hora de trabalho (R$)', initial: '25', max: 1000000, step: '0.01' },
  { key: 'monthly', label: 'Custo mensal total (R$)', initial: '150', max: 100000000, step: '0.01' },
  { key: 'setup', label: 'Implantação (R$)', initial: '300', max: 100000000, step: '0.01' },
] as const;
type Key = typeof fields[number]['key'];
type Values = Record<Key, string>;
const defaults = Object.fromEntries(fields.map(f => [f.key, f.initial])) as Values;
const decimal = new Intl.NumberFormat('pt-BR', { minimumFractionDigits: 1, maximumFractionDigits: 1 });
const money = (n: number) => 'R$ ' + new Intl.NumberFormat('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(n);

export default function AutomationRoiCalculator() {
  const [values, setValues] = useState<Values>({ ...defaults });
  const invalid = fields.some(f => values[f.key].trim() === '' || !Number.isFinite(Number(values[f.key])) || Number(values[f.key]) < 0 || Number(values[f.key]) > f.max || (f.key === 'conversations' && !Number.isInteger(Number(values[f.key]))));
  const n = (key: Key) => Number(values[key]);
  const hours = n('conversations') * n('resolved') / 100 * n('minutes') / 60;
  const value = hours * n('hourly');
  const balance = value - n('monthly');
  const cost = n('setup') + 12 * n('monthly');
  const year = 12 * balance - n('setup');
  const result = [
    { key: 'hours', label: 'Horas liberadas por mês', text: decimal.format(hours) + ' h' },
    { key: 'value', label: 'Valor mensal do tempo', text: money(value) },
    { key: 'balance', label: 'Saldo econômico mensal', text: money(balance) },
    { key: 'year', label: 'Saldo em 12 meses', text: money(year) },
    { key: 'percent', label: 'ROI em 12 meses', text: cost > 0 ? decimal.format(year / cost * 100) + '%' : 'Não aplicável' },
    { key: 'payback', label: 'Recuperação da implantação', text: n('setup') === 0 ? 'Sem implantação' : balance > 0 ? decimal.format(n('setup') / balance) + ' meses' : 'Sem recuperação estimada' },
  ];
  return (
    <div className="my-8 rounded-2xl border border-blue-100 bg-slate-50 p-4 sm:p-6" aria-label="Calculadora de retorno da automação">
      <p className="font-semibold text-slate-900">Simulador de 12 meses</p>
      <p className="mt-2 text-sm text-slate-600">Valores fictícios iniciais. Edite os campos para simular sua operação.</p>
      <div className="mt-5 grid gap-4 sm:grid-cols-2">
        {fields.map(f => (
          <label key={f.key} className="block min-w-0 text-sm font-medium text-slate-700">
            {f.label}
            <input className="mt-2 block w-full min-w-0 rounded-lg border border-slate-300 bg-white p-3 text-slate-900" type="number" min="0" max={f.max} step={f.step} value={values[f.key]} onChange={e => setValues(old => ({ ...old, [f.key]: e.target.value }))} />
          </label>
        ))}
      </div>
      <button type="button" className="mt-4 rounded-lg border border-blue-700 px-4 py-2 text-sm font-medium text-blue-700" onClick={() => setValues({ ...defaults })}>Restaurar exemplo</button>
      <div className="mt-5" aria-live="polite">
        {invalid ? <p data-testid="roi-invalid" className="text-sm text-red-700">Preencha todos os campos com valores válidos e não negativos. O percentual deve estar entre 0 e 100 e o número de conversas deve ser inteiro.</p> :
          <dl className="grid gap-3 sm:grid-cols-2">
            {result.map(item => <div key={item.key} className="min-w-0 rounded-lg border border-slate-200 bg-white p-3"><dt className="text-sm text-slate-600">{item.label}</dt><dd data-testid={'roi-' + item.key} className="mt-1 break-words text-lg font-semibold text-slate-900">{item.text}</dd></div>)}
          </dl>}
      </div>
      <p className="mt-4 text-sm text-slate-600">Estimativa econômica, não economia financeira garantida. Sem envio de dados pelo simulador.</p>
    </div>
  );
}
