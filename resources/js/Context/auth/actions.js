
export async function login(dispatch,_phone,_password){

	try {
	    dispatch({ type: 'SHOW_LOADING' ,payload: 'در حال ورود'});
	    let response = await axios.post('/api/login',{phoneNumber:_phone,password:_password});
	    let data = response.data;
	    if (data.user) {
	      dispatch({ type: 'AUTH_SUCCESS', payload: data });
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
		dispatch({type: 'SHOW_LOADING', payload: 'در حال ثبت نام'});
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

export async function showLoading(dispatch,message){
	dispatch({type: 'SHOW_LOADING', payload: message});
	return;
}

export async function hideLoading(dispatch){
	dispatch({type: 'HIDE_LOADING'});
	return;
}