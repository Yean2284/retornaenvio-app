import React, { useState } from 'react';
import Button from '../../components/Button';

export default function SendScreen({ onBack, onComplete }) {
  const [step, setStep] = useState(1);
  const [amountBrl, setAmountBrl] = useState('');

  return (
    <div className="p-5">
      <button onClick={onBack} className="text-sm font-medium text-slate-700 mb-4">← Atrás</button>
      
      {step === 1 && (
        <div>
          <h1 className="text-2xl font-bold text-slate-900 mb-1">¿Cuánto deseas enviar?</h1>
          <p className="text-sm text-slate-500 mb-6">Tasa actual: 1 BRL = 42.50 VES</p>

          <div className="mb-6">
            <label className="text-xs font-bold text-slate-500 uppercase">Monto en BRL</label>
            <input 
              type="number" 
              value={amountBrl} 
              onChange={(e) => setAmountBrl(e.target.value)} 
              placeholder="0.00" 
              className="w-full mt-1 p-4 bg-slate-50 border border-slate-200 rounded-2xl text-2xl font-bold focus:outline-none focus:border-purple-600"
            />
          </div>

          <Button onClick={() => setStep(2)}>Continuar</Button>
        </div>
      )}

      {step === 2 && (
        <div>
          <h1 className="text-2xl font-bold text-slate-900 mb-4">Método de Pago Pix</h1>
          <div className="p-5 rounded-2xl border-2 border-purple-600 bg-purple-50/40 mb-8">
            <h3 className="font-bold text-slate-800 text-sm">Transferencia con Pix</h3>
            <p className="text-xs text-slate-500 mt-1">Costo de operación: BRL 0,77</p>
          </div>
          <Button onClick={onComplete}>Confirmar y Pagar</Button>
        </div>
      )}
    </div>
  );
}

