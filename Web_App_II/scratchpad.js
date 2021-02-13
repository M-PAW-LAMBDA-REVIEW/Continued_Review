
// Reducer Pattern Examples

const initialState = { count: 0 };

const reducer = (state) => {
    return { count: state.count + 1 }
}

reducer(initialState)

console.log(initialState);
