import React, { FunctionComponent } from 'react';

export interface ListProps {
  itemsGroupSize: number;
}

export const List: FunctionComponent<ListProps> = (props) => {
  return (
    <>
      {props.children}
    </>
  );
}