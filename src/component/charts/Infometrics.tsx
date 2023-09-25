import { Card, CardContent, CardHeader } from '@mui/material';


export default function Infometrics({ header, content }) {
	return (
		<>
			<Card sx={{ p: '12px 8px', height: '45%' }}>
				<CardHeader title={header}></CardHeader>
				<CardContent
					sx={{
						display: 'flex',
					}}>
					{content}
				</CardContent>
			</Card>
		</>
	);
}
