import { GET_LANDING_ARTICLES_SUCCESS,GET_ARTICLE_URL, 
    ADD_SEARCH_ITEM, SEARCH_ACTION, DISPLAY_SEARCH_RESULTS } from '../actions/actions';

let initialState = {
    landingPageArticles: [],
    clickedArticleUrl:"",
    searchItem: "", 
    filteredArray: []
};

export const nyTimesArticlesReducer = (state = initialState, action) => {
    if (action.type === GET_LANDING_ARTICLES_SUCCESS) {
        let articlesArray = Object.values(action.payload)[3];
        const landingPageArticles = articlesArray.map((article, index)=>{
            return {
                title: article.title,
                abstract: article.abstract,
                byline: article.byline,
                created_date: article.created_date,
                url: article.url,
                source:article.source,
                section: article.section,
                updated_date: article.updated_date,
                material_type_facet: article.material_type_facet,
                thumbnail_standard: article.thumbnail_standard
            }
        })
        return Object.assign({}, state, {landingPageArticles});
    }
    if(action.type === GET_ARTICLE_URL) {
        let clickedArticleUrl = action.payload;
        return Object.assign({}, state, {clickedArticleUrl});
    }
    if(action.type === ADD_SEARCH_ITEM) {
        let searchItem = action.payload;
        return Object.assign({}, state, {searchItem});
    }
    if(action.type === SEARCH_ACTION){
        let filteredArray = state.landingPageArticles.filter(function(newsItem){
            return (newsItem.title === action.payload ||
                newsItem.abstract === action.payload ||
                newsItem.byline === action.payload ||
                newsItem.source === action.payload ||
                newsItem.section === action.payload ||
                newsItem.material_type_facet === action.payload) 
        });
        console.log(filteredArray);
        return Object.assign({}, state, {filteredArray});
    }
    if(action.type === DISPLAY_SEARCH_RESULTS) {
            let landingPageArticles = state.filteredArray;
            return Object.assign({}, state, {landingPageArticles});
    }
    return state;
}