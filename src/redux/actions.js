import { SET_ROUNDS, SET_CURRENT_ROUND_INDEX, SET_CURRENT_ANSWER, SET_ANSWER_PROC_STATUS, HIGHLIGHT_TRUE_ANSWER, SET_NEXT_ROUND, SET_GAME_PROC_STATUS, SET_CURRENT_SOUND_PROPS, SET_CURRENT_SOUND_PROPS_AFTER_COMPARE, SET_ANSWERS_DISABLED_STATUS } from './types';

export function setRounds(difficulty, rounds) {
	return {
		type: SET_ROUNDS,
		difficulty,
		rounds
	}
};

export function setCurrentRoundIndex(index) {
	return {
		type: SET_CURRENT_ROUND_INDEX,
		index
	}
};

export function highlightTrueAnswer(currentAnswer, winMusic, lostMusic) {
	return {
		type: HIGHLIGHT_TRUE_ANSWER,
		currentAnswer
	}
};

export function fetchQuestions(difficulty) {
	console.log('fetching')
	return function(dispatch) {
		fetch(`https://opentdb.com/api.php?amount=15&difficulty=${difficulty}&type=multiple`)
		.then(res => res.json())
		.then(data => {
			data.results.forEach(item => {
				item.variants = item.incorrect_answers;
				item.variants.push(item.correct_answer);
				// item.variants.splice(Math.floor(Math.random()*3), 0, item.correct_answer);
				delete item.incorrect_answers;
			});
			dispatch(setRounds(difficulty, data.results))
		})
	}
};

export function setCurrentAnswer(answer) {
	return {
		type: SET_CURRENT_ANSWER,
		answer
	}
};

export function setAnswerProcessStatus(status) {
	return {
		type: SET_ANSWER_PROC_STATUS,
		status
	}
};

export function setNextRound() {
	return {
		type: SET_NEXT_ROUND
	}
};

export function setGameProcStatus(status) {
	return {
		type: SET_GAME_PROC_STATUS,
		status
	}
};

export function setAnswersDisabledStatus(status) {
	return {
		type: SET_ANSWERS_DISABLED_STATUS,
		status
	}
};

function setTimeoutPromise(ms) {
	return new Promise(resolve => setTimeout(resolve, ms))
};

export function asyncCheckAnswer(answer) {
	return async function(dispatch) {
		dispatch(setAnswerProcessStatus('checking'));
		dispatch(setAnswersDisabledStatus(true));
		dispatch(setCurrentAnswer(answer));
		await setTimeoutPromise(3000);
		dispatch(setAnswerProcessStatus('checked'));
		dispatch(highlightTrueAnswer(answer));
		setCurrentSoundPropsAfterCompare();
		await setTimeoutPromise(3000);
		dispatch(setAnswerProcessStatus('roundFinal'));
		dispatch(setGameProcStatus());
		dispatch(setAnswersDisabledStatus(false));
		dispatch(setNextRound());
	}
};

export function setCurrentSoundProps(url, autoLoad = false, autoPlay = false, playStatus = "PLAYING") {
	return {
		type: SET_CURRENT_SOUND_PROPS,
		url,
		autoLoad,
		autoPlay,
		playStatus
	}
};

export function setCurrentSoundPropsAfterCompare(rightAnswerSoundUrl, wrongAnswerSoundUrl) {
	return {
		type: SET_CURRENT_SOUND_PROPS_AFTER_COMPARE,
		rightAnswerSoundUrl,
		wrongAnswerSoundUrl
	}
};

export function asyncSetCurrentSoundProps(checkingSoundUrl, rightAnswerSoundUrl, wrongAnswerSoundUrl) {
	return async function(dispatch) {
		dispatch(setCurrentSoundProps(checkingSoundUrl));
		await setTimeoutPromise(3000);
		dispatch(setCurrentSoundPropsAfterCompare(rightAnswerSoundUrl, wrongAnswerSoundUrl));
	}
};