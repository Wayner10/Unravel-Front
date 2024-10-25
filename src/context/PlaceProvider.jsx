import { createContext, useContext, useEffect, useState } from "react";

//* - - - </> [DATA] </> - - - *//
import Places from '../api/Places';

//* - - - </> [DATA] </> - - - *//
const placeContext = createContext();

//* - - - </> [DATA] </> - - - *//
export function usePlaceContext()
{
    return useContext(placeContext);
}

//* - - - </> [DATA] </> - - - *//
export function PlaceProvider({children})
{
    //* - - - </> [DATA] </> - - - *//
    const placeService = new Places();
    
    //* - - - </> [DATA] </> - - - *//
    const [places, setPlaces] = useState([]);

    //* - - - </> [DATA] </> - - - *//
    useEffect(() => {

        getPlaces();
        
    }, []);

    //* - - - </> [GET] </> - - - *//
    const getPlaces = async () => {
        try
        {
            //* - - - </> [DATA] </> - - - *//
            const placeData = await placeService.getPlaces();
            setPlaces(placeData.data.places);
        }
        catch (error)
        {
            //* - - - </> [ERROR] </> - - - *//
            console.log(error);
            throw error;
        }
    }

    //* - - - </> [GET] </> - - - *//
    const getPlace = async (id) => {
        try
        {
            //* - - - </> [DATA] </> - - - *//
            const placeData = await placeService.getPlace(id);
            return placeData.data.place;
        }
        catch (error)
        {
            //* - - - </> [ERROR] </> - - - *//
            console.log(error);
            throw error;
        }
    }

    //* - - - </> [POST] </> - - - *//
    const createPlace = async (newPlace) => {
        try
        {
            //* - - - </> [DATA] </> - - - *//
            const createdPlace = await placeService.createPlace(newPlace);
            setPlaces([...places, createdPlace]);
        }
        catch (error)
        {
            //* - - - </> [ERROR] </> - - - *//
            console.log(error);
            throw error;
        }
    }

    //* - - - </> [PUT] </> - - - *//
    const updatePlace = async (id, updatedData) => {
        try
        {
            //* - - - </> [DATA] </> - - - *//
            await placeService.updatePlace(id, updatedData);
            setPlaces(places.map(place => place.id === id ? { ...place, ...updatedData } : place));
        }
        catch (error)
        {
            //* - - - </> [ERROR] </> - - - *//
            console.log(error);
            throw error;
        }
    }

    //* - - - </> [DELETE] </> - - - *//
    const deletePlace = async (id) => {
        try
        {
            //* - - - </> [DATA] </> - - - *//
            await placeService.deletePlace(id);
            setPlaces(places.filter(place => place.id !== id));
        }
        catch (error)
        {
            //* - - - </> [ERROR] </> - - - *//
            console.log(error);
            throw error;
        }
    }
    
    //* - - - </> [DATA] </> - - - *//
    const value = { places, getPlaces, getPlace, createPlace, updatePlace, deletePlace };
    
    return ( <placeContext.Provider value={value}>{children}</placeContext.Provider> );
}
