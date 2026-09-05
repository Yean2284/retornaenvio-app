import React, { useState } from 'react';
import HomeScreen from './src/screens/home/HomeScreen';
import RecipientsScreen from './src/screens/recipients/RecipientsScreen';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState('home');

  return (
    <div className="min-h-screen bg-slate-100 flex justify-center items-center font-sans">
      <div className="w-full max-w-md bg-white min-h-screen shadow-2xl flex flex-col justify-between relative overflow-hidden">
        
        <div className="flex-1 overflow-y-auto pb-24">
          {currentScreen === 'home' && (
            <HomeScreen onNavigate={(screen) => setCurrentScreen(screen)} />
          )}
          {currentScreen === 'recipients' && (
            <RecipientsScreen 
              onBack={() => setCurrentScreen('home')} 
              onSelectRecipient={(rec) => alert(`Seleccionado: ${rec.name}`)} 
            />
          )}
        </div>

        {/* NAVEGACIÓN INFERIOR */}
        <div className="absolute bottom-0 left-0 right-0 bg-white border-t border-slate-100 flex justify-around py-3 px-2 z-20 shadow-lg">
          <button onClick={() => setCurrentScreen('home')} className={`flex flex-col items-center text-xs ${currentScreen === 'home' ? 'text-purple-700 font-bold' : 'text-slate-400'}`}>🏠 Inicio</button>
          <button onClick={() => setCurrentScreen('recipients')} className={`flex flex-col items-center text-xs ${currentScreen === 'recipients' ? 'text-purple-700 font-bold' : 'text-slate-400'}`}>👥 Destinatarios</button>
          <button onClick={() => setCurrentScreen('home')} className="flex flex-col items-center -mt-6">
            <span className="w-12 h-12 bg-purple-700 text-white rounded-full flex items-center justify-center text-xl shadow-lg">↑</span>
          </button>
          <button onClick={() => setCurrentScreen('home')} className="flex flex-col items-center text-xs text-slate-400">💬 Soporte</button>
          <button onClick={() => setCurrentScreen('home')} className="flex flex-col items-center text-xs text-slate-400">👤 Perfil</button>
        </div>

      </div>
    </div>
  );
}

