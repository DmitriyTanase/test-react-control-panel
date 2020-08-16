function mapStateToProps(component) {

    switch (component) {
        case "Showitems": {
            return function (state) {
                return {
                    id: state.itemsById["id"],
                    names: state.itemsById["name"],
                    ages: state.itemsById["age"]
                };
            }
        }
        case "Itemdelete": {
            return function (state) {
                return {
                    id: state.itemsById["id"],
                    names: state.itemsById["name"],
                    ages: state.itemsById["age"]
                };
            }
        }
        case "Itemedit": {
            return function (state) {
                return {
                    id: state.itemsById["id"],
                    names: state.itemsById["name"],
                    ages: state.itemsById["age"]
                };
            }
        }
        case "CartItem": {
            return function (state) {
                return {
                    id: state.itemsById.id,
                    names: state.itemsById.name,
                    ages: state.itemsById.age
                };
            }
        }

        default: return undefined;
    }
}

export default mapStateToProps;