import React from 'react';
import { encodeHTML } from './utilities';

function Question(props) {
	return (
		<div className="question" >
			<h5>{encodeHTML(props.question)}</h5>
		</div>
	)
};

export default Question