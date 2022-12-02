export default (state = {}, action) => {
    switch (action.type) {
        case "LOGIN":
            return {
                ...state,
                email: action.payload.email,
                userType: action.payload.userType,
                stuId: action.payload.stuId,
                cmpId: action.payload.cmpId

            }
        case "LOGOUT":
            return {
            }
        default:
            return state;
    }
};