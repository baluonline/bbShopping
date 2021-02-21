import React, { useEffect, useReducer } from 'react';
import { Link } from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from '../../actions';
import shoppingCardsReducers from '../../reducers';
// import { jsonPlaceHolderInitialState } from "../reducers/jsonplaceholder";

const ShoppingPosts = () => {
  const initialState = {
    jsonUsers: [],
    pageNumber: 1
  };
  const [state, dispatch] = useReducer(shoppingCardsReducers, initialState);
  const posts = state.jsonPlaceHolder?.jsonUsers;
  const pageNumber = state.jsonPlaceHolder?.pageNumber;
  useEffect(() => {
    fetchPosts().then(resp => {
      console.log(resp);
      dispatch({
        type: resp.type,
        payload: resp.payload
      });
    });
    return (() => console.log('cleanup on change of users'));
  }, []);

  const RenderPosts = ({ postsList }) => {
    if (postsList) {
      return (
        <div>
          {postsList.map((user, index) => {
            const PostDetails = '/posts/' + user.id;
            return (
              <div key={index}>
                <Link className='row d-flex justify-content-xl-center justify-content-md-center justify-content-sm-center '
                  to={PostDetails}>
                  {user.title}
                </Link>
              </div>
            );
          })
          }
        </div >
      );
    } else return <div> no posts</div>;
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
        <RenderPosts postsList={posts} />
      </div>
    </div>
  );
};

export default ShoppingPosts;
