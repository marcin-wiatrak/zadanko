import {toggleFavorite} from './Fns'

test('Add new id to array', () => {
    const initialFav = [1, 2, 3];
    const idToAdd = 15
    const expectedArr = [1, 2, 3, 15]
  expect(toggleFavorite(idToAdd, initialFav)).toEqual(expectedArr);
});

test('Remove existing id from array', () => {
    const initialFav = [1, 2, 3];
    const idToRemove = 3
    const expectedArr = [1, 2]
    expect(toggleFavorite(idToRemove, initialFav)).toEqual(expectedArr);
});