
const gameRepository = require('../repositories/gameRepository');


class GameService {
    async createGame(gameData) {
        return await gameRepository.createGame(gameData);
    }

    async getGameById(id) {
        const game = await gameRepository.getGameById(id);
        if (!game) throw new Error('Game not found');
        return game;
    }

    async getAllGames() {
        return await gameRepository.getAllGames();
    }

    async updateGame(id, gameData) {
        return await gameRepository.updateGame(id, gameData);
    }

    async deleteGame(id) {
        const deleted = await gameRepository.deleteGame(id);
        if (!deleted) throw new Error('Game not found');
    }
}

module.exports = new GameService();