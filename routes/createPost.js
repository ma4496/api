const express = require("express");
const router = express.Router();

const firestore = require("firebase/firestore");
const db = firestore.getFirestore();

router.get("/", (req, res) => {
  const queryParams = req.query;
  const { userName, userID, postMessage } = queryParams;
  const setPost = firestore.addDoc(firestore.collection(db, "posts"), {
    userName,
    userID,
    postMessage,
  });

  setPost
    .then((response) => {
      res.send(response);
    })
    .catch((error) => {
      console.warn(error);
      res.send(error);
    });
});

module.exports = router;
