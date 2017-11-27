import $ from 'jquery';
import { getLandingArticles } from './actions';
import { getLandingArticlesSuccess } from './actions';
import { GET_LANDING_ARTICLES_SUCCESS } from './actions';

const API_KEY = `a8457610b68381085a3fff38d6a36337:6:74255139`;
const API_URL = `http://api.nytimes.com/svc/news/v3/content/all/all/168.json?api-key=${API_KEY}`;

describe('getLandingArticles', () => {
    it('should dispatch getLandingArticlesSuccess', () => {
        const articles = [{
            title: `Test title`,
            abstract: `Test abstract`,
            byline: `test author`,
            created_date: `test date`,
            url: `test url`,
            source:`test source`,
            section: `test section`,
            material_type_facet: `test facet`,
            thumbnail_standard: `test image`
        }];
        $.ajax = jest.fn().mockImplementation(() => {
            return Promise.resolve({
                ok: true,
                json() {
                    return articles;
                }
            })
        })
        const dispatch = jest.fn();
        return getLandingArticles()(dispatch).then(() => {
            expect($.fn.get).toHaveBeenCalledWith(`${API_URL}`);
            expect(dispatch).toHaveBeenCalledWith(getLandingArticlesSuccess(articles));
        });
    });
});
