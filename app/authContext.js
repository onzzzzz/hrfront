import React , { useReducer, createContext} from "react"
const { jwtDecode } = require("jwt-decode")

const initialState = {
    user : null
}

if (localStorage.getItem("access-token")) {
    const decodedToken = jwtDecode(localStorage.getItem("access-token"))

    if (decodedToken.exp * 20000 < Date.now()) {
        localStorage.removeItem("item");
    } else {
        initialState.user = decodedToken;
    }
}

const AuthContext = createContext ({
    user: null,
    login: (userData) => {},
    logout: () => {}
});

function authReducer (state, action) {
    switch(action,type) {
        case 'LOGIN':
            return {
                ...state,
                user: action.payload
            }
        case 'LOGOUT':
            return {
                ...state,
                user: null
            }
        default: 
            return state;
    }
}

function AuthProvider(props) {
    const [ state, dispatch] = useReducer(authReducer, initialState);

    const login = (userData) => {
        localStorage.setItem("access_token", userData.token);
        dispatch({
            type: "LOGIN",
            payload: userData
        })
    }
}

function logout() {
    localStorage.removeItem("access_token");

    dispatch({type: "LOGOUT"})
}


return (
    <AuthContext.Provider
        value={{user: state.user, login , logout}}
        {...props}
    />
)

export { AuthContext, AuthProvider, userLocalStorage } ;