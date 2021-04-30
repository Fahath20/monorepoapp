import { LOGIN_USER } from '../actionTypes/commonTypes';

function addUserName(payload) {
	return {
		type: LOGIN_USER,
		payload
	};
}

const actionCreators = {
	addUserName
};

export { actionCreators };
