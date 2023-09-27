import React, { ReactNode } from "react";
import ResourcesList, { ResourcesListProps } from "./Components/ResourcesList";

export type SectionWrapperComponentProps = { children: (JSX.Element | null)[] };

export type PaginatedResourcesTableProps<T> = {
  sizes?: { md?: number | string; lg?: number | string; xl?: number | string };
  Table: ReactNode | JSX.Element | any;
} & ResourcesListProps;

export default function PaginatedResourcesTable<T>({
  sizes,
  Table,
  ...otherResourceListProps
}: PaginatedResourcesTableProps<T>) {
  return (
    <>
      <ResourcesList Section={Table} {...otherResourceListProps} />
    </>
  );
}
