"use strict";
/*
 * GET home page.
 */
var express = require("express");
var home_1 = require("./home");
var api_1 = require("./api");
var router = express.Router();
router.use('/', home_1.default);
router.use('/api', api_1.default);
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = router;
//# sourceMappingURL=index.js.map