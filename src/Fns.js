export const toggleFavorite = (id, favoriteList) => {
    console.log(id, favoriteList);
    const foundPost = favoriteList.find(favPost => favPost === id);
    if (foundPost) {
        return favoriteList.filter(el => el !== id)
    } else {
        return [...favoriteList, +id];
    }
};