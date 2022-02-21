// actions
enum LoadingActionType {
	SET_LOADING = 'SET_LOADING'
}

// types
interface InitialState {
	isLoading : boolean;
}

interface SetLoadingActionType {
	type : LoadingActionType.SET_LOADING;
	isLoading : boolean;
}

type LoadingAction = SetLoadingActionType

// initial state
const initState : InitialState = {
	isLoading : false
};

// reducer
export const loadingReducer = ( state = initState, action : LoadingAction ) : InitialState => {
	switch ( action.type ) {
		case LoadingActionType.SET_LOADING: {
			return { ...state, isLoading : action.isLoading };
		}
		default:
			return state;
	}
};

export const setLoading = ( isLoading : boolean ) => ({ type : LoadingActionType.SET_LOADING, isLoading });