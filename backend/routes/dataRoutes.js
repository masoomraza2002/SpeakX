const express = require('express');
const { searchByKeywordAndType } = require("../controllers/dataController");
const router = express.Router();

router.get('/search', searchByKeywordAndType);

module.exports = router;
