const Game = require('../models/game');

class gameRepository {
    async createGame(game){
        return await Game.create(game);
    }

    async getGameById(id){
        return await Game.findByPk(id);
    }

    async getAllGames(){
        return await Game.findAll();
    }
    async updateGame(id, game){
        await Game.update(game, {where: { id }})
        return Game.findByPk(id)

    }
    async deleteGame(id){
        await Game.destroy({where: { id }});

    }

}

module.exports = new gameRepository();