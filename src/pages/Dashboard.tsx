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
  Filter,
  Users,
  Building2,
  Activity,
  Zap
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
import { t } from '../lib/i18n';
import { cn } from '../lib/utils';

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
  { name: 'Abertos', value: 24, color: '#2563eb' }, // Blue 600
  { name: 'Em Atendimento', value: 12, color: '#f59e0b' }, // Amber 500
  { name: 'Resolvidos', value: 48, color: '#10b981' }, // Emerald 500
  { name: 'Urgentes', value: 3, color: '#ef4444' }, // Red 500
];

const priorityData = [
  { name: 'Baixa', total: 15, fill: '#94a3b8' },
  { name: 'Média', total: 25, fill: '#3b82f6' },
  { name: 'Alta', total: 18, fill: '#f59e0b' },
  { name: 'Urgente', total: 5, fill: '#ef4444' },
];

const periodData = {
  hoje: {
    stats: [
      { label: t('totalTickets'), value: '12', change: '+5%', trend: 'up', icon: Ticket, color: 'text-blue-600', bg: 'bg-blue-50' },
      { label: t('avgResponse'), value: '45m', change: '-10%', trend: 'up', icon: Clock, color: 'text-amber-600', bg: 'bg-amber-50' },
      { label: t('resolutionRate'), value: '98%', change: '+1.2%', trend: 'up', icon: CheckCircle2, color: 'text-emerald-600', bg: 'bg-emerald-50' },
      { label: t('slaCompliance'), value: '100%', change: '0%', trend: 'up', icon: Zap, color: 'text-indigo-600', bg: 'bg-indigo-50' },
    ],
    volume: [
      { name: '08:00', tickets: 2, resolved: 1 },
      { name: '10:00', tickets: 4, resolved: 3 },
      { name: '12:00', tickets: 3, resolved: 4 },
      { name: '14:00', tickets: 5, resolved: 4 },
      { name: '16:00', tickets: 6, resolved: 5 },
      { name: '18:00', tickets: 2, resolved: 3 },
    ],
    status: [
      { name: 'Abertos', value: 5, color: '#2563eb' },
      { name: 'Em Atendimento', value: 3, color: '#f59e0b' },
      { name: 'Resolvidos', value: 4, color: '#10b981' },
      { name: 'Urgentes', value: 0, color: '#ef4444' },
    ],
    priority: [
      { name: 'Baixa', total: 2, fill: '#94a3b8' },
      { name: 'Média', total: 4, fill: '#3b82f6' },
      { name: 'Alta', total: 2, fill: '#f59e0b' },
      { name: 'Urgente', total: 0, fill: '#ef4444' },
    ]
  },
  semana: {
    stats: [
      { label: t('totalTickets'), value: '87', change: '+12%', trend: 'up', icon: Ticket, color: 'text-blue-600', bg: 'bg-blue-50' },
      { label: t('avgResponse'), value: '1h 24m', change: '-15%', trend: 'up', icon: Clock, color: 'text-amber-600', bg: 'bg-amber-50' },
      { label: t('resolutionRate'), value: '94.2%', change: '+2.4%', trend: 'up', icon: CheckCircle2, color: 'text-emerald-600', bg: 'bg-emerald-50' },
      { label: t('slaCompliance'), value: '98.5%', change: '+0.5%', trend: 'up', icon: Zap, color: 'text-indigo-600', bg: 'bg-indigo-50' },
    ],
    volume: [
      { name: 'Seg', tickets: 12, resolved: 10 },
      { name: 'Ter', tickets: 19, resolved: 15 },
      { name: 'Qua', tickets: 15, resolved: 18 },
      { name: 'Qui', tickets: 22, resolved: 20 },
      { name: 'Sex', tickets: 30, resolved: 25 },
      { name: 'Sáb', tickets: 10, resolved: 12 },
      { name: 'Dom', tickets: 5, resolved: 4 },
    ],
    status: statusData,
    priority: priorityData
  },
  mes: {
    stats: [
      { label: t('totalTickets'), value: '342', change: '+8%', trend: 'up', icon: Ticket, color: 'text-blue-600', bg: 'bg-blue-50' },
      { label: t('avgResponse'), value: '1h 10m', change: '-5%', trend: 'up', icon: Clock, color: 'text-amber-600', bg: 'bg-amber-50' },
      { label: t('resolutionRate'), value: '92.5%', change: '+1.8%', trend: 'up', icon: CheckCircle2, color: 'text-emerald-600', bg: 'bg-emerald-50' },
      { label: t('slaCompliance'), value: '97.2%', change: '+0.2%', trend: 'up', icon: Zap, color: 'text-indigo-600', bg: 'bg-indigo-50' },
    ],
    volume: [
      { name: 'Sem 1', tickets: 80, resolved: 75 },
      { name: 'Sem 2', tickets: 95, resolved: 88 },
      { name: 'Sem 3', tickets: 85, resolved: 82 },
      { name: 'Sem 4', tickets: 110, resolved: 105 },
    ],
    status: statusData.map(s => ({ ...s, value: s.value * 4 })),
    priority: priorityData.map(p => ({ ...p, total: p.total * 4 }))
  }
};

const recentTickets = [
  { id: 'TK-1025', title: 'Erro no acesso ao sistema financeiro', company: 'Alpha Ltda', time: 'Há 2 horas', status: 'Aberto' },
  { id: 'TK-1024', title: 'Solicitação de novo hardware', company: 'Global Corp', time: 'Há 4 horas', status: 'Em Atendimento' },
  { id: 'TK-1023', title: 'Lentidão no banco de dados', company: 'Tech Solutions', time: 'Há 5 horas', status: 'Aberto' },
];

const companies = ['Todas as Empresas', 'Tech Solutions', 'Global Corp', 'Alpha Ltda', 'Beta Inc', 'Delta Services'];

// Helper to get filtered data based on period and company
const getFilteredData = (period: 'hoje' | 'semana' | 'mes', company: string) => {
  const baseData = periodData[period];
  
  // If "Todas as Empresas" is selected, return the base data
  if (company === 'Todas as Empresas') return baseData;

  // Otherwise, simulate filtered data by applying a deterministic multiplier based on company name
  // This ensures the data changes but remains consistent for the same selection
  const seed = company.length;
  const multiplier = 0.3 + (seed % 5) * 0.15; // Range approx 0.3 to 0.9

  return {
    stats: baseData.stats.map(s => {
      // Handle different value formats (numbers, percentages, time)
      let newValue = s.value;
      if (s.value.includes('%')) {
        const val = parseFloat(s.value);
        newValue = (val * (0.9 + (seed % 3) * 0.05)).toFixed(1) + '%';
      } else if (s.value.includes('h') || s.value.includes('m')) {
        // Keep time values mostly same or slightly varied
      } else {
        newValue = Math.floor(parseInt(s.value) * multiplier).toString();
      }
      return { ...s, value: newValue };
    }),
    volume: baseData.volume.map(v => ({
      ...v,
      tickets: Math.floor(v.tickets * multiplier),
      resolved: Math.floor(v.resolved * multiplier)
    })),
    status: baseData.status.map(s => ({
      ...s,
      value: Math.floor(s.value * multiplier)
    })),
    priority: baseData.priority.map(p => ({
      ...p,
      total: Math.floor(p.total * multiplier)
    }))
  };
};

export function Dashboard() {
  const navigate = useNavigate();
  const [period, setPeriod] = React.useState<'hoje' | 'semana' | 'mes'>('semana');
  const [selectedCompany, setSelectedCompany] = React.useState('Todas as Empresas');
  const [isFilterOpen, setIsFilterOpen] = React.useState(false);

  // Get data filtered by both criteria
  const currentData = React.useMemo(() => 
    getFilteredData(period, selectedCompany), 
    [period, selectedCompany]
  );

  const totalTickets = currentData.status.reduce((acc, curr) => acc + curr.value, 0);

  return (
    <div className="space-y-6 pb-10">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div className="space-y-1">
          <h1 className="text-2xl font-bold text-slate-900 tracking-tight">Dashboard de Gestão de Atendimento</h1>
          <p className="text-sm text-slate-500 font-medium">
            Monitore performance, SLA, resolução e volume de chamados para decisões mais rápidas.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <div className="flex bg-white border border-slate-200 rounded-xl p-1 shadow-sm">
            {(['hoje', 'semana', 'mes'] as const).map((p) => (
              <button 
                key={p}
                onClick={() => setPeriod(p)}
                className={cn(
                  "px-3 py-1.5 text-xs font-bold rounded-lg transition-all capitalize",
                  period === p ? "bg-slate-100 text-slate-900" : "text-slate-500 hover:text-slate-700"
                )}
              >
                {p === 'mes' ? 'Mês' : p}
              </button>
            ))}
          </div>
          
          <div className="relative">
            <button 
              onClick={() => setIsFilterOpen(!isFilterOpen)}
              className={cn(
                "flex items-center gap-2 p-2.5 bg-white border rounded-xl text-slate-500 hover:bg-slate-50 shadow-sm transition-all",
                selectedCompany !== 'Todas as Empresas' ? "border-brand-500 text-brand-600 bg-brand-50/50" : "border-slate-200"
              )}
            >
              <Filter size={18} />
              <span className="text-xs font-bold">
                {selectedCompany === 'Todas as Empresas' ? 'Empresas' : selectedCompany}
              </span>
            </button>

            {isFilterOpen && (
              <>
                <div 
                  className="fixed inset-0 z-40" 
                  onClick={() => setIsFilterOpen(false)}
                />
                <div className="absolute right-0 mt-2 w-56 bg-white border border-slate-200 rounded-2xl shadow-xl z-50 py-2 animate-in fade-in zoom-in duration-200">
                  <div className="px-4 py-2 border-b border-slate-100 mb-1">
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Filtrar por Empresa</span>
                  </div>
                  {companies.map((company) => (
                    <button
                      key={company}
                      onClick={() => {
                        setSelectedCompany(company);
                        setIsFilterOpen(false);
                      }}
                      className={cn(
                        "w-full text-left px-4 py-2 text-sm transition-colors",
                        selectedCompany === company 
                          ? "bg-brand-50 text-brand-700 font-bold" 
                          : "text-slate-600 hover:bg-slate-50"
                      )}
                    >
                      {company}
                    </button>
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Primary Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {currentData.stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
            className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md hover:border-slate-300 transition-all group"
          >
            <div className="flex items-center justify-between mb-2">
              <div className={cn("p-2 rounded-xl transition-colors", stat.bg)}>
                <stat.icon className={cn("w-4 h-4", stat.color)} />
              </div>
              <div className={cn(
                "flex items-center gap-1 px-2 py-0.5 rounded-lg text-[10px] font-bold",
                stat.trend === 'up' ? "bg-emerald-50 text-emerald-700" : "bg-rose-50 text-rose-700"
              )}>
                {stat.change}
                {stat.trend === 'up' ? <ArrowUpRight size={10} /> : <ArrowDownRight size={10} />}
              </div>
            </div>
            <div>
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">{stat.label}</p>
              <h3 className="text-xl font-bold text-slate-900 mt-0.5">{stat.value}</h3>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Top Row: Main Chart and Status Pie Chart */}
        <div className="lg:col-span-8">
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm h-full">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="text-lg font-bold text-slate-900">{t('performance')}</h2>
                <p className="text-xs text-slate-500 font-medium">Volume diário de tickets vs resoluções</p>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-blue-600"></div>
                  <span className="text-[10px] font-bold text-slate-500 uppercase">{t('statusComposition')}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500"></div>
                  <span className="text-[10px] font-bold text-slate-500 uppercase">{t('resolutionRate')}</span>
                </div>
              </div>
            </div>
            <div className="h-[250px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={currentData.volume} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                  <defs>
                    <linearGradient id="colorTickets" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#2563eb" stopOpacity={0.1}/>
                      <stop offset="95%" stopColor="#2563eb" stopOpacity={0}/>
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
                    tick={{ fill: '#94a3b8', fontSize: 11, fontWeight: 500 }}
                    dy={10}
                  />
                  <YAxis 
                    axisLine={false} 
                    tickLine={false} 
                    tick={{ fill: '#94a3b8', fontSize: 11, fontWeight: 500 }}
                  />
                  <Tooltip 
                    contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)', fontSize: '12px' }}
                  />
                  <Area 
                    type="monotone" 
                    dataKey="tickets" 
                    stroke="#2563eb" 
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
        </div>

        <div className="lg:col-span-4">
          {/* Status Pie Chart */}
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm h-full">
            <h2 className="text-sm font-bold text-slate-900 mb-1">Status dos Chamados</h2>
            <p className="text-[10px] text-slate-500 font-semibold uppercase tracking-wider mb-6">Composição do Atendimento</p>
            <div className="h-[180px] w-full relative">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={currentData.status}
                    cx="50%"
                    cy="50%"
                    innerRadius={65}
                    outerRadius={85}
                    paddingAngle={8}
                    dataKey="value"
                    stroke="none"
                  >
                    {currentData.status.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
              <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                <span className="text-3xl font-bold text-slate-900 tracking-tight">{totalTickets}</span>
                <span className="text-[10px] text-slate-400 uppercase font-bold tracking-widest">Total</span>
              </div>
            </div>
            <div className="mt-6 grid grid-cols-2 gap-3">
              {currentData.status.map((item) => (
                <div key={item.name} className="p-2.5 rounded-xl bg-slate-50 border border-slate-100">
                  <div className="flex items-center gap-1.5 mb-1">
                    <div className="w-2 h-2 rounded-full" style={{ backgroundColor: item.color }}></div>
                    <span className="text-[10px] font-bold text-slate-500 uppercase truncate">{item.name}</span>
                  </div>
                  <span className="text-sm font-bold text-slate-900">{item.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
