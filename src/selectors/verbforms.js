// get visible verbforms

export default (verbforms, { text, sortBy }) => {
    return verbforms.filter( (verbform) => {
        let textMatch = ''
        if (
            verbform.rus.toLowerCase().includes(text.toLowerCase()) ||
            verbform.spa.toLowerCase().includes(text.toLowerCase())
        ) {
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

