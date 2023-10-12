import CircularProgress from '@mui/material/CircularProgress';
import { Box } from './layouts';

export default function Loading() {
	return (
		<Box fullWidth center sx={{ height: '100vh' }}>
			<CircularProgress color="primary" />;
		</Box>
	);
}
