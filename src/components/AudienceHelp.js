import React from 'react'; 
import { connect } from 'react-redux';

function AudienceHelp(props) {
	const maxPercent = Math.max.apply(null, props.currentHelpItemData);
	const percRows = props.helpItemShownStatus.audienceHelp && props.currentHelpItemData.map((item, index) => {
		return (
			<div className="d-flex" key={`audienceHelpVariant${index}`}>
				<div>{String.fromCharCode(65 + index)}:</div>
				<div className="audience-help-percent" style={{width: `${item*100/maxPercent}%`}}></div>
				<div>{`${item}%`}</div>
			</div>
		)
	});

	return (
		<div id="audienceHelp" className={props.helpItemShownStatus.audienceHelp ? 'd-block' : 'd-none'}>
			{percRows}
		</div>
	)
};

const mapStateToProps = state => {
	return {
		helpItemShownStatus: state.data.helpItemShownStatus,
		currentHelpItemData: state.data.currentHelpItemData
	}
}

export default connect(mapStateToProps, null)(AudienceHelp)