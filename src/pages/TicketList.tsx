import React from 'react';
import { 
  Search, 
  Filter, 
  Plus, 
  MoreVertical, 
  ChevronLeft, 
  ChevronRight,
  Ticket,
  Clock,
  CheckCircle2,
  AlertCircle
} from 'lucide-react';
import { cn } from '../lib/utils';
import { useNavigate } from 'react-router-dom';

const tickets = [
  { id: 'TK-1025', title: 'Problema com login no portal', company: 'Tech Solutions', requester: 'João Silva', status: 'open', priority: 'high', date: '23/02/2026' },
  { id: 'TK-1024', title: 'Solicitação de novo hardware', company: 'Global Corp', requester: 'Maria Souza', status: 'in_progress', priority: 'medium', date: '22/02/2026' },
  { id: 'TK-1023', title: 'Erro ao exportar relatório mensal', company: 'Alpha Ltda', requester: 'Pedro Santos', status: 'resolved', priority: 'low', date: '22/02/2026' },
  { id: 'TK-1022', title: 'Configuração de VPN', company: 'Beta Inc', requester: 'Ana Costa', status: 'closed', priority: 'medium', date: '21/02/2026' },
  { id: 'TK-1021', title: 'Lentidão no banco de dados', company: 'Tech Solutions', requester: 'Carlos Oliveira', status: 'open', priority: 'urgent', date: '21/02/2026' },
];

const statusMap = {
  open: { label: 'Aberto', color: 'bg-blue-100 text-blue-700' },
  in_progress: { label: 'Em Atendimento', color: 'bg-amber-100 text-amber-700' },
  resolved: { label: 'Resolvido', color: 'bg-blue-100 text-blue-800' },
  closed: { label: 'Fechado', color: 'bg-slate-100 text-slate-700' },
};

const priorityMap = {
  low: { label: 'Baixa', color: 'text-slate-500' },
  medium: { label: 'Média', color: 'text-blue-500' },
  high: { label: 'Alta', color: 'text-amber-500' },
  urgent: { label: 'Urgente', color: 'text-rose-500' },
};

export function TicketList() {
  const navigate = useNavigate();

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Tickets</h1>
          <p className="text-slate-500">Gerencie todos os atendimentos da plataforma.</p>
        </div>
        <button 
          onClick={() => navigate('/tickets/new')}
          className="bg-brand-600 text-white px-4 py-2.5 rounded-xl font-semibold text-sm hover:bg-brand-700 transition-colors flex items-center justify-center gap-2"
        >
          <Plus size={18} />
          Novo Ticket
        </button>
      </div>

      {/* Filters */}
      <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm flex flex-col md:flex-row gap-4">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
          <input 
            type="text" 
            placeholder="Buscar por ID, título ou empresa..." 
            className="w-full pl-10 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 transition-all"
          />
        </div>
        <div className="flex items-center gap-2">
          <button className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-xl text-sm font-medium text-slate-700 hover:bg-slate-50 transition-colors">
            <Filter size={18} className="text-slate-400" />
            Filtros
          </button>
          <select className="px-4 py-2 bg-white border border-slate-200 rounded-xl text-sm font-medium text-slate-700 hover:bg-slate-50 focus:outline-none transition-colors">
            <option>Todos os Status</option>
            <option>Aberto</option>
            <option>Em Atendimento</option>
            <option>Resolvido</option>
          </select>
        </div>
      </div>

      {/* Table */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50/50 border-b border-slate-200">
                <th className="px-6 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">Ticket</th>
                <th className="px-6 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">Empresa / Solicitante</th>
                <th className="px-6 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">Prioridade</th>
                <th className="px-6 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wider text-right">Ações</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {tickets.map((ticket) => (
                <tr key={ticket.id} className="hover:bg-slate-50/50 transition-colors group">
                  <td className="px-6 py-4">
                    <div className="flex flex-col">
                      <span className="text-xs font-bold text-brand-600 mb-0.5">{ticket.id}</span>
                      <span className="text-sm font-medium text-slate-900 line-clamp-1">{ticket.title}</span>
                      <span className="text-[10px] text-slate-400 mt-1">Criado em {ticket.date}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex flex-col">
                      <span className="text-sm font-medium text-slate-700">{ticket.company}</span>
                      <span className="text-xs text-slate-500">{ticket.requester}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className={cn(
                      "inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider",
                      statusMap[ticket.status as keyof typeof statusMap].color
                    )}>
                      {statusMap[ticket.status as keyof typeof statusMap].label}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-1.5">
                      <div className={cn("w-1.5 h-1.5 rounded-full bg-current", priorityMap[ticket.priority as keyof typeof priorityMap].color)}></div>
                      <span className={cn("text-xs font-medium", priorityMap[ticket.priority as keyof typeof priorityMap].color)}>
                        {priorityMap[ticket.priority as keyof typeof priorityMap].label}
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button className="p-2 rounded-lg hover:bg-slate-200 text-slate-400 hover:text-slate-600 transition-colors">
                      <MoreVertical size={18} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="px-6 py-4 border-t border-slate-100 flex items-center justify-between bg-slate-50/30">
          <span className="text-xs text-slate-500">Mostrando 1-5 de 24 tickets</span>
          <div className="flex items-center gap-2">
            <button className="p-1.5 rounded-lg border border-slate-200 text-slate-400 hover:bg-white disabled:opacity-50 transition-colors" disabled>
              <ChevronLeft size={18} />
            </button>
            <button className="w-8 h-8 rounded-lg bg-brand-600 text-white text-xs font-bold">1</button>
            <button className="w-8 h-8 rounded-lg border border-slate-200 text-xs font-medium text-slate-600 hover:bg-white transition-colors">2</button>
            <button className="w-8 h-8 rounded-lg border border-slate-200 text-xs font-medium text-slate-600 hover:bg-white transition-colors">3</button>
            <button className="p-1.5 rounded-lg border border-slate-200 text-slate-400 hover:bg-white transition-colors">
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
