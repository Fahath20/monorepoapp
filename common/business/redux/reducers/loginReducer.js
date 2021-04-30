import { LOGIN_USER } from '../actionTypes/commonTypes';


// initial state
const initialState = {
	userName: "Guest",
};

// Helper Functions

function storeUserName(state, userName) {

	return {
		...state,
		userName
	};
}

function reducer(state = initialState, action) {

	switch (action.type) {

		case LOGIN_USER:
        
			// handle the action here using helper functions
			return storeUserName(state, action.payload);
		default:
			return state;
	}
}

export default reducer;
