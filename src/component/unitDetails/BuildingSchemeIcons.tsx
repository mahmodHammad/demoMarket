import { Room } from '@/assets';
import { Box, Text } from '@/wrappers';
import { Avatar, Icon } from '@mui/material';

interface Props {
	icon?: any;
	title: string;
	value?: string;
}
export default function BuildingSchemeIcons({ icon, title, value }: Props) {
	if (value === null || value === 'undefined' || value === undefined) return null;
	return (
		<Box row gap={'8px'} sx={{ mt: { xs: '5px', md: '10px' } }}>
			<Box row center>
				<Box sx={{ mr: '6px' }}>{icon}</Box>
				<Box column ml={'1px'}>
					<Text variant="label" gray>
						{title}
					</Text>

					<Text variant="small" gray>
						{value}
					</Text>
				</Box>
			</Box>
		</Box>
	);
}
