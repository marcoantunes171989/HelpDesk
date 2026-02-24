import React from 'react';
import { 
  Users, 
  Plus, 
  Search, 
  Mail, 
  Shield, 
  MoreHorizontal,
  Circle
} from 'lucide-react';
import { cn } from '../lib/utils';

const users = [
  { id: 1, name: 'Admin Atendify', email: 'admin@atendify.com', role: 'Administrador', company: 'Atendify', status: 'online' },
  { id: 2, name: 'João Silva', email: 'joao@techsolutions.com', role: 'Cliente', company: 'Tech Solutions', status: 'offline' },
  { id: 3, name: 'Maria Souza', email: 'maria@globalcorp.com', role: 'Cliente', company: 'Global Corp', status: 'online' },
  { id: 4, name: 'Pedro Santos', email: 'pedro@alphaltda.com', role: 'Cliente', company: 'Alpha Ltda', status: 'away' },
  { id: 5, name: 'Ana Costa', email: 'ana@betainc.com', role: 'Cliente', company: 'Beta Inc', status: 'offline' },
];

export function UserList() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 dark:text-white">Usuários</h1>
          <p className="text-slate-500 dark:text-slate-400">Gerencie os usuários e permissões do sistema.</p>
        </div>
        <button className="bg-brand-600 text-white px-4 py-2.5 rounded-xl font-semibold text-sm hover:bg-brand-700 transition-colors flex items-center justify-center gap-2">
          <Plus size={18} />
          Novo Usuário
        </button>
      </div>

      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden transition-colors">
        <div className="p-4 border-b border-slate-100 dark:border-slate-800 flex flex-col md:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 dark:text-slate-500" size={18} />
            <input 
              type="text" 
              placeholder="Buscar por nome, email ou empresa..." 
              className="w-full pl-10 pr-4 py-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 transition-all"
            />
          </div>
          <div className="flex items-center gap-2">
            <select className="px-4 py-2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl text-sm font-medium text-slate-700 dark:text-slate-300 hover:bg-white dark:hover:bg-slate-800 focus:outline-none transition-colors">
              <option>Todos os Cargos</option>
              <option>Administrador</option>
              <option>Atendente</option>
              <option>Cliente</option>
            </select>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-white border-b border-slate-200">
                <th className="px-6 py-4 text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Usuário</th>
                <th className="px-6 py-4 text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Empresa</th>
                <th className="px-6 py-4 text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Cargo</th>
                <th className="px-6 py-4 text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Status</th>
                <th className="px-6 py-4 text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider text-right">Ações</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
              {users.map((user) => (
                <tr key={user.id} className="hover:bg-white dark:hover:bg-slate-800/50 transition-colors group">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-brand-100 dark:bg-brand-900/30 flex items-center justify-center text-brand-700 dark:text-brand-400 font-bold text-sm">
                        {user.name.charAt(0)}
                      </div>
                      <div className="flex flex-col min-w-0">
                        <span className="text-sm font-medium text-slate-900 dark:text-white truncate">{user.name}</span>
                        <span className="text-xs text-slate-500 dark:text-slate-400 truncate">{user.email}</span>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-sm text-slate-600 dark:text-slate-400">{user.company}</span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-1.5 text-sm text-slate-600 dark:text-slate-400">
                      <Shield size={14} className="text-slate-400 dark:text-slate-500" />
                      {user.role}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <Circle size={8} className={cn(
                        "fill-current",
                        user.status === 'online' ? "text-blue-600 dark:text-blue-500" : 
                        user.status === 'away' ? "text-amber-500 dark:text-amber-400" : "text-slate-300 dark:text-slate-600"
                      )} />
                      <span className="text-xs text-slate-500 dark:text-slate-400 capitalize">{user.status}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button className="p-2 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-800 text-slate-400 dark:text-slate-500 hover:text-slate-600 dark:hover:text-slate-300 transition-colors">
                      <MoreHorizontal size={18} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
