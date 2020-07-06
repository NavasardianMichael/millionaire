import { SET_CURRENT_SOUND_PROPS } from './types';

export function setCurrentSoundProps(url, autoLoad = false, autoPlay = false, playStatus = "PLAYING") {
	return {
		type: SET_CURRENT_SOUND_PROPS,
		url,
		autoLoad,
		autoPlay,
		playStatus
	}
};

function setTimeoutPromise(ms) {
	return new Promise(resolve => setTimeout(resolve, ms))
};

export function asyncSetCurrentSoundProps(urlFirst, urlSecond) {
	return async function(dispatch) {
		dispatch(setCurrentSoundProps(urlFirst));
		await setTimeoutPromise(3000);
		dispatch(setCurrentSoundProps(urlSecond));
	}
};