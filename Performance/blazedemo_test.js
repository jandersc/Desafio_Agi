import http from 'k6/http';
import { check, sleep } from 'k6';

export const options = {
  scenarios: {
    carga: {
      executor: 'constant-arrival-rate',
      rate: 250, // 250 requisições por segundo
      timeUnit: '1s',
      duration: '1m',
      preAllocatedVUs: 100,
      maxVUs: 300,
    },

    pico: {
      executor: 'ramping-arrival-rate',
      startRate: 50,
      timeUnit: '1s',
      stages: [
        { target: 250, duration: '10s' }, // sobe rápido
        { target: 250, duration: '1m' },  // mantém
        { target: 50, duration: '10s' },  // desce
      ],
      preAllocatedVUs: 100,
      maxVUs: 400,
      startTime: '1m', // roda após o teste de carga
    },
  },

  thresholds: {
    http_req_duration: ['p(90)<2000'], // 90th percentile < 2s
    http_reqs: ['rate>250'], // taxa mínima
  },
};

// 🌐 Base URL
const BASE_URL = 'https://www.blazedemo.com';

export default function () {

  // 🔹 1. Home
  let resHome = http.get(`${BASE_URL}/`);
  check(resHome, {
    'home status 200': (r) => r.status === 200,
  });

  // 🔹 2. Buscar voos
  let searchPayload = {
    fromPort: 'Paris',
    toPort: 'London',
  };

  let resSearch = http.post(`${BASE_URL}/reserve.php`, searchPayload);
  check(resSearch, {
    'search ok': (r) => r.status === 200,
  });

  let purchasePayload = {
    flight: '43',
    price: '200',
    airline: 'TestAir',
    fromPort: 'Paris',
    toPort: 'London',
  };

  // 🔹 3. Purchase
  let resPurchase = http.post(`${BASE_URL}/purchase.php`, purchasePayload);
  check(resPurchase, {
    'purchase ok': (r) => r.status === 200,
  });

  // 🔹 4. Confirmar compra
  let confirmPayload = {
    inputName: 'QA Test',
    address: 'Rua Teste',
    city: 'SP',
    state: 'SP',
    zipCode: '00000',
    cardType: 'visa',
    creditCardNumber: '4111111111111111',
    creditCardMonth: '12',
    creditCardYear: '2026',
    nameOnCard: 'QA Test',
  };

  let resConfirm = http.post(`${BASE_URL}/confirmation.php`, confirmPayload);

  check(resConfirm, {
    'compra realizada com sucesso': (r) =>
      r.body.includes('Thank you for your purchase'),
  });

  sleep(1);
}