/**
 * We'll use this to share our key between the JWT signing and verifying steps.
 * In a production system we must protect this key using appropriate measures such as a secrets vault.
 */

export const jwtConstants = {
  secret: 'secretKey',
};
