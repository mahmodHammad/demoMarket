import { Slider as MUISlider, SliderProps } from '@mui/material';

const Slider = (props: SliderProps) => {
	return (
		<MUISlider
			disableSwap
			size="medium"
			sx={{
				width: 0.91,
				'& .MuiSlider-valueLabel': {
					backgroundColor: 'primary.main',
					borderRadius: '4px',
					width: '35px',
				},
			}}
			valueLabelDisplay="on"
			{...props}
		/>
	);
};

export default Slider;
