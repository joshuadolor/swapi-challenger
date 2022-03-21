import Http from '@/utils/client/http';
import { SWAPI_ENDPOINT } from '@/constants/endpoints';

export default class SwapiClient {
    static url = '';
    static options = {};

    static setUrl(url = '') {
        this.url = `${SWAPI_ENDPOINT}${url}`;
        return SwapiClient;
    }

    static get(params, options = {}) {
        let http = new Http();
        options = { ...this.options, ...options };
        return http.get(this.url, params, options);
    }

    static post(data, options = {}) {
        let http = new Http();
        options = { ...this.options, ...options };
        return http.post(this.url, data, options);
    }

    static delete(data, options = {}) {
        let http = new Http();
        options = { ...this.options, ...options };
        return http.delete(this.url, data, options);
    }

    static put(data, options = {}) {
        let http = new Http();
        options = { ...this.options, ...options };
        return http.put(this.url, data, options);
    }
}
