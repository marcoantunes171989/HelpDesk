import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Sidebar } from './Sidebar';
import { Menu, Bell, Search, User } from 'lucide-react';

export function Layout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50 flex">
      <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />
      
      <div className="flex-1 flex flex-col min-w-0 lg:pl-0 transition-all duration-300">
        {/* Top Header */}
        <header className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-4 lg:px-8 sticky top-0 z-30">
          <div className="flex items-center gap-4">
            <button 
              onClick={() => setIsSidebarOpen(true)}
              className="lg:hidden p-2 rounded-lg hover:bg-slate-100 text-slate-600 transition-colors"
            >
              <Menu size={20} />
            </button>
            
            <div className="hidden md:flex items-center bg-slate-100 rounded-xl px-3 py-1.5 w-64 lg:w-96 border border-transparent focus-within:border-brand-300 focus-within:bg-white transition-all">
              <Search size={18} className="text-slate-400 mr-2" />
              <input 
                type="text" 
                placeholder="Pesquisar tickets, empresas..." 
                className="bg-transparent border-none outline-none text-sm w-full text-slate-700 placeholder:text-slate-400"
              />
            </div>
          </div>

          <div className="flex items-center gap-2 lg:gap-4">
            <button className="p-2 rounded-xl hover:bg-slate-100 text-slate-600 transition-colors relative">
              <Bell size={20} />
              <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
            </button>
            <div className="h-8 w-[1px] bg-slate-200 mx-1 hidden sm:block"></div>
            <button className="flex items-center gap-2 p-1.5 rounded-xl hover:bg-slate-100 transition-colors">
              <div className="w-8 h-8 rounded-full bg-brand-100 flex items-center justify-center">
                <User size={18} className="text-brand-700" />
              </div>
              <span className="text-sm font-medium text-slate-700 hidden sm:block">Admin</span>
            </button>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-1 p-4 lg:p-8 max-w-7xl mx-auto w-full">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
