import { Container } from '@mui/material'
import { SectionWrapperComponentProps } from '../PaginatedResourcesList'

export default function GridWrapper({ children }: SectionWrapperComponentProps) {
	return (
		<Container className='gap-4 md:grid lg:grid-cols-4 md:grid-cols-2' maxWidth='xl'>
			{children}
		</Container>
	)
}
