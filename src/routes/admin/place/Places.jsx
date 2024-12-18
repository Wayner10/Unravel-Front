import React, { useState } from 'react';

/* - - - </> [LINK] </> - - - */
import { usePlaceContext } from '../../../context/PlaceProvider';

/* - - - </> [LINK] </> - - - */
import Menu from '../../../components/Menu';
import Card from '../../../components/Card';
import PlaceTable from './PlaceTable';
import PlaceForm from './PlaceForm';

/* - - - </> [LINK] </> - - - */
import '../../../App.css';
import '../Admin.css';

function Places()
{
    /* - - - </> [DATA] </> - - - */
    const { places, createPlace, updatePlace } = usePlaceContext();
    
    /* - - - </> [DATA] </> - - - */
    const [data, setData] = useState(null);

    /* - - - </> [DATA] </> - - - */
    const handleCreate = () => {
        
        setData(null);
    };
    
    /* - - - </> [DATA] </> - - - */
    const handleUpdate = (place) => {
        
        setData(place);
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

                {/* - - - </> [DIV] </> - - - */}
                <div className='admin-wrapper'>

                    {/* - - - </> [TEXT] </> - - - */}
                    <p className='admin-title'>+ Unravel - Points of Interest</p>

                    {/* - - - </> [TEXT] </> - - - */}
                    <p className='admin-text'>Find out what's happening</p>
                    
                    {/* - - - </> [DATA] </> - - - */}
                    <Card data={places}></Card>

                    {/* - - - </> [TEXT] </> - - - */}
                    <p className='admin-title'>+ Records</p>

                    {/* - - - </> [TEXT] </> - - - */}
                    <p className='admin-text'>Manage database records</p>

                    {/* - - - </> [DATA] </> - - - */}
                    <PlaceTable onUpdate={handleUpdate}></PlaceTable>
                    
                </div>
                
            </div>

            {/* - - - </> [DIV] </> - - - */}
            <div className='admin-form'>
                
                {/* - - - </> [FORM] </> - - - */}
                <PlaceForm initialValues={data} onCreate={handleCreate} onSubmit={handleSubmit}></PlaceForm>

            </div>

        </section>

        </>
    );
}

export default Places;