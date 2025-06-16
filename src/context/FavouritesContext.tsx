import React, { createContext, ReactNode, Dispatch } from "react";
import MyReducer, { initialState } from "../state/Reducer";

interface FavouritesContextType {
    state: typeof initialState;
    dispatch: Dispatch<any>;
}

export const FavContext = createContext<FavouritesContextType>({
    state: initialState,
    dispatch: () => undefined,
});

export function FavouritesProvider({ children }: { children: ReactNode }) {
    const {state, dispatch} = MyReducer();
    return (
        <FavContext.Provider value={{ state, dispatch }}>
            {children}
        </FavContext.Provider>
    );
}
