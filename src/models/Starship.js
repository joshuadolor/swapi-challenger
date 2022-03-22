class Starship {
    constructor(data = {}) {
        this._name = data.name;
        this._manufacturer = data.manufacturer;
        this._crew = data.crew;
        this._passengers = data.passengers;
        this._length = data.length || 0;
    }

    get name() {
        return this._name;
    }

    get manufacturer() {
        return this._manufacturer;
    }

    get crew() {
        return this._crew;
    }

    get passengers() {
        return this._passengers;
    }

    get length() {
        return this._length;
    }
}

export default Starship;
