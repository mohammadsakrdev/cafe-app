import React, { useState, Component, useEffect } from 'react';
import firebase from '../../Firebase';

const Create = props => {
  const [type, setType] = useState('');
  const [name, setName] = useState('');
  const [price, setPrice] = useState();
  const [photo, setPhoto] = useState(
    'https://via.placeholder.com/300.png/09f/fff'
  );

  function onSubmit(e) {
    e.preventDefault();

    firebase
      .firestore()
      .collection('items')
      .add({ type, name, price, photo })
      .then(result => {
        props.history.push('/');
      });
  }
  return (
    <div className='container'>
      <div className='row mt-5 mb-5'>
        <form onSubmit={onSubmit}>
          <select
            onChange={e => {
              setType(e.currentTarget.value);
            }}
          >
            <option value='Main Course'>Main Course</option>
            <option value='Side'>Side</option>
          </select>
          <div className='form-group'>
            <label htmlFor='name'>Name</label>
            <input
              type='text'
              className='form-control'
              id='name'
              placeholder='Enter name'
              value={name}
              onChange={e => {
                setName(e.currentTarget.value);
              }}
            />
          </div>
          <div className='form-group'>
            <label htmlFor='price'>Price</label>
            <input
              type='number'
              className='form-control'
              id='price'
              placeholder='Enter number'
              value={price}
              onChange={e => {
                setPrice(e.currentTarget.value);
              }}
            />
          </div>
          <div className='input-group'>
            <div className='input-group-prepend'>
              <span className='input-group-text' id='photo'>
                Upload
              </span>
            </div>
            <div className='custom-file'>
              <input
                type='file'
                className='custom-file-input'
                id='inputPhoto'
                aria-describedby='photo'
              />
              <label className='custom-file-label' htmlFor='inputPhoto'>
                Choose photo
              </label>
            </div>
          </div>
          <button type='submit' className='btn btn-primary'>
            Save Item
          </button>
        </form>
      </div>
    </div>
  );
};

export default Create;
