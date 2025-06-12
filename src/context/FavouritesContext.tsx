import React, { createContext, useReducer, ReactNode, Dispatch } from "react";
import { initialState, reducer } from "../state/Reducer";

// Define a type for the context value
interface FavouritesContextType {
    state: typeof initialState;
    dispatch: Dispatch<any>;
}

export const FavContext = createContext<FavouritesContextType>({
    state: initialState,
    dispatch: () => undefined,
});

export function FavouritesProvider({ children }: { children: ReactNode }) {
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
        <FavContext.Provider value={{ state, dispatch }}>
            {children}
        </FavContext.Provider>
    );
}

