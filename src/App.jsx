import React from 'react';
import { Routes, Route } from 'react-router-dom';

/* - - - </> [LINK] </> - - - */
import './App.css';
import './fonts/TAN-PEARL.ttf';

/* - - - </> [LINK] </> - - - */
import Home from './routes/Home';
import Place from './routes/Place';
import Region from './routes/Region';
import NotFound from './routes/NotFound';

/* - - - </> [LINK] </> - - - */
import Admin from './routes/admin/Admin';
import Users from './routes/admin/user/Users';
import Places from './routes/admin/place/Places';

function App()
{
    return (

        <>

            {/* - - - </> [LINK] </> - - - */}
            <Routes>

                {/* - - - </> [LINK] </> - - - */}
                <Route path='/' element={<Home/>}/>

                {/* - - - </> [LINK] </> - - - */}
                <Route path='/:id' element={<Region/>}/>

                {/* - - - </> [LINK] </> - - - */}
                <Route path='/:region_id/:place_id' element={<Place/>}/>

                {/* - - - </> [LINK] </> - - - */}
                <Route path='*' exact={true} element={<NotFound/>}/>


                {/* - - - </> [ADMIN] </> - - - */}


                {/* - - - </> [LINK] </> - - - */}
                <Route path='/admin' element={<Admin/>}/>

                {/* - - - </> [LINK] </> - - - */}
                <Route path='/admin/users' element={<Users/>}/>

                {/* - - - </> [LINK] </> - - - */}
                <Route path='/admin/places' element={<Places/>}/>

                {/* - - - </> [LINK] </> - - - */}
                <Route path='/admin/regions' element={<Places/>}/>

            </Routes>

        </>
    );
}

export default App;