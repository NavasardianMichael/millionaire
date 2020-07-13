import React from 'react';
import { connect } from 'react-redux';
import Logo from './Logo';
import AudienceHelp from './AudienceHelp';
import CallFriendHelp from './CallFriendHelp';

function Header(props) {
	const audienceHelp = !!props.helpItemShownStatus.audienceHelp;
	const callFriendHelp = !!props.helpItemShownStatus.callFriend;
	console.log(callFriendHelp, audienceHelp)
	return (
		<div id="header">
			<Logo className={(audienceHelp || callFriendHelp) ? 'd-block' : 'd-none'}/>
			<AudienceHelp className={audienceHelp ? 'd-block' : 'd-none'}/>
			<CallFriendHelp className={callFriendHelp ? 'd-block' : 'd-none'}/>
		</div>
	)
}

const mapStateToProps = state => {
	return {
		helpItemShownStatus: state.data.helpItemShownStatus
	}
}


export default connect(mapStateToProps, null)(Header)