import React from 'react';

const Rank = ({ name, entries }) => {
  // const userName = name.replace(/^\w/, (c) => c.toUpperCase());
  return(
    <div>
      <div className='white f3'>
        {`${name}, your current entry count is:`}
      </div>
      <div className='white f1'>
        {entries}
      </div>
    </div>
  );
}

export default Rank;
