'use client';

import { Roboto } from 'next/font/google';
import { createTheme, responsiveFontSizes } from '@mui/material/styles';

declare module '@mui/material/Button' {
	interface ButtonPropsVariantOverrides {
		hover: true;
		danger: true;
		success: true;
		dangerOutlined: true;
	}
}

const roboto = Roboto({
	weight: ['300', '400', '500', '700'],
	subsets: ['latin'],
	display: 'swap',
});
const initTheme = createTheme();
const theme = responsiveFontSizes(
	createTheme({
		palette: {
			mode: 'light',
			primary: {
				main: '#008EA5',
				light: '#008EA5',
				dark: '#00697A',
			},
			secondary: {
				main: '#00697A',
				light: '#00697A',
				dark: '#002A37',
			},
			error: { main: '#FF4242' },
		},
		typography: {
			fontFamily: roboto.style.fontFamily,
		},
		components: {
			MuiAlert: {
				styleOverrides: {
					root: ({ ownerState }) => ({
						...(ownerState.severity === 'info' && {
							backgroundColor: '#60a5fa',
						}),
					}),
				},
			},
			MuiSvgIcon: {
				styleOverrides: {
					root: ({ ownerState, theme }) => ({
						color: theme.palette.primary.main,
						fill: theme.palette.primary.main,
						strock: theme.palette.primary.main,
					}),
				},
			},
			MuiButton: {
				styleOverrides: {
					root: ({ ownerState, theme }) => ({
						textTransform: 'capitalize',
						borderRadius: '8px',
						...(ownerState.size === 'small' && {
							fontSize: '12px',
							padding: '6px 16px',
						}),
						...(ownerState.size === 'medium' && {
							// color: "green",
							fontSize: '14px',
							padding: '8px 20px',
						}),
						...(ownerState.size === 'large' && {
							fontSize: '16px',
							padding: '12px 24px',
						}),
					}),
				},
				variants: [
					{
						props: { variant: 'contained' },
						style: {
							backgroundColor: 'primary.main',
							color: 'white',
							'&:hover': {
								backgroundColor: 'primary.dark',
							},
						},
					},
					{
						props: { variant: 'text' },
						style: {
							color: 'primary.main',
							'&:hover': {
								backgroundColor: 'rgba(0, 142, 165, 0.08)',
							},
						},
					},
					{
						props: { variant: 'outlined' },
						style: {
							borderColor: 'primary.main',
							color: 'primary.main',
							'&:hover': {
								backgroundColor: 'rgba(0, 142, 165, 0.08)',
								borderColor: 'primary.main',
							},
						},
					},
					{
						props: { variant: 'danger' },
						style: {
							backgroundColor: '#f44336',
							color: 'white',
							'&:hover': {
								backgroundColor: '#d32f2f',
							},
						},
					},
					{
						props: { variant: 'hover' },
						style: {
							color: 'primary.main',
							backgroundColor: 'rgba(0, 142, 165, 0.08)',
							'&:hover': {
								backgroundColor: 'rgba(0, 142, 165, 0.08)',
							},
						},
					},
					{
						props: { variant: 'success' },
						style: {
							backgroundColor: '#4caf50',
							color: 'white',
							'&:hover': {
								backgroundColor: '#388e3c',
							},
						},
					},
					{
						props: { variant: 'dangerOutlined' },
						style: {
							border: '1px solid #FF4242',
							backgroundColor: 'transparent',
							color: '#FF4242',
							'&:hover': {
								borderColor: '#FF4242',
								background: 'rgba( 255, 66, 66, 0.09) ',
							},
						},
					},
				],
			},
			MuiFormLabel: {
				styleOverrides: {
					root: {
						color: '#525451',
						'&.Mui-focused': {
							color: '#525451',
						},
					},
				},
			},
			MuiTypography: {
				styleOverrides: {
					root: {
						color: '#232425',
					},
				},

				variants: [
					{
						props: { variant: 'h1' },
						style: {
							fontSize: '84px',
							fontWeight: 'bold',
							[initTheme.breakpoints.down('md')]: {
								fontSize: '64px',
							},
						},
					},
					{
						props: { variant: 'h2' },
						style: {
							fontSize: '68px',
							fontWeight: 'bold',
							[initTheme.breakpoints.down('md')]: {
								fontSize: '48px',
							},
							
						},
					},
					{
						props: { variant: 'h3' },
						style: {
							fontSize: '52px',
							fontWeight: 'bold',

							[initTheme.breakpoints.down('md')]: {
								fontSize: '34px',
							},
						},
					},
					{
						props: { variant: 'h4' },
						style: {
							fontSize: '36px',
							fontWeight: 'bold',

							[initTheme.breakpoints.down('md')]: {
								fontSize: '24px',
							},
						},
					},
					{
						props: { variant: 'h5' },
						style: {
							fontSize: '24px',
							fontWeight: 'bold',

							[initTheme.breakpoints.down('md')]: {
								fontSize: '24px',
							},
						},
					},
					{
						props: { variant: 'h5' },
						style: {
							fontSize: '24px',
							fontWeight: 'bold',

							[initTheme.breakpoints.down('md')]: {
								fontSize: '18px',
							},
						},
					},
					{
						props: { variant: 'body' },
						style: {
							display: 'block',
							fontSize: '16px',
							fontWeight: 400,
							[initTheme.breakpoints.down('md')]: {
								fontSize: '14px',
							},
						},
					},
					{
						props: { variant: 'label' },
						style: {
							display: 'block',
							fontSize: '16px',
							fontWeight: 'bold',
							[initTheme.breakpoints.down('md')]: {
								fontSize: '14px',
							},
						},
					},
					{
						props: { variant: 'small' },
						style: {
							display: 'block',
							fontSize: '14px',
							[initTheme.breakpoints.down('md')]: {
								fontSize: '12px',
							},
						},
					},
					{
						props: { variant: 'title' },
						style: {
							display: 'block',
							fontSize: '14px',
							fontWeight: 'bold',
							[initTheme.breakpoints.down('md')]: {
								fontSize: '12px',
							},
						},
					},
					{
						props: { variant: 'caption' },
						style: {
							color: '#525451',
							display: 'block',
							fontSize: '12px',
							[initTheme.breakpoints.down('md')]: {
								fontSize: '10px',
							},
						},
					},
				],
			},
			MuiSlider: {
				styleOverrides: {
					valueLabel: ({ ownerState, theme }) => ({
						...(ownerState.orientation === 'vertical' && {
							backgroundColor: 'transparent',
							color: theme.palette.grey[500],
						}),
					}),
				},
			},
			MuiInputBase: {
				styleOverrides: {
					root: ({ ownerState, theme }) => ({
						borderRadius: '8px !important',
						borderColor: '#E3E3E3',
					}),
				},
			},
		},
	}),
);

export default theme;
