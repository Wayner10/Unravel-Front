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

        getData();

    }, []);

    //* - - - </> [DATA] </> - - - *//
    const getData = async () => {

        //* - - - </> [DATA] </> - - - *//
        const regionData = await regionService.getRegions();
        setRegions(regionData.data.regions);
    }

    return (<regionContext.Provider value={regions}>{children}</regionContext.Provider>);
}