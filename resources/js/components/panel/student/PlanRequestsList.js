import {useState,useEffect} from 'react';
import {useAuthState} from '../../../Context';

const PlanRequestsList = () =>{
	const user = useAuthState();
	const [requests,setRequests] = useState([]);

	useEffect( () =>{
		axios.get("/api/student/requests/")
		.then(function(response){

		});
	});



}