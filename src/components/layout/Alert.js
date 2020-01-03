import React, { useContext } from 'react';

import AlertContext from '../../context/alert/alertContext';

const Alert = () => {
	//initialize context so that we can use it in this component
	const alertContext = useContext(AlertContext);

	//destructure alert context
	const { alert } = alertContext;

	return (
		alert !== null && (
			<div className={`alert alert-${alert.type}`}>
				<i className='fas fa-info-circle'></i> {alert.msg}
			</div>
		)
	);
};

export default Alert;
