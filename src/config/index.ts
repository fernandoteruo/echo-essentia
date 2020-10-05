export const apiUrl = 'https://portal.stg.eugenio.io/api/v1';
export const userToken = localStorage.getItem('userToken');

// In real world scenario these come when an admin does the login on the app
export const tenant = process.env.REACT_APP_TENANT || '';
// In our case hackathon case these are the same but in real life they would be different
export const kioskId = process.env.REACT_APP_KIOSK_ID || '';
export const deviceId = process.env.REACT_APP_DEVICE_ID || '';
