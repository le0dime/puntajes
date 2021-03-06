import Store from 'electron-store';

export class GameStore extends Store {
    constructor(settings) {
        super(settings);

        this.getGames();
    }

    saveGames() {
        this.set('games', this.games);

        return this;
    }

    getGames() {
        this.games = this.get('games') || [];

        return this;
    }

    addGame(game) {
        this.games = [...this.games, game];

        return this.saveGames();
    }

    setPinStatus(id, isPinned) {

        let index = this.games.findIndex(t => t.id == id);

        if (index > -1) {

            this.games[index].isPinned = isPinned;

            return this.saveGames();
        }
    }

    deleteGame(game) {
        this.games = this.games.filter(t => t.id !== game.id);

        return this.saveGames();
    }

    deleteAllGames() {
        this.games = [];

        return this.saveGames();
    }
}