import { GET_LANDING_ARTICLES_SUCCESS,GET_ARTICLE_URL, 
    ADD_SEARCH_ITEM, GET_SEARCH_RESULTS_SUCCESS} from '../actions/actions';

let initialState = {
    landingPageArticles: [],
    clickedArticleUrl:"",
    searchItem: "", 
    searchResultsArray: [],
    emptyVisibility: false,
    contentVisibility: true,
    searchedArticles:[]
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
    if(action.type === GET_SEARCH_RESULTS_SUCCESS) {
        console.log(action.payload.response.docs)
            let searchResultsArray = Object.values(action.payload.response.docs);
            if(searchResultsArray.length){
                let emptyVisibility = false;
                let contentVisibility = false;
                const searchedArticles = searchResultsArray.map((article, index)=>{
                    return {
                        headline: article.headline.main,
                        url: article.web_url,
                        summary: article.snippet
                    }
                })
                return Object.assign({}, state, {emptyVisibility}, {contentVisibility}, {searchedArticles});
            }
            else{
                let emptyVisibility = true;
                let contentVisibility = false;
                return Object.assign({}, state, {emptyVisibility}, {contentVisibility});
            }
    }
    return state;
}