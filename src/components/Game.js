import React, { useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { fetchQuestions, setCurrentSoundProps, setCurrentHelpItemData, setHelpItemShownStatus } from '../redux/actions';
import { encodeHTML } from './utilities';
import Preloader from './Preloader';
import Header from './Header';
import Sound from 'react-sound';
import Question from './Question';
import AnswerItem from './AnswerItem';
import Sidebar from './Sidebar';

function Game(props) {
	const dispatch = useDispatch();

	useEffect(() => {
		if(props.currentLanguage === 'en') dispatch(fetchQuestions('easy'));
		dispatch(setCurrentSoundProps(require('../sounds/resign.mp3')));	
	},[props.currentLanguage, dispatch]);

	useEffect(() => {
		dispatch(setCurrentHelpItemData(null));
		dispatch(setHelpItemShownStatus(null));
	},[props.currentRoundIndex, dispatch])

	// function handleFinishedPlaying() {
	// 	dispatch(setCurrentSoundProps(require(`../sounds/${props.currentDifficultyLevel}.mp3`)))
	// }

	if(props.gameProcStatus === 'lost' && 
		!props.currentAnswerStatus && 
		typeof props.currentAnswerStatus === 'boolean') return <Redirect to='/game/lostPage' />;
	
	if(props.rounds[props.currentLanguage].length === 0) return <Preloader />;

	const answers = props.rounds[props.currentLanguage][props.currentRoundIndex].variants.map((answer, index) => {
		return (
			<AnswerItem answer={encodeHTML(answer)} answerVariantChar={String.fromCharCode(65 + index)} answersDisabledStatus={props.answersDisabledStatus} answerProcStatus={props.answerProcStatus} currentAnswer={props.currentAnswer} key={answer} currentAnswerStatus={props.currentAnswerStatus} correctAnswer={props.rounds[props.currentLanguage][props.currentRoundIndex].correct_answer} />
		)
	});
	
	return (
		<div className="content-wrapper">
			<div id="game">
				<Header />
				<Sound 
					url={props.currentSoundProps.url || ''} 
					playFromPosition={props.currentSoundProps.playFromPosition}
					autoLoad={props.currentSoundProps.autoLoad}
					autoPlay={props.currentSoundProps.autoPlay}
					playStatus={props.currentSoundProps.playStatus || 'STOPPED'}
					// onFinishedPlaying={handleFinishedPlaying}
				/>
				<Question question={encodeHTML(props.rounds[props.currentLanguage][props.currentRoundIndex].question)} />
				<div className="row answers">
					{answers}
					<span className={`changing-question-arrows ${props.helpItemShownStatus.changeQuestion ? 'd-inline' : 'd-none'}`}><i className="fas fa-sync-alt"></i></span>
				</div>
			</div>
			<Sidebar />
		</div>
	)
};

const mapStateToProps = state => {
	return {
		currentLanguage: state.data.currentLanguage,
		currentRoundIndex: state.data.currentRoundIndex,
		rounds: state.data,
		answerProcStatus: state.data.answerProcStatus,
		currentAnswer: state.data.currentAnswer,
		currentAnswerStatus: state.data.currentAnswerStatus,
		gameProcStatus: state.data.gameProcStatus,
		currentSoundProps: state.data.currentSoundProps,
		answersDisabledStatus: state.data.answersDisabledStatus,
		currentDifficultyLevel: state.data.currentDifficultyLevel,
		audienceHelpPercents: state.data.audienceHelpPercents,
		currentHelpItemData: state.data.currentHelpItemData,
		helpItemShownStatus: state.data.helpItemShownStatus
	}
}

export default connect(mapStateToProps, null)(Game)