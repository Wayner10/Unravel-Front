import React, { useEffect, useState } from 'react';
import { Icon } from '@iconify/react';

/* - - - </> [LINK] </> - - - */
import '../../../App.css';
import './UserForm.css';

function UserForm({ initialValues, onCreate, onSubmit })
{
    //* - - - </> [DATA] </> - - - *//
    const values = {
        user_name: '',
        user_lastname: '',
        user_email: '',
        user_password: '',
        user_phone: '',
        user_birthdate: '',
        user_status: '',
        user_type_id: ''
    }

    //* - - - </> [DATA] </> - - - *//
    const [data, setData] = useState(values);
    
    //* - - - </> [DATA] </> - - - *//
    useEffect(() => {

        if (initialValues)
        {
            setData(initialValues);
        }

    }, [initialValues]);

    //* - - - </> [DATA] </> - - - *//
    const handleChange = (e) => {
        
        const { name, value } = e.target;
        var regexPattern = new RegExp('true');
        setData((prev) => ({...prev, [name]: (value === 'true' || value === 'false') ? regexPattern.test(value) : value,}));
    }
    
    //* - - - </> [DATA] </> - - - *//
    const handleSubmit = (e) => {

        e.preventDefault();
        onSubmit(data);
    }
    
    //* - - - </> [DATA] </> - - - *//
    const handleClear = () => {

        setData(values);
        onCreate();
    }
    
    console.log(data);

    return (

        <>
        
        {/* - - - </> [FORM] </> - - - */}
        <form className='form-wrapper' onSubmit={handleSubmit}>

            {/* - - - </> [TEXT] </> - - - */}
            <p className='form-title'>+ New User</p>

            {/* - - - </> [TEXT] </> - - - */}
            <p className='form-text'>Complete the required fields to add a new record. Use the format indicated for each data</p>
            
            {/* - - - </> [TAG] </> - - - */}
            <label className='form-label'>User name</label>
            
            {/* - - - </> [DIV] </> - - - */}
            <div className='form-input-wrapper'>

                {/* - - - </> [ICON] </> - - - */}
                <Icon icon="fe:user" className='form-input-icon'/>

                {/* - - - </> [INPUT] </> - - - */}
                <input
                
                    //* - - - </> [VALUE] </> - - - *//
                    type='text'
                    
                    //* - - - </> [VALUE] </> - - - *//
                    name='user_name'

                    //* - - - </> [VALUE] </> - - - *//
                    value={data.user_name || ''}

                    //* - - - </> [VALUE] </> - - - *//
                    pattern='^[A-Za-z0-9](?:[A-Za-z0-9 ]{3,48}[A-Za-z0-9])?$'
                    
                    //* - - - </> [VALUE] </> - - - *//
                    className='form-input'
                    
                    //* - - - </> [VALUE] </> - - - *//
                    placeholder='Ex. John'
                    
                    //* - - - </> [VALUE] </> - - - *//
                    onChange={handleChange}
                    
                    //* - - - </> [VALUE] </> - - - *//
                    required

                />

            </div>

            {/* - - - </> [TAG] </> - - - */}
            <label className='form-label'>User lastname</label>

            {/* - - - </> [DIV] </> - - - */}
            <div className='form-input-wrapper'>

                {/* - - - </> [ICON] </> - - - */}
                <Icon icon="fe:user" className='form-input-icon'/>

                {/* - - - </> [INPUT] </> - - - */}
                <input
                
                    //* - - - </> [VALUE] </> - - - *//
                    type='text'
                    
                    //* - - - </> [VALUE] </> - - - *//
                    name='user_lastname'

                    //* - - - </> [VALUE] </> - - - *//
                    value={data.user_lastname || ''}

                    //* - - - </> [VALUE] </> - - - *//
                    pattern='^[A-Za-z0-9](?:[A-Za-z0-9 ]{3,48}[A-Za-z0-9])?$'
                    
                    //* - - - </> [VALUE] </> - - - *//
                    className='form-input'
                    
                    //* - - - </> [VALUE] </> - - - *//
                    placeholder='Ex. Smith'
                    
                    //* - - - </> [VALUE] </> - - - *//
                    onChange={handleChange}
                    
                    //* - - - </> [VALUE] </> - - - *//
                    required

                />

            </div>
            
            {/* - - - </> [TAG] </> - - - */}
            <label className='form-label'>User email</label>
            
            {/* - - - </> [DIV] </> - - - */}
            <div className='form-input-wrapper'>

                {/* - - - </> [ICON] </> - - - */}
                <Icon icon="ic:sharp-email" className='form-input-icon'/>

                {/* - - - </> [INPUT] </> - - - */}
                <input
                
                    //* - - - </> [VALUE] </> - - - *//
                    type='email'
                    
                    //* - - - </> [VALUE] </> - - - *//
                    name='user_email'

                    //* - - - </> [VALUE] </> - - - *//
                    value={data.user_email || ''}
                    
                    //* - - - </> [VALUE] </> - - - *//
                    className='form-input'
                    
                    //* - - - </> [VALUE] </> - - - *//
                    placeholder='Ex. user@email.com'
                    
                    //* - - - </> [VALUE] </> - - - *//
                    onChange={handleChange}
                    
                    //* - - - </> [VALUE] </> - - - *//
                    required

                />

            </div>

            {/* - - - </> [TAG] </> - - - */}
            <label className='form-label'>User password</label>
            
            {/* - - - </> [DIV] </> - - - */}
            <div className='form-input-wrapper'>

                {/* - - - </> [ICON] </> - - - */}
                <Icon icon="ic:sharp-lock" className='form-input-icon'/>

                {/* - - - </> [INPUT] </> - - - */}
                <input
                
                    //* - - - </> [VALUE] </> - - - *//
                    type='password'
                    
                    //* - - - </> [VALUE] </> - - - *//
                    name='user_password'

                    //* - - - </> [VALUE] </> - - - *//
                    value={data.user_password || ''}
                    
                    //* - - - </> [VALUE] </> - - - *//
                    className='form-input'
                    
                    //* - - - </> [VALUE] </> - - - *//
                    placeholder='Ex. P4$$w0rd'
                    
                    //* - - - </> [VALUE] </> - - - *//
                    onChange={handleChange}
                    
                    //* - - - </> [VALUE] </> - - - *//
                    required

                />

            </div>

            {/* - - - </> [TAG] </> - - - */}
            <label className='form-label'>User phone</label>

            {/* - - - </> [DIV] </> - - - */}
            <div className='form-input-wrapper'>

                {/* - - - </> [ICON] </> - - - */}
                <Icon icon="ic:sharp-phone" className='form-input-icon'/>

                {/* - - - </> [INPUT] </> - - - */}
                <input
                
                    //* - - - </> [VALUE] </> - - - *//
                    type='text'
                    
                    //* - - - </> [VALUE] </> - - - *//
                    name='user_phone'

                    //* - - - </> [VALUE] </> - - - *//
                    value={data.user_phone || ''}

                    //* - - - </> [VALUE] </> - - - *//
                    pattern='^\d{4}-\d{4}$'
                    
                    //* - - - </> [VALUE] </> - - - *//
                    className='form-input'
                    
                    //* - - - </> [VALUE] </> - - - *//
                    placeholder='Ex. (+506) 5505-5050'
                    
                    //* - - - </> [VALUE] </> - - - *//
                    onChange={handleChange}
                    
                    //* - - - </> [VALUE] </> - - - *//
                    required

                />

            </div>

            {/* - - - </> [TAG] </> - - - */}
            <label className='form-label'>User birthdate</label>
            
            {/* - - - </> [DIV] </> - - - */}
            <div className='form-input-wrapper'>

                {/* - - - </> [ICON] </> - - - */}
                <Icon icon="mdi:calendar" className='form-input-icon'/>

                {/* - - - </> [INPUT] </> - - - */}
                <input
                
                    //* - - - </> [VALUE] </> - - - *//
                    type='text'
                    
                    //* - - - </> [VALUE] </> - - - *//
                    name='user_birthdate'

                    //* - - - </> [VALUE] </> - - - *//
                    value={data.user_birthdate.substring(0, 10) || ''}

                    //* - - - </> [VALUE] </> - - - *//
                    pattern='^\d{4}-\d{2}-\d{2}$'
                    
                    //* - - - </> [VALUE] </> - - - *//
                    className='form-input'
                    
                    //* - - - </> [VALUE] </> - - - *//
                    placeholder='Ex. 1999-09-09'
                    
                    //* - - - </> [VALUE] </> - - - *//
                    onChange={handleChange}
                    
                    //* - - - </> [VALUE] </> - - - *//
                    required

                />

            </div>

            {/* - - - </> [TAG] </> - - - */}
            <label className='form-label'>User status</label>
            
            {/* - - - </> [DIV] </> - - - */}
            <div className='form-input-wrapper'>

                {/* - - - </> [ICON] </> - - - */}
                <Icon icon="raphael:power" className='form-input-icon'/>
                
                {/* - - - </> [DROP] </> - - - */}
                <select name='user_status' value={data.user_status} className='form-input-select' onChange={handleChange}>

                    {/* - - - </> [ITEM] </> - - - */}
                    <option value="" className='form-input-option' disabled>Choose an option...</option>
                    
                    {/* - - - </> [ITEM] </> - - - */}
                    <option value={true} className='form-input-option'>ENABLE</option>

                    {/* - - - </> [ITEM] </> - - - */}
                    <option value={false} className='form-input-option'>DISABLE</option>

                </select>

            </div>
            
            {/* - - - </> [TAG] </> - - - */}
            <label className='form-label'>User type</label>

            {/* - - - </> [DIV] </> - - - */}
            <div className='form-input-wrapper'>

                {/* - - - </> [ICON] </> - - - */}
                <Icon icon="ic:sharp-category" className='form-input-icon'/>
                
                {/* - - - </> [DROP] </> - - - */}
                <select name='user_type_id' value={data.user_type_id || ''} className='form-input-select' onChange={handleChange}>

                    {/* - - - </> [ITEM] </> - - - */}
                    <option value="" className='form-input-option' disabled>Choose an option...</option>

                    {/* - - - </> [ITEM] </> - - - */}
                    <option value={2} className='form-input-option'>TRAVELER</option>
                    
                    {/* - - - </> [ITEM] </> - - - */}
                    <option value={3} className='form-input-option'>VENDOR</option>

                    {/* - - - </> [ITEM] </> - - - */}
                    <option value={1} className='form-input-option'>ADMIN</option>
                    
                </select>

            </div>
            
            {/* - - - </> [TEXT] </> - - - */}
            <p className='form-text'>The new records will be added in their respective table and region once this action is completed*</p>

            {/* - - - </> [DIV] </> - - - */}
            <div className='form-submit-wrapper'>

                {/* - - - </> [ICON] </> - - - */}
                <Icon icon="fe:check-circle" className='form-submit-icon'/>

                {/* - - - </> [INPUT] </> - - - */}
                <input type="submit" className='form-submit' value={initialValues ? 'Update place' : 'Create place'}/>

            </div>

            {/* - - - </> [DIV] </> - - - */}
            <div className='form-submit-wrapper' onClick={handleClear}>

                {/* - - - </> [ICON] </> - - - */}
                <Icon icon="fe:check-circle" className='form-submit-icon'/>

                {/* - - - </> [INPUT] </> - - - */}
                <input type="button" className='form-submit' value={'Clean form'}/>

            </div>
            
        </form>

        </>

    );
}

export default UserForm;