import {useState} from 'react';

import {phoneExists,nationalExists} from './actions';

const useValidation = ()=>{

	const [errors,setErrors] = useState([]);

	const validate = (event,name,value) => {

		if(name == 'phoneNumber'){
			if(phoneExists(value)){
				setErrors({...errors,phoneNumber:'این شماره تلفن در سیستم ثبت شده است.'});
			}
		}else if(name == 'password'){
			if(value.length < 8)
				setErrors({...errors,password:'رمز عبور شما باید بیشتر از ۸ رقم باشد.'});
			else{

			}

		}else if(name == 'nationalCode'){
			if(nationalExists(value)){
				setErrors({...errors,phoneNumber:'این کد ملی ثبلا ثبت شده است.'});
			}

		}else if(name == 'counselorCode'){

		}
	
	}

	
	
	const handleChange = (event)=>{
		
		let name = event.target.name;
		let value = event.target.value;
		validate(event,name,value);

	}
	
	return {
		errors,
		handleChange
	}
}
export default useValidation;