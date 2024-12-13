import React from 'react';

/* - - - </> [LINK] </> - - - */
import { useRegionContext } from '../../../context/RegionProvider';
import { usePlaceContext } from '../../../context/PlaceProvider';
import { Icon } from '@iconify/react';

/* - - - </> [LINK] </> - - - */
import '../../../App.css';
import './PlaceTable.css';

function PlaceTable({ onUpdate })
{
    /* - - - </> [DATA] </> - - - */
    const { places } = usePlaceContext();
    const { regions } = useRegionContext();
    
    /* - - - </> [DATA] </> - - - */
    const getRegion = (data) => {
        
        if (!regions || !regions.length)
        {
            /* - - - </> [ERROR] </> - - - */
            return 'Region not found';
        }
        
        /* - - - </> [DATA] </> - - - */
        const region = regions.find(item => item.region_id === data.region_id);
        return region ? region.region_name : 'N/A';
    };
    
    return (

        <>
        
        {/* - - - </> [DIV] </> - - - */}
        <div className='place-table-wrapper'>

            {/* - - - </> [DIV] </> - - - */}
            <div className='place-table'>

                {places.map((item, index) => (

                    //* - - - </> [DIV] </> - - - *//
                    <div className='place-table-row' key={index} onClick={() => onUpdate(item)}>

                        {/* - - - </> [DIV] </> - - - */}
                        <div className='place-table-col'>

                            {/* - - - </> [ICON] </> - - - */}
                            <Icon icon="fluent:location-12-filled" className='place-table-icon'/>

                            {/* - - - </> [TEXT] </> - - - */}
                            <p className='place-table-title'>{item.place_name}</p>
                            
                        </div>

                        {/* - - - </> [DIV] </> - - - */}
                        <div className='place-table-col'>
                            
                            {/* - - - </> [ICON] </> - - - */}
                            <Icon icon="mingcute:world-2-fill" className='place-table-icon'/>

                            {/* - - - </> [TEXT] </> - - - */}
                            <p className='place-table-text'>{getRegion(item)}</p>
                            
                        </div>

                        {/* - - - </> [DIV] </> - - - */}
                        <div className='place-table-col'>
                            
                            {/* - - - </> [ICON] </> - - - */}
                            <Icon icon="ic:baseline-star" className='place-table-icon'/>

                            {/* - - - </> [TEXT] </> - - - */}
                            <p className='place-table-text'>{item.place_score}</p>
                            
                        </div>

                        {/* - - - </> [DIV] </> - - - */}
                        <div className='place-table-col'>
                            
                            {/* - - - </> [ICON] </> - - - */}
                            <Icon icon="jam:ticket-f" className='place-table-icon'/>
                            
                            {/* - - - </> [TEXT] </> - - - */}
                            <p className='place-table-text'>{item.place_price_adult === 0 ? 'FREE' : `$${item.place_price_adult}`}</p>
                            
                        </div>

                        {/* - - - </> [DIV] </> - - - */}
                        <div className='place-table-col'>

                            {item.place_status ? (
                                
                                /* - - - </> [DIV] </> - - - */
                                <Icon icon="ion:switch" className='place-table-switch-v1'/>

                            ) : (

                                /* - - - </> [DIV] </> - - - */
                                <Icon icon="ion:switch" className='place-table-switch-v2'/>

                            )}

                        </div>

                    </div>

                ))}

            </div>

        </div>

        
        </>

    );
}

export default PlaceTable;