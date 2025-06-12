import React from 'react';

interface Favourite {
    idMeal: string,
    strMealThumb: string
    strMeal: string
}

const favourites: Favourite[] = [
    {
        idMeal: '1',
        strMealThumb: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
        strMeal: 'Tomato basil',
    },
    {
        idMeal: '2',
        strMealThumb: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
        strMeal: 'Burger',
    },
    {
        idMeal: '3',
        strMealThumb: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
        strMeal: 'Coffee',
    },
    {
        idMeal: '4',
        strMealThumb: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
        strMeal: 'Honey',
    }
];

const initialState = {
    favourites: favourites,
}

function reducer(state: any , action: any) {
    switch (action.type) {
        case "Add":
            console.log("Adding to favourites", action.payload);
            const result = {
                ...state,
                favourites: [...state.favourites, action.payload ] 
            }
            console.log("New state", result);
            return result;
        case "Delete":
            return {
                ...state,
                favourites: state.favourites.filter((item: Favourite) => item.idMeal !== action.payload.id)
            }
            default:
                return state;
    }
}

// Export initialState and reducer for use in context
export { initialState, reducer }
