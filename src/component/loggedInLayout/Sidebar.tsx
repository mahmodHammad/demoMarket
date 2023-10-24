'use client';
import { ListItem } from '@mui/material';
import { Text } from '@/wrappers';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { visitorNavLinks, adminNavLinks } from '@/component/loggedInLayout/SidebarLinks';

export default function Sidebar({ type }) {
	const pathname = usePathname();

	const links = type === 'visitor' ? visitorNavLinks : adminNavLinks;
	return (
		<div
			style={{
				paddingTop: '18px',
				paddingBottom: '18px',
			}}>
			{links?.map(({ text, to, icon: Icon }) => (
				<>
					<ListItem
						key={text}
						component={Link}
						href={to}
						sx={{
							pb: '24px',
						}}>
						<Icon
							sx={{
								fill: (theme) =>
									pathname === to || pathname?.split('/')?.includes(to.substring(1))
										? theme.palette.primary.main
										: '#232425',
							}}
						/>
						<Text
							variant="small"
							sx={{
								pl: '16px',
								fontWeight: 700,
								color: (theme) =>
									pathname === to || pathname?.split('/')?.includes(to.substring(1))
										? theme.palette.primary.main
										: '#232425',
							}}>
							{text}
						</Text>
					</ListItem>
				</>
			))}
			{/* <Divider variant="middle" /> */}
			{/* <ListItem
				sx={{
					pb: '24px',
					pt: '24px',
				}}>
				<SupportIcon />
				<Text
					variant="small"
					sx={{
						pl: '16px',
						fontWeight: 700,
					}}>
					Support
				</Text>
			</ListItem> */}
		</div>
	);
}
