import React from 'react';
import { 
  Building2, 
  Send, 
  Globe, 
  Mail, 
  Phone, 
  MapPin,
  Briefcase
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export function CompanyForm() {
  const navigate = useNavigate();

  return (
    <div className="max-w-3xl mx-auto space-y-8">
      <div className="flex items-center gap-4">
        <button 
          onClick={() => navigate('/companies')}
          className="p-2 rounded-xl hover:bg-slate-100 text-slate-500 transition-colors"
        >
          <Building2 size={20} />
        </button>
        <div>
          <h1 className="text-2xl font-bold text-slate-900 dark:text-white">Nova Empresa</h1>
          <p className="text-slate-500 dark:text-slate-400">Cadastre uma nova empresa parceira no sistema.</p>
        </div>
      </div>

      <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden transition-colors">
        <div className="p-6 lg:p-8 space-y-6">
          {/* Company Name */}
          <div className="space-y-2">
            <label className="text-sm font-semibold text-slate-700 dark:text-slate-300 flex items-center gap-2">
              <Building2 size={16} className="text-slate-400 dark:text-slate-500" />
              Nome da Empresa
            </label>
            <input 
              type="text" 
              placeholder="Ex: Tech Solutions Ltda"
              className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 transition-all"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Industry */}
            <div className="space-y-2">
              <label className="text-sm font-semibold text-slate-700 dark:text-slate-300 flex items-center gap-2">
                <Briefcase size={16} className="text-slate-400 dark:text-slate-500" />
                Setor de Atuação
              </label>
              <select className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 transition-all appearance-none">
                <option>Selecione o setor</option>
                <option>Tecnologia</option>
                <option>Logística</option>
                <option>Varejo</option>
                <option>Educação</option>
                <option>Saúde</option>
                <option>Outros</option>
              </select>
            </div>

            {/* Website */}
            <div className="space-y-2">
              <label className="text-sm font-semibold text-slate-700 dark:text-slate-300 flex items-center gap-2">
                <Globe size={16} className="text-slate-400 dark:text-slate-500" />
                Website
              </label>
              <input 
                type="url" 
                placeholder="https://www.empresa.com.br"
                className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 transition-all"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Email */}
            <div className="space-y-2">
              <label className="text-sm font-semibold text-slate-700 dark:text-slate-300 flex items-center gap-2">
                <Mail size={16} className="text-slate-400 dark:text-slate-500" />
                Email de Contato
              </label>
              <input 
                type="email" 
                placeholder="contato@empresa.com.br"
                className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 transition-all"
              />
            </div>

            {/* Phone */}
            <div className="space-y-2">
              <label className="text-sm font-semibold text-slate-700 dark:text-slate-300 flex items-center gap-2">
                <Phone size={16} className="text-slate-400 dark:text-slate-500" />
                Telefone
              </label>
              <input 
                type="text" 
                placeholder="+55 (11) 0000-0000"
                className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 transition-all"
              />
            </div>
          </div>

          {/* Address */}
          <div className="space-y-2">
            <label className="text-sm font-semibold text-slate-700 dark:text-slate-300 flex items-center gap-2">
              <MapPin size={16} className="text-slate-400 dark:text-slate-500" />
              Endereço
            </label>
            <input 
              type="text" 
              placeholder="Rua, Número, Bairro, Cidade - UF"
              className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 transition-all"
            />
          </div>
        </div>

        <div className="px-6 py-4 bg-slate-50 dark:bg-slate-800/50 border-t border-slate-200 dark:border-slate-800 flex items-center justify-end gap-3">
          <button 
            onClick={() => navigate('/companies')}
            className="px-6 py-2.5 rounded-xl text-sm font-semibold text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          >
            Cancelar
          </button>
          <button className="px-8 py-2.5 bg-brand-600 text-white rounded-xl text-sm font-semibold hover:bg-brand-700 shadow-lg shadow-brand-200 dark:shadow-none transition-all flex items-center gap-2">
            <Send size={18} />
            Salvar Empresa
          </button>
        </div>
      </div>
    </div>
  );
}
