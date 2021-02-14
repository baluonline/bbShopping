import React, { useEffect, useReducer } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUsersJson } from '..//../src/actions/'
import shoppingCardsReducers from '../reducers/'

const Users = () => {
  const initialState = {
    jsonPlaceHolder: {
      jsonUsers: [],
      pageNumber: ''
    }
  }
  const [state, dispatch] = useReducer(shoppingCardsReducers, initialState)
  const users = state.jsonPlaceHolder.jsonUsers
  const pageNumber = state.jsonPlaceHolder.jsonUsers
  useEffect(() => {
    fetchUsersJson(state.jsonPlaceHolder.pageNumber).then(resp => {
      dispatch({ type: resp.type, data: resp.payload })
    })
    return( () => console.log('cleanup on change of users'));
  }, [])

  const RenderUsers = ({ usersList }) => {
    if (usersList.length > 0) {
      return (
        <div>
          {usersList.map((user, index) => {
            return (
              <div key={index}>
                <div className='row d-flex justify-content-xl-center justify-content-md-center justify-content-sm-center '>
                  {user.id} . {user.name}
                </div>
              </div>
            )
          })}
        </div>
      )
    } else return <div> no users</div>
  }

  return (
    <div>
      <button
        className='btn-primary btn-lg float-left'
        onClick={() => dispatch({ type: 'DECREMENT' })}
      >
        {' '}
        {console.log(JSON.stringify(users))}
        Previous
      </button>
      <button
        className='btn-primary btn-lg float-right'
        onClick={() => dispatch({ type: 'INCREMENT' })}
      >
        Next Page
      </button>
      <div>
        <RenderUsers usersList={users} />
      </div>
    </div>
  )
}

export default Users
