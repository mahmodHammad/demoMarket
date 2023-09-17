
import { Card } from "@mui/material";
import React from "react";
import ResourcesList, { ResourcesListProps } from "./Components/ResourcesList";
import { Item } from "@/wrappers";

export type SectionWrapperComponentProps = { children: (JSX.Element | null)[] };

export type PaginatedResourcesListProps<T> = {
  sizes?: { md?: number | string; lg?: number | string; xl?: number | string };
  data: any[];
  renderItem: (info: { item: T }) => JSX.Element | null;
  SectionWrapperComponent?: React.ComponentType<SectionWrapperComponentProps>;
} & ResourcesListProps;

export default function PaginatedResourcesList<T>({
  sizes,
  data,
  renderItem,
  SectionWrapperComponent = React.Fragment,
  ...otherResourceListProps
}: PaginatedResourcesListProps<T>) {
  return (
    <>
      <ResourcesList
        Section={
          data?.length ? (
            <SectionWrapperComponent>
              {data?.map((item: any) => (
                <Item
                  key={item.id}
                  xs={12}
                  sm={12}
                  md={sizes?.md || 6}
                  lg={sizes?.lg || 6}
                  xl={sizes?.xl || 4}
                >
                  <Card
                    sx={{
                      height: "100%",
                    }}
                  >
                    {renderItem({ item })}
                  </Card>
                </Item>
              ))}
            </SectionWrapperComponent>
          ) : (
            <>this is empty, create a component</>
          )
        }
        {...otherResourceListProps}
      />
    </>
  );
}
