// filters reducer

const filtersReducerDefaultState = {
    text: '',
    sortBy: 'spa'
}

export default ( state = filtersReducerDefaultState, action ) => {
    switch (action.type) {
        case 'SET_TEXT_FILTER':
            return {
                ...state,
                text: action.text
            }
        case 'SORT_BY SPANISH':
            return {
                ...state,
                sortBy: 'spa'
            }
        case 'SORT_BY_RUSSIAN':
            return {
                ...state,
                sortBy: 'rus'
            }
        default:
            return state
    }
}

