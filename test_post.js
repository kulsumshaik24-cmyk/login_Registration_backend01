const http = require('http');

const data = JSON.stringify({
  firstName: 'Auto',
  lastName: 'Script',
  dob: '1990-01-01',
  age: 36,
  gender: 'Other',
  email: 'autopost@example.com',
  password: 'pass123',
  confirmPassword: 'pass123',
  phone: '000',
  city: 'Nowhere',
  country: 'Nowhere'
});

const options = {
  hostname: 'localhost',
  port: 5000,
  path: '/api/auth/register',
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Content-Length': Buffer.byteLength(data)
  }
};

const req = http.request(options, (res) => {
  console.log('Status:', res.statusCode);
  let body = '';
  res.on('data', (chunk) => { body += chunk; });
  res.on('end', () => {
    console.log('Response body:', body);
  });
});

req.on('error', (e) => {
  console.error('Request error:', e.message);
});

req.write(data);
req.end();
