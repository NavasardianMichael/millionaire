import React, { useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { fetchQuestions, setCurrentSoundProps } from '../redux/actions';
import Sound from 'react-sound';
import Question from './Question';
import AnswerItem from './AnswerItem';
import Preloader from './Preloader';

function Game(props) {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchQuestions('easy'));
		dispatch(setCurrentSoundProps('sounds/resign.mp3'))		
	},[]);

	function handleFinishedPlaying() {
		dispatch(setCurrentSoundProps(`sounds/${props.currentDifficultyLevel}.mp3`))
	}

	if(props.gameProcStatus === 'lost' && 
		!props.currentAnswerStatus && 
		typeof props.currentAnswerStatus === 'boolean') return <Redirect to='lostPage' />
	
	if(props.rounds.length === 0) return <Preloader />;

	const answers = props.rounds[props.currentRoundIndex].variants.map(answer => <AnswerItem answer={answer} answersDisabledStatus={props.answersDisabledStatus} answerProcStatus={props.answerProcStatus} currentAnswer={props.currentAnswer} key={answer} currentAnswerStatus={props.currentAnswerStatus} correctAnswer={props.rounds[props.currentRoundIndex].correct_answer} />);
	return (
		<div id="game">	
			<Sound 
				url={props.currentSoundProps.url} 
				autoLoad={props.currentSoundProps.autoLoad}
				autoPlay={props.currentSoundProps.autoPlay}
				playStatus={props.currentSoundProps.playStatus}
				onFinishedPlaying={handleFinishedPlaying}
			 />
			<Question question={props.rounds[props.currentRoundIndex].question} />
			<div className="row">
				{answers}
			</div>
		</div>
	)
};

const mapStateToProps = state => {
	return {
		currentRoundIndex: state.data.currentRoundIndex,
		rounds: state.data.en,
		answerProcStatus: state.data.answerProcStatus,
		currentAnswer: state.data.currentAnswer,
		currentAnswerStatus: state.data.currentAnswerStatus,
		gameProcStatus: state.data.gameProcStatus,
		currentSoundProps: state.data.currentSoundProps,
		answersDisabledStatus: state.data.answersDisabledStatus,
		currentDifficultyLevel: state.data.currentDifficultyLevel
	}
}

export default connect(mapStateToProps, null)(Game)