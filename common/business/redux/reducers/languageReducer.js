import { SET_LANGUAGE } from '../actionTypes/locActionTypes';

// initial state
const initialState = {
	language: "",
};

// Helper Functions

function setLanguage(state, action) {

	return {
		...state,
		language: action.payload
	};
}

// Reducer Function

function reducer(state = initialState, action) {
    

	switch (action.type) {
		case SET_LANGUAGE:
            console.log("ssss type => ", action.type);
    console.log("ssss type => ", action.payload);
			return setLanguage(state, action);
		default:
			return state;
	} 
}

export default reducer;
