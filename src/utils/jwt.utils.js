import jwksClient from "jwks-rsa";

const client = jwksClient({
  jwksUri: "https://www.googleapis.com/oauth2/v3/certs",
});

export const getKey = (header, callback) => {
  client.getSigningKey(header.kid, (err, key) => {
    if (err) {
      callback(err);
    } else {
      const signingKey = key.getPublicKey();
      callback(null, signingKey);
    }
  });
};
