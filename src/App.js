import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getLandingArticles } from './actions/actions';

class App extends Component {
  componentWillMount(props) {
    this.props.dispatch(getLandingArticles());
  }

  render() {
    let articlesFromSevenDays;
    return (
      <div>
        {articlesFromSevenDays}
      </div>
    );
  }
}

export default connect()(App);
