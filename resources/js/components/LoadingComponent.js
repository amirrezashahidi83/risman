import {useState} from 'react';
import FadeLoader from "react-spinners/FadeLoader";
import {useAuthState} from '../Context/auth';

const LoadingComponent = () => {

	const {showLoading,loadingMessage} = useAuthState();	
	return(
		<>
			<FadeLoader
			 loading={showLoading}
			/>
			{showLoading ? <span>{loadingMessage}</span> : <div></div>}
		</>

	)
}
export default LoadingComponent;