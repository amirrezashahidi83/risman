import {useState} from 'react';
import {CCard,CCardBody} from '@coreui/react';

const Comments = () => {
	const [comments,setComments] = useState([]);

	return(
		<>
			{comments.map( (comment,idx) => 
				<CCard key={idx} >
					<CCardBody>
					</CCardBody>
				</CCard>
			)}
		</>
	)
}
export default Comments;