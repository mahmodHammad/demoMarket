'use client';
import { Box, Container, Item, Text } from '@/wrappers';
import { SvgIconComponent } from '@mui/icons-material';

export default function ValuesWithIcon({
	title,
	value,
	Icon,
    height,
    width
}: {
	title: string;
	height: string;
	width: string;
	value: string | number;
	Icon: SvgIconComponent;
}) {
	return (
		<Container alignItems="center" spacing={'16px'} justifyContent="space-between">
			<Item xs={2}>
				<Icon
					color="primary"
					sx={{
                        height:height,
                        width:width,
						color: (theme) => theme.palette.primary.main,
						fill: (theme) => theme.palette.primary.main,
						stroke: (theme) => theme.palette.primary.main,
					}}
				/>
			</Item>
			<Item xs={9}>
				<Box>
					<Text fontWeight={400} variant="caption">
						{title}
					</Text>
					<Text variant="h5">{value}</Text>
				</Box>
			</Item>
		</Container>
	);
}
