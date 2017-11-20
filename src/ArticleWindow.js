import React from 'react';
import { connect } from 'react-redux';

let ArticleWindow = (props) => {
    return (
        <div>
            <iframe src={props.viewArticle}
                title="View the article selected"
                height="200"
                width="300">
            </iframe>
        </div>);
}
export default connect()(ArticleWindow);