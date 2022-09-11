	
export const isPhone = (value){
	return new RegExp("^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$").test(value);
}

export const isNationalCode = (value){
	return Number.isInteger(value) && value.toString().length == 10;
 }

export const phoneExists = (phone) => {
	axios.get('');
}
	
export const nationalExists = (nationalCode) => {
	axios.get('');
}