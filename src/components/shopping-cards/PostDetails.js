import React, { useEffect } from "react";


import {
    useParams, useHistory, Link
} from "react-router-dom";
import { fetchShoppingCards } from "../../actions/";

const PostDetails = () => {
    const { id } = useParams();
    const history = useHistory();
    useEffect(() => {
        console.log(id);
        fetchShoppingCards();
    });
    const goBack = () => {
        history.goBack();
    };
    return (
        <React.Fragment>
            <p className="ml-4">
                <Link className="go-back" onClick={goBack}> Go Back </Link> to previous page
            </p>
            <div style={{ textAlign: 'center', marginTop: '10rem' }}>
                <h1>Post Details {id}</h1>
            </div>
        </React.Fragment>
    );
};

export default PostDetails;