export const initialState = {
    term : null,
};
export const actionTypes = {
    SET_SEARCH_TERM : "SET_SEARCH_TERM" ,
};

const reducer = (state, action) => {
    console.log(action);

    switch ( action.type) {
        case actionTypes.SET_SEARCH_TERM:
            return{
                ...state,
                term :action.term,
            };
        default:
            return state;
        }
    };

    export default reducer;

// state : state of the data layer
// action : whatever we are dispatching into the data layer or into context
//reducer's job is to listen to any dispatched actions that all it does.
// ...state : concurrent state
//term :action.term  :: change the term with whatever action term you dispatched