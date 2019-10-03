//Creating a reducer

//Step1

const INITIAL_STATE = {
    email: 'temp',
    isLoggedIn:false,
};

//Step 2 create listener function

const userReducer = (state = INITIAL_STATE) => {



//Step 3 create switch for action types
switch (action.type) {
    case 'SET_EMAIL':
        return{
            ...state, //spread operator
            //email:state.email,
            //isLoggedIn:state.isLoggedIn,
            email:action.email,
        }
    default:
        return state;
}
};

//dont forget to export

export default userReducer;