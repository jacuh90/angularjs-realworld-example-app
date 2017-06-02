export default class Articles {
    constructor(AppConstants, $http) {
        'ngInject';

        this._AppConstants = AppConstants;
        this._$http = $http;


    }

    // Creates an article
    save(article) {
        let request = {
            url: `${this._AppConstants.api}/articles`,
            method: 'POST',
            data: { article: article }
        };

        return this._$http(request).then((res) => res.data.article);
    }
}