import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Ticket, 
  PlusCircle, 
  Building2, 
  Briefcase, 
  Users, 
  BarChart3, 
  ShieldCheck, 
  Settings,
  Menu,
  X,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import { cn } from '../lib/utils';

interface SidebarProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const menuGroups = [
  {
    title: 'Lançamentos',
    items: [
      { name: 'Dashboard', path: '/', icon: LayoutDashboard },
      { name: 'Tickets', path: '/tickets', icon: Ticket },
      { name: 'Novo Ticket', path: '/tickets/new', icon: PlusCircle },
    ]
  },
  {
    title: 'Cadastros',
    items: [
      { name: 'Empresas', path: '/companies', icon: Building2 },
      { name: 'Cargos', path: '/roles', icon: Briefcase },
      { name: 'Usuários', path: '/users', icon: Users },
    ]
  },
  {
    title: 'Sistema',
    items: [
      { name: 'Relatórios', path: '/reports', icon: BarChart3 },
      { name: 'Auditoria', path: '/audit', icon: ShieldCheck },
      { name: 'Configurações', path: '/settings', icon: Settings },
    ]
  }
];

export function Sidebar({ isOpen, setIsOpen }: SidebarProps) {
  const location = useLocation();
  const [isCollapsed, setIsCollapsed] = useState(false);

  // Close sidebar on mobile when route changes
  useEffect(() => {
    if (window.innerWidth < 1024) {
      setIsOpen(false);
    }
  }, [location.pathname, setIsOpen]);

  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-slate-900/50 backdrop-blur-sm z-40 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside 
        className={cn(
          "fixed inset-y-0 left-0 z-50 flex flex-col bg-white border-r border-slate-200 transition-all duration-300 ease-in-out",
          isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0",
          isCollapsed ? "w-20" : "w-64"
        )}
      >
        {/* Header */}
        <div className="h-16 flex items-center justify-between px-6 border-bottom border-slate-100">
          <div className={cn("flex items-center gap-3 transition-opacity duration-300", isCollapsed ? "opacity-0 invisible w-0" : "opacity-100 visible")}>
            <div className="w-8 h-8 bg-brand-600 rounded-lg flex items-center justify-center">
              <Ticket className="text-white w-5 h-5" />
            </div>
            <span className="font-bold text-xl tracking-tight text-slate-900">ATENDIFY</span>
          </div>
          
          <button 
            onClick={() => setIsCollapsed(!isCollapsed)}
            className="hidden lg:flex p-1.5 rounded-lg hover:bg-slate-100 text-slate-500 transition-colors"
          >
            {isCollapsed ? <ChevronRight size={20} /> : <ChevronLeft size={20} />}
          </button>

          <button 
            onClick={() => setIsOpen(false)}
            className="lg:hidden p-1.5 rounded-lg hover:bg-slate-100 text-slate-500"
          >
            <X size={20} />
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto py-6 px-3 space-y-8 scrollbar-hide">
          {menuGroups.map((group) => (
            <div key={group.title} className="space-y-2">
              {!isCollapsed && (
                <h3 className="px-3 text-xs font-semibold text-slate-400 uppercase tracking-wider">
                  {group.title}
                </h3>
              )}
              <div className="space-y-1">
                {group.items.map((item) => (
                  <NavLink
                    key={item.path}
                    to={item.path}
                    className={({ isActive }) => cn(
                      "flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all duration-200 group",
                      isActive 
                        ? "bg-brand-50 text-brand-700 font-medium" 
                        : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                    )}
                    title={isCollapsed ? item.name : ""}
                  >
                    <item.icon className={cn(
                      "w-5 h-5 shrink-0 transition-colors",
                      location.pathname === item.path ? "text-brand-600" : "text-slate-400 group-hover:text-slate-600"
                    )} />
                    {!isCollapsed && <span className="truncate">{item.name}</span>}
                  </NavLink>
                ))}
              </div>
            </div>
          ))}
        </nav>

        {/* Footer */}
        <div className="p-4 border-t border-slate-100">
          <div className={cn(
            "flex items-center gap-3 p-2 rounded-xl transition-all",
            isCollapsed ? "justify-center" : ""
          )}>
            <div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center shrink-0">
              <Users size={16} className="text-slate-600" />
            </div>
            {!isCollapsed && (
              <div className="flex flex-col min-w-0">
                <span className="text-sm font-medium text-slate-900 truncate">Admin User</span>
                <span className="text-xs text-slate-500 truncate">admin@atendify.com</span>
              </div>
            )}
          </div>
        </div>
      </aside>
    </>
  );
}
