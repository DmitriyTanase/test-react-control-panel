import DELETE_ITEM from '../actions/delete.action';
import initialState from '../initialState';

export default function delete_reducer(state = initialState, action) {

    switch (action.type) {
        case 'DELETE_ITEM':
            return  [
                ...state,
                state.find(index => index !== action.id),
            ];

        default: return state;
    }
}