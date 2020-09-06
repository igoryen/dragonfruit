// verb forms reducer

const verbFormsReducerDefaultState = []
export default ( state = verbFormsReducerDefaultState, action ) => {
    switch (action.type) {
        case 'ADD_VERB_FORM':
            return [
                ...state,
                action.verbform
            ]
        case 'REMOVE_VERB_FORM':
            return state.filter( ({ id }) => id !== action.id)
        case 'EDIT_VERB_FORM':
            return state.map( (verbform) => {
                if (verbform.id === action.id) {
                    return {
                        ...verbform,
                        ...action.updates
                    }
                }
                else {
                    return verbform
                }
            })
        
        default:
            return state
    }
}