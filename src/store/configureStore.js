import { createStore, combineReducers } from 'redux'
import verbformsReducer from '../reducers/verbforms'
import filtersReducer from '../reducers/filters'

export default() => {
    const store = createStore(
        combineReducers({
            verbforms: verbformsReducer,
            filters: filtersReducer
        })
    )

    return store
}