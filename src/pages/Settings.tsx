import React, { useState } from 'react';
import { 
  Settings as SettingsIcon, 
  User, 
  Bell, 
  Shield, 
  Globe, 
  Mail,
  Smartphone,
  CreditCard,
  Palette,
  Check,
  Moon,
  Sun,
  Monitor
} from 'lucide-react';
import { cn } from '../lib/utils';
import { getTheme, setTheme, Theme } from '../lib/theme';
import { getLanguage, setLanguage, Language, t } from '../lib/i18n';

type SettingsSection = 'perfil' | 'notificacoes' | 'seguranca' | 'idioma' | 'email' | 'dispositivos' | 'faturamento' | 'tema';

export function Settings() {
  const [activeSection, setActiveSection] = useState<SettingsSection>('perfil');
  const [currentTheme, setCurrentTheme] = useState<Theme>(getTheme());
  const [currentLang, setCurrentLang] = useState<Language>(getLanguage());

  const handleThemeChange = (theme: Theme) => {
    setTheme(theme);
    setCurrentTheme(theme);
  };

  const handleLanguageChange = (lang: Language) => {
    setLanguage(lang);
    setCurrentLang(lang);
  };

  const navItems = [
    { id: 'perfil', name: t('profile'), icon: User },
    { id: 'notificacoes', name: t('notifications'), icon: Bell },
    { id: 'seguranca', name: t('security'), icon: Shield },
    { id: 'idioma', name: t('language'), icon: Globe },
    { id: 'email', name: t('email'), icon: Mail },
    { id: 'dispositivos', name: t('devices'), icon: Smartphone },
    { id: 'faturamento', name: t('billing'), icon: CreditCard },
    { id: 'tema', name: t('theme'), icon: Palette },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-slate-900">{t('settings')}</h1>
        <p className="text-slate-500">Gerencie as preferências da sua conta e da plataforma.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Sidebar Nav */}
        <div className="lg:col-span-1 space-y-1">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveSection(item.id as SettingsSection)}
              className={cn(
                "w-full flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-medium transition-all",
                activeSection === item.id 
                  ? 'bg-brand-50 text-brand-700' 
                  : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
              )}
            >
              <item.icon size={18} />
              {item.name}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="lg:col-span-3 space-y-6">
          {activeSection === 'perfil' && (
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
                  {t('saveChanges')}
                </button>
              </div>
            </div>
          )}

          {activeSection === 'tema' && (
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
              <div className="p-6 border-b border-slate-100">
                <h2 className="font-semibold text-slate-900">{t('theme')}</h2>
                <p className="text-sm text-slate-500">Escolha como o Atendify deve aparecer para você.</p>
              </div>
              <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-4">
                {[
                  { id: 'light', name: t('light'), icon: Sun, desc: 'Visual limpo e tradicional' },
                  { id: 'dark', name: t('dark'), icon: Moon, desc: 'Ideal para ambientes escuros' },
                  { id: 'system', name: t('system'), icon: Monitor, desc: 'Acompanha as cores do seu dispositivo' },
                ].map((theme) => (
                  <button
                    key={theme.id}
                    onClick={() => handleThemeChange(theme.id as Theme)}
                    className={cn(
                      "flex flex-col items-start p-4 rounded-2xl border-2 transition-all text-left group",
                      "hover:border-brand-200 hover:bg-brand-50/50",
                      currentTheme === theme.id ? "border-brand-600 bg-brand-50/50" : "border-slate-100 bg-white"
                    )}
                  >
                    <div className={cn(
                      "w-10 h-10 rounded-xl flex items-center justify-center mb-4 transition-colors",
                      currentTheme === theme.id ? "bg-brand-600 text-white" : "bg-slate-100 text-slate-500 group-hover:bg-brand-100 group-hover:text-brand-600"
                    )}>
                      <theme.icon size={20} />
                    </div>
                    <div className="flex items-center justify-between w-full">
                      <span className="font-bold text-slate-900">{theme.name}</span>
                      {currentTheme === theme.id && <Check size={16} className="text-brand-600" />}
                    </div>
                    <p className="text-xs text-slate-500 mt-1">{theme.desc}</p>
                  </button>
                ))}
              </div>
            </div>
          )}

          {activeSection === 'idioma' && (
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
              <div className="p-6 border-b border-slate-100">
                <h2 className="font-semibold text-slate-900">{t('language')}</h2>
                <p className="text-sm text-slate-500">Selecione o idioma da interface e formato de data.</p>
              </div>
              <div className="p-6 space-y-4">
                {[
                  { id: 'pt-BR', name: 'Português - Brazil', flag: '🇧🇷' },
                  { id: 'en-US', name: 'English Americano', flag: '🇺🇸' },
                  { id: 'es-ES', name: 'Espanhol', flag: '🇪🇸' },
                ].map((lang) => (
                  <button
                    key={lang.id}
                    onClick={() => handleLanguageChange(lang.id as Language)}
                    className={cn(
                      "w-full flex items-center justify-between p-4 rounded-2xl border-2 transition-all text-left",
                      "hover:border-brand-200 hover:bg-brand-50/50",
                      currentLang === lang.id ? "border-brand-600 bg-brand-50/50" : "border-slate-100 bg-white"
                    )}
                  >
                    <div className="flex items-center gap-4">
                      <span className="text-2xl">{lang.flag}</span>
                      <span className="font-bold text-slate-900">{lang.name}</span>
                    </div>
                    {currentLang === lang.id && <Check size={18} className="text-brand-600" />}
                  </button>
                ))}
              </div>
            </div>
          )}

          {activeSection !== 'perfil' && activeSection !== 'tema' && activeSection !== 'idioma' && (
            <div className="bg-white p-12 rounded-2xl border border-slate-200 shadow-sm flex flex-col items-center justify-center text-center">
              <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mb-4">
                <SettingsIcon className="text-slate-400" size={32} />
              </div>
              <h2 className="text-xl font-bold text-slate-900 mb-2">Em Desenvolvimento</h2>
              <p className="text-slate-500 max-w-xs">Esta seção de configurações estará disponível em breve.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
