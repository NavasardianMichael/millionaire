import { SET_ROUNDS, SET_CURRENT_ROUND_INDEX, SET_CURRENT_ANSWER, SET_ANSWER_PROC_STATUS, HIGHLIGHT_TRUE_ANSWER, SET_NEXT_ROUND, SET_GAME_PROC_STATUS, SET_CURRENT_SOUND_PROPS, SET_CURRENT_SOUND_PROPS_AFTER_COMPARE, SET_ANSWERS_DISABLED_STATUS, 
	SET_HELP_ITEM_USED_STATUS, SET_HELP_ITEM_SHOWN_STATUS, SET_CURRENT_HELP_ITEM_DATA } from './types';

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
	return function(dispatch) {
		fetch(`https://opentdb.com/api.php?amount=15&difficulty=${difficulty}&type=multiple`)
		.then(res => res.json())
		.then(data => {
			data.results.forEach(item => {
				item.variants = item.incorrect_answers;
				const rightAnswerIndex = Math.floor(Math.random()*3);
				item.rightAnswerIndex = rightAnswerIndex;
				item.variants.splice(rightAnswerIndex, 0, item.correct_answer);
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
		await setTimeoutPromise(4000);
		dispatch(setAnswerProcessStatus('roundFinal'));
		dispatch(setGameProcStatus());
		dispatch(setAnswersDisabledStatus(false));
		dispatch(setNextRound());
	}
};

export function setCurrentSoundProps(url, playFromPosition, autoLoad = false, autoPlay = false, playStatus = "PLAYING") {
	return {
		type: SET_CURRENT_SOUND_PROPS,
		url,
		playFromPosition,
		playStatus,
		autoLoad,
		autoPlay
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


// --------------------------------

export function setHelpItemsUsedStatus(helpItem, status) {
	return {
		type: SET_HELP_ITEM_USED_STATUS,
		helpItem,
		status
	}
};

export function setHelpItemShownStatus(helpItem, status) {
	return {
		type: SET_HELP_ITEM_SHOWN_STATUS,
		helpItem,
		status
	}
};

export function setCurrentHelpItemData(helpItemData, helpItem) {
	return {
		type: SET_CURRENT_HELP_ITEM_DATA,
		helpItem,
		helpItemData
	}
};

export function findCurrentHelpItemAndSetData(helpItem, rightAnswerIndex) {
	return async function(dispatch) {
		var helpItemData;
		switch (helpItem) {
			case 'fiftyFifty':
				helpItemData = [0, 1, 2, 3];
				helpItemData.splice(rightAnswerIndex, 1, null);
				var notRemovedOtherIndex = Math.round(Math.random()*3);
				while(notRemovedOtherIndex === rightAnswerIndex) {
					notRemovedOtherIndex = Math.round(Math.random()*3)
				};
				helpItemData.splice(notRemovedOtherIndex, 1, null);
				dispatch(setCurrentHelpItemData(helpItemData, helpItem));
				break
			case 'audienceHelp':
				const rightAnswerPerc = Math.round(40+Math.random()*40);
				const a_perc = Math.round(Math.random()*(100-rightAnswerPerc));
				const b_perc = Math.round(Math.random()*(100-(a_perc+rightAnswerPerc)));
				const c_perc = 100 - (rightAnswerPerc+a_perc+b_perc);
				helpItemData = [a_perc, b_perc, c_perc];
				helpItemData.splice(rightAnswerIndex, 0, rightAnswerPerc);
				dispatch(setCurrentHelpItemData(helpItemData, helpItem));
				break
			case 'callFriend':
				fetch('https://randomuser.me/api/?inc=name,picture')
				.then(res => res.json())
				.then(await function(data) {
					helpItemData = {};
					helpItemData.fullName = data.results[0].name.first + ' ' + data.results[0].name.last;
					helpItemData.pictureUrl = data.results[0].picture.large;
					const answerVariantIndex = Math.round(Math.random()*3);
					helpItemData.variant = answerVariantIndex > 0 ? rightAnswerIndex : answerVariantIndex;
					dispatch(setCurrentHelpItemData(helpItemData, helpItem));
				});
				break
			case 'changeQuestion':
				fetch(`https://opentdb.com/api.php?amount=1&difficulty=easy&type=multiple`)
				.then(res => res.json())
				.then(data => {
					var helpItemData = data.results[0];
					helpItemData.variants = helpItemData.incorrect_answers;
					const rightAnswerIndex = Math.floor(Math.random()*3);
					helpItemData.rightAnswerIndex = rightAnswerIndex;
					helpItemData.variants.splice(rightAnswerIndex, 0, helpItemData.correct_answer);
					delete helpItemData.incorrect_answers;
					dispatch(setCurrentHelpItemData(helpItemData, helpItem));
				})
				break
			default: console.log('something went wrong');
		};
	} 
};

export function selectHelpItem(helpItem, rightAnswerIndex, onSelectSoundUrl) {
	return async function(dispatch) {
		dispatch(setHelpItemsUsedStatus(helpItem, 'selecting'));
		dispatch(setCurrentSoundProps(onSelectSoundUrl));
		await setTimeoutPromise(700);
		dispatch(setHelpItemsUsedStatus(helpItem, true));
		dispatch(findCurrentHelpItemAndSetData(helpItem, rightAnswerIndex));
		dispatch(setHelpItemShownStatus(helpItem, true));
	}
}