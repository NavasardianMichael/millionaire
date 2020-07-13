import React from 'react';
import { connect } from 'react-redux';
import Preloader from './Preloader';

function CallFriendHelp(props) {
	if(props.currentHelpItemData !== null && props.helpItemShownStatus.callFriend) {
		return (
			<div id="callFriendHelp" className={props.helpItemShownStatus.callFriend ? 'd-block' : 'd-none'}>
				<h4>{props.currentHelpItemData.fullName}</h4>
				<img className="w-75" src={props.currentHelpItemData.pictureUrl} alt={`call to ${props.currentHelpItemData.fullName}`} title={`call to ${props.currentHelpItemData.fullName}`}/>
				<p className="friend-text">I think the right answer is {String.fromCharCode(65 + props.currentHelpItemData.variant)} </p>
			</div>
		)
	} else {
		return (
			<div className={props.helpItemShownStatus.callFriend ? 'd-block' : 'd-none'}>
				<Preloader />
			</div>
		)
	}
};

const mapStateToProps = state => {
	return {
		helpItemShownStatus: state.data.helpItemShownStatus,
		currentHelpItemData: state.data.currentHelpItemData
	}
}

export default connect(mapStateToProps, null)(CallFriendHelp)