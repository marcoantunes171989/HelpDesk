import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Dashboard } from './pages/Dashboard';
import { TicketList } from './pages/TicketList';
import { TicketForm } from './pages/TicketForm';
import { CompanyList } from './pages/CompanyList';
import { UserList } from './pages/UserList';
import { Settings } from './pages/Settings';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="tickets" element={<TicketList />} />
          <Route path="tickets/new" element={<TicketForm />} />
          <Route path="companies" element={<CompanyList />} />
          <Route path="users" element={<UserList />} />
          <Route path="settings" element={<Settings />} />
          
          {/* Placeholder routes for remaining menu items */}
          <Route path="roles" element={<div className="p-8"><h1 className="text-2xl font-bold">Cargos</h1><p className="text-slate-500">Em desenvolvimento...</p></div>} />
          <Route path="reports" element={<div className="p-8"><h1 className="text-2xl font-bold">Relatórios</h1><p className="text-slate-500">Em desenvolvimento...</p></div>} />
          <Route path="audit" element={<div className="p-8"><h1 className="text-2xl font-bold">Auditoria</h1><p className="text-slate-500">Em desenvolvimento...</p></div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
