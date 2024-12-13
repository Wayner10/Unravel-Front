import React from 'react';

/* - - - </> [LINK] </> - - - */
import { useUserContext } from '../../../context/UserProvider';
import { Icon } from '@iconify/react';

/* - - - </> [LINK] </> - - - */
import '../../../App.css';
import './UserTable.css';

function UserTable({ onUpdate })
{
    /* - - - </> [DATA] </> - - - */
    const { users } = useUserContext();

    /* - - - </> [DATA] </> - - - */
    const getType = (user) => {

        const types = { 1: 'Admin', 2: 'Traveler', 3: 'Vendor'};
        return types[user.user_type_id] || 'Unknown';
    }
    
    return (

        <>
        
        {/* - - - </> [DIV] </> - - - */}
        <div className='user-table-wrapper'>

            {/* - - - </> [DIV] </> - - - */}
            <div className='user-table'>

                {users.map((item, index) => (

                    //* - - - </> [DIV] </> - - - *//
                    <div className='user-table-row' key={index} onClick={() => onUpdate(item)}>

                        {/* - - - </> [DIV] </> - - - */}
                        <div className='user-table-col'>
                            
                            {/* - - - </> [ICON] </> - - - */}
                            <Icon icon="fe:user" className='user-table-icon'/>
                            
                            {/* - - - </> [TEXT] </> - - - */}
                            <p className='user-table-title'>{item.user_name} {item.user_lastname}</p>
                            
                        </div>

                        {/* - - - </> [DIV] </> - - - */}
                        <div className='user-table-col'>
                            
                            {/* - - - </> [ICON] </> - - - */}
                            <Icon icon="mdi:key" className='user-table-icon'/>
                            
                            {/* - - - </> [TEXT] </> - - - */}
                            <p className='user-table-text'>{getType(item)}</p>
                            
                        </div>

                        {/* - - - </> [DIV] </> - - - */}
                        <div className='user-table-col'>
                            
                            {/* - - - </> [ICON] </> - - - */}
                            <Icon icon="ic:sharp-email" className='user-table-icon'/>
                            
                            {/* - - - </> [TEXT] </> - - - */}
                            <p className='user-table-title'>{item.user_email}</p>
                            
                        </div>

                        {/* - - - </> [DIV] </> - - - */}
                        <div className='user-table-col'>
                            
                            {/* - - - </> [ICON] </> - - - */}
                            <Icon icon="ic:sharp-phone" className='user-table-icon'/>

                            {/* - - - </> [TEXT] </> - - - */}
                            <p className='user-table-text'>{item.user_phone}</p>
                            
                        </div>
                        
                        {/* - - - </> [DIV] </> - - - */}
                        <div className='user-table-col'>

                            {item.user_status ? (
                                
                                /* - - - </> [DIV] </> - - - */
                                <Icon icon="ion:switch" className='user-table-switch-v1'/>

                            ) : (

                                /* - - - </> [DIV] </> - - - */
                                <Icon icon="ion:switch" className='user-table-switch-v2'/>

                            )}

                        </div>

                    </div>

                ))}

            </div>

        </div>
        
        </>

    );
}

export default UserTable;