
import './App.css';
import axios from 'axios';
import {useContext, useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import {FavContext} from './index';

function App() {
  const [postsList, setPostsList] = useState(null);

  const {favoriteList, checkFavorite} = useContext(FavContext)

  console.log(favoriteList);

  const getData = async () => {
    const {data} = await axios.get('https://jsonplaceholder.typicode.com/posts');
    setPostsList(data)
  }

  useEffect(() => {
    getData();
  }, [])

  if (!postsList) return null;

  return (
  <div>
    <ul className="posts--list">
      {postsList.map((post) => (
          <li key={post.id} className="post--box">
              <Link to={`/post/${post.id}`}>
                {checkFavorite(+post.id) && <span className="fav" />}
                <div className="post--box__wrapper" />
                <p className="post--box__text">{post.title}</p>
              </Link>
          </li>
      ))}
    </ul>
  </div>
  );
}

export default App;


// https://jsonplaceholder.typicode.com/posts