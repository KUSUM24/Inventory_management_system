const firebase = require("firebase");
require("firebase/firestore");
const app = firebase.default.initializeApp({
  apiKey: process.env.apiKey,
  authDomain: process.env.authDomain,
  projectId: process.env.projectId,
  storageBucket: process.env.storageBucket,
  messagingSenderId: process.env.messagingSenderId,
  appId: process.env.appId,
});

export const db = app.firestore();
export const auth = app.auth();
export default app;
