import {useEffect,useState} from 'react';

const TransactionsTable = ()=>{
	
	const [data,setData] = useState([]);
	useEffect(() =>{
		
		axios.get("/api/transactions/"+user_id,function(response){
			setData(response.data);
		});

	});
	return(
		<div></div>
	)
}
export default TransactionsTable;