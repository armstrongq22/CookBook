import React, { useEffect } from 'react';
import axios from 'axios';
import { useHistory } from "react-router-dom";

import PrimarySearchAppBar from '../components/PrimarySearchAppBar';
import CreatePost from '../components/CreatePost';
import Footer from '../components/Footer';


function NewPost() {
    const history = useHistory();
    const goHome = () => history.push('/Home');

    useEffect(() => {
        axios.get('/api/authenticate')
        .then((res) => {
            console.log('User authenticated');
        })
        .catch((error) => {
          if(error.response.status === 500) {
            console.log(error.response.data.message);
            history.push('/');
          }
          else console.log(error);
        });
      }, [history]);

    return (
        <div>
            <PrimarySearchAppBar />
            <h1>Create Post</h1>
            <CreatePost refresh={goHome} />
            <Footer />
        </div>
    );
};

export default NewPost;