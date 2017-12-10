import $ from 'jquery';
import { getLandingArticles, searchAction } from './actions';
import { getLandingArticlesSuccess, getSearchResultSuccess, addSearchToState, getArticleUrl } from './actions';
import { GET_LANDING_ARTICLES_SUCCESS, GET_ARTICLE_URL, ADD_SEARCH_ITEM, GET_SEARCH_RESULTS_SUCCESS } from './actions';

const API_KEY = `a8457610b68381085a3fff38d6a36337:6:74255139`;
const API_URL = `http://api.nytimes.com/svc/news/v3/content/all/all/168.json?api-key=${API_KEY}`;

const articles = [{
    title: `Test title`,
    abstract: `Test abstract`,
    byline: `test author`,
    created_date: `test date`,
    url: `test url`,
    source: `test source`,
    section: `test section`,
    material_type_facet: `test facet`,
    thumbnail_standard: `test image`
}];

describe(`getLandingArticlesSuccess`, () => {
    it(`should return the action`, () => {
        const action = getLandingArticlesSuccess(articles);
        expect(action.type).toEqual(GET_LANDING_ARTICLES_SUCCESS);
        expect(action.payload).toEqual(articles);
    })
});
describe(`getSearchResultSuccess`, () => {
    it(`should return the action`, () => {
        const action = getSearchResultSuccess(articles);
        expect(action.type).toEqual(GET_SEARCH_RESULTS_SUCCESS);
        expect(action.payload).toEqual(articles);
    });
});
describe(`getArticleUrl`, () => {
    it(`should return action`, () => {
        const testUrl = `www.sometesturl.com`;
        const action = getArticleUrl(testUrl);
        expect(action.type).toEqual(GET_ARTICLE_URL);
        expect(action.payload).toEqual(testUrl);
    });
});
describe(`addSearchToState`, () => {
    it(`should return action`, () => {
        const searchTerm = "sample search term";
        const action = addSearchToState(searchTerm);
        expect(action.type).toEqual(ADD_SEARCH_ITEM);
        expect(action.payload).toEqual(searchTerm);
    });
});
