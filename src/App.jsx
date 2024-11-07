// import React, { useState } from 'react';
// import { Routes, Route } from 'react-router-dom';

// import './App.css';
// import './fonts/TAN-PEARL.ttf';

// /* - - - </> [LINK] </> - - - */
// import Home from './routes/Home';
// import Place from './routes/Place';
// import Region from './routes/Region';
// import NotFound from './routes/NotFound';
// import Admin from './routes/admin/Admin';
// import Dropdown from './routes/Dropdown';

// function App()
// {
//     const [selected, setSelected] = useState("");
//     return (

//         <>

//         {/* <Dropdown selected={selected} setSelected={setSelected}/> */}

//             {/* - - - </> [LINK] </> - - - */}
//             <Routes>

//                 {/* - - - </> [LINK] </> - - - */}
//                 <Route path='/' element={<Home/>}/>

//                 {/* - - - </> [LINK] </> - - - */}
//                 <Route path='/:id' element={<Region/>}/>

//                 {/* - - - </> [LINK] </> - - - */}
//                 <Route path='/admin' element={<Admin/>}/>

//                 {/* - - - </> [LINK] </> - - - */}
//                 <Route path='/drop' element={<Dropdown selected={selected} setSelected={setSelected}/>}/>
                

//                 {/* - - - </> [LINK] </> - - - */}
//                 <Route path='/:region_id/:place_id' element={<Place/>}/>

//                 {/* - - - </> [LINK] </> - - - */}
//                 <Route path='*' exact={true} element={<NotFound/>}/>

//             </Routes>

//         </>
//     );
// }

// export default App;

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
                {/* <Route path='/drop' element={<Dropdown selected={selected} setSelected={setSelected}/>}/> */}



                {/* - - - </> [LINK] </> - - - */}
                <Route path='/admin' element={<Admin/>}/>

                {/* - - - </> [LINK] </> - - - */}
                <Route path='/admin/places' element={<Places/>}/>

            </Routes>

        </>
    );
}

export default App;