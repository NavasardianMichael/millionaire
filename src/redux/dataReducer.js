import { SET_ROUNDS, SET_CURRENT_ROUND_INDEX, SET_CURRENT_ANSWER, SET_ANSWER_PROC_STATUS, HIGHLIGHT_TRUE_ANSWER, SET_NEXT_ROUND, SET_GAME_PROC_STATUS, SET_CURRENT_SOUND_PROPS, SET_SOUND_AVAILABILITY, SET_CURRENT_SOUND_PROPS_AFTER_COMPARE, SET_ANSWERS_DISABLED_STATUS,
SET_HELP_ITEM_USED_STATUS, SET_HELP_ITEM_SHOWN_STATUS, SET_CURRENT_HELP_ITEM_DATA } from './types';

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
	am: [
			{
				question: 'Ե՞րբ է տեղի ունեցել ավարայրի ճակատամարտը։',
				correct_answer: '451թ․',
				variants: ['451թ․', '481թ․', '371թ․', '551թ․'],
			},
			{
				question: 'Նշվածներից ո՞վ ՀՀ ազգային հերոս չէ։',
				correct_answer: 'Տիգրան Պետրոսյան',
				variants: ['Շառլ Ազնավուր', 'Թաթուլ Կրպեյան', 'Տիգրան Պետրոսյան', 'Կարեն Դեմիրճյան'],
			}			
		],
	currentSoundProps: {},
	soundAvailability: true,
	audienceHelpPercents: [],
	helpItemsUsedStatus: {},
	helpItemShownStatus: {},
	currentHelpItemData: null
};

function dataReducer(state = initialState, action) {
	switch (action.type) {
		case SET_ROUNDS:
			return 	{...state, [state.currentLanguage]: action.rounds}
		case SET_CURRENT_ROUND_INDEX:
			return {...state, currentRoundIndex: action.index}
		case SET_ANSWER_PROC_STATUS:
			return {...state, answerProcStatus: action.status}
		case SET_CURRENT_ANSWER:
			return {...state, currentAnswer: action.answer}
		case SET_NEXT_ROUND:
			return {...state, currentRoundIndex: state.currentRoundIndex+1}
		case SET_GAME_PROC_STATUS:
			if(!action.status && !state.currentAnswerStatus) return {...state, gameProcStatus: 'lost'}
			return {...state, gameProcStatus: action.status}
		case HIGHLIGHT_TRUE_ANSWER:
			if(action.currentAnswer === state[state.currentLanguage][state.currentRoundIndex].correct_answer) {
				return {...state, currentAnswerStatus: true}
			} else {
			 	return {...state, currentAnswerStatus: false}
			}
		case SET_CURRENT_SOUND_PROPS:
			const {url, playFromPosition, playStatus, autoLoad, autoPlay} = action;
			return 	{...state, currentSoundProps: {url, playFromPosition, playStatus, autoLoad, autoPlay}}
		case SET_SOUND_AVAILABILITY:
			return 	{...state, soundAvailability: !state.soundAvailability}
		case SET_ANSWERS_DISABLED_STATUS:
			return 	{...state, answersDisabledStatus: action.status}
		case SET_CURRENT_SOUND_PROPS_AFTER_COMPARE:
			const answerSoundUrl = state.currentAnswerStatus ? action.rightAnswerSoundUrl : action.wrongAnswerSoundUrl;
			return 	{...state, currentSoundProps: {...state.currentSoundProps, url: answerSoundUrl}}
		case SET_HELP_ITEM_USED_STATUS:
			return 	{...state, helpItemsUsedStatus: {...state.helpItemsUsedStatus, [action.helpItem]: action.status }}
		case SET_HELP_ITEM_SHOWN_STATUS:
			return 	{...state, helpItemShownStatus: action.helpItem ? { [action.helpItem]: action.status } : {}}
		case SET_CURRENT_HELP_ITEM_DATA:
			if(action.helpItem && action.helpItem === 'changeQuestion') {
				return {...state, 
						currentHelpItemData: action.helpItemData, 
						[state.currentLanguage]: state[state.currentLanguage].map((round, index) => {
								if(index === state.currentRoundIndex) {
									return action.helpItemData
								} else {
									return {...round}
								}
							})
						}
			} else if(action.helpItem && action.helpItem === 'fiftyFifty') {
				return {...state, 
						currentHelpItemData: action.helpItemData, 
						[state.currentLanguage]: state[state.currentLanguage].map((round, roundIndex) => {
							if(roundIndex !== state.currentRoundIndex) return round;
							return {...round, variants: state[state.currentLanguage][state.currentRoundIndex].variants.map((variant, variantIndex) => action.helpItemData[variantIndex] === 'staying' ? variant : '')}
						})
					   }
			} else {
				return {...state, currentHelpItemData: action.helpItemData}
			}
		default: return state
	}
}

export default dataReducer