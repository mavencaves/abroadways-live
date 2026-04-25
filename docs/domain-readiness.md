# Abroadways Domain Readiness

## Target public domains

- Primary domain: `https://www.abroadways.com.bd`
- Apex redirect domain: `https://abroadways.com.bd`
- Recommended backend API origin: `https://api.abroadways.com.bd`

## Frontend configuration

- Vercel environment variable:
  - `VITE_API_BASE_URL=https://api.abroadways.com.bd`
- Canonical base URL:
  - `https://www.abroadways.com.bd`
- Open Graph base URL:
  - `https://www.abroadways.com.bd`

## Backend configuration

- Render environment variables:
  - `BACKEND_BASE_URL=https://api.abroadways.com.bd`
  - `FRONTEND_BASE_URL=https://www.abroadways.com.bd`
  - `CORS_ORIGINS=https://abroadways.com.bd,https://www.abroadways.com.bd`

## CORS requirements

- Allow:
  - `https://abroadways.com.bd`
  - `https://www.abroadways.com.bd`
- Add preview domains only if they are actively used for QA
- Remove old Maven domains from production CORS once cutover is complete

## Payment callback URLs

- SSLCommerz success:
  - `https://api.abroadways.com.bd/api/v1/service-orders/payment/sslcommerz/success`
- SSLCommerz fail:
  - `https://api.abroadways.com.bd/api/v1/service-orders/payment/sslcommerz/fail`
- SSLCommerz cancel:
  - `https://api.abroadways.com.bd/api/v1/service-orders/payment/sslcommerz/cancel`

## OAuth callback URLs

- Google:
  - `https://api.abroadways.com.bd/api/v1/auth/google/callback`
- Facebook:
  - `https://api.abroadways.com.bd/api/v1/auth/facebook/callback`

## DNS and cutover checklist

- Point `www.abroadways.com.bd` to the Vercel frontend
- Point `api.abroadways.com.bd` to the Render backend
- Redirect apex `abroadways.com.bd` to `https://www.abroadways.com.bd`
- Verify HTTPS certificates are active before launch
- Verify backend callbacks resolve on the live API domain before enabling live SSLCommerz
