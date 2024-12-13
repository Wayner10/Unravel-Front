import React from 'react';

/* - - - </> [LINK] </> - - - */
import { Icon } from '@iconify/react';
import './Video.css';

function Video({ status, onClose })
{
    return (status) ? (

        <>
        
        {/* - - - </> [DIV] </> - - - */}
        <div className='video-background' onClick={() => onClose(false)}>
            
            {/* - - - </> [DIV] </> - - - */}
            <div className='video-wrapper'>
                
                {/* - - - </> [ICON] </> - - - */}
                <Icon icon="zondicons:close-solid" className='video-icon' onClick={() => onClose(false)}/>
                
                {/* - - - </> [DIV] </> - - - */}
                <div className="video-container">
                    
                    {/* - - - </> [VID] </> - - - */}
                    <iframe
                    
                        /* - - - </> [VALUE] </> - - - */
                        width="100%"

                        /* - - - </> [VALUE] </> - - - */
                        height="400"
                        
                        /* - - - </> [VALUE] </> - - - */
                        src="https://www.youtube.com/embed/QXt21aGi_nQ?start=5"
                        
                        /* - - - </> [VALUE] </> - - - */
                        title="YouTube video player"

                        /* - - - </> [VALUE] </> - - - */
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"

                        /* - - - </> [VALUE] </> - - - */
                        allowFullScreen
                    
                    ></iframe>
                    
                </div>
                
            </div>
            
        </div>

        </>

    ) : (null);
}

export default Video;