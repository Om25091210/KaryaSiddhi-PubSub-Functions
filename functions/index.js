const functions = require("firebase-functions");
const admin = require("firebase-admin");
const SERVER_URL="https://project-gov-backend.vercel.app/";
admin.initializeApp(functions.config().firebase);

exports.checkNode = functions.pubsub.schedule("30 21  * * *")
    .onRun( async (context) => {
      const _d = new Date();
      const utc = _d.getTime();
      const nd = new Date(utc + (3600000*5.5));
      const dd = String(nd.getDate()).padStart(2, "0");
      const mm = String(nd.getMonth() + 1).padStart(2, "0");
      const yyyy = nd.getFullYear();
      const date = dd+"-"+mm+"-"+yyyy;
      console.log("Activated", date, SERVER_URL);
        //   const url = `https://152b-2409-4081-8719-9fa0-a10b-2d5a-6d0-1337.ngrok-free.app/fcm/push`;
        //   const authOptions = {
        //       method: "POST",
        //       headers: {
        //           "Content-Type": "application/json"
        //       },
        //   };
        //   const response = await fetch(url, authOptions);
        //   const code = response.status;
        //   const result = await response.json();
        //   return { code, result };
        return null;
    });