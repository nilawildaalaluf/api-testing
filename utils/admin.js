var admin = require("firebase-admin");

var serviceAccount = require("../api-qa-demo-firebase-adminsdk-940op-c9ccd84257.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});
const db = admin.firestore();

module.exports = { admin, db };
