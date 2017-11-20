import { GET_LANDING_ARTICLES_SUCCESS,GET_ARTICLE_URL } from '../actions/actions'

let initialState = {
    landingPageArticles: [],
    clickedArticleUrl:""
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
    return state;
}