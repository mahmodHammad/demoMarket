import { Accordion, Typography } from '@mui/material'
import AccordionDetails from '@mui/material/AccordionDetails'

import { ExpandMore } from '@mui/icons-material'
import AccordionSummary from '@mui/material/AccordionSummary'

const AccordoinWrapper = ({
	children,
	title,
}: {
	children: JSX.Element
	title: string
}) => {
	return (
		<Accordion
			disableGutters
			elevation={0}
			sx={{
				mb: 12,
				'&:before': {
					display: 'none',
					bgcolor: '#f5f5f9',
				},
			}}
		>
			<AccordionSummary
				expandIcon={<ExpandMore sx={{ fontSize: 40 }} />}
				aria-controls="panel1a-content"
				id="panel1a-header"
				sx={{
					backgroundColor: '#f5f5f9',
					borderBottom: '0.5px solid #C0C0C0',
					'&.Mui-expanded': {
						borderBottom: '0.5px solid',
						borderBottomColor:theme=> theme?.palette?.primary?.main,
						'& .MuiAccordionSummary-expandIconWrapper': {
							color:theme=> theme?.palette?.primary?.main,
						},
						'& h6': {
							color:theme=> theme?.palette?.primary?.main,
						},
					},
				}}
			>
				<Typography
					variant="h6"
					sx={{
						fontWeight: '500',
					}}
				>
					{title}
				</Typography>
			</AccordionSummary>
			<AccordionDetails
				sx={{
					backgroundColor: '#f5f5f9',
				}}
			>
				{children}
			</AccordionDetails>
		</Accordion>
	)
}
export default AccordoinWrapper
