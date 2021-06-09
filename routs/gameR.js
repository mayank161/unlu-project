const express = require('express');

const gameRouter = require('../controller/game');


const router = express.Router();

router.post('/game',gameRouter.gamePost);

router.post('/:gameId/ticket/:user/generate',gameRouter.ticket)

router.get('/ticket/:ticketId',gameRouter.ticketDetails);

router.get('/api/game/:gameId/numbers',gameRouter.getRandom);

router.get('/api/game/:gameId/number/random',gameRouter.random);


module.exports = router;