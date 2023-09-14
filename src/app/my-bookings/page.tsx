'use client'
import React, { useState } from "react";
import { Grid, Container } from "@mui/material";
import FilterPopup from "@/component/table/Resources/Components/FilterPopup";
import PaginationWrapper from "@/component/table/Resources/Components/PaginationWrapper";
import PaginatedResourcesTable from "@/component/table/Resources/PaginatedResourceTable";
import DataTable from "@/component/table/Resources/Components/DataTable";
import Search from "@/component/table/Resources/Components/Search";
import BookingData, { bookingHeaders } from "@/component/my-booking/BookingData";

interface Props { }

export default function MyBookings({
    showFilter,
    showSort,
    showPagination,
    header,
    footer,
}: {
    showFilter: boolean;
    showSort: boolean;
    showPagination: boolean;
    header: any
    footer: any
}) {
    const data = [
        { id: 1, name: 'Property 1', visitType: 'InPerson', dateTime: '01/01.2023 at 10:00 AM', status: 'Visit Booked' },
        { id: 1, name: 'Property 1', visitType: 'InPerson', dateTime: '01/01.2023 at 10:00 AM', status: 'Pay Down' },
        { id: 1, name: 'Property 1', visitType: 'InPerson', dateTime: '01/01.2023 at 10:00 AM', status: 'Payment Completed' },
        { id: 1, name: 'Property 1', visitType: 'InPerson', dateTime: '01/01.2023 at 10:00 AM', status: 'Completed' },
        { id: 1, name: 'Property 1', visitType: 'InPerson', dateTime: '01/01.2023 at 10:00 AM', status: 'Completed' },
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
        <>
            <Container maxWidth="xl">
                <>
                    <PaginatedResourcesTable
                        data={data}
                        RenderTable={
                            <DataTable
                                isLoading={false}
                                isEmpty={!data?.length}
                                pagination={showPagination && <PaginationWrapper
                                    page={page}
                                    count={data?.length}
                                    handler={(value: number) =>
                                        setPage(value)
                                    }
                                />}
                                filters={<>
                                    <Search search={search} handleSearch={handleSearch} />
                                    <FilterPopup
                                        filtering={showFilter}
                                        // filterValues={tab === 'home' ? RequestFilterValues : ComplaintFilterValues}
                                        handleFilter={handleFilter}
                                        status={status}
                                        setStatus={setStatus}
                                    />
                                </>}
                                headerData={
                                    bookingHeaders()
                                }
                            >
                                <BookingData
                                    data={data}
                                />
                            </DataTable>
                        }
                        Header={header}
                        Footer={footer}
                    />
                </>
            </Container>
        </>
    );
}
