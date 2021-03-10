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
    const cols = ['col - 4', 'col - 4', 'col - 4'];
    if (postsList) {
      return (
        <div className="container">
          <div className="row">

            {postsList.map((user, index) => {
              const PostDetails = '/posts/' + user.id;
              return (
                <div key={index} className="col-4 card-block ">
                  <div className="shopping-card-title ma-10">
                    <Link className="justify-content-xl-center justify-content-md-center justify-content-sm-center"
                      to={PostDetails}>
                      {user.title}
                    </Link>
                  </div>
                  <div className="card-image pa-10">
                  </div>
                </div>
              );
            })
            }
          </div>
        </div>
      );
    } else return <div> no posts</div>;
  };

  return (

    <div className="row" id="posts">
      <RenderPosts postsList={posts} />
    </div>

  );
};

export default ShoppingPosts;
