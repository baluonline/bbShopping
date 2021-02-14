import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUserData, fetchUsers } from '..//../src/actions/';

const ShoppingCards = () => {
  const pageNumber = useSelector(state => state.pageNumber || 0);
  const itemsCount = useSelector(state => state.itemsCount || 10);
  const users = useSelector(state => state.users);
  const userPic = useSelector(state => state.userPic);
  const disabledPrevious = useSelector(state => state.disabledPrevious);

  const dispatch = useDispatch();

  useEffect(() => {
    fetchUsers(pageNumber, itemsCount).then(resp => {
      dispatch({ type: resp.type, data: resp.payload });
    });
  }, [dispatch, pageNumber]);
  const loading = () => {
    dispatch({ type: 'DISABLED_LINK' });
  };
  const RenderUsers = ({ users }) => {
    if (users) {
      return (
        <div>
          {users.map((user, index) => {
            return (
              <div key={index}>
                <div className='row d-flex justify-content-xl-center justify-content-md-center justify-content-sm-center '>
                  <p className='col-3'>
                    {user.cell} - {user.name.last} - {user.name.first}
                  </p>
                  <img
                    className='shopping-cards'
                    src={user.picture.large}
                    alt='image not available'
                  />
                </div>
              </div>
            );
          })}
        </div>
      );
    } else return <div> no users</div>;
  };

  return (
    <div>
      Current page number : {pageNumber}
      <button
        className='btn-primary btn-lg float-left'
        disabled={disabledPrevious}
        onClick={() => dispatch({ type: 'DECREMENT' })}
      >
        Previous
      </button>
      <button
        className='btn-primary btn-lg float-right'
        onClick={() => dispatch({ type: 'INCREMENT' })}
      >
        Next Page
      </button>
      <div>
        <RenderUsers users={users} />
      </div>
    </div>
  );
};

export default ShoppingCards;
