import React, { useEffect } from "react";
import {
    useParams
} from "react-router-dom";


const PostDetails = () => {
    const { id } = useParams();
    useEffect(() => {
        console.log(id);
    });
    return (
        <React.Fragment>
            <div style={{ textAlign: 'center',  }}>
                <h1>Post Details {id}</h1>
            </div>
        </React.Fragment>
    );
};

export default PostDetails;