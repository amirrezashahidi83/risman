import {useState} from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import {dayjs} from 'dayjs';
import TextField from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { MobileTimePicker } from '@mui/x-date-pickers/MobileTimePicker';


const TimePicker = () => {
	const [value, setValue] = useState('2018-01-01T00:00:00.000Z');

	return(
		<LocalizationProvider dateAdapter={AdapterDayjs}>
			<MobileTimePicker
			disableMaskedInput={true}
			  ampm={false}
	          value={value}
	          onChange={(newValue) => {
	            setValue(newValue);
	          }}
	          renderInput={(params) => <TextField {...params} />}
	        />
		</LocalizationProvider>
	)

}
export default TimePicker;