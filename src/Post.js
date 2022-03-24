import React, {useContext, useEffect, useState} from 'react';
import axios from 'axios';
import {Link, useHistory, useParams} from 'react-router-dom';
import './Post.css';
import {FavContext} from './index';

const Post = () => {
    const [post, setPost] = useState(null);
    const { id } = useParams();

    const { favoriteList, toggleFavorite, checkFavorite } = useContext(FavContext);

    console.log(favoriteList, checkFavorite(id));

    const getPost = async () => {
        const {data} = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
        setPost(data)
    }

    useEffect(() => {
        getPost();
    }, [id])

    if (!post) return null;

    return (
        <div>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
            <div className="actions">
                <Link to={`/post/${+id + 1}`}>Next post</Link>
                <Link to={'/'}>Back to home</Link>
                <button onClick={() => toggleFavorite(id)}>
                    {checkFavorite(id) ? 'Remove from' : 'Add to'} favorite
                </button>
            </div>
        </div>
    );
}

export default Post;
