import $ from 'jquery';

const API_KEY = `a8457610b68381085a3fff38d6a36337:6:74255139`;
const API_URL = `http://api.nytimes.com/svc/news/v3/content/all/all?api-key=${API_KEY}`;

export const GET_LANDING_ARTICLES_SUCCESS = 'GET_LANDING_ARTICLES_SUCCESS';
export const getLandingArticlesSuccess = (articles) => ({
    type: GET_LANDING_ARTICLES_SUCCESS,
    payload: articles
})

export const getLandingArticles = () => {
    //Thunk function
    return function (dispatch) {
        return $.ajax({
            url: API_URL,
            method: 'GET',
        }).done((articlesJson) => {
            console.log(articlesJson)
            dispatch(getLandingArticlesSuccess(articlesJson))
        }).fail(err =>
            console.log(`Error while running getLandingArcles: ${err}`)
            )
    }
}

export const GET_ARTICLE_URL = "GET_ARTICLE_URL";
export const getArticleUrl = (articleUrl) =>({
    type: GET_ARTICLE_URL,
    payload: articleUrl
})