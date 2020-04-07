import React, { FunctionComponent } from 'react';

export interface CardProps {
  name: string;
  description: string;
  address: string;
  category?: string;
  services?: string[];
}

export const Card: FunctionComponent<CardProps> = (props) => {
  return (
    <div>
      <h2>{props.name}</h2>
      <p>{props.description}</p>
      <p>{props.address}</p>
    </div>
  );
}

