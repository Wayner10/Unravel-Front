import { createContext, useContext, useEffect, useState } from "react";

//* - - - </> [DATA] </> - - - *//
import Regions from '../api/Regions';

//* - - - </> [DATA] </> - - - *//
const regionContext = createContext();

//* - - - </> [DATA] </> - - - *//
export function useRegionContext()
{
    //* - - - </> [DATA] </> - - - *//
    return useContext(regionContext);
}

export function RegionProvider({children})
{
    //* - - - </> [DATA] </> - - - *//
    const [regions, setRegions] = useState([]);

    //* - - - </> [DATA] </> - - - *//
    const regionService = new Regions();

    //* - - - </> [DATA] </> - - - *//
    useEffect(() => {

        getRegions();
        
    }, []);

    //* - - - </> [GET] </> - - - *//
    const getRegions = async () => {
        try
        {
            //* - - - </> [DATA] </> - - - *//
            const regionData = await regionService.getRegions();
            setRegions(regionData.data.regions);
        }
        catch (error)
        {
            //* - - - </> [ERROR] </> - - - *//
            console.log(error);
            throw error;
        }
    }

    //* - - - </> [GET] </> - - - *//
    const getRegion = async (id) => {
        try
        {
            //* - - - </> [DATA] </> - - - *//
            const regionData = await regionService.getRegion(id);
            return regionData.data.region;
        }
        catch (error)
        {
            //* - - - </> [ERROR] </> - - - *//
            console.log(error);
            throw error;
        }
    }

    //* - - - </> [POST] </> - - - *//
    const createRegion = async (newRegion) => {
        try
        {
            //* - - - </> [DATA] </> - - - *//
            const createdRegion = await regionService.createRegion(newRegion);
            setRegions([...regions, createdRegion]);
        }
        catch (error)
        {
            //* - - - </> [ERROR] </> - - - *//
            console.log(error);
            throw error;
        }
    }

    //* - - - </> [PUT] </> - - - *//
    const updateRegion = async (id, updatedData) => {
        try
        {
            //* - - - </> [DATA] </> - - - *//
            await regionService.updateRegion(id, updatedData);
            setRegions(regions.map(region => region.id === id ? { ...region, ...updatedData } : region));
        }
        catch (error)
        {
            //* - - - </> [ERROR] </> - - - *//
            console.log(error);
            throw error;
        }
    }

    //* - - - </> [DELETE] </> - - - *//
    const deleteRegion = async (id) => {
        try
        {
            //* - - - </> [DATA] </> - - - *//
            await regionService.deleteRegion(id);
            setRegions(regions.filter(region => region.id !== id));
        }
        catch (error)
        {
            //* - - - </> [ERROR] </> - - - *//
            console.log(error);
            throw error;
        }
    }
    
    //* - - - </> [DATA] </> - - - *//
    const value = { regions, getRegions, getRegion, createRegion, updateRegion, deleteRegion };

    return (<regionContext.Provider value={value}>{children}</regionContext.Provider>);
}