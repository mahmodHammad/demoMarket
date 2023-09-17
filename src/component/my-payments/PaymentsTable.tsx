'use client'
import React, { useState } from "react";
import FilterPopup from "@/component/table/Resources/Components/FilterPopup";
import PaginationWrapper from "@/component/table/Resources/Components/PaginationWrapper";
import PaginatedResourcesTable from "@/component/table/Resources/PaginatedResourceTable";
import DataTable from "@/component/table/Resources/Components/DataTable";
import Search from "@/component/table/Resources/Components/Search";
import PaymentData, { PaymentFilterValues, paymentHeaders } from "./PaymentsData";


export default function PaymentsTable({
    showFilter,
    showSort,
    showPagination,
}: {
    showFilter: boolean;
    showSort: boolean;
    showPagination: boolean;
}) {
    const data = [
        { id: 1, type: 'Buy Unit', method: 'Cash', date: '12-10-2022', status: 'Pay Down', amount: 'SAR 12100' },
        { id: 1, type: 'Rent Unit', method: 'Card', date: '12-10-2022', status: 'Pay Down', amount: 'SAR 12100' },
        { id: 1, type: 'Buy Unit', method: 'UPI', date: '12-10-2022', status: 'Pay Down', amount: 'SAR 12100' },
        { id: 1, type: 'Pay down', method: 'Net Banking', date: '12-10-2022', status: 'Pending', amount: 'SAR 12100' },
        { id: 1, type: 'Buy Unit', method: 'UPI', date: '12-10-2022', status: 'Pending', amount: 'SAR 12100' },
    ]
    const [page, setPage] = useState(1)
    const [search, setSearch] = useState('')
    const [sort, setSort] = useState('')
    const [filter, setFilter] = useState('0')
    const [status, setStatus] = useState([])
    const handleSearch = (value: string) => {
        setSearch(value);
    }

    const handleSort = (id: string) => {
        setSort(id);
    }

    const handleFilter = (id: string) => {
        setFilter(id)
    }

    return (
        <PaginatedResourcesTable
            data={data}
            RenderTable={
                <DataTable
                    isLoading={false}
                    isEmpty={!data?.length}
                    pagination={<PaginationWrapper
                        page={page}
                        count={data?.length}
                        handler={(value: number) =>
                            setPage(value)
                        }
                    />}
                    filters={<>
                        <Search search={search} handleSearch={handleSearch} />
                        <FilterPopup
                            filtering={true}
                            filterValues={PaymentFilterValues}
                            handleFilter={handleFilter}
                            status={status}
                            setStatus={setStatus}
                        />
                    </>}
                    headerData={
                        paymentHeaders()
                    }
                >
                    <PaymentData
                        data={data}
                    />
                </DataTable>
            }
            Header={<></>}
        />
    );
}
