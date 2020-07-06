import React from 'react'; 

function Question(props) {
	return (
		<div className="question" >
			<h4>{props.question}</h4>
		</div>
	)
};

export default Question