import React from 'react';
import { useParams } from 'react-router-dom';

const DetailItem = () => {
  const { id } = useParams();

  return (
    <div>
      <h1>Detalle del Item</h1>
      <p>Estás viendo los detalles del Item con ID: {id}</p>
    </div>
  );
};

export default DetailItem;
