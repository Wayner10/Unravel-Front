import { createContext, useContext, useEffect, useState } from "react";

//* - - - </> [DATA] </> - - - *//
import Types from '../api/Types';

//* - - - </> [DATA] </> - - - *//
const typeProvider = createContext();

//* - - - </> [DATA] </> - - - *//
export function useTypeContext()
{
    //* - - - </> [DATA] </> - - - *//
    return useContext(typeProvider);
}

export function TypeProvider({children})
{
    //* - - - </> [DATA] </> - - - *//
    const [types, setTypes] = useState([]);

    //* - - - </> [DATA] </> - - - *//
    const typeService = new Types();

    //* - - - </> [DATA] </> - - - *//
    useEffect(() => {

        getData();

    }, []);

    //* - - - </> [DATA] </> - - - *//
    const getData = async () => {

        //* - - - </> [DATA] </> - - - *//
        const typeData = await typeService.getTypes();
        setTypes(typeData.data.place_types);
    }

    return (<typeProvider.Provider value={types}>{children}</typeProvider.Provider>);
}