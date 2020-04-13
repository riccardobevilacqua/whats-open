import React from 'react';

import { Card } from '../card/card';
import { businesses } from './fixtures/mockdata';

export interface ListProps {
  isLoading?: boolean;
  itemsGroupSize?: number;
}

export const List: React.FunctionComponent<ListProps> = ({
  itemsGroupSize = 10,
  isLoading = false
}) => {
  const listItems = businesses
    .slice(0, itemsGroupSize)
    .map((business, index) => (
      <Card {...business} key={index} />
    ));

  return (
    <>
      {isLoading ? '' : listItems}
    </>
  );
}
