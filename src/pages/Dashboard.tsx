import React from 'react';
import { 
  Ticket, 
  Clock, 
  CheckCircle2, 
  AlertCircle,
  TrendingUp,
  ArrowUpRight,
  ArrowDownRight,
  Calendar,
  Filter
} from 'lucide-react';
import { motion } from 'motion/react';
import { useNavigate } from 'react-router-dom';
import { 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
  Legend
} from 'recharts';

const ticketVolumeData = [
  { name: 'Seg', tickets: 12, resolved: 10 },
  { name: 'Ter', tickets: 19, resolved: 15 },
  { name: 'Qua', tickets: 15, resolved: 18 },
  { name: 'Qui', tickets: 22, resolved: 20 },
  { name: 'Sex', tickets: 30, resolved: 25 },
  { name: 'Sáb', tickets: 10, resolved: 12 },
  { name: 'Dom', tickets: 5, resolved: 4 },
];

const statusData = [
  { name: 'Abertos', value: 24, color: '#3b82f6' },
  { name: 'Em Atendimento', value: 12, color: '#f59e0b' },
  { name: 'Resolvidos', value: 48, color: '#10b981' },
  { name: 'Urgentes', value: 3, color: '#ef4444' },
];

const priorityData = [
  { name: 'Baixa', total: 15 },
  { name: 'Média', total: 25 },
  { name: 'Alta', total: 18 },
  { name: 'Urgente', total: 5 },
];

const stats = [
  { 
    label: 'Total de Tickets', 
    value: '87', 
    change: '+12%', 
    trend: 'up', 
    icon: Ticket, 
    color: 'text-blue-600', 
    bg: 'bg-blue-50' 
  },
  { 
    label: 'Tempo Médio Resposta', 
    value: '1h 24m', 
    change: '-15%', 
    trend: 'up', 
    icon: Clock, 
    color: 'text-amber-600', 
    bg: 'bg-amber-50' 
  },
  { 
    label: 'Taxa de Resolução', 
    value: '94.2%', 
    change: '+2.4%', 
    trend: 'up', 
    icon: CheckCircle2, 
    color: 'text-emerald-600', 
    bg: 'bg-emerald-50' 
  },
  { 
    label: 'SLA Cumprido', 
    value: '98.5%', 
    change: '+0.5%', 
    trend: 'up', 
    icon: TrendingUp, 
    color: 'text-indigo-600', 
    bg: 'bg-indigo-50' 
  },
];

export function Dashboard() {
  const navigate = useNavigate();

  return (
    <div className="space-y-8 pb-12">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Análise Gerencial 👋</h1>
          <p className="text-slate-500">Visão estratégica dos atendimentos e performance da equipe.</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-xl text-sm font-medium text-slate-600 hover:bg-slate-50 transition-all">
            <Calendar size={18} />
            Últimos 7 dias
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-xl text-sm font-medium text-slate-600 hover:bg-slate-50 transition-all">
            <Filter size={18} />
            Filtrar
          </button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-all"
          >
            <div className="flex items-start justify-between mb-4">
              <div className={`p-3 rounded-xl ${stat.bg}`}>
                <stat.icon className={`w-6 h-6 ${stat.color}`} />
              </div>
              <div className={`flex items-center gap-1 text-xs font-medium ${
                stat.trend === 'up' ? 'text-emerald-600' : 'text-rose-600'
              }`}>
                {stat.change}
                {stat.trend === 'up' ? <ArrowUpRight size={14} /> : <ArrowDownRight size={14} />}
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
        {/* Main Chart - Ticket Volume */}
        <div className="lg:col-span-2 bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="font-bold text-slate-900">Volume de Atendimentos</h2>
              <p className="text-sm text-slate-500">Comparativo entre tickets abertos e resolvidos</p>
            </div>
          </div>
          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={ticketVolumeData}>
                <defs>
                  <linearGradient id="colorTickets" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.1}/>
                    <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
                  </linearGradient>
                  <linearGradient id="colorResolved" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#10b981" stopOpacity={0.1}/>
                    <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                <XAxis 
                  dataKey="name" 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{ fill: '#94a3b8', fontSize: 12 }}
                  dy={10}
                />
                <YAxis 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{ fill: '#94a3b8', fontSize: 12 }}
                />
                <Tooltip 
                  contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }}
                />
                <Area 
                  type="monotone" 
                  dataKey="tickets" 
                  stroke="#3b82f6" 
                  strokeWidth={3}
                  fillOpacity={1} 
                  fill="url(#colorTickets)" 
                  name="Abertos"
                />
                <Area 
                  type="monotone" 
                  dataKey="resolved" 
                  stroke="#10b981" 
                  strokeWidth={3}
                  fillOpacity={1} 
                  fill="url(#colorResolved)" 
                  name="Resolvidos"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Distribution by Status */}
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
          <h2 className="font-bold text-slate-900 mb-1">Distribuição por Status</h2>
          <p className="text-sm text-slate-500 mb-8">Status atual de todos os chamados</p>
          <div className="h-[250px] w-full relative">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={statusData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {statusData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
            <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
              <span className="text-3xl font-bold text-slate-900">87</span>
              <span className="text-xs text-slate-500 uppercase font-semibold">Total</span>
            </div>
          </div>
          <div className="mt-4 space-y-2">
            {statusData.map((item) => (
              <div key={item.name} className="flex items-center justify-between text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }}></div>
                  <span className="text-slate-600">{item.name}</span>
                </div>
                <span className="font-bold text-slate-900">{item.value}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Tickets by Priority */}
        <div className="lg:col-span-1 bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
          <h2 className="font-bold text-slate-900 mb-1">Prioridade dos Chamados</h2>
          <p className="text-sm text-slate-500 mb-8">Nível de criticidade da demanda</p>
          <div className="h-[250px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={priorityData} layout="vertical">
                <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke="#f1f5f9" />
                <XAxis type="number" hide />
                <YAxis 
                  dataKey="name" 
                  type="category" 
                  axisLine={false} 
                  tickLine={false}
                  tick={{ fill: '#64748b', fontSize: 12 }}
                  width={70}
                />
                <Tooltip 
                  cursor={{ fill: '#f8fafc' }}
                  contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }}
                />
                <Bar 
                  dataKey="total" 
                  fill="#3b82f6" 
                  radius={[0, 4, 4, 0]} 
                  barSize={20}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Performance Summary */}
        <div className="lg:col-span-2 bg-slate-900 rounded-2xl p-8 text-white shadow-xl relative overflow-hidden">
          <div className="relative z-10">
            <div className="flex items-center gap-2 text-blue-400 mb-4">
              <TrendingUp size={20} />
              <span className="text-sm font-bold uppercase tracking-wider">Performance da Equipe</span>
            </div>
            <h2 className="text-3xl font-bold mb-6">Sua equipe está 15% mais rápida esta semana.</h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              <div>
                <p className="text-slate-400 text-sm mb-1">Satisfação</p>
                <p className="text-2xl font-bold">4.8/5.0</p>
                <div className="w-full bg-slate-800 h-1.5 rounded-full mt-2">
                  <div className="bg-blue-500 h-full w-[96%]"></div>
                </div>
              </div>
              <div>
                <p className="text-slate-400 text-sm mb-1">Primeira Resposta</p>
                <p className="text-2xl font-bold">12 min</p>
                <div className="w-full bg-slate-800 h-1.5 rounded-full mt-2">
                  <div className="bg-emerald-500 h-full w-[88%]"></div>
                </div>
              </div>
              <div>
                <p className="text-slate-400 text-sm mb-1">Backlog</p>
                <p className="text-2xl font-bold">14 chamados</p>
                <div className="w-full bg-slate-800 h-1.5 rounded-full mt-2">
                  <div className="bg-amber-500 h-full w-[45%]"></div>
                </div>
              </div>
            </div>

            <button 
              onClick={() => navigate('/reports')}
              className="mt-8 bg-white text-slate-900 px-6 py-3 rounded-xl font-bold text-sm hover:bg-slate-100 transition-all"
            >
              Ver Relatório Detalhado
            </button>
          </div>
          
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 blur-3xl rounded-full -mr-32 -mt-32"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-emerald-500/10 blur-3xl rounded-full -ml-32 -mb-32"></div>
        </div>
      </div>
    </div>
  );
}
