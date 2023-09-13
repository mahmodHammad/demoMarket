import { Container } from '@/Shared/layout'
import { Pagination } from '@mui/material'
import { makeStyles } from '@mui/styles'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'

const useStyles = makeStyles(() => ({
  ul: {
    "& .MuiPaginationItem-root": {
      color: "#232425",
      fontWeight:400
    },
    "& .Mui-selected": {
      color: "white",
      backgroundColor:'#2E3032'
    },

  }
}));

const PaginationWrapper = ({
	page,
	count,
	handler,
}: {
	page: number
	count: number | undefined
	handler: (value: number) => void
}) => {
	const [showSearchBar, setShowSearchBar] = useState(false)
	const { t } = useTranslation()
  
  const classes = useStyles();
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
        classes={{ ul: classes.ul }}
        sx={{
          '.MuiPagination-outlined':{color:'red'}
        }}
			/>
		</Container>
	)
}
export default PaginationWrapper
