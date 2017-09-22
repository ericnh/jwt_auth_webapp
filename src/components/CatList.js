import React from 'react';
import { Link } from 'react-router-dom';

const CatList = ({cats, match}) => {
  return (
    <ul className="list-group">
      { cats.map(cat =>
        <li className="list-group-item" key={ cat.id }>
          <Link to={ `/cats/${ cat.id }` }>
            { cat.name }
          </Link>
        </li>
      )}
    </ul>
  );
};

export default CatList;
