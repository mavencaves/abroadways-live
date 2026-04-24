const fetch = require('node-fetch');

const getSslBaseUrl = () =>
  process.env.SSLCOMMERZ_SANDBOX === 'false'
    ? 'https://securepay.sslcommerz.com'
    : 'https://sandbox.sslcommerz.com';

const getSslConfig = () => {
  const storeId = String(process.env.SSLCOMMERZ_STORE_ID || '').trim();
  const storePassword = String(process.env.SSLCOMMERZ_STORE_PASSWORD || '').trim();

  if (!storeId || !storePassword) {
    const error = new Error('SSLCommerz credentials are not configured.');
    error.statusCode = 500;
    throw error;
  }

  return {
    storeId,
    storePassword,
    baseUrl: getSslBaseUrl(),
  };
};

const initiateSslPayment = async (payload) => {
  const { storeId, storePassword, baseUrl } = getSslConfig();

  const response = await fetch(`${baseUrl}/gwprocess/v4/api.php`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: new URLSearchParams({
      store_id: storeId,
      store_passwd: storePassword,
      ...payload,
    }).toString(),
  });

  const data = await response.json();
  return data;
};

const validateSslPayment = async (valId) => {
  const { storeId, storePassword, baseUrl } = getSslConfig();
  const url = `${baseUrl}/validator/api/validationserverAPI.php?val_id=${encodeURIComponent(
    valId
  )}&store_id=${encodeURIComponent(storeId)}&store_passwd=${encodeURIComponent(
    storePassword
  )}&format=json`;

  const response = await fetch(url, { method: 'GET' });
  const data = await response.json();
  return data;
};

module.exports = {
  getSslConfig,
  initiateSslPayment,
  validateSslPayment,
};
