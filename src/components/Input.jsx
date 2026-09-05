import React from 'react';

export default function Input({ label, type = 'text', value, onChange, placeholder, required = false }) {
  return (
    <div className="w-full">
      {label && <label className="text-xs font-bold text-slate-500 uppercase mb-1 block">{label}</label>}
      <input 
        type={type} 
        value={value} 
        onChange={onChange} 
        placeholder={placeholder} 
        required={required}
        className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-purple-600"
      />
    </div>
  );
}

