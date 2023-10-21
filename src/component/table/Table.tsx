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
	lastPage: any;
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
	lastPage,
}: TableProps) {
	const getPropByString = (obj, propString) => {
		if (!propString) return obj;
		var prop,
			props = propString.split('.');
		if (props?.length === 1) {
			return obj[props[0]];
		} else {
			for (var i = 0, iLen = props.length - 1; i < iLen; i++) {
				prop = props[i];
				if (iLen === i) {
				} else {
					var candidate = obj[prop];
					if (candidate !== undefined) {
						obj = candidate;
					} else {
						break;
					}
				}
			}
			return obj[props[i]];
		}
	};
	return (
		<Box sx={{}}>
			<PaginatedResourcesTable
				Table={() => (
					<DataTable
						headerData={headers}
						isLoading={loading}
						isEmpty={!data?.length}
						Pagination={() => <PaginationWrapper count={lastPage} page={currentPage} handler={handlePagination} />}
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
						<TableBody data={data} cellsTypes={cellsTypes} getPropByString={getPropByString} />
					</DataTable>
				)}
			/>
		</Box>
	);
}

const TableBody = ({ data, cellsTypes, getPropByString }: any) => (
	<>
		{data?.map((row: any) => (
			<StyledTableRow key={row?.id}>
				{cellsTypes?.map((c: any, i: number) => (
					<StyledTableCell key={i}>
						{c.type === TYPES.STRING && <>{(c?.dataKey && getPropByString(row, c?.dataKey)) || '--'} </>}
						{c.type === TYPES.DATE && <>{(c?.dataKey && getPropByString(row, c?.dataKey)) || '--'}</>}
						{c.type === TYPES.LABEL && (
							<Label status={c?.dataKey && getPropByString(row, c?.dataKey)} labelPalette={c.options?.colorPalette} />
						)}
						{c.type === TYPES.ENUM_STRING && <>{(c?.dataKey && c.options[getPropByString(row, c?.dataKey)]) || '--'}</>}
						{c.type === TYPES.BUTTON && (
							<Button
								variant={c.options?.variant}
								component={c.options?.isLink ? Link : 'button'}
								href={c.options?.isLink && `${c.options?.href}${(c.options?.appendID && '/' + row?.id) || ''}`}
								onClick={() => {
									!c.options?.isLink && !c.options?.passParams
										? c.options?.onClick(row)
										: !c.options?.isLink && c.options?.passParams && c.options?.onClick(row?.id, c.options?.title);
								}}
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
		<span style={{ textTransform: 'capitalize' }}>{status}</span>
	</span>
);
