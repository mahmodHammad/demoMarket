import { Container as MainContainer } from '@mui/material'
import { ReactNode } from 'react'

export type ResourcesListProps = {
	Header?: JSX.Element | ReactNode
	Section?: JSX.Element
	Footer?: JSX.Element | ReactNode
	className?: string
	AfterHeader?: JSX.Element
	BeforeFooter?: JSX.Element
}

export default function ResourcesList({
	Header,
	Footer,
	Section,
	AfterHeader,
	BeforeFooter,
}: ResourcesListProps) {
	return (
		<MainContainer maxWidth={false}>
			{Header}
			{AfterHeader}
			{Section}
			{BeforeFooter}
			{Footer}
		</MainContainer>
	)
}
