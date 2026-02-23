import React from 'react';
import { 
  Ticket, 
  Clock, 
  CheckCircle2, 
  AlertCircle,
  TrendingUp,
  Users,
  Building2,
  ArrowUpRight,
  ArrowDownRight,
  PlusCircle
} from 'lucide-react';
import { motion } from 'motion/react';

const stats = [
  { 
    label: 'Tickets Abertos', 
    value: '24', 
    change: '+12%', 
    trend: 'up', 
    icon: Ticket, 
    color: 'text-blue-600', 
    bg: 'bg-blue-50' 
  },
  { 
    label: 'Em Atendimento', 
    value: '12', 
    change: '-5%', 
    trend: 'down', 
    icon: Clock, 
    color: 'text-amber-600', 
    bg: 'bg-amber-50' 
  },
  { 
    label: 'Resolvidos Hoje', 
    value: '48', 
    change: '+18%', 
    trend: 'up', 
    icon: CheckCircle2, 
    color: 'text-blue-700', 
    bg: 'bg-blue-50' 
  },
  { 
    label: 'Urgentes', 
    value: '03', 
    change: '0%', 
    trend: 'neutral', 
    icon: AlertCircle, 
    color: 'text-rose-600', 
    bg: 'bg-rose-50' 
  },
];

export function Dashboard() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-slate-900">Olá, Admin 👋</h1>
        <p className="text-slate-500">Bem-vindo ao Atendify. Aqui está o que está acontecendo hoje.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="flex items-start justify-between mb-4">
              <div className={`p-3 rounded-xl ${stat.bg}`}>
                <stat.icon className={`w-6 h-6 ${stat.color}`} />
              </div>
              <div className={`flex items-center gap-1 text-xs font-medium ${
                stat.trend === 'up' ? 'text-emerald-600' : 
                stat.trend === 'down' ? 'text-rose-600' : 'text-slate-500'
              }`}>
                {stat.change}
                {stat.trend === 'up' && <ArrowUpRight size={14} />}
                {stat.trend === 'down' && <ArrowDownRight size={14} />}
              </div>
            </div>
            <div>
              <p className="text-sm font-medium text-slate-500">{stat.label}</p>
              <h3 className="text-2xl font-bold text-slate-900 mt-1">{stat.value}</h3>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Tickets */}
        <div className="lg:col-span-2 bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
          <div className="p-6 border-b border-slate-100 flex items-center justify-between">
            <h2 className="font-semibold text-slate-900">Tickets Recentes</h2>
            <button className="text-sm font-medium text-brand-600 hover:text-brand-700">Ver todos</button>
          </div>
          <div className="divide-y divide-slate-100">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="p-4 hover:bg-slate-50 transition-colors flex items-center gap-4 cursor-pointer">
                <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center shrink-0">
                  <Ticket size={20} className="text-slate-400" />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="text-sm font-medium text-slate-900 truncate">Erro no acesso ao sistema financeiro</h4>
                  <p className="text-xs text-slate-500 truncate">Empresa Alpha Ltda • Aberto há 2 horas</p>
                </div>
                <div className="flex flex-col items-end gap-1">
                  <span className="px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-blue-100 text-blue-700">
                    Aberto
                  </span>
                  <span className="text-[10px] text-slate-400">#TK-102{i}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Actions / Activity */}
        <div className="space-y-6">
          <div className="bg-brand-600 rounded-2xl p-6 text-white shadow-lg shadow-brand-200">
            <h3 className="font-semibold mb-2">Novo Ticket</h3>
            <p className="text-brand-100 text-sm mb-4">Precisa registrar um novo atendimento rapidamente?</p>
            <button className="w-full bg-white text-brand-600 py-2.5 rounded-xl font-semibold text-sm hover:bg-brand-50 transition-colors flex items-center justify-center gap-2">
              <PlusCircle size={18} />
              Criar Agora
            </button>
          </div>

          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6">
            <h2 className="font-semibold text-slate-900 mb-4">Resumo da Semana</h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center">
                    <TrendingUp size={16} className="text-blue-700" />
                  </div>
                  <span className="text-sm text-slate-600">Taxa de Resolução</span>
                </div>
                <span className="text-sm font-bold text-slate-900">94%</span>
              </div>
              <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                <div className="bg-blue-600 h-full w-[94%]"></div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center">
                    <Clock size={16} className="text-blue-600" />
                  </div>
                  <span className="text-sm text-slate-600">Tempo Médio</span>
                </div>
                <span className="text-sm font-bold text-slate-900">1h 24m</span>
              </div>
              <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                <div className="bg-blue-500 h-full w-[65%]"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
