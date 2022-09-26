	
export const isPhone = (value) => {
	return new RegExp("^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$").test(value);
}

export const isNationalCode = (value) => {
	return Number.isInteger(value) && value.toString().length == 10;
 }

export const phoneExists = async (phone) => {
	return (await axios.get('/api/checkphone/'+phone)).data;
}
	
export const nationalExists = async (nationalCode) => {
	return (await axios.get('/api/checknational/'+nationalCode));
}

export const codeExists = async (counselorCode) => {
	return (await axios.get('/api/checkcode/'+counselorCode));
}