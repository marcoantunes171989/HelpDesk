import React from 'react';
import { 
  Settings as SettingsIcon, 
  User, 
  Bell, 
  Shield, 
  Globe, 
  Mail,
  Smartphone,
  CreditCard
} from 'lucide-react';

export function Settings() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-slate-900">Configurações</h1>
        <p className="text-slate-500">Gerencie as preferências da sua conta e da plataforma.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Sidebar Nav */}
        <div className="lg:col-span-1 space-y-1">
          {[
            { name: 'Perfil', icon: User, active: true },
            { name: 'Notificações', icon: Bell, active: false },
            { name: 'Segurança', icon: Shield, active: false },
            { name: 'Idioma e Região', icon: Globe, active: false },
            { name: 'Email', icon: Mail, active: false },
            { name: 'Dispositivos', icon: Smartphone, active: false },
            { name: 'Faturamento', icon: CreditCard, active: false },
          ].map((item) => (
            <button
              key={item.name}
              className={`w-full flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-medium transition-all ${
                item.active 
                  ? 'bg-brand-50 text-brand-700' 
                  : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
              }`}
            >
              <item.icon size={18} />
              {item.name}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="lg:col-span-3 space-y-6">
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
            <div className="p-6 border-b border-slate-100">
              <h2 className="font-semibold text-slate-900">Informações do Perfil</h2>
              <p className="text-sm text-slate-500">Atualize sua foto e detalhes pessoais.</p>
            </div>
            <div className="p-6 space-y-6">
              <div className="flex items-center gap-6">
                <div className="w-20 h-20 rounded-2xl bg-brand-100 flex items-center justify-center text-brand-700 font-bold text-2xl">
                  A
                </div>
                <div className="space-y-2">
                  <div className="flex gap-2">
                    <button className="px-4 py-2 bg-brand-600 text-white rounded-xl text-xs font-semibold hover:bg-brand-700 transition-colors">
                      Alterar Foto
                    </button>
                    <button className="px-4 py-2 bg-white border border-slate-200 text-slate-600 rounded-xl text-xs font-semibold hover:bg-slate-50 transition-colors">
                      Remover
                    </button>
                  </div>
                  <p className="text-xs text-slate-400">JPG, GIF ou PNG. Tamanho máximo de 2MB.</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700">Nome Completo</label>
                  <input 
                    type="text" 
                    defaultValue="Admin Atendify"
                    className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700">Email Profissional</label>
                  <input 
                    type="email" 
                    defaultValue="admin@atendify.com"
                    className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700">Cargo</label>
                  <input 
                    type="text" 
                    defaultValue="Administrador"
                    className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700">Telefone</label>
                  <input 
                    type="text" 
                    defaultValue="+55 (11) 99999-9999"
                    className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 transition-all"
                  />
                </div>
              </div>
            </div>
            <div className="px-6 py-4 bg-slate-50 border-t border-slate-100 flex justify-end">
              <button className="px-6 py-2.5 bg-brand-600 text-white rounded-xl text-sm font-semibold hover:bg-brand-700 transition-all">
                Salvar Alterações
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
