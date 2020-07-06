import React from 'react';
import { useDispatch } from 'react-redux';
import { asyncCheckAnswer } from '../redux/actions';
import { asyncSetCurrentSoundProps } from '../redux/actions';

function AnswerItem(props) {
	const dispatch = useDispatch();

	function handleAnswer(event) {
		dispatch(asyncCheckAnswer(props.answer));
		dispatch(asyncSetCurrentSoundProps('sounds/final_answer.mp3', 'sounds/correct_answer.mp3', 'sounds/wrong_answer.mp3'));
	};

	const backgroundColor = (props.currentAnswer === props.answer && props.answerProcStatus === 'checking') ?
							'orange' :
							(props.answerProcStatus === 'checked' && props.currentAnswer === props.answer && props.currentAnswer === props.correctAnswer) ?
							'lightgreen' :
							(props.answerProcStatus === 'checked' && props.currentAnswer !== props.answer && props.answer === props.correctAnswer) ?
							'lightgreen' : 
							(props.answerProcStatus === 'checked' && props.currentAnswer === props.answer && props.currentAnswer !== props.correctAnswer) ?
							'red' : '';

	return ( 
		<div className="col-md-6 answer-item" >
			<button to="game" className="btn btn-outline-light w-100 my-2 py-2" onClick={handleAnswer} style={{backgroundColor}} disabled={props.answersDisabledStatus} >
				{props.answer}
			</button>
		</div>
	)
}

export default AnswerItem