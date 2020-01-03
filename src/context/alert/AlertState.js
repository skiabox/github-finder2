import React, { useReducer } from 'react';
import AlertContext from './alertContext';
import AlertReducer from './alertReducer';
import { SET_ALERT, REMOVE_ALERT } from '../types'; //import action types

const AlertState = props => {
	const initialState = null; //entire state

	const [state, dispatch] = useReducer(AlertReducer, initialState);

	// Set Alert function that send an action with a payload (object with msg and type) to the reducer
	const setAlert = (msg, type) => {
		dispatch({
			type: SET_ALERT,
			payload: { msg, type }
		});

		setTimeout(() => dispatch({ type: REMOVE_ALERT }), 5000);
	};

	return (
		<AlertContext.Provider
			value={{
				alert: state,
				setAlert
			}}
		>
			{props.children}
		</AlertContext.Provider>
	);
};

export default AlertState;
