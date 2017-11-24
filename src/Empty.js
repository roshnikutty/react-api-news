import React from 'react';
import {connect} from 'react-redux';
import './App.css';

let Empty = (props) => {
	if(!props.visibility) {
		return null;
	}
	else{
		return (
			<div>
				<header>
	              <h1>THE TIMES</h1>
	            </header>
				<div visibile={props.visibility}>
					<h2>There are no results for this search.</h2>
				</div>
			</div>);
	}
};

export default connect()(Empty);

