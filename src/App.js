import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getLandingArticles, getArticleUrl, 
  addSearchToState, searchAction, 
  displaySearchResults } from './actions/actions';
import './App.css';
import ArticleWindow from './ArticleWindow';
import Search from './Search';
import Empty from './Empty';

class App extends Component {
  constructor(props){
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
    this.props.dispatch(displaySearchResults());
    document.getElementsByTagName("input")[0].value = "";     //clear input element for search
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
            <p>SOURCE:{article.source}</p>
            <p>SECTION: {article.section}</p>
            <p>UPDATED ON: {article.updated_date}</p>
            <p>TYPE: {article.material_type_facet}</p>
            <hr />
          </li>
        </a>
      )
    }
    if(!this.props.contentVisibility) {
      return (<Empty visibility={this.props.emptyVisibility.toString()}/>);
    }
    else {
      return (
          <div visibility={this.props.contentVisibility.toString()}>
            <header>
              <h1>THE TIMES</h1>
              <Search onChange={this.handleItemChange} onClick={(e) =>this.handleButtonSubmit(e)} />
            </header>

            <ArticleWindow viewArticle={this.props.clickedArticleUrl}/>
            <div className="col-md-6">
              {articlesFromSevenDays}
            </div>
          </div>
      );
    }
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
