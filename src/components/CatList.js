import React from 'react';

const CatList = ({cats}) => {
  return (
    <ul className="list-group">
      { cats.map(cat =>
        <li className="list-group-item" key={ cat.id }>
          { cat.name }
        </li>
      )}
    </ul>
  );
};

export default CatList;
