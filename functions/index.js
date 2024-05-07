const functions = require("firebase-functions");
const admin = require("firebase-admin");
const SERVER_URL="https://project-gov-backend.vercel.app/";
admin.initializeApp(functions.config().firebase);

exports.checkNode = functions.pubsub.schedule("0 15 * * *")
    .onRun( async (context) => {
      const _d = new Date();
      const utc = _d.getTime();
      const nd = new Date(utc + (3600000*5.5));
      const dd = String(nd.getDate()).padStart(2, "0");
      const mm = String(nd.getMonth() + 1).padStart(2, "0");
      const yyyy = nd.getFullYear();
      const date = dd+"-"+mm+"-"+yyyy;
      console.log("Activated", date, SERVER_URL);
      const url = `${SERVER_URL}pubSub/trigger`;
      const authOptions = {
          method: "POST",
          headers: {
              "Content-Type": "application/json"
          },
          body:JSON.stringify(date),
      };
      const response = await fetch(url, authOptions);
      const code = response.status;
      const result = await response.json();
      return { code, result };
    });