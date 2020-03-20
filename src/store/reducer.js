const initialState = {
    age:21
}


const reducer = (state, action) => {
    const newState = {...state};
    return newState;

    if(action.type === 'AGE_UP')
    {
        newState.age++;
    }
    if(action.type === 'AGE_DOWN')
    {
        newState.age++;
    }

    return newState;
};

export default reducer;