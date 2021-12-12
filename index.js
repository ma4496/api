const express = require("express");
const app = express();
const port = process.env.PORT || 4000;

const firebase = require("firebase/app");

const firebaseConfig = {
  apiKey: "AIzaSyBjdY8cidVQzeaQiD9A3RIz2_Jh67snjHY",
  authDomain: "final-project-9841d.firebaseapp.com",
  projectId: "final-project-9841d",
  storageBucket: "final-project-9841d.appspot.com",
  messagingSenderId: "204261940941",
  appId: "1:1:204261940941:web:1c5fb27048f633c6159384",
};

firebase.initializeApp(firebaseConfig);

const indexRoute = require("./routes/index");

app.use(function (req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type"
  );
  next();
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
