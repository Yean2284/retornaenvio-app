import React from 'react';

export default function ProfileScreen({ onBack }) {
  return (
    <div className="p-5">
      <button onClick={onBack} className="text-sm font-medium text-slate-700 mb-4">← Atrás</button>
      <h1 className="text-2xl font-bold text-slate-900 mb-6">Ajustes y Perfil</h1>

      <div className="space-y-4">
        <div className="flex items-center justify-between py-3 border-b border-slate-100 cursor-pointer">
          <div>
            <p className="text-sm font-medium text-slate-800">Soporte 24/7</p>
            <p className="text-xs text-slate-400">Canal de ayuda directo</p>
          </div>
          <span className="text-purple-600">→</span>
        </div>

        <div className="flex items-center justify-between py-3 border-b border-slate-100 cursor-pointer">
          <div>
            <p className="text-sm font-medium text-slate-800">Seguridad biométrica</p>
            <p className="text-xs text-slate-400">Huella o reconocimiento facial</p>
          </div>
          <span className="text-purple-600">→</span>
        </div>

        <div className="mt-8 p-4 bg-red-50 rounded-2xl border border-red-100">
          <p className="text-xs font-bold text-red-600 uppercase mb-1">Zona de peligro</p>
          <p className="text-sm font-medium text-red-900">Eliminar cuenta</p>
          <p className="text-xs text-red-500">Se borrará toda tu información de forma permanente.</p>
        </div>
      </div>
    </div>
  );
}

