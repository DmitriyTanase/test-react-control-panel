import EDIT_ITEM from '../actions/edit.action';

function edit_item(value) {
    return {
        type: EDIT_ITEM,
        name: value,
        age: value
    };
}

export default edit_item;