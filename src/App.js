import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  getLandingArticles, getArticleUrl,
  addSearchToState, searchAction
} from './actions/actions';
import './App.css';
import ArticleWindow from './ArticleWindow';
import Search from './Search';
import Empty from './Empty';
import DisplaySearchResults from './DisplaySearchResults';

class App extends Component {
  constructor(props) {
    super(props);
    this.handleItemChange = this.handleItemChange.bind(this);
  }
  viewArticle(e, index) {
    e.preventDefault();
    let articleUrl = this.props.landingPageArticles[index].url;
    this.props.dispatch(getArticleUrl(articleUrl))
  }
  componentWillMount(props) {
    this.props.dispatch(getLandingArticles());
  }
  handleItemChange(e) {
    e.preventDefault();
    let itemValue = e.target.value;
    this.props.dispatch(addSearchToState(itemValue));
  }
  handleButtonSubmit(e) {
    e.preventDefault();
    this.props.dispatch(searchAction(this.props.searchItem));
    document.getElementsByTagName("input")[0].value = "";     //clear input element for search
  }

  render() {
    let articlesFromSevenDays;
    if (this.props.landingPageArticles.length) {
      articlesFromSevenDays = this.props.landingPageArticles.map((article, index) =>
        <div key={index}>
          <a className="row" href="#" onClick={(e) => this.viewArticle(e, index)} key={index}>
            <li>
              <img src={article.thumbnail_standard} height="80" width="80" />
              <h3 className='title'> {article.title}</h3>
              <p> {article.abstract}</p>
              <p className='author'>{article.byline}</p>
              <p className='created_time'> {article.created_date.substring(11, 16)} EST</p>
              <p className='section'>{article.section}</p>
            </li>
          </a>
          <a href={article.url} target='blank' className='url_style'>Open in a new tab</a>
          <hr />
        </div>
      )
    }
    if (!this.props.contentVisibility && this.props.emptyVisibility) {
      return (<Empty visibility={this.props.emptyVisibility.toString()} />);
    }
    else if (this.props.contentVisibility) {
      return (
        <div visibility={this.props.contentVisibility.toString()}>
          <header>
            <h1>THE TIMES</h1>
            <Search onChange={this.handleItemChange} onClick={(e) => this.handleButtonSubmit(e)} />
          </header>

          <ArticleWindow viewArticle={this.props.clickedArticleUrl} />
          <div className="col-md-6">
            {articlesFromSevenDays}
          </div>
        </div>
      )
    }
    else {
      return (<DisplaySearchResults />);
    };
  }
}

const mapStateToProps = (state) => ({
  landingPageArticles: state.landingPageArticles,
  clickedArticleUrl: state.clickedArticleUrl,
  searchItem: state.searchItem,
  contentVisibility: state.contentVisibility,
  emptyVisibility: state.emptyVisibility
})

export default connect(mapStateToProps)(App);
