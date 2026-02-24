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
  X,
  ChevronLeft,
  ChevronRight,
  ChevronDown
} from 'lucide-react';
import { cn } from '../lib/utils';
import { motion, AnimatePresence } from 'motion/react';
import { t } from '../lib/i18n';

interface SidebarProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  isCollapsed: boolean;
  setIsCollapsed: (isCollapsed: boolean) => void;
}

export function Sidebar({ isOpen, setIsOpen, isCollapsed, setIsCollapsed }: SidebarProps) {
  const location = useLocation();
  const [expandedGroup, setExpandedGroup] = useState<string | null>('lancamentos');

  const menuGroups = [
    {
      id: 'lancamentos',
      title: t('lancamentos'),
      items: [
        { name: t('dashboard'), path: '/', icon: LayoutDashboard },
        { name: t('tickets'), path: '/tickets', icon: Ticket },
        { name: t('newTicket'), path: '/tickets/new', icon: PlusCircle },
      ]
    },
    {
      id: 'cadastros',
      title: t('cadastros'),
      items: [
        { name: t('companies'), path: '/companies', icon: Building2 },
        { name: t('roles'), path: '/roles', icon: Briefcase },
        { name: t('users'), path: '/users', icon: Users },
      ]
    },
    {
      id: 'sistema',
      title: t('sistema'),
      items: [
        { name: t('reports'), path: '/reports', icon: BarChart3 },
        { name: t('audit'), path: '/audit', icon: ShieldCheck },
        { name: t('settings'), path: '/settings', icon: Settings },
      ]
    }
  ];

  const toggleGroup = (groupId: string) => {
    setExpandedGroup(prev => prev === groupId ? null : groupId);
  };

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
          "fixed inset-y-0 left-0 z-50 flex flex-col bg-white dark:bg-slate-900 border-r border-slate-200 dark:border-slate-800 transition-all duration-300 ease-in-out",
          isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0",
          isCollapsed ? "w-16" : "w-52"
        )}
      >
        {/* Header */}
        <div className="h-16 flex items-center justify-between px-4 border-b border-slate-100 dark:border-slate-800 shrink-0">
          <div className={cn("flex items-center gap-2 transition-all duration-300 overflow-hidden", isCollapsed ? "w-0 opacity-0" : "w-auto opacity-100")}>
            <div className="w-7 h-7 bg-brand-600 rounded-lg flex items-center justify-center shrink-0">
              <Ticket className="text-white w-4 h-4" />
            </div>
            <span className="font-bold text-lg tracking-tight text-slate-900 dark:text-white whitespace-nowrap">ATENDIFY</span>
          </div>
          
          <button 
            onClick={() => setIsCollapsed(!isCollapsed)}
            className="hidden lg:flex p-1 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-500 dark:text-slate-400 transition-colors shrink-0"
          >
            {isCollapsed ? <ChevronRight size={18} /> : <ChevronLeft size={18} />}
          </button>

          <button 
            onClick={() => setIsOpen(false)}
            className="lg:hidden p-1 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-500 dark:text-slate-400 shrink-0"
          >
            <X size={18} />
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto py-4 px-2 space-y-4 scrollbar-hide">
          {menuGroups.map((group) => (
            <div key={group.id} className="space-y-1">
              {!isCollapsed ? (
                <button 
                  onClick={() => toggleGroup(group.id)}
                  className="w-full flex items-center justify-between px-2 py-1 text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider hover:text-slate-600 dark:hover:text-slate-300 transition-colors"
                >
                  <span>{group.title}</span>
                  <ChevronDown 
                    size={12} 
                    className={cn("transition-transform duration-200", expandedGroup === group.id ? "" : "-rotate-90")} 
                  />
                </button>
              ) : (
                <div className="h-px bg-slate-100 dark:bg-slate-800 mx-2 my-4" />
              )}
              
              <AnimatePresence initial={false}>
                {(isCollapsed || expandedGroup === group.id) && (
                  <motion.div
                    initial={isCollapsed ? false : "collapsed"}
                    animate="expanded"
                    exit="collapsed"
                    variants={{
                      expanded: { opacity: 1, height: "auto", marginBottom: 4 },
                      collapsed: { opacity: 0, height: 0, marginBottom: 0 }
                    }}
                    transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
                    className="space-y-0.5 overflow-hidden"
                  >
                    {group.items.map((item) => (
                      <NavLink
                        key={item.path}
                        to={item.path}
                        className={({ isActive }) => cn(
                          "flex items-center gap-2.5 px-2.5 py-2 rounded-lg transition-all duration-200 group",
                          isActive 
                            ? "bg-brand-50 dark:bg-brand-900/20 text-brand-700 dark:text-brand-400 font-medium" 
                            : "text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-slate-200",
                          isCollapsed ? "justify-center px-0" : ""
                        )}
                        title={isCollapsed ? item.name : ""}
                      >
                        <item.icon className={cn(
                          "w-4 h-4 shrink-0 transition-colors",
                          location.pathname === item.path ? "text-brand-600 dark:text-brand-500" : "text-slate-400 dark:text-slate-500 group-hover:text-slate-600 dark:group-hover:text-slate-300"
                        )} />
                        {!isCollapsed && <span className="text-xs truncate">{item.name}</span>}
                      </NavLink>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </nav>

        {/* Footer */}
        <div className="p-3 border-t border-slate-100 dark:border-slate-800 shrink-0">
          <div className={cn(
            "flex items-center gap-2.5 p-1.5 rounded-lg transition-all",
            isCollapsed ? "justify-center" : ""
          )}>
            <div className="w-7 h-7 rounded-full bg-slate-200 dark:bg-slate-800 flex items-center justify-center shrink-0">
              <Users size={14} className="text-slate-600 dark:text-slate-400" />
            </div>
            {!isCollapsed && (
              <div className="flex flex-col min-w-0">
                <span className="text-xs font-medium text-slate-900 dark:text-slate-200 truncate">Admin User</span>
                <span className="text-[10px] text-slate-500 dark:text-slate-500 truncate">admin@atendify.com</span>
              </div>
            )}
          </div>
        </div>
      </aside>
    </>
  );
}
