import {useState} from 'react';
import {CAlert} from '@coreui/react';

const useMessageAlert = () => {

	const [alerts,setAlerts] = useState([]);

	const showAlert = (id,message,color) => {
		setAlerts(alerts => 
			[...alerts,
				{
					id: id,
					color: color,
					message: message
				}
		]);
	}

	const hideAlert = (id) => {
		setAlerts(alerts.filter( (alert) => alert.id != id));
	}

	const renderAlerts = () => {
		return(
			{alerts.map( (alert) => {
				<CAlert color={alert.color} >
					{alert.message}
				</CAlert>
			})}
		)
	}

	return[
	renderAlerts,
	showAlert,
	hideAlert
	]
	
}

export default useMessageAlert;
