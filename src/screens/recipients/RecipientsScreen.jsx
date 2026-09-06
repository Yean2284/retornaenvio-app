import React, { useState, useEffect } from 'react';

export default function RecipientsScreen({ onBack, onSelectRecipient }) {
  const [viewMode, setViewMode] = useState('list'); // 'list' | 'add'
  const [searchQuery, setSearchQuery] = useState('');
  const [recipients, setRecipients] = useState([]);
  const [loading, setLoading] = useState(true);
  
  // Form state
  const [personType, setPersonType] = useState('natural');
  const [docType, setDocType] = useState('V');
  const [docNumber, setDocNumber] = useState('');
  const [recipientName, setRecipientName] = useState('');
  const [selectedBank, setSelectedBank] = useState('Banco de Venezuela');
  const [accountType, setAccountType] = useState('Corriente');

  // URL de tu backend desplegado en Render (Reemplaza con tu URL real de Render)
  const API_URL = 'https://retorna-backend-d3b2.onrender.com/api';

  useEffect(() => {
    fetchRecipients();
  }, []);

  const fetchRecipients = async () => {
    try {
      const response = await fetch(`${API_URL}/recipients`);
      const data = await response.json();
      setRecipients(data);
    } catch (error) {
      console.error('Error al cargar destinatarios:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleAddRecipient = async (e) => {
    e.preventDefault();
    const newRecipientData = {
      name: recipientName,
      bank: selectedBank,
      detail: `Cuenta ${accountType} - ${docType}-${docNumber}`,
      type: 'bank'
    };

    try {
      const response = await fetch(`${API_URL}/recipients`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newRecipientData),
      });

      if (response.ok) {
        fetchRecipients(); // Recargar la lista desde MongoDB
        setViewMode('list');
        setRecipientName('');
        setDocNumber('');
      }
    } catch (error) {
      console.error('Error al guardar destinatario:', error);
    }
  };

  const filteredRecipients = recipients.filter(r => 
    r.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
    r.bank.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (viewMode === 'add') {
    return (
      <div className="p-5">
        <button onClick={() => setViewMode('list')} className="text-sm font-medium text-slate-700 mb-4">← Atrás</button>
        <h1 className="text-2xl font-bold text-slate-900 mb-4">Nuevo destinatario</h1>

        <form onSubmit={handleAddRecipient} className="space-y-4 pb-20">
          <div>
            <label className="text-xs font-bold text-slate-500 uppercase">Tipo de Persona</label>
            <div className="flex gap-2 mt-1">
              <button type="button" onClick={() => setPersonType('natural')} className={`flex-1 py-2 text-xs font-bold rounded-xl border ${personType === 'natural' ? 'bg-purple-700 text-white border-purple-700' : 'bg-white text-slate-700 border-slate-200'}`}>Natural</button>
              <button type="button" onClick={() => setPersonType('juridica')} className={`flex-1 py-2 text-xs font-bold rounded-xl border ${personType === 'juridica' ? 'bg-purple-700 text-white border-purple-700' : 'bg-white text-slate-700 border-slate-200'}`}>Jurídica</button>
            </div>
          </div>

          <div>
            <label className="text-xs font-bold text-slate-500 uppercase">Nombre Completo / Razón Social</label>
            <input type="text" required value={recipientName} onChange={(e) => setRecipientName(e.target.value)} placeholder="Ej. Juan Pérez" className="w-full mt-1 p-3 bg-slate-50 border border-slate-200 rounded-xl text-sm" />
          </div>

          <div>
            <label className="text-xs font-bold text-slate-500 uppercase">Documento de Identidad</label>
            <div className="flex gap-2 mt-1">
              <select value={docType} onChange={(e) => setDocType(e.target.value)} className="p-3 bg-slate-50 border border-slate-200 rounded-xl text-sm">
                <option value="V">V</option>
                <option value="E">E</option>
                <option value="J">J</option>
                <option value="P">Pasaporte</option>
              </select>
              <input type="text" required value={docNumber} onChange={(e) => setDocNumber(e.target.value)} placeholder="Número de cédula" className="flex-1 p-3 bg-slate-50 border border-slate-200 rounded-xl text-sm" />
            </div>
          </div>

          <div>
            <label className="text-xs font-bold text-slate-500 uppercase">Banco Destino</label>
            <select value={selectedBank} onChange={(e) => setSelectedBank(e.target.value)} className="w-full mt-1 p-3 bg-slate-50 border border-slate-200 rounded-xl text-sm">
              <option value="Banco de Venezuela">Banco de Venezuela</option>
              <option value="Banesco">Banesco</option>
              <option value="Mercantil">Mercantil</option>
              <option value="BBVA Provincial">BBVA Provincial</option>
              <option value="BNC">Banco Nacional de Crédito (BNC)</option>
            </select>
          </div>

          <button type="submit" className="w-full bg-purple-700 text-white font-semibold py-3.5 rounded-2xl shadow-lg mt-6">
            Guardar Destinatario en la Nube
          </button>
        </form>
      </div>
    );
  }

  return (
    <div className="p-5">
      <div className="flex justify-between items-center mb-4">
        <button onClick={onBack} className="text-sm font-medium text-slate-700">← Atrás</button>
      </div>
      <h1 className="text-2xl font-bold text-slate-900 mb-4">Destinatarios</h1>

      <div className="relative mb-6">
        <input 
          type="text" 
          placeholder="Buscar destinatario" 
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full pl-4 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-purple-600"
        />
      </div>

      {loading ? (
        <p className="text-center text-slate-400 py-10">Cargando destinatarios desde MongoDB...</p>
      ) : (
        <div className="space-y-3 mb-20">
          {filteredRecipients.length === 0 ? (
            <p className="text-center text-slate-400 py-6">No hay destinatarios guardados aún.</p>
          ) : (
            filteredRecipients.map((item) => (
              <div key={item._id} onClick={() => onSelectRecipient(item)} className="p-4 bg-white border border-slate-100 shadow-sm rounded-2xl flex justify-between items-center cursor-pointer">
                <div>
                  <p className="font-bold text-slate-800 text-sm">{item.name}</p>
                  <p className="text-xs text-slate-500">{item.bank}</p>
                  <p className="text-xs text-slate-400">{item.detail}</p>
                </div>
                <span className="text-purple-600 font-bold">→</span>
              </div>
            ))
          )}
        </div>
      )}

      <div className="fixed bottom-20 left-0 right-0 px-5 max-w-md mx-auto">
        <button onClick={() => setViewMode('add')} className="w-full bg-purple-700 text-white font-semibold py-3.5 rounded-2xl shadow-lg">
          + Agregar destinatario
        </button>
      </div>
    </div>
  );
}
