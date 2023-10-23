import { Box, Button, Container, Item, Text } from '@/wrappers';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {
	Accordion,
	AccordionDetails,
	AccordionSummary,
	Checkbox,
	Dialog,
	DialogTitle,
	FormControlLabel,
} from '@mui/material';
import { MouseEvent, useEffect, useState } from 'react';
import { FilterIcon } from '@/assets';
type Props = {
	filtering?: boolean;
	handleFilter?: (id: string) => void;
	filterValues?: any;
	status?: any;
	setStatus?: any;
};
const FilterPopup: React.FC<Props> = ({ filtering, handleFilter, filterValues, status, setStatus }) => {
	const fliters = filterValues;
	// const { t } = useTranslation();
	const [filterTitle, setFilterTitle] = useState('Filter by');
	const [open, setOpen] = useState(false);
	const [tempStatus, setTempStatus] = useState(status);

	const handleFilterChange = (id: string) => {
		handleFilter!(id);
		setFilterTitle(filterValues[id]?.title ? filterValues[id]?.title : filterValues[id]);
	};
	useEffect(() => {
		let temp = tempStatus;
		Object.keys(fliters).map((element, id) => {
			if (temp?.[element]) {
			} else {
				temp[element] = [];
			}
		});
		setTempStatus(temp);
	}, []);
	const handleCheck = (e, id, element) => {
		let temp = tempStatus;
		if (e) {
			temp?.[element]?.push(id);
			setTempStatus({ ...temp });
		} else {
			temp = temp?.[element]?.filter((item) => item !== id);
			setTempStatus({ ...temp });
		}
	};
	const handleClose = () => {
		setOpen(false);
	};
	const applyFilter = () => {
		setStatus(tempStatus);
		setOpen(false);
	};
	return (
		<Box row ycenter>
			{filtering && (
				<Item sx={{ mr: 6 }}>
					<Button
						onClick={(event: MouseEvent<HTMLButtonElement>) => {
							setOpen(true);
						}}
						style={{
							backgroundColor: '#fff',
							minWidth: '170px',
							color: '#232425',
							border: '1px solid #E3E3E3 ',
						}}>
						<>
							<FilterIcon
								sx={{
									color: '#232425',
									mr: '8px',
								}}
							/>
							{filterTitle}
							<ArrowDropDownIcon
								sx={{
									color: '#232425',
									ml: '8px',
								}}
							/>
						</>
					</Button>
					<Dialog
						onClose={handleClose}
						open={open}
						sx={{
							minWidth: '400px',
							'& .MuiPaper-root': {
								borderRadius: '16px !important',
							},
						}}>
						<DialogTitle sx={{ minWidth: '400px' }}>
							<Container justifyContent="space-between" alignItems={'center'}>
								<Text
									variant="h6"
									sx={{
										fontWeight: '700',
										fontSize: '24px',
									}}>
									{'Filter'}
								</Text>
								<Text
									variant="caption"
									sx={{
										fontWeight: '700',
										fontSize: '14px',
										color: '#004256',
										cursor: 'pointer',
									}}
									onClick={applyFilter}>
									{'Apply Filter'}
								</Text>
							</Container>
						</DialogTitle>

						{fliters &&
							Object.keys(fliters).map((element, id) => (
								<>
									<Accordion
										defaultExpanded={true}
										style={{
											boxShadow: 'none',
											margin: 0,
											// padding: '10px',
										}}>
										<AccordionSummary
											expandIcon={<ExpandMoreIcon />}
											aria-controls="panel1a-content"
											id={'panel1a-header' + id}
											sx={{ margin: '0px !important' }}>
											<Text sx={{ margin: '0px' }}>{element}</Text>
										</AccordionSummary>
										<AccordionDetails>
											{filterValues[element].map((ele) => {
												return (
													<>
														<FormControlLabel
															sx={{
																fontWeight: 400,
															}}
															control={
																<Checkbox
																	checked={tempStatus?.[element]?.includes(ele?.status)}
																	onChange={(e) => {
																		handleCheck(e?.target?.checked, ele?.status, element);
																	}}
																	name={ele.id}
																	value={'sdfg'}
																/>
															}
															label={<Text sx={{ margin: '0px', fontWeight: '400 !important' }}>{ele.name}</Text>}
														/>
														<br></br>
													</>
												);
											})}
										</AccordionDetails>
									</Accordion>
								</>
							))}
					</Dialog>
				</Item>
			)}
		</Box>
	);
};

export default FilterPopup;
