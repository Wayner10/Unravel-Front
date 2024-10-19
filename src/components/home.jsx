<<<<<<< HEAD
import React from 'react';
import Prueba from '../video/Prueba.mp4';
import '../styles/home.css';

const Home = () => {
  return (
    <div className="home-container">
      <div className="header">
        <h1>Unravel</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque tincidunt ligula neque, eget vulputate orci tempus non. Curabitur et ultricies lorem.</p>
        <div className="video-section">
          <video width="70%" controls>
            <source src={Prueba} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="buttons">
          <button>Lorem Ipsum</button>
          <button>Lorem Ipsum</button>
        </div>
      </div>
      <div className="cards">
        <div className="card">250+
          <p>Nullam hendrerit leo in tempor mattis. Mauris vel tortor enim.</p>
        </div>
        <div className="card">$50.00
          <p>Nullam hendrerit leo in tempor mattis. Mauris vel tortor enim.</p>
        </div>
        <div className="card">250+
          <p>Nullam hendrerit leo in tempor mattis. Mauris vel tortor enim.</p>
        </div>
        <div className="card">250+
          <p>Nullam hendrerit leo in tempor mattis. Mauris vel tortor enim.</p>
        </div>
        <div className="card">$50.00
          <p>Nullam hendrerit leo in tempor mattis. Mauris vel tortor enim.</p>
        </div>
      </div>
    </div>
  );
}

export default Home
=======
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

//* - - - </> [DATA] </> - - - *//
import Regions from '../api/Regions';

function Home()
{
    //* - - - </> [DATA] </> - - - *//
    const [regions, setRegions] = useState([]);

    //* - - - </> [DATA] </> - - - *//
    const regionService = new Regions();

    useEffect(() => {

        getData();

    }, [])

    //* - - - </> [DATA] </> - - - *//
    const getData = async () => {

        //* - - - </> [DATA] </> - - - *//
        const regionData = await regionService.getRegions();
        setRegions(regionData);
    }

    console.log(regions);

    //* - - - </> [LINK] </> - - - *//
    const navigate = useNavigate();

    //* - - - </> [LINK] </> - - - *//
    const seeMore = (id) => {

        navigate(`/${id}`);
    }

    return (

        <>

            {regions.map((item, index) => (

                //* - - - </> [BUTTON] </> - - - *//
                <button className='button-region' key={index} onClick={() => seeMore(item.region_id)}>{item.region_name}</button>

            ))}

        </>
    );
}

export default Home;
>>>>>>> f43dac2a04b32506aa8094ef30c3381d2669d6fd
