import {
	Accordion as MUIAccordion,
	SxProps,
	AccordionSummary,
	AccordionDetails,
} from '@mui/material';
import { Text } from '@/wrappers';
import { AccordionIcon } from '@/assets';

interface Accordion {
	header: string;
	Content: React.ElementType;
	sx?: SxProps;
	defaultExpanded?: boolean;
}

const setAccordionLayoutSXProps = (props: any) => ({
	boxShadow: 0,
	'&::before': {
		height: 0,
	},
	'&.MuiAccordionSummary-root': {
		minHeight: '48px !important',
	},
	...props.sx,
});

export default function Accordion({ header, Content, ...props }: Accordion) {
	return (
		<MUIAccordion
			{...props}
			sx={setAccordionLayoutSXProps(props)}
		>
			<AccordionSummary
				sx={{
					p: 0,
				}}
				expandIcon={<AccordionIcon />}
				aria-controls='panel1a-content'
				id='panel1a-header'
			>
				<Text
					sx={{
						fontSize: '14px',
						fontWeight: 'bold',
					}}
				>
					{header}
				</Text>
			</AccordionSummary>
			<AccordionDetails sx={{ p: 0 }}>
				<Content />
			</AccordionDetails>
		</MUIAccordion>
	);
}
