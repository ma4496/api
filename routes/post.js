const express = require("express");
const router = express.Router();
const firestore = require("firebase/firestore");
const db = firestore.getFirestore();

router.get("/:id", (req, res) => {
  const postID = req.params.id;
  const posts = firestore.getDoc(firestore.doc(db, "posts", postID));
  posts
    .then((response) => {
      const post = response.data();
      if (post) return res.send(post);
      return res.send({ postMessage: `No doc.. sorry` });
    })
    .catch(function (error) {
      res.send(error);
    });
});

router.get("/user/:id", (req, res) => {
  const userID = req.params.id;
  const q = firestore.query(
    firestore.collection(db, "posts"),
    firestore.where("userID", "==", userID)
  );

  const querySnapshot = firestore.getDocs(q);

  const userPosts = [];

  querySnapshot
    .then((response) => {
      console.log(response);
      response.forEach((doc) => {
        userPosts.push(doc.data());
      });
      res.send(userPosts);
    })
    .catch((error) => {
      res.send(error);
    });
});

module.exports = router;
