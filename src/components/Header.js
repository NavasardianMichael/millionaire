import React from 'react';
import { connect } from 'react-redux';
import Logo from './Logo';
import AudienceHelp from './AudienceHelp';
import CallFriendHelp from './CallFriendHelp';

function Header(props) {
	const audienceHelp = !!props.helpItemShownStatus.audienceHelp;
	const callFriendHelp = !!props.helpItemShownStatus.callFriend;
	return (
		<div id="header">
			<Logo shownStatus={!audienceHelp && !callFriendHelp}/>
			<AudienceHelp />
			<CallFriendHelp />
		</div>
	)
}

const mapStateToProps = state => {
	return {
		helpItemShownStatus: state.data.helpItemShownStatus
	}
}


export default connect(mapStateToProps, null)(Header)