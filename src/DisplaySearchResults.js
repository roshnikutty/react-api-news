import React from 'react';
import {connect} from 'react-redux';
import './App.css';

export let DisplaySearchResults = (props) => {
	// console.log(props.searchedArticles);
	if(!props.searchedArticles.length) {
		return null;
	}
	else {
		return (
			<div>
				<header>
	              <h1>THE TIMES</h1>
	            </header>
					<div>
						{props.searchedArticles.map((searched, index) => {
							return (<ul>
								<li>HEADLINE: {searched.headline}</li>
								<li>SUMMARY: {searched.summary}</li>
								<li>ARTICLE URL: <a href={searched.url} target='blank'>{searched.url}</a></li><hr/>
							</ul>)
							}
					      )}
					</div>
			</div>
		);
	}
};

const mapStateToProps =(state) => ({
	searchedArticles: state.searchedArticles
})

connect(mapStateToProps)(DisplaySearchResults);

