const express = require('express');
const router = express.Router();
const gameService = require('../services/gameService');
const authenticateToken = require('../middleware/auth');

router.post('/games', authenticateToken, async (req, res) => {
    try {
        const game = await gameService.createGame(req.body);
        res.json(game);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

router.get('/games', authenticateToken, async (req, res) => {
    try {
        const games = await gameService.getAllGames();
        res.json(games);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

router.get('/games/:id', authenticateToken, async (req, res) => {
    try {
        const game = await gameService.getGameById(req.params.id);
        res.json(game);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

router.put('/games/:id', authenticateToken, async (req, res) => {
    try {
        const game = await gameService.updateGame(req.params.id, req.body);
        res.json(game);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

router.delete('/games/:id', authenticateToken, async (req, res) => {
    try {
        await gameService.deleteGame(req.params.id);
        res.sendStatus(204);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

module.exports = router;
