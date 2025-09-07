import { createContext, Dispatch, ReactNode, SetStateAction, useState } from "react";

interface UserContextType {
    user: string
    setUser: Dispatch<SetStateAction<string>>
}

const UserContext = createContext<UserContextType | undefined>(undefined)

const UserProvider = ({children}: {children: ReactNode}) => {
    const [user, setUser] = useState("Saifullah")

    return(
        <UserContext.Provider value={{user, setUser}}>
            {children}
        </UserContext.Provider>
    )

}

export {UserContext, UserProvider}