import { createContext, useState } from "react";
import { useState } from "react";

const Auth = createContext({
    login: false,
    user: null
})

export default AuthProvider = (children) => {
    <Auth.Provider>
        {children}
    </Auth.Provider>
}