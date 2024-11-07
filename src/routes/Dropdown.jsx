import { useState } from "react";
import './Dropdown.css';

function Dropdown({ selected, setSelected }) {
    const [isActivate, setIsActivate] = useState(false);
    
    const options = [
        { id: 1, name: 'Chorotega' },
        { id: 2, name: 'Huetar North' },
        { id: 3, name: 'Huetar Atlantic' },
        { id: 4, name: 'Central Pacific' },
        { id: 5, name: 'Central' },
        { id: 6, name: 'Brunca' }
    ];

    const handleSelect = (option) => {
        setSelected(option);
        setIsActivate(false);
    };

    return (
        <div className="dropdown">
            <div 
                className="dropdown-btn" 
                onClick={() => setIsActivate(!isActivate)}
            >
                {selected ? selected.name : "Select a Region"}
                <span className="fas fa-caret-down"></span>
            </div>
            {isActivate && (
                <div className="dropdown-content">
                    {options.map(option => (
                        <div 
                            onClick={() => handleSelect(option)}
                            className="dropdown-item"
                            key={option.id}
                        >
                            {option.name}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default Dropdown;
