import {useState,useEffect} from 'react';
import {CCard,CCardBody} from '@coreui/react';

const Daily = () => {
	
	const [messages,setMessages] = useState([]);
	const [pictures,setPictures] = useState([]);

	useEffect(()=>{
		axios.get('/api/counselor/dailies/'+counselor_id)
			.then(function(response){
				setMessages(response.data.messages);
				setPictures(response.data.pictures);
			});
	},[]);

	return(
		<>
			<CCard>
				<CCardBody>

				</CCardBody>
			</CCard>
			<CCard>
				<CCardBody>

				</CCardBody>
			</CCard>
		</>
	)
}
export default Daily;