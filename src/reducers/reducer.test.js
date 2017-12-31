import { nyTimesArticlesReducer } from './reducer';
import {
    getLandingArticlesSuccess, getArticleUrl,
    addSearchToState
} from '../actions/actions';
import { dataFromApi, resultingState, testUrl, searchAPIresults } from './testData';

describe(`nyTimesArticlesReducer`, () => {
    it(`should add in list of articles`, () => {
        let state = {
            landingPageArticles: []
        };
        state = nyTimesArticlesReducer(state, getLandingArticlesSuccess(dataFromApi));
        expect(state).toEqual(resultingState);
    });
    it(`should pick the clicked article's url`, () => {
        let state = {
            clickedArticleUrl: ""
        };
        state = nyTimesArticlesReducer(state, getArticleUrl(testUrl));
        expect(state).toEqual({clickedArticleUrl: testUrl});
    });
    it(`should pick search term`, () => {
        let state = {
            searchItem: ""
        };
        state = nyTimesArticlesReducer(state, addSearchToState(`Star Wars`));
        expect(state.searchItem).toEqual(`Star Wars`);
    });
    
});