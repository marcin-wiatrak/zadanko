import React, {createContext, useCallback, useState} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Post from './Post';
import {toggleFavorite} from './Fns'

export const FavContext = createContext({
    favoriteList: null,
    toggleFavorite: null,
});

const Home = () => {
    const [favoriteList, setFavoriteList] = useState([]);

    const _fn = useCallback((id) => {
        setFavoriteList(prevState => toggleFavorite(+id, prevState));
    }, []);

    const checkFavorite = (id) => favoriteList.includes(+id)

    return (
        <React.StrictMode>
            <BrowserRouter>
                <FavContext.Provider value={{ favoriteList, toggleFavorite: _fn, checkFavorite }}>
                    <Routes>
                        <Route path="/" element={<App />} />
                        <Route path="post/:id" element={<Post />} />
                    </Routes>
                </FavContext.Provider>
            </BrowserRouter>
        </React.StrictMode>
    )
}


ReactDOM.render(
  <Home />,
  document.getElementById('root')
);

