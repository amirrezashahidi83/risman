
export async function login(dispatch,_phone,_password){

	try {
	    dispatch({ type: 'REQUEST_AUTH' });
	    let response = await axios.post('/api/login',{phone:_phone,password:_password});
	    let data = response.data;
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

export async function register(dispatch,phoneNumber){
	
	try{
		dispatch({type: 'REQUEST_AUTH'});
		let response = await axios.get('/api/acceptCode/'+phoneNumber);
		let data = response.data;
		if(data.user){
			dispatch({type: 'AUTH_SUCCESS',payload:data})
			localStorage.setItem('currentUser',JSON.stringify(data));
			return data;
		}
		dispatch({type:'AUTH_ERROR',error:data.errors[0]});
		return;
	}catch(error){
		dispatch({type: 'AUTH_ERROR'});

	}

}

export async function logout(dispatch){
	dispatch({ type: 'LOGOUT' });
  	localStorage.removeItem('currentUser');
  	localStorage.removeItem('token');
}