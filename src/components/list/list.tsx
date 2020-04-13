import React, { useState, useEffect } from 'react';

import { Card, CardProps } from '../card/card';

export interface ListProps {
  itemsGroupSize?: number;
}

export const List: React.FunctionComponent<ListProps> = ({ itemsGroupSize = 10 }) => {
  const [businesses, setBusinesses] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('/api/businesses');
      const parsed = await response.json();

      setBusinesses(parsed.businesses);
    };

    fetchData();
  }, []);

  const listItems = businesses
    .slice(0, itemsGroupSize)
    .map((business, index) => (
      <Card {...business} key={index} />
    ));

  return (
    <>
      {listItems}
    </>
  );
}
