import React from 'react';
import preoloader from '../images/preloader.svg';

function Preloader() {
	return (
		<img src={preoloader} className="w-25" alt="preloader" title="preloader" />
	)
}

export default Preloader