import React from 'react';
import { 
  Building2, 
  Plus, 
  Search, 
  MoreVertical, 
  ExternalLink,
  CheckCircle2,
  XCircle
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const companies = [
  { id: 1, name: 'Tech Solutions', industry: 'Tecnologia', tickets: 12, active: true, contact: 'contato@techsolutions.com' },
  { id: 2, name: 'Global Corp', industry: 'Logística', tickets: 8, active: true, contact: 'suporte@globalcorp.com' },
  { id: 3, name: 'Alpha Ltda', industry: 'Varejo', tickets: 15, active: true, contact: 'financeiro@alphaltda.com' },
  { id: 4, name: 'Beta Inc', industry: 'Educação', tickets: 4, active: false, contact: 'admin@betainc.com' },
  { id: 5, name: 'Delta Services', industry: 'Saúde', tickets: 2, active: true, contact: 'ti@deltaservices.com' },
];

export function CompanyList() {
  const navigate = useNavigate();

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 dark:text-white">Empresas</h1>
          <p className="text-slate-500 dark:text-slate-400">Gerencie as empresas clientes da plataforma.</p>
        </div>
        <button 
          onClick={() => navigate('/companies/new')}
          className="bg-brand-600 text-white px-4 py-2.5 rounded-xl font-semibold text-sm hover:bg-brand-700 transition-colors flex items-center justify-center gap-2"
        >
          <Plus size={18} />
          Nova Empresa
        </button>
      </div>

      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
        <input 
          type="text" 
          placeholder="Buscar empresas por nome ou setor..." 
          className="w-full pl-10 pr-4 py-3 bg-white border border-slate-200 rounded-2xl text-sm text-slate-900 shadow-sm focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 transition-all"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {companies.map((company) => (
          <div key={company.id} className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 hover:shadow-md transition-all group">
            <div className="flex items-start justify-between mb-4">
              <div className="w-12 h-12 rounded-xl bg-white border border-slate-100 flex items-center justify-center text-slate-600 group-hover:bg-white group-hover:border-brand-200 group-hover:text-brand-600 transition-colors shadow-sm">
                <Building2 size={24} />
              </div>
              <button className="p-2 rounded-lg hover:bg-slate-100 text-slate-400 transition-colors">
                <MoreVertical size={18} />
              </button>
            </div>
            
            <div className="mb-6">
              <h3 className="text-lg font-bold text-slate-900">{company.name}</h3>
              <p className="text-sm text-slate-500">{company.industry}</p>
            </div>

            <div className="space-y-3 mb-6">
              <div className="flex items-center justify-between text-sm">
                <span className="text-slate-500">Tickets Ativos</span>
                <span className="font-semibold text-slate-900">{company.tickets}</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-slate-500">Status</span>
                <span className={`inline-flex items-center gap-1 font-medium ${company.active ? 'text-blue-700' : 'text-rose-600'}`}>
                  {company.active ? <CheckCircle2 size={14} /> : <XCircle size={14} />}
                  {company.active ? 'Ativa' : 'Inativa'}
                </span>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
              <span className="text-xs text-slate-400 truncate max-w-[150px]">{company.contact}</span>
              <button className="text-brand-600 hover:text-brand-700 text-sm font-semibold flex items-center gap-1">
                Detalhes
                <ExternalLink size={14} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
