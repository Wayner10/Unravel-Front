import { createContext, useContext, useEffect, useState } from "react";

//* - - - </> [DATA] </> - - - *//
import Places from '../api/Places';

//* - - - </> [DATA] </> - - - *//
const placeContext = createContext();

//* - - - </> [DATA] </> - - - *//
export function usePlaceContext()
{
    //* - - - </> [DATA] </> - - - *//
    return useContext(placeContext);
}

export function PlaceProvider({children})
{
    //* - - - </> [DATA] </> - - - *//
    const [places, setPlaces] = useState([]);

    //* - - - </> [DATA] </> - - - *//
    const placeService = new Places();

    //* - - - </> [DATA] </> - - - *//
    useEffect(() => {

        getData();

    }, []);

    //* - - - </> [DATA] </> - - - *//
    const getData = async () => {

        //* - - - </> [DATA] </> - - - *//
        const placeData = await placeService.getPlaces();
        setPlaces(placeData.data.places);
    }

    return (<placeContext.Provider value={places}>{children}</placeContext.Provider>);
}