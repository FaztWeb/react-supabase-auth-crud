import {createContext, useContext} from 'react'

export const AuthContext = createContext()

export function useAuth() {
    return useContext(AuthContext)
    }

export function AuthProvider({children}) {
    return (
        <AuthContext.Provider value={{
            user: null,
        }}>
            {children}
        </AuthContext.Provider>
    )
}
