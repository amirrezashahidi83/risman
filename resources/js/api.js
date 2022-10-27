window.axios.interceptors.response.use((response) => {
	return response;
},(error) =>{
		if(error.response.status == 401){
			window.location.replace('/login');
		}
	return error;

}); 