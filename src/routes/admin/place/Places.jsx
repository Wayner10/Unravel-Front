import React, { useState } from 'react';

/* - - - </> [LINK] </> - - - */
import { usePlaceContext } from '../../../context/PlaceProvider';

/* - - - </> [LINK] </> - - - */
import Menu from '../components/Menu';
import Card from '../components/Card';
import PlaceTable from './PlaceTable';
import PlaceForm from './PlaceForm';

/* - - - </> [LINK] </> - - - */
import '../../../App.css';
import '../Admin.css';

function Places()
{
    /* - - - </> [DATA] </> - - - */
    const { createPlace, updatePlace } = usePlaceContext();
    
    /* - - - </> [DATA] </> - - - */
    const [data, setData] = useState(null);

    /* - - - </> [DATA] </> - - - */
    const handleCreate = () => {
        
        setData(null); // Cambia el formulario al modo de creación
    };
    
    /* - - - </> [DATA] </> - - - */
    const handleUpdate = (place) => {
        
        setData(place); // Cambia el formulario al modo de edición con los datos del lugar
    };
    
    /* - - - </> [DATA] </> - - - */
    const handleSubmit = async (place) => {

        if (data)
        {
            try
            {
                //* - - - </> [DATA] </> - - - *//
                await updatePlace(place.place_id, place);
                window.location.reload();
            }
            catch (error)
            {
                //* - - - </> [ERROR] </> - - - *//
                console.error("Error updating place", error);
            }
        }
        else
        {
            try
            {
                //* - - - </> [DATA] </> - - - *//
                await createPlace(place);
                window.location.reload();
            }
            catch (error)
            {
                //* - - - </> [ERROR] </> - - - *//
                console.error("Error creating place", error);
            }
        }
        setData(null);
    };

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
                <PlaceTable onEdit={handleUpdate}></PlaceTable>

            </div>

            {/* - - - </> [DIV] </> - - - */}
            <div className='admin-form'>
                
                {/* - - - </> [FORM] </> - - - */}
                <PlaceForm initialValues={data} onSubmit={handleSubmit}></PlaceForm>

            </div>

        </section>

        </>
    );
}

export default Places;