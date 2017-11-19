import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getLandingArticles } from './actions/actions';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.viewArticle = this.viewArticle.bind(this);
  }
  viewArticle(index) {
    let articleUrl = this.props.landingPageArticles[index].url;
    console.log(articleUrl)
  }
  componentWillMount(props) {
    this.props.dispatch(getLandingArticles());
  }

  render() {
    let articlesFromSevenDays;
    if (this.props.landingPageArticles) {
      articlesFromSevenDays = this.props.landingPageArticles.map((article, index) =>
        <a href={article.url} onClick={this.viewArticle(index)}>
          <li key={index}>
            <p>TITLE: {article.title}</p>
            <p>ABSTRACT: {article.abstract}</p>
            <p>AUTHOR: {article.byline}</p>
            <p>CREATED: {article.created_date}</p>
            {/* <p>URL: {article.url}</p> */}
            <p>SOURCE:{article.source}</p>
            <p>SECTION: {article.section}</p>
            <p>UPDATED ON: {article.updated_date}</p>
            <p>TYPE: {article.material_type_facet}</p>
            {/* <p>multimedia: {article.multimedia[0]} {article.multimedia[1]} {article.multimedia[2]} {article.multimedia[3]}</p> */}
            {/* <iframe src={article.url} height="200" width="300"></iframe> */}
            <hr />
          </li>
        </a>
      )
    }
    return (
      <div>
        {articlesFromSevenDays}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  landingPageArticles: state.landingPageArticles
})

export default connect(mapStateToProps)(App);
