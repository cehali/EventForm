import { POST_EVENT } from "../action/types";
import { createStore } from 'redux';


let date = new Date();

const initialState = {
    crr_date: date.getFullYear() + '-' + ('0' + (date.getMonth() + 1)).slice(-2) +
        '-' + ('0' + date.getDate()).slice(-2)
};

const reducer = (state, action) => {
    switch (action.type) {
        case POST_EVENT:
            return {
                ...state,
            };
        default:
            return state;
    }
};

const store = createStore(
    reducer,
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
