import { Container } from '@/wrappers'
import { Pagination } from '@mui/material'

const PaginationWrapper = ({
	page,
	count,
	handler,
}: {
	page: number
	count: number | undefined
	handler: (value: number) => void
}) => {
	return (
		<Container justifyContent="flex-end">
			<Pagination
				page={page}
				count={count}
				onChange={(e: React.ChangeEvent<unknown>, value: number) => {
					handler(value)
				}}
				color="primary"
				variant="outlined" shape="rounded"
				sx={{
					'.MuiPagination-outlined': { color: 'red' },
					"& .MuiPaginationItem-root": {
						color: "#232425",
						fontWeight: 400,
						fontSize: '16px',
						background: '#F0F0F0',
						border: 'none'
					},
					"& .Mui-selected": {
						color: "#FFFFFF !important",
						backgroundColor: '#2E3032 !important'
					},
					".MuiPaginationItem-previousNext": {
						svg: {
							color: '#232425 !important',
						},
						backgroundColor: '#F0F0F0'
					}
				}}
			/>
		</Container>
	)
}
export default PaginationWrapper
