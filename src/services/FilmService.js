import ApiClient from '@/utils/client/SwapiClient';
import Film from '@/models/Film';

export default class FilmService {
    static endpoint = '/films';

    static getAll(params = {}) {
        return ApiClient.setUrl(this.endpoint)
            .get(params)
            .then(({ results = [] }) => {
                return results.map((film) => new Film(film));
            });
    }
}
