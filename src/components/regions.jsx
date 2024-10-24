import axios from 'axios';

export default class Regions
{
    //* - - - </> [GET] </> - - - *//
    async getRegions()
    {
        try
        {
            //* - - - </> [URL] </> - - - *//
            const { data } = (await axios.get('http://localhost:4000/api/regions'));
            return data;
        }
        catch (error)
        {
            //* - - - </> [ERROR] </> - - - *//
            console.log(error);
            throw error;
        }
    }
};