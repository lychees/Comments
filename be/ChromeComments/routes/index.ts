/*
 * GET home page.
 */
import express = require('express');
import api from './api';
const router = express.Router();

router.get('/', (req: express.Request, res: express.Response) => {
    res.render('index', { title: 'Express' });
});

router.use('/api', api);

export default router;