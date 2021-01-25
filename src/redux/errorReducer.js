
const ADDERROR = "ADDERROR";

let initialState = {
    isError:false,
    errorStatus: null,
    errorMessage: null
};



const ErrorReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADDERROR:
            return {
                ...state,
                isError:true,
                errorStatus:action.errorStatus,
                errorMessage: action.errorMessage
            };
        default:
            return state
    }
};

export default ErrorReducer;


const actionError = {
    addErrorAC: (errorStatus,errorMessage) => ({type:ADDERROR,errorStatus,errorMessage})
};


export const addErrorThunk = (errorStatus,errorMessage) => {
    return dispatch => {
        try {
            dispatch(actionError.addErrorAC(errorStatus,errorMessage));
        }
        catch (e) {
            console.log(e);
        }
    }
};




