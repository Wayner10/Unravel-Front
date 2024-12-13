import React, { useState } from 'react';

/* - - - </> [LINK] </> - - - */
import { useUserContext } from '../../../context/UserProvider';

/* - - - </> [LINK] </> - - - */
import Menu from '../../../components/Menu';
import Card from '../../../components/Card';
import UserTable from './UserTable';
import UserForm from './UserForm';

/* - - - </> [LINK] </> - - - */
import '../../../App.css';
import '../Admin.css';

function Users()
{
    /* - - - </> [DATA] </> - - - */
    const { users, createUser, updateUser } = useUserContext();
    
    /* - - - </> [DATA] </> - - - */
    const [data, setData] = useState(null);

    /* - - - </> [DATA] </> - - - */
    const handleCreate = () => {
        
        setData(null);
    };
    
    /* - - - </> [DATA] </> - - - */
    const handleUpdate = (user) => {
        
        setData(user);
    };
    
    /* - - - </> [DATA] </> - - - */
    const handleSubmit = async (user) => {

        if (data)
        {
            try
            {
                //* - - - </> [DATA] </> - - - *//
                await updateUser(user.user_id, user);
                window.location.reload();
            }
            catch (error)
            {
                //* - - - </> [ERROR] </> - - - *//
                console.error("Error updating user", error);
            }
        }
        else
        {
            try
            {
                //* - - - </> [DATA] </> - - - *//
                await createUser(user);
                window.location.reload();
            }
            catch (error)
            {
                //* - - - </> [ERROR] </> - - - *//
                console.error("Error creating user", error);
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
                    <p className='admin-title'>+ Unravel - Users</p>

                    {/* - - - </> [TEXT] </> - - - */}
                    <p className='admin-text'>Find out what's happening</p>

                    {/* - - - </> [DATA] </> - - - */}
                    <Card data={users}></Card>

                    {/* - - - </> [TEXT] </> - - - */}
                    <p className='admin-title'>+ Records</p>

                    {/* - - - </> [TEXT] </> - - - */}
                    <p className='admin-text'>Manage database records</p>

                    {/* - - - </> [DATA] </> - - - */}
                    <UserTable onUpdate={handleUpdate}></UserTable>

                </div>

            </div>

            {/* - - - </> [DIV] </> - - - */}
            <div className='admin-form'>
                
                {/* - - - </> [FORM] </> - - - */}
                <UserForm initialValues={data} onCreate={handleCreate} onSubmit={handleSubmit}></UserForm>
                
            </div>

        </section>

        </>

    );
}

export default Users;