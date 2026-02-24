import React from 'react';
import { 
  Plus, 
  Ticket, 
  Send, 
  Paperclip, 
  AlertCircle,
  Building2,
  User,
  Tag
} from 'lucide-react';

export function TicketForm() {
  return (
    <div className="max-w-3xl mx-auto space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-slate-900 dark:text-white">Novo Ticket</h1>
        <p className="text-slate-500 dark:text-slate-400">Preencha as informações abaixo para abrir um novo chamado.</p>
      </div>

      <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden transition-colors">
        <div className="p-6 lg:p-8 space-y-6">
          {/* Title */}
          <div className="space-y-2">
            <label className="text-sm font-semibold text-slate-700 dark:text-slate-300 flex items-center gap-2">
              <Ticket size={16} className="text-slate-400 dark:text-slate-500" />
              Assunto do Chamado
            </label>
            <input 
              type="text" 
              placeholder="Ex: Erro ao acessar o módulo financeiro"
              className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 transition-all"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Company */}
            <div className="space-y-2">
              <label className="text-sm font-semibold text-slate-700 dark:text-slate-300 flex items-center gap-2">
                <Building2 size={16} className="text-slate-400 dark:text-slate-500" />
                Empresa
              </label>
              <select className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 transition-all appearance-none">
                <option>Selecione a empresa</option>
                <option>Tech Solutions</option>
                <option>Global Corp</option>
                <option>Alpha Ltda</option>
              </select>
            </div>

            {/* Priority */}
            <div className="space-y-2">
              <label className="text-sm font-semibold text-slate-700 dark:text-slate-300 flex items-center gap-2">
                <AlertCircle size={16} className="text-slate-400 dark:text-slate-500" />
                Prioridade
              </label>
              <select className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 transition-all appearance-none">
                <option>Baixa</option>
                <option>Média</option>
                <option>Alta</option>
                <option>Urgente</option>
              </select>
            </div>
          </div>

          {/* Description */}
          <div className="space-y-2">
            <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">Descrição Detalhada</label>
            <textarea 
              rows={6}
              placeholder="Descreva o problema ou solicitação com o máximo de detalhes possível..."
              className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 transition-all resize-none"
            ></textarea>
          </div>

          {/* Attachments */}
          <div className="p-4 border-2 border-dashed border-slate-200 dark:border-slate-800 rounded-2xl bg-slate-50 dark:bg-slate-800/50 flex flex-col items-center justify-center gap-2 cursor-pointer hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
            <Paperclip className="text-slate-400 dark:text-slate-500" size={24} />
            <span className="text-sm font-medium text-slate-600 dark:text-slate-400">Anexar arquivos ou imagens</span>
            <span className="text-xs text-slate-400 dark:text-slate-500">Arraste e solte ou clique para selecionar</span>
          </div>
        </div>

        <div className="px-6 py-4 bg-slate-50 dark:bg-slate-800/50 border-t border-slate-200 dark:border-slate-800 flex items-center justify-end gap-3">
          <button className="px-6 py-2.5 rounded-xl text-sm font-semibold text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
            Cancelar
          </button>
          <button className="px-8 py-2.5 bg-brand-600 text-white rounded-xl text-sm font-semibold hover:bg-brand-700 shadow-lg shadow-brand-200 dark:shadow-none transition-all flex items-center gap-2">
            <Send size={18} />
            Abrir Chamado
          </button>
        </div>
      </div>
    </div>
  );
}
