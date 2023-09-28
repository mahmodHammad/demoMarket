'use client'
import { Divider, ListItem } from '@mui/material';
import { Text } from '@/wrappers';

import SupportIcon from '@/assets/icons/SupportIcon';
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
								fill: (theme) => (pathname === to ? theme.palette.primary.main : theme.palette.secondary.light),
							}}
						/>
						<Text
							variant="small"
							sx={{
								pl: '16px',
								fontWeight: 700,
								color: (theme) => (pathname === to ? theme.palette.primary.main : theme.palette.secondary.light),
							}}>
							{text}
						</Text>
					</ListItem>
				</>
			))}
			<Divider variant="middle" />
			<ListItem
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
			</ListItem>
		</div>
	);
}
