import React from 'react';
import { connect } from 'react-redux';
import './App.css';

let Search = (props) => {
	return (
		<div>
			<input type="text" size="50" placeholder="Search" onChange={props.onChange} />
            <button onClick={props.onClick}> Search </button>
		</div>
	);

};

export default connect()(Search)