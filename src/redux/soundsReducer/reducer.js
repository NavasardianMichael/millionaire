import { SET_CURRENT_SOUND_PROPS } from './types';

const initialState = {
	currentSoundProps: {}
};

function soundsReducer(state = initialState, action) {
	switch (action.type) {
		case SET_CURRENT_SOUND_PROPS:
			const {url, autoLoad, autoPlay, playStatus} = action;
			return 	{...state, currentSoundProps: {url, autoLoad, autoPlay, playStatus}}
		default: return state
	}
}

export default soundsReducer