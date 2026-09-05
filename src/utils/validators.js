// Validadores para documentos y formato
export const validateDocument = (type, number) => {
  if (!number || number.trim() === '') return false;
  if (type === 'V' || type === 'E' || type === 'J') {
    return /^\d{6,10}$/.test(number);
  }
  return true; // Pasaporte u otros
};

export const formatCurrency = (amount, currency = 'BRL') => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: currency,
  }).format(amount);
};

