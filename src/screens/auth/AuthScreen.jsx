import React, { useState } from 'react';
import Button from '../../components/Button';
import Input from '../../components/Input';

export default function AuthScreen({ onLoginSuccess }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    onLoginSuccess();
  };

  return (
    <div className="p-6 flex flex-col justify-center min-h-screen">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-black text-purple-700">Retorna</h1>
        <p className="text-sm text-slate-500 mt-1">Remesas rápidas y seguras</p>
      </div>

      <form onSubmit={handleLogin} className="space-y-4">
        <Input 
          label="Correo electrónico" 
          type="email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          placeholder="tucorreo@email.com" 
          required 
        />
        <Input 
          label="Contraseña" 
          type="password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
          placeholder="••••••••" 
          required 
        />
        <div className="pt-4">
          <Button type="submit">Iniciar Sesión</Button>
        </div>
      </form>
    </div>
  );
}

