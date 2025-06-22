import React, { createContext, ReactNode, Dispatch } from "react";
import MyReducer, { initialState } from "../state/Reducer";

interface FavouritesContextType {
    favourites: typeof initialState.favourites;
    dispatch: Dispatch<any>;
}

export const FavContext = createContext<FavouritesContextType>({
    favourites: initialState.favourites,
    dispatch: () => undefined,
});

export function FavouritesProvider({ children }: { children: ReactNode }) {
    const {state, dispatch} = MyReducer();
    
    const contextValue = {
        favourites: state.favourites,
        dispatch
    };

    return (
        <FavContext.Provider value={contextValue}>
            {children}
        </FavContext.Provider>
    );
}
