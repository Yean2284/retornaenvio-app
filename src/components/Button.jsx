import React from 'react';

export default function Button({ children, onClick, variant = 'primary', className = '' }) {
  const baseStyle = "w-full font-semibold py-3.5 rounded-2xl shadow-lg transition-all";
  const variants = {
    primary: "bg-purple-700 text-white hover:bg-purple-800",
    secondary: "bg-white text-slate-700 border border-slate-200 hover:bg-slate-50",
    danger: "bg-red-600 text-white hover:bg-red-700"
  };

  return (
    <button onClick={onClick} className={`${baseStyle} ${variants[variant]} ${className}`}>
      {children}
    </button>
  );
}

