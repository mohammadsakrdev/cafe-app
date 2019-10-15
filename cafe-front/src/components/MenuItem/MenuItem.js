import React from 'react';

const MenuItem = ({ col, item }) => {
  return (
    <div className={col}>
      <div className='card mt-5'>
        <img className='card-img-top' src={item.photo} alt='Card cap' />
        <div className='card-body'>
          <div className='row'>
            <div className='col-sm-10 text-left'>
              <h5 className='card-title'>{item.type}</h5>
              <p className='card-text'>{item.name}</p>
            </div>

            <div className='col-sm-2 text-right'>
              <span className='card-text'>{item.price}$</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuItem;
