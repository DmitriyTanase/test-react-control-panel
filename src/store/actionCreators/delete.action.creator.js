import DELETE_ITEM from '../actions/delete.action';

function delete_item(value) {
    return {
        type: DELETE_ITEM,
        id: value
    };
}

export default delete_item;