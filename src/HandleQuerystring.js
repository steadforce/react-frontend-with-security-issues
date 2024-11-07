import React from 'react';
import { useLocation } from 'react-router-dom';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function HandleQuery() {
  const query = useQuery();
  
  // Zugriff auf den query-Parameter und als HTML setzen
  const queryValue = query.get('query');

  return (
    <div>
      <h1 dangerouslySetInnerHTML={{ __html: queryValue 
        
      }} />
    </div>
  );
}

export default HandleQuery;
