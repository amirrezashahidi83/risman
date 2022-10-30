import React,{useState,useEffect} from 'react'
import { CFooter } from '@coreui/react'

const AppFooter = () => {

	const [links,setLinks] = useState([]);
	
	useEffect( () => {
		axios.get('/api/links')
		.then(function(response){
			setLinks(response.data);
		});
	},[]);
	return (
    	<CFooter>
    		{links.map( (link) => 
    			<span>{link.value}</span>
    		)}
    	</CFooter>
	)
}

export default React.memo(AppFooter)
