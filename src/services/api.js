// Simulación de servicios de la API para Retorna
export const fetchExchangeRate = async () => {
  // Tasa de cambio simulada BRL a VES
  return {
    rate: 42.5,
    fee: 0.77,
    updatedAt: new Date().toISOString(),
  };
};

export const processPixPayment = async (amountData) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        success: true,
        transactionId: `RET-${Math.floor(Math.random() * 1000000)}`,
        message: '¡Transacción procesada con éxito a través de Pix!',
      });
    }, 1500);
  });
};

