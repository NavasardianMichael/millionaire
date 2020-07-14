import React from 'react';
import { connect } from 'react-redux';
import Preloader from './Preloader';

function CallFriendHelp(props) {
	if(props.currentHelpItemData !== null && props.helpItemShownStatus.callFriend) {
		return (
			<div id="callFriendHelp" className={props.helpItemShownStatus.callFriend ? 'd-block' : 'd-none'}>
				<div className="row">
					<div className="col pr-0">
						<img className="w-100" src={props.currentHelpItemData.pictureUrl} alt={`call to ${props.currentHelpItemData.fullName}`} title={`call to ${props.currentHelpItemData.fullName}`}/>
					</div>
					<div className="col text-left my-auto pl-0">
						<h4>{props.currentHelpItemData.fullName}</h4>
						<p className="friend-text">I think the right answer is {String.fromCharCode(65 + props.currentHelpItemData.variant)} </p>						
					</div>
				</div>
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