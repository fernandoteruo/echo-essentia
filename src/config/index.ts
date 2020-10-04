export const apiUrl = 'https://portal.stg.eugenio.io/api/v1';
export const userToken = localStorage.getItem('userToken');

// In real world scenario these two infos would come when an admin does the login on the app, not as env variable
export const tenant = process.env.REACT_APP_TENANT;
export const deviceId = process.env.REACT_APP_DEVICE_ID;
