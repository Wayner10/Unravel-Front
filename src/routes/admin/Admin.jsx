import React, { useState } from 'react';

/* - - - </> [LINK] </> - - - */
import { usePlaceContext } from '../../context/PlaceProvider';

/* - - - </> [LINK] </> - - - */
import Menu from '../../components/Menu';

/* - - - </> [LINK] </> - - - */
import '../../App.css';
import './Admin.css';

function Admin()
{
    /* - - - </> [DATA] </> - - - */
    const { places, getPlace } = usePlaceContext();

    /* - - - </> [DATA] </> - - - */
    const [place, setPlace] = useState({});
    const [status, setStatus] = useState(false);

    //* - - - </> [DATA] </> - - - *//
    const fetchPlace = async (id) => {
        try
        {
            //* - - - </> [DATA] </> - - - *//
            const data = await getPlace(id);
            setPlace(data);
        }
        catch (error)
        {
            //* - - - </> [ERROR] </> - - - *//
            console.log(error);
            throw error;
        }
    }

    return (

        <>
        
        {/* - - - </> [SEC] </> - - - */}
        <section className='admin-section'>

            {/* - - - </> [DIV] </> - - - */}
            <div className='admin-menu'>

                {/* - - - </> [MENU] </> - - - */}
                <Menu></Menu>
                
            </div>

            {/* - - - </> [DIV] </> - - - */}
            <div className='admin-data'></div>

            {/* - - - </> [DIV] </> - - - */}
            <div className='admin-form'></div>

        </section>
        
        </>

    );
}

export default Admin;