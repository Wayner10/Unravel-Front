import { createContext, useContext, useEffect, useState } from "react";

//* - - - </> [DATA] </> - - - *//
import Users from '../api/Users';

//* - - - </> [DATA] </> - - - *//
const userContext = createContext();

//* - - - </> [DATA] </> - - - *//
export function useUserContext()
{
    return useContext(userContext);
}

//* - - - </> [DATA] </> - - - *//
export function UserProvider({children})
{
    //* - - - </> [DATA] </> - - - *//
    const userService = new Users();
    
    //* - - - </> [DATA] </> - - - *//
    const [users, setUsers] = useState([]);

    //* - - - </> [DATA] </> - - - *//
    useEffect(() => {

        getUsers();
        
    }, []);

    //* - - - </> [GET] </> - - - *//
    const getUsers = async () => {
        try
        {
            //* - - - </> [DATA] </> - - - *//
            const userData = await userService.getUsers();
            setUsers(userData.data.users);
        }
        catch (error)
        {
            //* - - - </> [ERROR] </> - - - *//
            console.log(error);
            throw error;
        }
    }

    //* - - - </> [GET] </> - - - *//
    const getUser = async (id) => {
        try
        {
            //* - - - </> [DATA] </> - - - *//
            const userData = await userService.getUser(id);
            return userData.data.user;
        }
        catch (error)
        {
            //* - - - </> [ERROR] </> - - - *//
            console.log(error);
            throw error;
        }
    }

    //* - - - </> [POST] </> - - - *//
    const createUser = async (newUser) => {
        try
        {
            //* - - - </> [DATA] </> - - - *//
            const createdUser = await userService.createUser(newUser);
            setUsers([...users, createdUser]);
        }
        catch (error)
        {
            //* - - - </> [ERROR] </> - - - *//
            console.log(error);
            throw error;
        }
    }

    //* - - - </> [PUT] </> - - - *//
    const updateUser = async (id, updatedData) => {
        try
        {
            //* - - - </> [DATA] </> - - - *//
            await userService.updateUser(id, updatedData);
            setUsers(users.map(user => user.id === id ? { ...user, ...updatedData } : user));
        }
        catch (error)
        {
            //* - - - </> [ERROR] </> - - - *//
            console.log(error);
            throw error;
        }
    }

    //* - - - </> [DELETE] </> - - - *//
    const deleteUser = async (id) => {
        try
        {
            //* - - - </> [DATA] </> - - - *//
            await userService.deleteUser(id);
            setUsers(users.filter(user => user.id !== id));
        }
        catch (error)
        {
            //* - - - </> [ERROR] </> - - - *//
            console.log(error);
            throw error;
        }
    }
    
    //* - - - </> [DATA] </> - - - *//
    const value = { users, getUsers, getUser, createUser, updateUser, deleteUser };
    
    return ( <userContext.Provider value={value}>{children}</userContext.Provider> );
}
