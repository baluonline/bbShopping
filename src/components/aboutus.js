import React from 'react';
import contact from '..//Assets/contactme.jpg';
import { RepoIcon } from '@primer/octicons-react';

const Aboutus = () => {
    return (
        <div className='container--fluid' id='contact-me-container'>
            <div className='row d-flex cols-xl-12 page-header'>
                <div className='row contact-me contact-me-title'>
                    <h3 className='text-white'>Contact Me</h3>
                </div>
            </div>

            <div className='col-12 contact-me-container'>
                <div class="form-group row">
                    <label for="clientEmail" className="col-form-label col-sm-2">Please enter your email address</label>
                    <input type="email" className="form-control col-3" id="clientEmail" placeholder="name@example.com" />
                </div>
                <div class="form-group row">
                    <label for="clientEmail" className="col-form-label col-sm-2">Please enter your portfolio</label>
                    <input type="text" className="form-control col-3" id="clientEmail" placeholder="House hack" />
                </div>
                <div class="form-group row">
                    <label for="clientMessage" className="col-form-label col-sm-2">Please enter your message </label>
                    <textarea className="form-control col-lg-8" id="clientMessage" rows="3"></textarea>

                </div>

                <button type="submit" className="btn btn-primary ma-2  align-center col-lg-2">Submit</button>


            </div>
        </div>
    );
};

export default Aboutus;
