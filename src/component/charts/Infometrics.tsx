import { Card, CardContent, CardHeader } from '@mui/material';

export default function Infometrics({ header, content }: { header: React.ReactNode; content: React.ReactNode }) {
	return (
		<>
			<Card sx={{ p: '12px 8px', height: '45%', boxShadow:'0px 17px 33px -2px rgba(28, 39, 49, 0.05)' }}>
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
