import { v4 as uuidv4 } from 'uuid';
import database from '../firebase/firebase'

// add verb form

export const addVerbform = (verbform) => (
    {
        type: 'ADD_VERB_FORM',
        verbform
    }
)

export const startAddVerbform = (verbformData = {}) => {
    return (dispatch) => {
        const {
            spa = '',
            rus = '',
            createdAt = 0
        } = verbformData
        const verbform = { spa, rus, createdAt }

        database.ref('verbforms').push(verbform).then( (ref) => {
            dispatch( addVerbform(
                {
                    id: ref.key,
                    ...verbform
                }
            ))
        })
    }
}

// remove verb form
export const removeVerbform = ({ id } = {}) => (
    {
        type: 'REMOVE_VERB_FORM',
        id
    }
)

// edit verb form
export const editVerbform = (id, updates) => (
    {
        type: 'EDIT_VERB_FORM',
        id,
        updates
    }
)

// set verb forms
export const setVerbforms = (verbforms) => (
    {
        type: 'SET_VERB_FORMS',
        verbforms
    }
)

export const startSetVerbforms = () => {
    return (dispatch) => {
        return database.ref('verbforms').once('value').then((snapshot) => {
            const verbforms = []

            snapshot.forEach((childSnapshot) => {
                verbforms.push({
                    id: childSnapshot.key,
                    ...childSnapshot.val()
                })
            })
            dispatch(setVerbforms(verbforms))
        })
    }
}

export const startRemoveVerbform = ({id} = {}) => {
    return(dispatch) => {
        return database
            .ref(`verbforms/${id}`)
            .remove()
            .then(() => {
                dispatch(removeVerbform({id}))
            })
    }
}

export const startEditVerbform = (id, updates) => {
    return (dispatch) => {
        return database
            .ref(`verbforms/${id}`)
            .update(updates)
            .then(() =>{
                dispatch(editVerbform(id, updates))
            })
    }
}

