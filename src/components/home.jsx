
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

//* - - - </> [DATA] </> - - - *//
import Regions from '../api/Regions';

function Home()
{
    //* - - - </> [DATA] </> - - - *//
    const [regions, setRegions] = useState([]);

    //* - - - </> [DATA] </> - - - *//
    const regionService = new Regions();

    useEffect(() => {

        getData();

    }, [])

    //* - - - </> [DATA] </> - - - *//
    const getData = async () => {

        //* - - - </> [DATA] </> - - - *//
        const regionData = await regionService.getRegions();
        setRegions(regionData);
    }

    console.log(regions);

    //* - - - </> [LINK] </> - - - *//
    const navigate = useNavigate();

    //* - - - </> [LINK] </> - - - *//
    const seeMore = (id) => {

        navigate(`/${id}`);
    }

    return (

        <>

            {regions.map((item, index) => (

                //* - - - </> [BUTTON] </> - - - *//
                <button className='button-region' key={index} onClick={() => seeMore(item.region_id)}>{item.region_name}</button>

            ))}

        </>
    );
}

export default Home;

