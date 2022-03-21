import ApiClient from '@/utils/client/SwapiClient';
import Starship from '@/models/Starship';

export default class StarshipService {
    static endpoint = '/starships';

    static getAll(params = {}) {
        return ApiClient.setUrl(this.endpoint)
            .get(params)
            .then(({ results = [] }) => {
                return results.map((film) => new Starship(film));
            });
    }
}
