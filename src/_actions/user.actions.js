import { userService } from '../_services/';
import { history } from '../_helpers';

export const userActions = {
    login,
    logout,
    register
};

function login(username, password){
    return dispatch => {
        let apiEndpoint = 'auth/';
        let payload = {
            username: username,
            password: password
        }
        userService.post(apiEndpoint, payload)
        .then((response) => {
            console.log(JSON.stringify(response))
            if(response.data.status == false){
                alert("username or password is wrong")
            } else {
                if(response.data.token){
                    localStorage.setItem('token', response.data.token);
                    localStorage.setItem('auth', response.data.token);
                    dispatch(setUserDetails(response));
                    history.push('/home');
                }
            }
           
        })
    };
}

export function setUserDetails(user){
    return{
        type: "LOGIN_SUCCESS",
        auth: user.auth,
        token: user.token
    }
}
    
function logout(){
    return dispatch => {
        localStorage.removeItem('auth');
        localStorage.removeItem('token');
        dispatch(logoutUser());
        history.push('/');
    }
}

function register(username, password, email){
    return dispatch => {
        let apiEndpoint = 'auth/register';
        let payload = {
            username: username,
            password: password,
            email: email
        }
        userService.post(apiEndpoint, payload)
        .then((response) => {
            console.log(JSON.stringify(response))
            if(response.data.status == false){
                alert("gagal add user")
            } else {
                if(response.data.status=="success"){
                   alert("berhasil add user")
                    history.push('/sign-in');
                }
            }
           
        })

    }
}

export function registerUser(data){
    return {
        type: "REGISTER_SUCCESS",
        data: data
    }
}

export function logoutUser() {
    return {
        type: "LOGOUT_SUCCESS",
        auth: false,
        token: ''
    }
}