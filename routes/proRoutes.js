const express = require("express");
const {
    displayPro,
    addPro,
    updatePro,
    deletePro,
    searchPro,
} = require("../controller/proController");

const router = express.Router();

router.get("/", displayPro);

router.post("/addpro", addPro);

router.patch("/updatepro/:id", updatePro);

router.delete("/del/:id", deletePro);

router.get("/search/:id", searchPro);

module.exports = router;