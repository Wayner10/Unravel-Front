import React, { useState } from 'react';

/* - - - </> [LINK] </> - - - */
import { usePlaceContext } from '../../context/PlaceProvider';

/* - - - </> [LINK] </> - - - */
import Menu from './components/Menu';
import Card from './components/Card';
import PlaceForm from './place/PlaceForm';
import PlaceTable from './place/PlaceTable';

/* - - - </> [LINK] </> - - - */
import '../../App.css';
import './Admin.css';

function Admin()
{
    /* - - - </> [DATA] </> - - - */
    const { getPlace } = usePlaceContext();

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
            <div className='admin-data'>

                {/* - - - </> [TEXT] </> - - - */}
                <p className='admin-title'>+ Unravel - Places</p>

                {/* - - - </> [TEXT] </> - - - */}
                <p className='admin-text'>Complete the required fields to add a new record. Use the format indicated for each data</p>
                
                {/* - - - </> [DATA] </> - - - */}
                <Card></Card>

                {/* - - - </> [TEXT] </> - - - */}
                <p className='admin-title'>+ Records</p>

                {/* - - - </> [TEXT] </> - - - */}
                <p className='admin-text'>Complete the required fields to add a new record. Use the format indicated for each data</p>

                {/* - - - </> [DATA] </> - - - */}
                <PlaceTable getPlace={fetchPlace} setStatus={setStatus}></PlaceTable>

            </div>

            {/* - - - </> [DIV] </> - - - */}
            <div className='admin-form'>
                
                {/* - - - </> [FORM] </> - - - */}
                <PlaceForm data={place} status={status} setStatus={setStatus}></PlaceForm>

            </div>

        </section>
        
        </>

    );
}

export default Admin;