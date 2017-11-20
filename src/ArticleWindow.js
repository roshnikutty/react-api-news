import React from 'react';
import { connect } from 'react-redux';
import './App.css';


let ArticleWindow = (props) => {
    return (
        <div className="frameStyle">
            <iframe src={props.viewArticle}
                title="View the article selected"
                height="600"
                width="450">
            </iframe>
        </div>);
}
export default connect()(ArticleWindow);