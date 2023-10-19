import { Slider as MUISlider, SliderProps } from '@mui/material';

interface SliderInterface extends SliderProps {
	isSearchBar?: boolean;
}
const Slider = ({ isSearchBar = false, ...rest }: SliderInterface) => {
	return (
		<MUISlider
			disableSwap
			size="medium"
			valueLabelFormat={formatNumber}
			sx={{
				width: isSearchBar ? 0.965 : 0.91,
				'& .MuiSlider-valueLabel': {
					backgroundColor: 'primary.main',
					borderRadius: '4px',
					width: 'auto',
					maxWidth: '50px',
				},
			}}
			valueLabelDisplay="on"
			{...rest}
		/>
	);
};

export default Slider;

const formatNumber = (value: number) => {
	if (value >= 1000000000) return (value / 1000000000).toFixed(1) + 'B';
	else if (value >= 1000000) return (value / 1000000).toFixed(1) + 'M';
	else if (value >= 1000) return (value / 1000).toFixed(1) + 'k';
	else return value.toString();
};
