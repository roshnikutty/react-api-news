import { GET_LANDING_ARTICLES_SUCCESS } from '../actions/actions'

let initialState = {
    landingPageArticles: []
};

export const nyTimesArticlesReducer = (state = initialState, action) => {
    if (action.type === GET_LANDING_ARTICLES_SUCCESS) {
        let articlesArray = Object.values(action.payload)[3];
        const landingPageArticles = articlesArray.map((article)=>{
            return {
                title: article.title,
                abstract: article.abstract,
                author: article.byline,
                created_date: article.created_date,
                url: article.url,
                source:article.source,
                section: article.section,
                updated_date: article.updated_date,
                material_type_facet: article.material_type_facet,
                multimedia: article.multimedia
            }
        })
        return Object.assign({}, state, {landingPageArticles});
    }
    return state;
}