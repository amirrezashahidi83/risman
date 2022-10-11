import {useState} from 'react';

import {phoneExists,nationalExists,codeExists} from './actions';

const useValidation = () => {

	const [errors,setErrors] = useState([]);

	const validate = async (event,name,value) => {

		if(name == 'phoneNumber'){
			if( await phoneExists(value)){
				setErrors({...errors,phoneNumber:'این شماره تلفن در سیستم ثبت شده است.'});
			}
		}else if(name == 'password'){
			if(value.length < 8)
				setErrors({...errors,password:'رمز عبور شما باید بیشتر از ۸ رقم باشد.'});
			else{

			}

		}else if(name == 'nationalCode'){
			if(await nationalExists(value)){
				setErrors({...errors,nationalCode:'این کد ملی ثبلا ثبت شده است.'});
			}

		}else if(name == 'counselorCode'){
			if(value.length > 0)
				if(await codeExists(value))
					setErrors({...errors,counselorCode:'کد مشاور صحیح نمی باشد'});
		}
	
	}

	
	
	const handleChange = (event)=>{
		
		let name = event.target.name;
		let value = event.target.value;
		validate(event,name,value);

	}
	
	return [
		errors,
		handleChange
	]
}
export default useValidation;