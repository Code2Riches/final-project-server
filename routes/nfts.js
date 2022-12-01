var express = require("express");
var router = express.Router();
const { uuid } = require("uuidv4");
const { db } = require("../mongo");

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});

router.post("/add-many", async (req, res) => {
  const { nfts } = req.body;
  const nftsToAdd = nfts.map((nft) => {
    return {
      ...nft,
      _id: nft.token_id,
    };
  });
  const result = await db().collection("nfts").insertMany(nftsToAdd);
  res.send(result);
});

module.exports = router;
