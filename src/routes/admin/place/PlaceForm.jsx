import React, { useEffect, useState } from 'react';
import { Icon } from '@iconify/react';

/* - - - </> [LINK] </> - - - */
import '../../../App.css';
import './PlaceForm.css';

function PlaceForm({ initialValues, onCreate, onSubmit })
{
    //* - - - </> [DATA] </> - - - *//
    const values = {
        place_name: '',
        place_desc_short: '',
        place_desc_large: '',
        place_score: '',
        place_email: '',
        place_phone: '',
        place_price_adult: '',
        place_price_child: '',
        place_lat: '',
        place_lng: '',
        place_waze_url: '',
        place_page_url: '',
        place_opening: '',
        place_closing: '',
        place_opening_time: '',
        place_closing_time: '',
        place_feature: '',
        place_icon: '',
        place_status: '',
        place_type_id: '',
        region_id: '',
        user_id: ''
    }

    //* - - - </> [DATA] </> - - - *//
    const [data, setData] = useState(values);

    /* - - - </> [DATA] </> - - - */
    const [icon, setIcon] = useState(null);

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
        if (name === 'place_icon') { setIcon(value) }
    }
    
    //* - - - </> [DATA] </> - - - *//
    const handleSubmit = (e) => {

        e.preventDefault();
        onSubmit(data);
    }
    
    //* - - - </> [DATA] </> - - - *//
    const handleClear = () => {

        setData(values);
        setIcon(null);
        onCreate();
    }

    /* - - - </> [DATA] </> - - - */
    function getImages(src)
    {
        let images = {};
        try
        {
            /* - - - </> [DATA] </> - - - */
            src.keys().map((item) => { images[item.replace("./", "")] = src(item); });
        }
        catch (error)
        {
            /* - - - </> [DATA] </> - - - */
            console.error("Error importing icons:", error);
        }
        return images;
    }

    /* - - - </> [DATA] </> - - - */
    const images = getImages(require.context("../../../images/icons", false, /.svg$/));

    console.log(data);

    return (

        <>
        
        {/* - - - </> [FORM] </> - - - */}
        <form className='form-wrapper' onSubmit={handleSubmit}>

            {/* - - - </> [TEXT] </> - - - */}
            <p className='form-title'>+ New Point of Interest</p>

            {/* - - - </> [TEXT] </> - - - */}
            <p className='form-text'>Complete the required fields to add a new record. Use the format indicated for each data</p>
            
            {/* - - - </> [TAG] </> - - - */}
            <label className='form-label'>Place name</label>
            
            {/* - - - </> [DIV] </> - - - */}
            <div className='form-input-wrapper'>

                {/* - - - </> [ICON] </> - - - */}
                <Icon icon="ri:pencil-fill" className='form-input-icon'/>

                {/* - - - </> [INPUT] </> - - - */}
                <input
                
                    //* - - - </> [VALUE] </> - - - *//
                    type='text'
                    
                    //* - - - </> [VALUE] </> - - - *//
                    name='place_name'

                    //* - - - </> [VALUE] </> - - - *//
                    value={data.place_name || ''}

                    //* - - - </> [VALUE] </> - - - *//
                    pattern='^[A-Za-z0-9](?:[A-Za-z0-9 ]{3,48}[A-Za-z0-9])?$'
                    
                    //* - - - </> [VALUE] </> - - - *//
                    className='form-input'
                    
                    //* - - - </> [VALUE] </> - - - *//
                    placeholder='Ex. My Place'
                    
                    //* - - - </> [VALUE] </> - - - *//
                    onChange={handleChange}
                    
                    //* - - - </> [VALUE] </> - - - *//
                    required

                />

            </div>

            {/* - - - </> [TAG] </> - - - */}
            <label className='form-label'>Place desc {'(short)'}</label>
            
            {/* - - - </> [DIV] </> - - - */}
            <div className='form-input-wrapper'>

                {/* - - - </> [ICON] </> - - - */}
                <Icon icon="ri:pencil-fill" className='form-input-icon'/>

                {/* - - - </> [INPUT] </> - - - */}
                <input
                
                    //* - - - </> [VALUE] </> - - - *//
                    type='text'
                    
                    //* - - - </> [VALUE] </> - - - *//
                    name='place_desc_short'

                    //* - - - </> [VALUE] </> - - - *//
                    value={data.place_desc_short || ''}

                    //* - - - </> [VALUE] </> - - - *//
                    pattern='^[A-Za-z0-9](?:[A-Za-z0-9 ]{3,253}[A-Za-z0-9])?$'
                    
                    //* - - - </> [VALUE] </> - - - *//
                    className='form-input'
                    
                    //* - - - </> [VALUE] </> - - - *//
                    placeholder='Ex. Just a place ...'
                    
                    //* - - - </> [VALUE] </> - - - *//
                    onChange={handleChange}
                    
                    //* - - - </> [VALUE] </> - - - *//
                    required

                />

            </div>

            {/* - - - </> [TAG] </> - - - */}
            <label className='form-label'>Place desc {'(large)'}</label>

            {/* - - - </> [DIV] </> - - - */}
            <div className='form-input-wrapper'>

                {/* - - - </> [ICON] </> - - - */}
                <Icon icon="ri:pencil-fill" className='form-textarea-icon'/>
                
                {/* - - - </> [AREA] </> - - - */}
                <textarea
                
                    //* - - - </> [VALUE] </> - - - *//
                    rows={12}
                    
                    //* - - - </> [VALUE] </> - - - *//
                    cols={30}
                    
                    //* - - - </> [VALUE] </> - - - *//
                    name='place_desc_large'

                    //* - - - </> [VALUE] </> - - - *//
                    value={data.place_desc_large || ''}

                    //* - - - </> [VALUE] </> - - - *//
                    pattern='^[A-Za-z0-9][A-Za-z0-9 ]{48,}[A-Za-z0-9]$'
                    
                    //* - - - </> [VALUE] </> - - - *//
                    className='form-input'
                    
                    //* - - - </> [VALUE] </> - - - *//
                    placeholder='Ex. This places is ...'
                    
                    //* - - - </> [VALUE] </> - - - *//
                    onChange={handleChange}
                    
                ></textarea>

            </div>

            {/* - - - </> [TAG] </> - - - */}
            <label className='form-label'>Place score</label>

            {/* - - - </> [DIV] </> - - - */}
            <div className='form-input-wrapper'>

                {/* - - - </> [ICON] </> - - - */}
                <Icon icon="ic:baseline-star" className='form-input-icon'/>

                {/* - - - </> [INPUT] </> - - - */}
                <input
                
                    //* - - - </> [VALUE] </> - - - *//
                    type='number'
                    
                    //* - - - </> [VALUE] </> - - - *//
                    name='place_score'
                    
                    //* - - - </> [VALUE] </> - - - *//
                    value={data.place_score || ''}
                    
                    //* - - - </> [VALUE] </> - - - *//
                    min={'0'} max={'5'} step={'0.1'}
                    
                    //* - - - </> [VALUE] </> - - - *//
                    className='form-input'
                    
                    //* - - - </> [VALUE] </> - - - *//
                    placeholder='Ex. 4.5'
                    
                    //* - - - </> [VALUE] </> - - - *//
                    onChange={handleChange}
                    
                    //* - - - </> [VALUE] </> - - - *//
                    required

                />

            </div>
            
            {/* - - - </> [TAG] </> - - - */}
            <label className='form-label'>Place email</label>
            
            {/* - - - </> [DIV] </> - - - */}
            <div className='form-input-wrapper'>

                {/* - - - </> [ICON] </> - - - */}
                <Icon icon="ic:sharp-email" className='form-input-icon'/>

                {/* - - - </> [INPUT] </> - - - */}
                <input
                
                    //* - - - </> [VALUE] </> - - - *//
                    type='email'
                    
                    //* - - - </> [VALUE] </> - - - *//
                    name='place_email'

                    //* - - - </> [VALUE] </> - - - *//
                    value={data.place_email || ''}
                    
                    //* - - - </> [VALUE] </> - - - *//
                    className='form-input'
                    
                    //* - - - </> [VALUE] </> - - - *//
                    placeholder='Ex. place@email.com'
                    
                    //* - - - </> [VALUE] </> - - - *//
                    onChange={handleChange}
                    
                    //* - - - </> [VALUE] </> - - - *//
                    required

                />

            </div>

            {/* - - - </> [TAG] </> - - - */}
            <label className='form-label'>Place phone</label>

            {/* - - - </> [DIV] </> - - - */}
            <div className='form-input-wrapper'>

                {/* - - - </> [ICON] </> - - - */}
                <Icon icon="ic:sharp-phone" className='form-input-icon'/>

                {/* - - - </> [INPUT] </> - - - */}
                <input
                
                    //* - - - </> [VALUE] </> - - - *//
                    type='text'
                    
                    //* - - - </> [VALUE] </> - - - *//
                    name='place_phone'

                    //* - - - </> [VALUE] </> - - - *//
                    value={data.place_phone || ''}

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
            <label className='form-label'>Place price {'(adult)'}</label>

            {/* - - - </> [DIV] </> - - - */}
            <div className='form-input-wrapper'>

                {/* - - - </> [ICON] </> - - - */}
                <Icon icon="ri:price-tag-3-fill" className='form-input-icon'/>

                {/* - - - </> [INPUT] </> - - - */}
                <input
                
                    //* - - - </> [VALUE] </> - - - *//
                    type='number'
                    
                    //* - - - </> [VALUE] </> - - - *//
                    name='place_price_adult'

                    //* - - - </> [VALUE] </> - - - *//
                    value={data.place_price_adult || ''}

                    //* - - - </> [VALUE] </> - - - *//
                    pattern='^\d+(.\d{1,2})?$'
                    
                    //* - - - </> [VALUE] </> - - - *//
                    className='form-input'
                    
                    //* - - - </> [VALUE] </> - - - *//
                    placeholder='Ex. 19.99'
                    
                    //* - - - </> [VALUE] </> - - - *//
                    onChange={handleChange}
                    
                    //* - - - </> [VALUE] </> - - - *//
                    required

                />

            </div>

            {/* - - - </> [TAG] </> - - - */}
            <label className='form-label'>Place price {'(child)'}</label>

            {/* - - - </> [DIV] </> - - - */}
            <div className='form-input-wrapper'>

                {/* - - - </> [ICON] </> - - - */}
                <Icon icon="ri:price-tag-3-fill" className='form-input-icon'/>

                {/* - - - </> [INPUT] </> - - - */}
                <input
                
                    //* - - - </> [VALUE] </> - - - *//
                    type='number'
                    
                    //* - - - </> [VALUE] </> - - - *//
                    name='place_price_child'

                    //* - - - </> [VALUE] </> - - - *//
                    value={data.place_price_child || ''}

                    //* - - - </> [VALUE] </> - - - *//
                    pattern='^\d+(.\d{1,2})?$'
                    
                    //* - - - </> [VALUE] </> - - - *//
                    className='form-input'
                    
                    //* - - - </> [VALUE] </> - - - *//
                    placeholder='Ex. 19.99'
                    
                    //* - - - </> [VALUE] </> - - - *//
                    onChange={handleChange}
                    
                    //* - - - </> [VALUE] </> - - - *//
                    required

                />

            </div>

            {/* - - - </> [TAG] </> - - - */}
            <label className='form-label'>Place latitude</label>

            {/* - - - </> [DIV] </> - - - */}
            <div className='form-input-wrapper'>

                {/* - - - </> [ICON] </> - - - */}
                <Icon icon="ic:baseline-gps-fixed" className='form-input-icon'/>

                {/* - - - </> [INPUT] </> - - - */}
                <input
                
                    //* - - - </> [VALUE] </> - - - *//
                    type='text'
                    
                    //* - - - </> [VALUE] </> - - - *//
                    name='place_lat'

                    //* - - - </> [VALUE] </> - - - *//
                    value={data.place_lat || ''}

                    //* - - - </> [VALUE] </> - - - *//
                    pattern='^-?([1-8]?[0-9]|90)(.\d+)?$'
                    
                    //* - - - </> [VALUE] </> - - - *//
                    className='form-input'
                    
                    //* - - - </> [VALUE] </> - - - *//
                    placeholder='Ex. 9.876543'
                    
                    //* - - - </> [VALUE] </> - - - *//
                    onChange={handleChange}
                    
                    //* - - - </> [VALUE] </> - - - *//
                    required

                />

            </div>

            {/* - - - </> [TAG] </> - - - */}
            <label className='form-label'>Place longitude</label>

            {/* - - - </> [DIV] </> - - - */}
            <div className='form-input-wrapper'>

                {/* - - - </> [ICON] </> - - - */}
                <Icon icon="ic:baseline-gps-fixed" className='form-input-icon'/>

                {/* - - - </> [INPUT] </> - - - */}
                <input
                
                    //* - - - </> [VALUE] </> - - - *//
                    type='text'
                    
                    //* - - - </> [VALUE] </> - - - *//
                    name='place_lng'

                    //* - - - </> [VALUE] </> - - - *//
                    value={data.place_lng || ''}

                    //* - - - </> [VALUE] </> - - - *//
                    pattern='^-?((1[0-7][0-9])|([1-9]?[0-9]))(.\d+)?$'
                    
                    //* - - - </> [VALUE] </> - - - *//
                    className='form-input'
                    
                    //* - - - </> [VALUE] </> - - - *//
                    placeholder='Ex. -9.345678'
                    
                    //* - - - </> [VALUE] </> - - - *//
                    onChange={handleChange}
                    
                    //* - - - </> [VALUE] </> - - - *//
                    required

                />

            </div>
            
            {/* - - - </> [TAG] </> - - - */}
            <label className='form-label'>Place waze</label>

            {/* - - - </> [DIV] </> - - - */}
            <div className='form-input-wrapper'>

                {/* - - - </> [ICON] </> - - - */}
                <Icon icon="tdesign:link" className='form-input-icon'/>

                {/* - - - </> [INPUT] </> - - - */}
                <input
                
                    //* - - - </> [VALUE] </> - - - *//
                    type='url'
                    
                    //* - - - </> [VALUE] </> - - - *//
                    name='place_waze_url'

                    //* - - - </> [VALUE] </> - - - *//
                    value={data.place_waze_url || ''}
                    
                    //* - - - </> [VALUE] </> - - - *//
                    className='form-input'
                    
                    //* - - - </> [VALUE] </> - - - *//
                    placeholder='Ex. https://placebook.com'
                    
                    //* - - - </> [VALUE] </> - - - *//
                    onChange={handleChange}
                    
                    //* - - - </> [VALUE] </> - - - *//
                    required

                />

            </div>
            
            {/* - - - </> [TAG] </> - - - */}
            <label className='form-label'>Place page</label>

            {/* - - - </> [DIV] </> - - - */}
            <div className='form-input-wrapper'>

                {/* - - - </> [ICON] </> - - - */}
                <Icon icon="tdesign:link" className='form-input-icon'/>

                {/* - - - </> [INPUT] </> - - - */}
                <input
                
                    //* - - - </> [VALUE] </> - - - *//
                    type='url'
                    
                    //* - - - </> [VALUE] </> - - - *//
                    name='place_page_url'

                    //* - - - </> [VALUE] </> - - - *//
                    value={data.place_page_url || ''}
                    
                    //* - - - </> [VALUE] </> - - - *//
                    className='form-input'
                    
                    //* - - - </> [VALUE] </> - - - *//
                    placeholder='Ex. https://placebook.com'
                    
                    //* - - - </> [VALUE] </> - - - *//
                    onChange={handleChange}
                    
                    //* - - - </> [VALUE] </> - - - *//
                    required

                />

            </div>

            {/* - - - </> [TAG] </> - - - */}
            <label className='form-label'>Place opening</label>
            
            {/* - - - </> [DIV] </> - - - */}
            <div className='form-input-wrapper'>

                {/* - - - </> [ICON] </> - - - */}
                <Icon icon="mdi:calendar" className='form-input-icon'/>

                {/* - - - </> [INPUT] </> - - - */}
                <input
                
                    //* - - - </> [VALUE] </> - - - *//
                    type='text'
                    
                    //* - - - </> [VALUE] </> - - - *//
                    name='place_opening'

                    //* - - - </> [VALUE] </> - - - *//
                    value={data.place_opening || ''}

                    //* - - - </> [VALUE] </> - - - *//
                    pattern='^(m|M)(o|O)(n|N)(d|D)(a|A)(y|Y)|(t|T)(u|U)(e|E)(s|S)(d|D)(a|A)(y|Y)|(w|W)(e|E)(d|D)(n|N)(e|E)(s|S)(d|D)(a|A)(y|Y)|(t|T)(h|H)(u|U)(r|R)(s|S)(d|D)(a|A)(y|Y)|(f|F)(r|R)(i|I)(d|D)(a|A)(y|Y)|(s|S)(a|A)(t|T)(u|U)(r|R)(d|D)(a|A)(y|Y)|(s|S)(u|U)(n|N)(d|D)(a|A)(y|Y)$'
                    
                    //* - - - </> [VALUE] </> - - - *//
                    className='form-input'
                    
                    //* - - - </> [VALUE] </> - - - *//
                    placeholder='Ex. Monday'
                    
                    //* - - - </> [VALUE] </> - - - *//
                    onChange={handleChange}
                    
                    //* - - - </> [VALUE] </> - - - *//
                    required

                />

            </div>

            {/* - - - </> [TAG] </> - - - */}
            <label className='form-label'>Place closing</label>
            
            {/* - - - </> [DIV] </> - - - */}
            <div className='form-input-wrapper'>

                {/* - - - </> [ICON] </> - - - */}
                <Icon icon="mdi:calendar" className='form-input-icon'/>

                {/* - - - </> [INPUT] </> - - - */}
                <input
                
                    //* - - - </> [VALUE] </> - - - *//
                    type='text'
                    
                    //* - - - </> [VALUE] </> - - - *//
                    name='place_closing'

                    //* - - - </> [VALUE] </> - - - *//
                    value={data.place_closing || ''}

                    //* - - - </> [VALUE] </> - - - *//
                    pattern='^(m|M)(o|O)(n|N)(d|D)(a|A)(y|Y)|(t|T)(u|U)(e|E)(s|S)(d|D)(a|A)(y|Y)|(w|W)(e|E)(d|D)(n|N)(e|E)(s|S)(d|D)(a|A)(y|Y)|(t|T)(h|H)(u|U)(r|R)(s|S)(d|D)(a|A)(y|Y)|(f|F)(r|R)(i|I)(d|D)(a|A)(y|Y)|(s|S)(a|A)(t|T)(u|U)(r|R)(d|D)(a|A)(y|Y)|(s|S)(u|U)(n|N)(d|D)(a|A)(y|Y)$'
                    
                    //* - - - </> [VALUE] </> - - - *//
                    className='form-input'
                    
                    //* - - - </> [VALUE] </> - - - *//
                    placeholder='Ex. Sunday'
                    
                    //* - - - </> [VALUE] </> - - - *//
                    onChange={handleChange}
                    
                    //* - - - </> [VALUE] </> - - - *//
                    required

                />

            </div>
            
            {/* - - - </> [TAG] </> - - - */}
            <label className='form-label'>Place opening time</label>

            {/* - - - </> [DIV] </> - - - */}
            <div className='form-input-wrapper'>

                {/* - - - </> [ICON] </> - - - */}
                <Icon icon="material-symbols:schedule-outline" className='form-input-icon'/>

                {/* - - - </> [INPUT] </> - - - */}
                <input
                
                    //* - - - </> [VALUE] </> - - - *//
                    type='text'
                    
                    //* - - - </> [VALUE] </> - - - *//
                    name='place_opening_time'

                    //* - - - </> [VALUE] </> - - - *//
                    value={data.place_opening_time || ''}

                    //* - - - </> [VALUE] </> - - - *//
                    pattern='^([01]?[0-9]|2[0-3]):([0-5]?[0-9]):?([0-5]?[0-9])?$'
                    
                    //* - - - </> [VALUE] </> - - - *//
                    className='form-input'
                    
                    //* - - - </> [VALUE] </> - - - *//
                    placeholder='Ex. 08:00:00'
                    
                    //* - - - </> [VALUE] </> - - - *//
                    onChange={handleChange}
                    
                    //* - - - </> [VALUE] </> - - - *//
                    required

                />

            </div>

            {/* - - - </> [TAG] </> - - - */}
            <label className='form-label'>Place closing time</label>

            {/* - - - </> [DIV] </> - - - */}
            <div className='form-input-wrapper'>

                {/* - - - </> [ICON] </> - - - */}
                <Icon icon="material-symbols:schedule-outline" className='form-input-icon'/>

                {/* - - - </> [INPUT] </> - - - */}
                <input
                
                    //* - - - </> [VALUE] </> - - - *//
                    type='text'
                    
                    //* - - - </> [VALUE] </> - - - *//
                    name='place_closing_time'

                    //* - - - </> [VALUE] </> - - - *//
                    value={data.place_closing_time || ''}

                    //* - - - </> [VALUE] </> - - - *//
                    pattern='^([01]?[0-9]|2[0-3]):([0-5]?[0-9]):?([0-5]?[0-9])?$'
                    
                    //* - - - </> [VALUE] </> - - - *//
                    className='form-input'
                    
                    //* - - - </> [VALUE] </> - - - *//
                    placeholder='Ex. 16:00:00'
                    
                    //* - - - </> [VALUE] </> - - - *//
                    onChange={handleChange}
                    
                    //* - - - </> [VALUE] </> - - - *//
                    required

                />

            </div>

            {/* - - - </> [TAG] </> - - - */}
            <label className='form-label'>Place feature</label>

            {/* - - - </> [DIV] </> - - - */}
            <div className='form-input-wrapper'>

                {/* - - - </> [ICON] </> - - - */}
                <Icon icon="ic:sharp-card-travel" className='form-input-icon'/>
                
                {/* - - - </> [DROP] </> - - - */}
                <select name='place_feature' value={data.place_feature || ''} className='form-input-select' onChange={handleChange}>

                    {/* - - - </> [ITEM] </> - - - */}
                    <option value="" className='form-input-option' disabled>Choose an option...</option>
                    
                    {/* - - - </> [ITEM] </> - - - */}
                    <option value={'Leisure'} className='form-input-option'>Leisure</option>

                    {/* - - - </> [ITEM] </> - - - */}
                    <option value={'Adventure'} className='form-input-option'>Adventure</option>

                    {/* - - - </> [ITEM] </> - - - */}
                    <option value={'Culture and Science'} className='form-input-option'>Culture and Science</option>

                    {/* - - - </> [ITEM] </> - - - */}
                    <option value={'Natural History and Exploration'} className='form-input-option'>Natural History and Exploration</option>
                    
                </select>

            </div>

            {/* - - - </> [TAG] </> - - - */}
            <label className='form-label'>Place icon</label>

            {/* - - - </> [DIV] </> - - - */}
            <div className='form-input-wrapper'>
                
                {icon || data.place_icon ? (
                    
                    /* - - - </> [IMG] </> - - - */
                    <img src={images[`${!icon ? (data.place_icon) : (icon)}.svg`]} alt={icon} className='form-input-image'/>

                ) : (

                    /* - - - </> [ICON] </> - - - */
                    <Icon icon="ic:sharp-image" className='form-input-icon'/>
                )}
                
                {/* - - - </> [DROP] </> - - - */}
                <select name='place_icon' value={data.place_icon || ''} className='form-input-select' onChange={handleChange}>

                    {/* - - - </> [ITEM] </> - - - */}
                    <option value="" className='form-input-option' disabled>Choose an option...</option>

                    {Object.entries(images).map((item, index) => (
                        
                        /* - - - </> [ITEM] </> - - - */
                        <option key={index} value={item[0].slice(0, -4)} className='form-input-option'>{item[0].slice(0, -4)}</option>

                    ))}
                    
                </select>

            </div>

            {/* - - - </> [TAG] </> - - - */}
            <label className='form-label'>Place type</label>

            {/* - - - </> [DIV] </> - - - */}
            <div className='form-input-wrapper'>

                {/* - - - </> [ICON] </> - - - */}
                <Icon icon="ic:sharp-category" className='form-input-icon'/>
                
                {/* - - - </> [DROP] </> - - - */}
                <select name='place_type_id' value={data.place_type_id || ''} className='form-input-select' onChange={handleChange}>

                    {/* - - - </> [ITEM] </> - - - */}
                    <option value="" className='form-input-option' disabled>Choose an option...</option>
                    
                    {/* - - - </> [ITEM] </> - - - */}
                    <option value={1} className='form-input-option'>STATE-PARK</option>

                    {/* - - - </> [ITEM] </> - - - */}
                    <option value={2} className='form-input-option'>FREE-EXP</option>

                    {/* - - - </> [ITEM] </> - - - */}
                    <option value={3} className='form-input-option'>PAID-EXP</option>

                    {/* - - - </> [ITEM] </> - - - */}
                    <option value={4} className='form-input-option'>LODGING</option>

                    {/* - - - </> [ITEM] </> - - - */}
                    <option value={5} className='form-input-option'>TRANSPORT</option>

                </select>

            </div>
            
            {/* - - - </> [TAG] </> - - - */}
            <label className='form-label'>Place region</label>

            {/* - - - </> [DIV] </> - - - */}
            <div className='form-input-wrapper'>

                {/* - - - </> [ICON] </> - - - */}
                <Icon icon="mdi:world" className='form-input-icon'/>
                
                {/* - - - </> [DROP] </> - - - */}
                <select name='region_id' value={data.region_id || ''} className='form-input-select' onChange={handleChange}>

                    {/* - - - </> [ITEM] </> - - - */}
                    <option value="" className='form-input-option' disabled>Choose an option...</option>
                    
                    {/* - - - </> [ITEM] </> - - - */}
                    <option value={1} className='form-input-option'>Nicoya Peninsula</option>

                    {/* - - - </> [ITEM] </> - - - */}
                    <option value={2} className='form-input-option'>Northen Plains</option>

                    {/* - - - </> [ITEM] </> - - - */}
                    <option value={3} className='form-input-option'>Caribbean</option>

                    {/* - - - </> [ITEM] </> - - - */}
                    <option value={4} className='form-input-option'>Central Pacific</option>

                    {/* - - - </> [ITEM] </> - - - */}
                    <option value={5} className='form-input-option'>Central Valley</option>

                    {/* - - - </> [ITEM] </> - - - */}
                    <option value={6} className='form-input-option'>Osa Peninsula</option>

                </select>

            </div>
            
            {/* - - - </> [TAG] </> - - - */}
            <label className='form-label'>Place status</label>
            
            {/* - - - </> [DIV] </> - - - */}
            <div className='form-input-wrapper'>

                {/* - - - </> [ICON] </> - - - */}
                <Icon icon="raphael:power" className='form-input-icon'/>
                
                {/* - - - </> [DROP] </> - - - */}
                <select name='place_status' value={data.place_status} className='form-input-select' onChange={handleChange}>

                    {/* - - - </> [ITEM] </> - - - */}
                    <option value="" className='form-input-option' disabled>Choose an option...</option>
                    
                    {/* - - - </> [ITEM] </> - - - */}
                    <option value={true} className='form-input-option'>ENABLE</option>

                    {/* - - - </> [ITEM] </> - - - */}
                    <option value={false} className='form-input-option'>DISABLE</option>

                </select>

            </div>

            {/* - - - </> [TAG] </> - - - */}
            <label className='form-label'>Place user</label>

            {/* - - - </> [DIV] </> - - - */}
            <div className='form-input-wrapper'>

                {/* - - - </> [ICON] </> - - - */}
                <Icon icon="fe:user" className='form-input-icon'/>

                {/* - - - </> [INPUT] </> - - - */}
                <input
                
                    //* - - - </> [VALUE] </> - - - *//
                    type='number'
                    
                    //* - - - </> [VALUE] </> - - - *//
                    name='user_id'

                    //* - - - </> [VALUE] </> - - - *//
                    value={data.user_id || ''}
                    
                    //* - - - </> [VALUE] </> - - - *//
                    className='form-input'
                    
                    //* - - - </> [VALUE] </> - - - *//
                    placeholder='Ex. 1'
                    
                    //* - - - </> [VALUE] </> - - - *//
                    onChange={handleChange}
                    
                    //* - - - </> [VALUE] </> - - - *//
                    required

                />

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

export default PlaceForm;