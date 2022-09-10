
export async function login(dispatch,_phone,_password){

	try {
	    dispatch({ type: 'REQUEST_AUTH' });
	    console.log(_phone);
	    console.log(_password);
	    let response = await axios.post('/api/login',{phone:_phone,password:_password});
	    	console.log(response.data);

	    if (data.user) {
	      dispatch({ type: 'LOGIN_SUCCESS', payload: data });
	      localStorage.setItem('currentUser', JSON.stringify(data));
	      return data
	    }
	    dispatch({ type: 'AUTH_ERROR', error: data.errors[0] });
	    return;
  	} catch (error) {
    	dispatch({ type: 'AUTH_ERROR', error: error });
  	}
}

export async function register(dispatch){

}

export async function logout(dispatch){
	dispatch({ type: 'LOGOUT' });
  	localStorage.removeItem('currentUser');
  	localStorage.removeItem('token');
}