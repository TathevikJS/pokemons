import React from 'react';
import { Spinner } from '@/shared/Spinner';
import './styles.scss'; 

export const PokemonDetailsLoading: React.FC = () => {
  return (
    <div className="loading-container">
      <Spinner /> 
    </div>
  );
};
