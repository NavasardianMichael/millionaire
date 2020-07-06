import { SET_ROUNDS, SET_CURRENT_ROUND_INDEX, SET_CURRENT_ANSWER, SET_ANSWER_PROC_STATUS, HIGHLIGHT_TRUE_ANSWER, SET_NEXT_ROUND, SET_GAME_PROC_STATUS, SET_CURRENT_SOUND_PROPS, SET_CURRENT_SOUND_PROPS_AFTER_COMPARE, SET_ANSWERS_DISABLED_STATUS } from './types';

const initialState = {
	gameProcStatus: 'start',
	currentLanguage: 'en',
	currentDifficultyLevel: 'easy',
	currentRoundIndex: 0,
	answerProcStatus: 'unchecked',
	currentAnswer: '',
	currentAnswerStatus: null,
	answersDisabledStatus: false,
	en: [],
	ru: [],
	am: {
		rounds: [
			{
				question: 'Ե՞րբ է տեղի ունեցել ավարայրի ճակատամարտը։',
				correct_answer: '451թ․',
				incorrect_answers: ['481թ․', '371թ․', '551թ․'],
			},
			{
				question: 'Նշվածներից ո՞վ ՀՀ ազգային հերոս չէ։',
				correct_answer: 'Տիգրան Պետրոսյան',
				incorrect_answers: ['Շառլ Ազնավուր', 'Թաթուլ Կրպեյան', 'Կարեն Դեմիրճյան'],
			}			
		]
	},
	currentSoundProps: {}
};

function dataReducer(state = initialState, action) {
	switch (action.type) {
		case SET_ROUNDS:
			return 	{...state, en: action.rounds}
		case SET_CURRENT_ROUND_INDEX:
			return {...state, currentRoundIndex: action.index}
		case SET_ANSWER_PROC_STATUS:
			return {...state, answerProcStatus: action.status}
		case SET_CURRENT_ANSWER:
			return {...state, currentAnswer: action.answer}
		case SET_NEXT_ROUND:
			return {...state, currentRoundIndex: state.currentRoundIndex+1}
		case SET_GAME_PROC_STATUS:
			if(!action.status && !state.currentAnswerStatus) return {...state, en: [], gameProcStatus: 'lost'}
			return {...state, gameProcStatus: action.status}
		case HIGHLIGHT_TRUE_ANSWER:
			if(action.currentAnswer === state[state.currentLanguage][state.currentRoundIndex].correct_answer) {
				return {...state, currentAnswerStatus: true}
			} else {
			 	return {...state, currentAnswerStatus: false}
			}
		case SET_CURRENT_SOUND_PROPS:
			const {url, autoLoad, autoPlay, playStatus} = action;
			return 	{...state, currentSoundProps: {url, autoLoad, autoPlay, playStatus}}
		case SET_ANSWERS_DISABLED_STATUS:
			return 	{...state, answersDisabledStatus: action.status}
		case SET_CURRENT_SOUND_PROPS_AFTER_COMPARE:
			const answerSoundUrl = state.currentAnswerStatus ? action.rightAnswerSoundUrl : action.wrongAnswerSoundUrl;
			return 	{...state, currentSoundProps: {...state.currentSoundProps, url: answerSoundUrl}}
		default: return state
	}
}

export default dataReducer