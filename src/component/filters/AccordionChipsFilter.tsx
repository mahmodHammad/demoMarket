import React from 'react';
import { FormGroup, FormControlLabel, Checkbox, SxProps } from '@mui/material';
import { Accordion, Box, Chip } from '@/wrappers';

type Filter = {
	id: number;
	label: string;
	checked: boolean;
};

type Props = {
	header: string;
	filterName: string;
	filters: Filter[];
	onFilterStateChange: (filterName: string, id: number, e: any) => void;
	defaultExpanded?: boolean;
	sx?: SxProps;
	headerContent?: any;
	footerContent?: any;
};

const AccordionChipsFilter = ({
	header,
	filterName,
	filters,
	onFilterStateChange,
	defaultExpanded = true,
	sx = {},
	...props
}: Props) => {
	return (
		<Accordion
			defaultExpanded={defaultExpanded}
			header={header}
			Content={() => (
				<Box column width={1}>
					{props.headerContent}
					<FormGroup sx={{ ml: '9px', ...sx }}>
						{filters?.map((filter) => (
							<FormControlLabel
							sx={{width: 1}}
								key={filter.id}
								control={
									<Checkbox checked={filter.checked} onChange={(e) => onFilterStateChange(filterName, filter.id, e)} />
								}
								label={<Chip label={filter.label} checked={filter.checked}  />}
							/>
						))}
					</FormGroup>
					{props.footerContent}
				</Box>
			)}
		/>
	);
};

export default AccordionChipsFilter;
