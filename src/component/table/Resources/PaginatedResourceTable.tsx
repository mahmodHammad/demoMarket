import React from "react";
import ResourcesList, { ResourcesListProps } from "./Components/ResourcesList";

export type SectionWrapperComponentProps = { children: (JSX.Element | null)[] };

export type PaginatedResourcesTableProps<T> = {
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
