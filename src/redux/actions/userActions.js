export const setEmail = email = ({  //1 param = no parentheses
    type: 'SET_EMAIL',
    email,
    //email:email,
});

export const setIsLoggedIn  = setIsLoggedIn => ({
    type: 'SET_IS_LOGGED_IN',
    setIsLoggedIn
});