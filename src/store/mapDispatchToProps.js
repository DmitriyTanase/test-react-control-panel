import { bindActionCreators } from 'redux';
import add_item from './actionCreators/add.action.creator';
import delete_item from './actionCreators/delete.action.creator';
import edit_item from './actionCreators/edit.action.creator';

function mapDispatchToProps(component) {

    switch (component) {
        case "Itemadd": return function (dispatch) {
            return {
                add_item: bindActionCreators(add_item, dispatch)
            };
        };
        case "Itemdelete": return function (dispatch) {
            return {
                delete_item: bindActionCreators(delete_item, dispatch)
            };
        };
        case "Itemedit": return function (dispatch) {
            return {
                edit_item: bindActionCreators(edit_item, dispatch)
            };
        };

        default: return undefined;
    }
}

export default mapDispatchToProps;