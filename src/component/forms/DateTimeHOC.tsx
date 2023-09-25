'use client'
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'

const DateTimeHOC = ({ children }: { children: React.ReactNode }) => {
	// TODO: customize style
	return <LocalizationProvider dateAdapter={AdapterDayjs}>
        {children}
    </LocalizationProvider>;
};

export default DateTimeHOC;
