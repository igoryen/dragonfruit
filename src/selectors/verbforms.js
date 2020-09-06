// get visible verbforms

export default (verbforms, { text, sortBy }) => {
    return verbforms.filter( (verbform) => {
        const textMatch = verbform.rus.toLowerCase().includes(text.toLowerCase())

        return textMatch
    })
}

// }).sort( (a, b) => {
//     if (sortBy === 'rus') {
//         return a.rus < b.rus ? 1 : -1
//     } else if (sortBy === 'spa') {
//         return a.spa < b.spa ? 1 : -1
//     }
// })

