import {
  Button,
  Item,
  StyledTableCell,
  StyledTableRow,
  Typography,
} from "@/Shared/layout";
import DataTable from "@/Shared/Table/DataTable";
import Empty from "@/Utils/Empty/Empty";
import { Card } from "@mui/material";
import { AxiosError } from "axios";
import React from "react";
import ResourcesList, { ResourcesListProps } from "./Components/ResourcesList";

export type SectionWrapperComponentProps = { children: (JSX.Element | null)[] };

export type PaginatedResourcesTableProps<T, E = AxiosError> = {
  sizes?: { md?: number | string; lg?: number | string; xl?: number | string };
  data: any[];
  RenderTable: any;
} & ResourcesListProps;

export default function PaginatedResourcesTable<T>({
  sizes,
  data,
  RenderTable,
  ...otherResourceListProps
}: PaginatedResourcesTableProps<T>) {
  return (
    <>
      <ResourcesList Section={RenderTable} {...otherResourceListProps} />
    </>
  );
}
