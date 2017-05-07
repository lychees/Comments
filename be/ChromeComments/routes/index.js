"use strict";
/*
 * GET home page.
 */
var express = require("express");
var api_1 = require("./api");
var router = express.Router();
router.get('/', function (req, res) {
    res.render('index', { title: 'Express' });
});
router.use('/api', api_1.default);
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = router;
//# sourceMappingURL=index.js.map