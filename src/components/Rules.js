import React from 'react';
import { Link } from 'react-router-dom';

function Rules() {
	return (
		<div id="rules">
					<Link to='/' className="to-start-page-btn btn btn-outline-light mx-1">
						<i className="fas fa-chevron-left"></i>
					</Link>				
			<p className="pt-4 pr-1">
			Who Wants to Be a Millionaire? (abbreviated WWTBAM and informally known as simply Millionaire) is an international television game show franchise of British origin, created by David Briggs, Mike Whitehill and Steven Knight. In its format, currently owned and licensed by Sony Pictures Television, contestants tackle a series of multiple-choice questions to win large cash prizes in a format that twists on many game show genre conventions – only one contestant plays at a time, similar to radio quizzes; contestants are given the question before attempting an answer, and have no time limit to answer questions; and the amount offered increases as they tackle questions that become increasingly difficult. The maximum cash prize offered in most versions of the format is one million of the local currency.
			The original British version debuted on 4 September 1998 on the ITV network and was aired until its final episode on 11 February 2014.
			</p>
		</div>
	)
};

export default Rules