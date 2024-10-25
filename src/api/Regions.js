import axios from 'axios';

export default class Regions
{
    //* - - - </> [GET] </> - - - *//
    async getRegions()
    {
        try
        {
            //* - - - </> [URL] </> - - - *//
            const { data } = (await axios.get('http://localhost:4000/api/v1/regions'));
            return data;
        }
        catch (error)
        {
            //* - - - </> [ERROR] </> - - - *//
            console.log(error);
            throw error;
        }
    }

    //* - - - </> [GET] </> - - - *//
    async getRegion(id)
    {
        try
        {
            //* - - - </> [URL] </> - - - *//
            const { data } = await axios.get(`http://localhost:4000/api/v1/regions/${id}`);
            return data;
        }
        catch (error)
        {
            //* - - - </> [ERROR] </> - - - *//
            console.log(error);
            throw error;
        }
    }

    //* - - - </> [POST] </> - - - *//
    async createRegion(data)
    {
        try
        {
            //* - - - </> [URL] </> - - - *//
            const response = await axios.post('http://localhost:4000/api/v1/regions', data);
            console.log(response);
            return response.data;
        }
        catch(error)
        {
            //* - - - </> [ERROR] </> - - - *//
            console.log(error);
            throw error;
        }
    }

    //* - - - </> [PUT] </> - - - *//
    async updateRegion(id, data)
    {
        try
        {
            //* - - - </> [URL] </> - - - *//
            await axios.put(`http://localhost:4000/api/v1/regions/${id}`, data);
            return {status: 200, message: 'Content updated successfully!'};
        }
        catch(error)
        {
            //* - - - </> [ERROR] </> - - - *//
            console.log(error);
            throw error;
        }
    }

    //* - - - </> [DELETE] </> - - - *//
    async deleteRegion(id)
    {
        try
        {
            //* - - - </> [URL] </> - - - *//
            await axios.delete(`http://localhost:4000/api/v1/regions/${id}`);
            return {status: 200, message: 'Content removed successfully!'};
        }
        catch(error)
        {
            //* - - - </> [ERROR] </> - - - *//
            console.log(error);
            throw error;
        }
    }

};