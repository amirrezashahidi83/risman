
export async function login(dispatch,phone,password){

	try {
	    dispatch({ type: 'REQUEST_AUTH' });

	    let response = await axios.post('/api/login',{phone:phone,password:password});
	    let data = await response.json();

	    if (data.user) {
	      dispatch({ type: 'LOGIN_SUCCESS', payload: data });
	      localStorage.setItem('currentUser', JSON.stringify(data));
	      return data
	    }

	    dispatch({ type: 'LOGIN_ERROR', error: data.errors[0] });
	    return;
  	} catch (error) {
    	dispatch({ type: 'LOGIN_ERROR', error: error });
  	}
}

export async function register(dispatch){

}

export async function logout(dispatch){
	dispatch({ type: 'LOGOUT' });
  	localStorage.removeItem('currentUser');
  	localStorage.removeItem('token');
}