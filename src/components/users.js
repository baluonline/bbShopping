import React, { useEffect, useReducer } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
import { fetchUsersJson } from '..//../src/actions/';
import shoppingCardsReducers from '../reducers/';
// import { jsonPlaceHolderInitialState } from "../reducers/jsonplaceholder";

const Users = () => {
  const initialState = {
    jsonUsers: [],
    pageNumber: 1
  };
  const [state, dispatch] = useReducer(shoppingCardsReducers, initialState);
  const users = state.jsonPlaceHolder?.jsonUsers;
  const pageNumber = state.jsonPlaceHolder?.pageNumber;
  useEffect(() => {
    fetchUsersJson().then(resp => {
      console.log(resp);
      dispatch({
        type: resp.type,
        payload: resp.payload
      });
    });
    return (() => console.log('cleanup on change of users'));
  }, []);

  const RenderUsers = ({ usersList }) => {
    if (usersList) {
      return (
        <div>
          {usersList.map((user, index) => {
            return (
              <div key={index}>
                <div className='row d-flex justify-content-xl-center justify-content-md-center justify-content-sm-center '>
                  {user.id} . {user.title}
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
      <button
        className='btn-primary btn-lg float-left'
        onClick={() => dispatch({ type: 'DECREMENT' })}
      >
        Previous
      </button>
      <span > pageNumber : {pageNumber} </span>
      <button
        className='btn-primary btn-lg float-right'
        onClick={() => dispatch({ type: 'INCREMENT', data: 1 })}
      >
        Next Page
      </button>
      <div>
        <RenderUsers usersList={users} />
      </div>
    </div>
  );
};

export default Users;
