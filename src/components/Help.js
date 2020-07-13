import React from 'react';
import { useDispatch, connect } from 'react-redux';
import { selectHelpItem } from '../redux/actions';

function Help(props) {
	const dispatch = useDispatch();

	var styleSheet = document.styleSheets[0];
	var keyframes =
    `@-webkit-keyframes scaling {
        50% {-webkit-transform:scale(1.05)} 
        90% {-webkit-transform:scale(1.0)}
    }`;
    styleSheet.insertRule(keyframes, styleSheet.cssRules.length);
    var style = {
      animationName: 'scaling',
      animationDuration: '1.5s',
      animationIterationCount: 'infinite',
      animationFillMode: 'forwards',
    };

    function handleHelpSelect(event) {
    	const { name } = event.currentTarget;
    	const rightAnswerIndex = props.rounds[props.currentLanguage][props.currentRoundIndex].rightAnswerIndex;
    	dispatch(selectHelpItem(name, rightAnswerIndex, require(`../sounds/fiftyFifty.mp3`)));
    }

	return (
		<div id="help">
		  <div className="d-flex">
		  			<div>
		  				<button className="btn btn-outline-light" name='fiftyFifty' disabled={props.answersDisabledStatus || props.helpItemsUsedStatus.fiftyFifty || Object.values(props.helpItemsUsedStatus).includes('selecting')} style={!props.helpItemsUsedStatus.fiftyFifty ? style : {}} onClick={handleHelpSelect}>
				  			<span className="help-icon font-weight-bold">50/50</span>
				  		</button>
		  			</div>
		  			<div>
		  				<button className="btn btn-outline-light" name='callFriend' disabled={props.answersDisabledStatus || props.helpItemsUsedStatus.callFriend || Object.values(props.helpItemsUsedStatus).includes('selecting')} style={!props.helpItemsUsedStatus.callFriend ? style : {}} onClick={handleHelpSelect}>
					  			<i className="help-icon fas fa-phone-alt"></i>
					    </button>
		  			</div>
		  			<div>
		  				<button className="btn btn-outline-light" name='audienceHelp' disabled={props.answersDisabledStatus || props.helpItemsUsedStatus.audienceHelp || Object.values(props.helpItemsUsedStatus).includes('selecting')} style={!props.helpItemsUsedStatus.audienceHelp ? style : {}} onClick={handleHelpSelect}>
					  			<i className="help-icon fas fa-users"></i>
					    </button>
		  			</div>
		  			<div>
					  	<button className="btn btn-outline-light" name='changeQuestion' disabled={props.answersDisabledStatus || props.helpItemsUsedStatus.changeQuestion || Object.values(props.helpItemsUsedStatus).includes('selecting')} style={!props.helpItemsUsedStatus.changeQuestion ? style : {}} onClick={handleHelpSelect}>
					  		<i className="help-icon fas fa-sync-alt"></i>
					  	</button>		  				
		  			</div>
		  		</div>			  	

		</div>
	)
};

const mapStateToProps = state => {
	return {
		currentLanguage: state.data.currentLanguage,
		currentRoundIndex: state.data.currentRoundIndex,
		rounds: state.data,				
		answersDisabledStatus: state.data.answersDisabledStatus,
		helpItemsUsedStatus: state.data.helpItemsUsedStatus
	}
}

export default connect(mapStateToProps, null)(Help)