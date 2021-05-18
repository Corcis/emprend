const reducer = (state, action) => {
    switch (action.type) {
        case 'SET_USER_DATA':
            return{
                ...state,
                user: { 
                    name: localStorage.name,
                    email: localStorage.email,
                    token: localStorage.token
                }
            };
        default: return state;
    }
}

export default reducer;