export const baseUrl = 'http://127.0.0.1:8000/api/v1/';

// auth endpoints
export const loginUrl = baseUrl + 'rest-auth/login/';
export const logoutUrl = baseUrl + 'rest-auth/logout/';
export const registerUrl = baseUrl + 'rest-auth/registration/';
export const authTokenUrl = baseUrl + 'rest-auth/registration/auth/v1/token-auth/';
export const verifyAccountUrl = baseUrl + 'rest-auth/registration/verify-email/';
export const passwordResetUrl = baseUrl + 'rest-auth/password/reset/';
export const passwordResetConfirmUrl = baseUrl + 'rest-auth/password/reset/confirm/';
export const passwordChangeUrl = baseUrl + 'rest-auth/password/change/';
export const refreshTokenUrl = baseUrl + 'refresh-token/';
export const userUrl = baseUrl + 'rest-auth/user/';

export const walletUrl = baseUrl + 'wallet/';
export const depositsUrl = baseUrl + 'deposits/';

// project resources endpoints
export const customUsersUrl = baseUrl + 'users/';
export const listsUrl = baseUrl + 'lists/';
export const newContactListUrl = baseUrl + 'lists/save_contact_list/';
export const messagesUrl = baseUrl + 'messages/';
export const numbersUrl = baseUrl + 'numbers/';

// set request headers
export const getHeaders = function () {
  const authUser = JSON.parse(localStorage.getItem('authUser'));

  const headers = {
    'Content-Type': 'application/json',
    'Authorization': 'JWT ' + authUser.token
  };
  return headers;
};
