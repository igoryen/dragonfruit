import { v4 as uuidv4 } from 'uuid';

// add verb form

export const addVerbForm = (
    {
        spa = '',
        rus = '',
    } = {}
) => (
    {
        type: 'ADD_VERB_FORM',
        verbform: {
            id: uuidv4(),
            spa,
            rus
        }
    }
)

// remove verb form
export const removeVerbform = ({ id } = {}) => (
    {
        type: 'REMOVE_VERB_FORM',
        id
    }
)

// edit verb form
export const editVerbForm = (id, updates) => (
    {
        type: 'EDIT_VERB_FORM',
        id,
        updates
    }
)

