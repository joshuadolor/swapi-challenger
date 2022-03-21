import { format } from 'date-fns';

class Film {
    constructor(data = {}) {
        this._title = data.title;
        this._releaseDate = data.release_date || null;
        this._director = data.director;
        this._producer = data.producer;
        this._id = data.episode_id;
    }
    get id() {
        return this._title;
    }

    get title() {
        return this._title;
    }

    get name() {
        return this._title;
    }

    get releaseDate() {
        return format(new Date(this._releaseDate), 'MMMM dd, Y');
    }

    get releaseYear() {
        return format(new Date(this._releaseDate), 'Y');
    }

    get director() {
        return this._director;
    }
    get producer() {
        return this._producer;
    }
}

export default Film;
