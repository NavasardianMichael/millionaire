import React from 'react'; 
import { connect } from 'react-redux';

function Rounds(props) {
	
	const roundRows = [];

	for(let i = 15; i >= 1; i--) {
		roundRows.push(<div key={`roundRow${i+1}`} className={i === props.currentRoundIndex+1 ? 'highlightedRound' : ''}>{`${i}: ${i*1000}$`}</div>);
	};

	return (
		<div id="rounds">
			{roundRows}
		</div>
	)
};

const mapStateToProps = state => {
	return {
		currentLanguage: state.data.currentLanguage,
		currentRoundIndex: state.data.currentRoundIndex
	}
};

export default connect(mapStateToProps, null)(Rounds)