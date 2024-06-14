export const config = {
  googleClientID: process.env.GOOGLE_CLIENT_ID,
  googleClientSecret: process.env.GOOGLE_CLIENT_SECRET,
  frillWebHook: process.env.FRILL_WEB_HOOk,
  frillAPIURL: "https://tensorgoassignment.frill.co/",
  port: process.env.PORT || 3000,
  corsOrigin: process.env.CORS_ORIGIN,
  mongoDBUri: process.env.MONGODB_URI
};
