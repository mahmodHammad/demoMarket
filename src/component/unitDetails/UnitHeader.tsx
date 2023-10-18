'use client';
import { Favorite, FilledHeart, OutlineHeart, Share } from '@/assets';
import { useAuth } from '@/contexts/AuthContext';
import { Box, Button, Text } from '@/wrappers';
import { IconButton } from '@mui/material';
import { RWebShare } from 'react-web-share';
interface Props {
	logo: any;
	title: string;
	location: string;
	liked?: boolean;
	id: string;
}
export default function UnitHeader({ id, logo, title, location, liked, handleToggleLike }: Props) {
	const { isAuthed, openLoginModal } = useAuth();

	const handleButton = () => {
		if (!isAuthed) {
			openLoginModal();
			return;
		} else {
			handleToggleLike();
		}
	};
	return (
		<Box row xbetween>
			<Box center row gap={'6px'}>
				<Box center>{logo}</Box>
				<Box column xcenter>
					<Text bold sx={{ fontSize: { xs: '16px !important', md: '36px !important' } }}>
						{title}
					</Text>
					<Text variant="small" gray>
						{location}
					</Text>
				</Box>
			</Box>

			<Box row ycenter gap="12px">
				<RWebShare
					sites={['whatsapp']}
					data={{
						text: 'Like humans, flamingos make friends for life',
						url: 'https://on.natgeo.com/2zHaNup',
						title: 'Flamingos',
					}}
					// onClick={() => console.log('shared successfully!')}
				>
					<IconButton
						color="primary"
						aria-label="delete"
						sx={{
							display: { xs: 'block', md: 'none' },
							height: '30px',
							width: '30px',
							mt: '-8px',
						}}
						// size="small"
					>
						<Share />
					</IconButton>
				</RWebShare>

				<IconButton
					color="primary"
					sx={{
						display: { xs: 'block', md: 'none' },
						height: '30px',
						width: '30px',
						mt: '-10px',
					}}
					size="large">
					<Favorite />
				</IconButton>
				<RWebShare
					sites={['copy', 'whatsapp', 'facebook', 'twitter', 'telegram', 'linkedin', 'mail']}
					data={{
						text: 'unit details',
						url: `http://localhost:3000/unitdetails/${id}`,
						title: 'unit details',
					}}
					// onClick={() => console.log('shared successfully!')}
				>
					<Button
						variant="outlined"
						sx={{
							display: { xs: 'none', md: 'flex' },
							height: '42px',
							width: '100%',
							color: '#002A37',
							padding: '12px 24px 12px 24px',
							borderRadius: '8px',
							borderColor: '#E3E3E3',
						}}
						startIcon={<Share size="small" />}>
						Share
					</Button>
				</RWebShare>

				<Button
					variant="outlined"
					onClick={handleButton}
					sx={{
						display: { xs: 'none', md: 'flex' },
						height: '42px',
						width: '100%',
						color: '#002A37',
						padding: '12px 24px 12px 24px',
						borderRadius: '8px',
						borderColor: '#E3E3E3',
					}}
					// {liked ? <FilledHeart /> : <OutlineHeart />}

					startIcon={liked ? <FilledHeart /> : <Favorite />}>
					Favorite
				</Button>
			</Box>
		</Box>
	);
}
