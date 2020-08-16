import ADD_ITEM from '../actions/add.action';

function add_item(value) {
    return {
        type: ADD_ITEM,
        name: value,
        age: value
    };
}

export default add_item;