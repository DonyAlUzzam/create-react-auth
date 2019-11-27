let token = localStorage.getItem('token');
let auth = localStorage.getItem('auth');

const initialState = auth ? { loggedIn: true, auth, token } : {};
export function register(state = initialState, action) {
    switch (action.type) {
        case 'REGISTER_SUCCESS':
          return {
             data: action.data
          };
        default:
            return state  
    }
}