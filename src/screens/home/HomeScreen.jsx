import React from 'react';

export default function HomeScreen({ onNavigate }) {
  return (
    <div className="p-5">
      <div className="flex flex-col mb-6">
        <h1 className="text-xl font-bold text-slate-900">Yean Carlos Godoy Gonzalez</h1>
        <p className="text-sm text-slate-500">ycarlosbv22@gmail.com</p>
      </div>

      <div className="mb-6">
        <p className="text-xs text-slate-400 uppercase tracking-wider mb-1">Saldo en cuenta</p>
        <p className="text-2xl font-bold text-slate-900">BRL 0</p>
      </div>

      <div className="bg-purple-700 rounded-2xl p-5 text-white mb-6 relative overflow-hidden flex justify-between items-center shadow-lg">
        <div className="z-10">
          <h2 className="font-bold text-lg mb-1">Envía, invita y gana premios</h2>
          <p className="text-xs text-purple-200 mb-3">¿Vamos por todo?</p>
          <button className="bg-white text-purple-700 text-xs font-semibold px-4 py-2 rounded-xl shadow">
            Más información
          </button>
        </div>
        <div className="bg-amber-400 w-20 h-20 rounded-full flex items-center justify-center text-3xl font-black text-amber-900 shadow-inner flex-shrink-0">
          +
        </div>
      </div>

      <div className="space-y-4">
        <p className="text-xs font-bold text-slate-400 uppercase">Acceso rápido</p>
        <div 
          onClick={() => onNavigate('recipients')} 
          className="flex items-center justify-between py-3 px-4 bg-white border border-slate-100 rounded-2xl shadow-sm cursor-pointer"
        >
          <div className="flex items-center space-x-3">
            <span className="text-xl">👥</span>
            <div>
              <p className="text-sm font-medium text-slate-800">Gestionar Destinatarios</p>
              <p className="text-xs text-slate-400">Ver o agregar cuentas bancarias y pago móvil</p>
            </div>
          </div>
          <span className="text-purple-600 font-bold">→</span>
        </div>
      </div>
    </div>
  );
}

