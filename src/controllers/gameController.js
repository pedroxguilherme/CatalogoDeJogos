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
        // Dados enviados no corpo da requisição
        const { titulo, genero, anoLancamento } = req.body;

        // Verificar se os dados necessários estão presentes
        if (!titulo || !genero || !anoLancamento) {
            return res.status(400).json({ error: 'Título, gênero e ano de lancamento são obrigatórios' });
        }

        // Chamada ao serviço para atualizar o jogo
        const updatedGame = await gameService.updateGame(req.params.id, { titulo, genero, anoLancamento });

        // Se o jogo foi atualizado com sucesso, envia a resposta
        res.json(updatedGame);
    } catch (error) {
        // Captura e envia o erro caso algo dê errado
        console.error("Erro ao atualizar o jogo:", error);
        res.status(400).json({ error: error.message });
    }
});

router.delete('/games/:id',authenticateToken , async (req, res) => {
    try {
        await gameService.deleteGame(req.params.id);
        res.sendStatus(204);
    } catch (error) {
        console.error("erro ao excluir o jogo.", error);
        res.status(400).json({ error: error.message });
    }
});

module.exports = router;
