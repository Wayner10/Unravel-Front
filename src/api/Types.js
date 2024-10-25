import axios from 'axios';

export default class Types
{
    //* - - - </> [GET] </> - - - *//
    async getTypes()
    {
        try
        {
            //* - - - </> [URL] </> - - - *//
            const { data } = (await axios.get('http://localhost:4000/api/v1/place-types'));
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
    async getType(id)
    {
        try
        {
            //* - - - </> [URL] </> - - - *//
            const { data } = await axios.get(`http://localhost:4000/api/v1/place-types/${id}`);
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
    async createType(data)
    {
        try
        {
            //* - - - </> [URL] </> - - - *//
            const response = await axios.post('http://localhost:4000/api/v1/place-types', data);
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
    async updateType(id, data)
    {
        try
        {
            //* - - - </> [URL] </> - - - *//
            await axios.put(`http://localhost:4000/api/v1/place-types/${id}`, data);
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
    async deleteType(id)
    {
        try
        {
            //* - - - </> [URL] </> - - - *//
            await axios.delete(`http://localhost:4000/api/v1/place-types/${id}`);
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