/*
 * GET home page.
 */
import express = require('express');
import homeRouter from './home';
import apiRouter from './api';

const router = express.Router();
router.use('/', homeRouter);
router.use('/api', apiRouter);

export default router;