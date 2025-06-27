import React from "react";

interface Favourite {
  idMeal: string;
  strMealThumb: string;
  strMeal: string;
}

const favourites: Favourite[] = [
  // {
  //     idMeal: '1',
  //     strMealThumb: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
  //     strMeal: 'Tomato basil',
  // },
  // {
  //     idMeal: '2',
  //     strMealThumb: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
  //     strMeal: 'Burger',
  // },
  // {
  //     idMeal: '3',
  //     strMealThumb: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
  //     strMeal: 'Coffee',
  // },
  // {
  //     idMeal: '4',
  //     strMealThumb: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
  //     strMeal: 'Honey',
  // }
];

const categories: string[] = [
  "Breakfast",
  "Vegetarian",
  "Dessert",
  "Chicken",
  "Goat",
  "Miscellaneous",
  "Pasta",
  "Seafood",
  "Side",
  "Starter",
  "Vegan",
];

const areas: string[] = [
  "American",
  "British",
  "Canadian",
  "Chinese",
  "Croatian",
  "Dutch",
  "Egyptian",
  "Filipino",
  "French",
  "Greek",
  "Indian",
  "Irish",
  "Italian",
  "Jamaican",
  "Japanese",
  "Kenyan",
  "Malaysian",
  "Mexican",
  "Moroccan",
  "Polish",
  "Portuguese",
  "Russian",
  "Spanish",
  "Thai",
  "Tunisian",
  "Turkish",
  "Ukrainian",
  "Uruguayan",
  "Vietnamese",
];

export const initialState = {
  favourites: favourites,
  categories: categories,
  areas: areas,
  ingredients: [] as string[],
};

export function reducer(state: any, action: any) {
  switch (action.type) {
    case "Add":
      console.log("Adding to favourites", action.payload);
      const isDuplicate = state.favourites.find(
        (fav: Favourite) => fav.idMeal === action.payload.idMeal
      );
      if (isDuplicate) {
        return state; // Return current state if already exists
      }
      const result = {
        ...state,
        favourites: [...state.favourites, action.payload],
      };
      console.log("New state", result);
      return result;
    case "Remove":
      return {
        ...state,
        favourites: state.favourites.filter(
          (item: Favourite) => item.idMeal !== action.payload.id
        ),
      };
    default:
      return state;
  }
}

export default function MyReducer() {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  return { state, dispatch };
}
