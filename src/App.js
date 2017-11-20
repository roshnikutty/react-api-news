import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getLandingArticles, getArticleUrl } from './actions/actions';
import './App.css';
import ArticleWindow from './ArticleWindow';

class App extends Component {
  viewArticle(e, index) {
    e.preventDefault();
    let articleUrl = this.props.landingPageArticles[index].url;
    this.props.dispatch(getArticleUrl(articleUrl))
  }
  componentWillMount(props) {
    this.props.dispatch(getLandingArticles());
  }

  render() {
    let articlesFromSevenDays;
    if (this.props.landingPageArticles) {
      articlesFromSevenDays = this.props.landingPageArticles.map((article, index) =>
        <a className="row" href="#" onClick={(e)=>this.viewArticle(e, index)} key={index}>
          <li>
            <img src={article.thumbnail_standard} height="80" width="80" />
            <p>TITLE: {article.title}</p>
            <p>ABSTRACT: {article.abstract}</p>
            <p>AUTHOR: {article.byline}</p>
            <p>CREATED: {article.created_date}</p>
            {/* <p>URL: {article.url}</p> */}
            <p>SOURCE:{article.source}</p>
            <p>SECTION: {article.section}</p>
            <p>UPDATED ON: {article.updated_date}</p>
            <p>TYPE: {article.material_type_facet}</p>
            <hr />
          </li>
        </a>
      )
    }
    return (
      <div>
        <ArticleWindow viewArticle={this.props.clickedArticleUrl} />
        <div className="col-md-6">
          {articlesFromSevenDays}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  landingPageArticles: state.landingPageArticles,
  clickedArticleUrl: state.clickedArticleUrl
})

export default connect(mapStateToProps)(App);
