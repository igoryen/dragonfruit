import { createStore, combineReducers } from 'redux'
import verbformsReducer from '../reducers/verbforms'
import filtersReducer from '../reducers/filters'

export default() => {
    const store = createStore(
        combineReducers({
            verbforms: verbformsReducer,
            filters: filtersReducer
        }),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )

    return store
}