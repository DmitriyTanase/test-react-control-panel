import ADD_ITEM from '../actions/add.action';
import initialState from '../initialState';

export default function add_reducer(state = initialState, action) {

    switch (action.type) {
        case 'ADD_ITEM':
            return [
                ...state,
                {
                    name: action.name,
                    age: action.age
                }
            ];

        case 'DELETE_ITEM':
            return [
                ...state.slice(0, action.id).concat(state.slice(action.id + 1))
            ];

        case 'EDIT_ITEM':
            console.log(action.name, action.age, action.id);
            return state.map((item, index) =>
                action.id === index
                    ? {
                        name: action.name,
                        age: action.age
                    }
                    : item
            );
        default:
            return state;
    }
}