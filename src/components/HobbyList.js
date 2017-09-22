import React from 'react';

const HobbyList = ({hobbies}) => {
  if (!hobbies) {
    return null;
  }
  return (
    <div>
      <h3>Hobbies</h3>
      <ul>
        { hobbies.map(hobby =>
            <li key={ hobby.id }>{ hobby.name }</li>
            )
        }
      </ul>
    </div>
  );
};

export default HobbyList;
