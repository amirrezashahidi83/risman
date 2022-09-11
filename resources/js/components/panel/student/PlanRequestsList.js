import {useState,useEffect} from 'react';

const PlanRequestsList = () =>{
	
	const [requests,setRequests] = useState([]);

	useEffect( () =>{
		axios.get("/api/requests/")
		.then(function(response){

		});
	});

}