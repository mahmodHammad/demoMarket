'use client';

import React from 'react';
import { Box, Button, Text } from '@/wrappers';
import { StyledTableRow, StyledTableCell } from '@/wrappers/table-cells';
import Link from 'next/link';
import FilterPopup from './Resources/Components/FilterPopup';
import PaginationWrapper from './Resources/Components/PaginationWrapper';
import PaginatedResourcesTable from './Resources/PaginatedResourceTable';
import DataTable from './Resources/Components/DataTable';
import Search from './Resources/Components/Search';
import TYPES from './dataTypes';

type TableProps = {
	headers: string[];
	cellsTypes: any;
	data: any;
	loading: boolean;
	search: string;
	handleSearch?: (value: string) => void;
	currentPage: number;
	handlePagination?: (value: number) => void;
	status: number[];
	handleStatusChange?: (value: number[]) => void;
	filterValues?: any;
	filter: string;
	handleFilter?: (value: string) => void;
	sort: string;
	handleSort?: (value: string) => void;
};

export default function Table({
	headers,
	cellsTypes,
	data,
	filterValues,
	loading,
	search,
	handleSearch = () => null,
	currentPage,
	handlePagination = () => null,
	status,
	handleStatusChange = () => null,
	filter,
	handleFilter = () => null,
	sort,
	handleSort = () => null,
}: TableProps) {
	return (
		<Box sx={{ pl: '16px', pr: '16px' }}>
			<PaginatedResourcesTable
				Table={() => (
					<DataTable
						headerData={headers}
						isLoading={loading}
						isEmpty={!data?.length}
						Pagination={() => <PaginationWrapper count={data?.length} page={currentPage} handler={handlePagination} />}
						Filters={() => (
							<>
								<Search search={search} handleSearch={handleSearch} />
								<FilterPopup
									filtering
									filterValues={filterValues}
									handleFilter={handleFilter}
									status={status}
									setStatus={handleStatusChange}
								/>
								{/* // TODO: implement sort */}
							</>
						)}>
						<TableBody data={data} cellsTypes={cellsTypes} />
					</DataTable>
				)}
			/>
		</Box>
	);
}

const TableBody = ({ data, cellsTypes }: any) => (
	<>
		{data?.map((row: any) => (
			<StyledTableRow key={row?.id}>
				{cellsTypes?.map((c: any, i: number) => (
					<StyledTableCell key={i}>
						{c.type === TYPES.STRING && <>{row[c.dataKey]}</>}
						{c.type === TYPES.DATE && <>{row[c.dataKey]}</>}
						{c.type === TYPES.LABEL && <Label status={row[c.dataKey]} labelPalette={c.options?.colorPalette} />}
						{c.type === TYPES.BUTTON && (
							<Button
								variant={c.options?.variant}
								component={c.options?.isLink ? Link : 'button'}
								href={c.options?.isLink && c.options?.href}
								onClick={!c.options?.isLink && c.options?.onClick}
								fullWidth={false}
								sx={{ height: '38px', ...c.options?.sx }}>

								<Text color={c.options?.textColor} sx={{ fontWeight: 'bold' }}>
									{c.options?.title}
								</Text>
							</Button>
						)}
					</StyledTableCell>
				))}
			</StyledTableRow>
		))}
	</>
);

const Label = ({ status, labelPalette }: { status: string; labelPalette: any }) => (
	<span
		style={{
			color: labelPalette?.[status]?.color,
			backgroundColor: labelPalette?.[status]?.bg,
			borderRadius: 50,
			padding: '10px',
			fontWeight: 500,
		}}>
		{status}
	</span>
);
