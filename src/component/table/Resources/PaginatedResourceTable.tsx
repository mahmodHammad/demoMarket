import React from 'react';

// export type SectionWrapperComponentProps = { children: (JSX.Element | null)[] };

// export type PaginatedResourcesTableProps<T> = {
// 	sizes?: { md?: number | string; lg?: number | string; xl?: number | string };
// 	Table: ReactNode | JSX.Element | any;
// } & ResourcesListProps;

export default function PaginatedResourcesTable({ sizes, Table, ...otherResourceListProps }) {
	return <Table {...otherResourceListProps} />;
}
