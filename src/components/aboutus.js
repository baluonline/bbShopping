import React, { useEffect, useReducer } from 'react';
import contact from '..//Assets/contactme.jpg';
// import { RepoIcon } from '@primer/octicons-react';
import shoppingCardsReducers from './../reducers';
import { jsonPlaceHolderInitialState } from "./../reducers/jsonplaceholder";
import * as actions from '../actions';

const Aboutus = () => {

    const initialState = {
        jsonPlaceHolder: {
            contactName: '',
            contactEmail: '',
            contactSubject: '',
            contactMessage: ''
        }
    };
    const [state, dispatch] = useReducer(shoppingCardsReducers, initialState);
    const jsonPlaceHolder = state?.jsonPlaceHolder;
    const contactName = state.jsonPlaceHolder?.contactName || '';
    const contactEmail = state.jsonPlaceHolder?.contactEmail || '';
    const contactSubject = state.jsonPlaceHolder?.contactSubject || '';
    const contactMessage = state.jsonPlaceHolder?.contactMessage || '';
    function submitContactForm(e) {
        e.preventDefault();
        console.log('contactEmail' + JSON.stringify(state.jsonPlaceHolder));
    };
    const onChangeContactFields = (e) => dispatch({
        type: actions.CONTACT_DETAILS,
        name: e.target.name,
        payload: e.target.value
    });


    return (
        <div className='container--fluid' id='contact-me-container'>

            <div className='row d-flex cols-xl-12 page-header'>
                <div className='row contact-me contact-me-title'>
                    <h2 className='text-white'>Contact Me</h2>
                </div>
            </div>

            <div className='col-12 contact-me-container'>
                <form onSubmit={submitContactForm} className="d-inline-block col-5">
                    <div className="form-group row mb-12">
                        <input type="text" name="contactName" value={contactName} className="form-control " id="clientEmail"
                            onChange={onChangeContactFields}

                            placeholder="Enter your name" />
                    </div>
                    <div className="form-group row mb-12">
                        <input type="email" name="contactEmail" value={contactEmail} className="form-control " id="clientEmail"
                            onChange={onChangeContactFields}
                            placeholder="name@example.com" />
                    </div>
                    <div className="form-group row mb-12">
                        <input type="text" name="contactSubject"
                            onChange={onChangeContactFields}
                            value={contactSubject} className="form-control" id="clientEmail" placeholder="Subject" />
                    </div>
                    <div className="form-group row mb-12">
                        <textarea value={contactMessage} name="contactMessage"
                            onChange={onChangeContactFields}
                            className="form-control " id="clientMessage" rows="3" placeholder="Message"></textarea>

                    </div>
                    <button type="submit"

                        className="btn btn-primary ma-2  align-center col-lg-2 float-right">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default Aboutus;
