// get visible verbforms

export default (verbforms, { text, sortBy }) => {
    return verbforms.filter( (verbform) => {
        console.log('sortBy', sortBy)
        let textMatch = ''
        if (sortBy === 'rus') {
            textMatch = verbform.rus.toLowerCase().includes(text.toLowerCase())
        }
        else if (sortBy === 'spa') {
            textMatch = verbform.spa.toLowerCase().includes(text.toLowerCase())
        }
        else if (sortBy === 'createdAt'){
            textMatch = true
        }

        return textMatch
    }).sort( (a, b) => {
        if (sortBy === 'rus') {
            return a.rus < b.rus ? 1 : -1
        }
        else if (sortBy === 'spa') {
            return a.spa < b.spa ? 1 : -1
        }
        else if (sortBy === 'createdAt') {
            return a.createdAt < b.createdAt ? 1 : -1
        }
    })
}

