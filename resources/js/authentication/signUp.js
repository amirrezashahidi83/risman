import {useState} from 'react';
import {Card,Form,Row,Column} from 'react-bootstrap';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import UserDetails from 'steps/UserDetails';
import Confirmation from 'steps/Confirmation';
import PersonalDetails from 'steps/PersonalDetails';

const signUp = () =>{

	const [step,setStep] = useState(0);

	const PrevStep = ()=>{
		setStep((prevStep) => step - 1);
	}

	const PrevStep = ()=>{
		setStep((prevStep) => step + 1);
	}

	let current = <UserDetails />;

	if(step == 1)
		current = <Confirmation />;
	else if(step == 2)
		current = <PersonalDetails />;

	return (
		<Form>
			<Card>
			<Card.Body>
				<Stepper activeStep={step} alternativeLabel>
					<Step>
						<StepLabel>Details</StepLabel>
					</Step>

					<Step>
						<StepLabel>Confirmation</StepLabel>
					</Step>

					<Step>
						<StepLabel>Personal</StepLabel>
					</Step>
				</Stepper>
			</Card.Body>
			</Card>
		</Form>
		);
}
export default signUp;