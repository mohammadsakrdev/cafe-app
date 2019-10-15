import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import firebase from '../../Firebase';
import MenuItem from '../MenuItem/MenuItem';

function useItems() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const unSubscribe = firebase
      .firestore()
      .collection('items')
      .onSnapshot(snapshot => {
        const result = snapshot.docs.map(doc => {
          return {
            id: doc.id,
            ...doc.data()
          };
        });
        setItems(result);
      });

    return () => unSubscribe();
  }, []);
  return items;
}

const Menu = () => {
  const items = useItems();

  const itemsList = items.length ? (
    items.map(item => <MenuItem col='col-sm-4' key={item.id} item={item} />)
  ) : (
    <h1 className='text-center'>No Cafes</h1>
  );

  return (
    <div className='container'>
      <div className='row mt-5 mb-5'>
        <div className='col-sm-6 text-left'>
          <h2>Menu</h2>
        </div>

        <div className='col-sm-6 text-right'>
          <button className='btn btn-info'>
            <Link to='/create'>Add Menu Item</Link>
          </button>
        </div>
      </div>

      <div className='row mb-5'>{itemsList}</div>
    </div>
  );
};

export default Menu;
