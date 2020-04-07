import * as React from 'react';

export interface CardProps {
  name: string;
  description: string;
  address: string;
  category?: string;
  services?: string[];
}

export const Card = (props: CardProps) => {
  return (
    <div>
      <h2>${props.name}</h2>
      <p>${props.description}</p>
      <p>${props.address}</p>
    </div>
  );
}

