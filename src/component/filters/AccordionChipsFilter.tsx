import React from 'react';
import { FormGroup, FormControlLabel, Checkbox } from '@mui/material';
import { Accordion, Chip } from '@/wrappers';

type Filter = {
	id: number;
	label: string;
	checked: boolean;
};

type Props = {
	header: string;
	filterName: string;
	filters: Filter[];
	onFilterStateChange: (filterName: string, id: number) => void;
};

const AccordionChipsFilter = ({
	header,
	filterName,
	filters,
	onFilterStateChange,
}: Props) => {
	return (
		<Accordion
			defaultExpanded
			header={header}
			Content={() => (
				<FormGroup sx={{ml: '9px'}}>
					{filters?.map((filter) => (
						<FormControlLabel
							key={filter.id}
							control={
								<Checkbox
									checked={filter.checked}
									onChange={() => onFilterStateChange(filterName, filter.id)}
								/>
							}
							label={
								<Chip
									label={filter.label}
									checked={filter.checked}
								/>
							}
						/>
					))}
				</FormGroup>
			)}
		/>
	);
};

export default AccordionChipsFilter;
