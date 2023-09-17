import { Container } from '@/wrappers'
import { Box } from '@mui/material'
import { SectionWrapperComponentProps } from '../PaginatedResourcesList'

export default function ListWrapper({
	children,
}: SectionWrapperComponentProps) {
	return (
		<Box sx={{ flexGrow: 1 }}>
			<Container
				// justifyContent="space-between"
				spacing={12}
				sx={{
					mt: 0,
					mb: 12,
				}}
			>
				{children}
			</Container>
		</Box>
	)
}
