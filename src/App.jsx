import React from 'react';
import { Routes, Route } from 'react-router-dom';

import './App.css';
import './fonts/TAN-PEARL.ttf';

/* - - - </> [LINK] </> - - - */
import Home from './routes/Home';
import Place from './routes/Place';
import Region from './routes/Region';
import NotFound from './routes/NotFound';

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

            </Routes>

        </>
    );
}

export default App;