import React, { FunctionComponent } from 'react';

import { Card } from '../card/card';
import { businesses } from './fixtures/mockdata';

export interface ListProps {
  itemsGroupSize?: number;
}

export const List: FunctionComponent<ListProps> = ({ itemsGroupSize = 3 }) => {
  const items = businesses
    .slice(0, itemsGroupSize)
    .map((business, index) => (
      <Card {...business} key={index} />
    ));

  return (
    <>
      {items}
    </>
  );
}
